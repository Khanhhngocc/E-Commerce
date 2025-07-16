import React, { useContext } from "react";
import { alpha } from "@mui/material/styles";
import TableCell from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { GoTrash } from "react-icons/go";
import { Link } from "react-router-dom";
import Process from "../../components/ProcessBar";
import Button from "@mui/material/Button";
import { FaRegEye } from "react-icons/fa6";
import { useState } from "react";
import { useMemo } from "react";
import SearchBox from "../../components/SearchBox";
import { MyContext } from "../../App";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";

function createData(id, user, phone, email, created, sales, action) {
  return {
    id,
    user,
    phone,
    email,
    created,
    sales,
    action,
  };
}

const rows = [
  createData(
    1,
    {
      imgSrc: "https://ecommerce-admin-view.netlify.app/shop-illustration.webp",
      title: "Men Comfort Cuban Collar Solid Polycotton Casual Shirt",
      category: "Books",
    },
    "Electronics",
    "Women",
    {
      oldPrice: "$58.00",
      newPrice: "$58.00",
    },
    "234 sales",
    ""
  ),

  createData(
    2,
    {
      imgSrc: "https://ecommerce-admin-view.netlify.app/shop-illustration.webp",
      title: "Men Comfort Cuban Collar Solid Polycotton Casual Shirt",
      category: "Books",
    },
    "Electronics",
    "Women",
    {
      oldPrice: "$58.00",
      newPrice: "$58.00",
    },
    "234 sales",
    ""
  ),
  createData(
    3,
    {
      imgSrc: "https://ecommerce-admin-view.netlify.app/shop-illustration.webp",
      title: "Men Comfort Cuban Collar Solid Polycotton Casual Shirt",
      category: "Books",
    },
    "Electronics",
    "Women",
    {
      oldPrice: "$58.00",
      newPrice: "$58.00",
    },
    "234 sales",
    ""
  ),
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, numSelected, rowCount } = props;

  return (
    <thead className="text-xs !text-gray-700 uppercase bg-gray-50 dark:text-gray-400 ">
      <tr>
        <th scope="col" className="px-6 py-3">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            size="small"
          />
        </th>
        <th scope="col" className="px-6 py-3 text-[14px] whitespace-nowrap">
          User
        </th>
        <th scope="col" className="px-6 py-3 text-[14px] whitespace-nowrap">
          User Phone No
        </th>
        <th scope="col" className="px-6 py-3 text-[14px] whitespace-nowrap">
          Email
        </th>
        <th scope="col" className="px-6 py-3 text-[14px] whitespace-nowrap">
          Created
        </th>
        <th scope="col" className="px-6 py-3 text-[14px] whitespace-nowrap">
          Sales
        </th>
        <th scope="col" className="px-6 py-3 text-[14px] whitespace-nowrap">
          Action
        </th>
      </tr>
    </thead>
  );
}

function EnhancedTableToolbar(props) {
  const context = useContext(MyContext);
  const { numSelected } = props;
  const [categoryFilterVal, setCategoryFilterVal] = useState("");

  const handleChangeCatFilter = (event) => {
    setCategoryFilterVal(event.target.value);
  };

  return (
    <>
      <Toolbar
        sx={[
          {
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
          },
          numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.activatedOpacity
              ),
          },
        ]}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: "1 1 100%" }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h6"
            id="tableTitle"
            component="div"
            className="!font-[700] !text-[25px] !text-gray-800"
          >
            Products
          </Typography>
        )}
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton>
              <GoTrash />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <div className="col w-[60%]">
              <SearchBox />
            </div>
          </Tooltip>
        )}
      </Toolbar>
    </>
  );
}

const Users = () => {
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = useMemo(
    () => [...rows].slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage]
  );

  return (
    <div className="card my-6 shadow-md rounded-md bg-white">
      <Paper sx={{ mb: 5 }} className="relative overflow-x-auto py-3">
        <EnhancedTableToolbar numSelected={selected.length} />
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <EnhancedTableHead
            numSelected={selected.length}
            onSelectAllClick={handleSelectAllClick}
            rowCount={rows.length}
          />
          <tbody>
            {visibleRows.map((row) => {
              const isItemSelected = selected.includes(row.id);
              return (
                <tr
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200
                hover:cursor-pointer hover:bg-[#f1f1f1]"
                  onClick={(event) => handleClick(event, row.id)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.id}
                  selected={isItemSelected}
                >
                  <td className="px-6 py-2">
                    <div className="w-[60%]">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        size="small"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-2">
                    <div className="flex items-center gap-4 w-[300px]">
                      <div className="img w-[65px] h-[65px] overflow-hidden rounded-md group">
                        <Link to={"/product/hehe"}>
                          <img
                            src={`${row.user.imgSrc}`}
                            className="w-full object-cover group-hover:scale-105 transition-all"
                          />
                        </Link>
                      </div>

                      <div className="info w-[75%]">
                        <h3 className="text-[12px] text-black font-[600] leading-4 hover:text-primary">
                          <Link to={"/product/hehe"}>{row.user.title}</Link>
                        </h3>

                        <span className="text-[12px]">{row.user.category}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-2">
                    <span className="flex items-center gap-2">
                      <MdLocalPhone />
                      {row.phone}
                    </span>
                  </td>
                  <td className="px-6 py-2">
                    <span className="flex items-center gap-2">
                      <MdOutlineMarkEmailRead />
                      {row.email}
                    </span>
                  </td>
                  <td className="px-6 py-2">
                    <div className="flex flex-col gap-1">
                      <span className="flex items-center gap-2">
                        <FaRegCalendarAlt />
                        {row.created.oldPrice}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-2">
                    <p className="text-[14px] w-[100px] mb-2">
                      <span className="font-[600]">{row.sales}</span>
                    </p>
                    <Process value={10} type={"warning"} />
                  </td>
                  <td className="px-6 py-2">
                    <div className="flex items-center gap-1">
                      <Tooltip
                        title="View Product Detail"
                        placement="top-start"
                      >
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full border !border-[rgba(0,0,0,0.4)]
                      hover:!bg-[#f1f1f1] !text-[rgba(0,0,0,0.7)]"
                        >
                          <FaRegEye className="text-[18px]" />
                        </Button>
                      </Tooltip>

                      <Tooltip title="Remove Product" placement="top-start">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full border border-[rgba(0,0,0,0.4)]
                      hover:!bg-[#f1f1f1] !text-[rgba(0,0,0,0.7)]"
                        >
                          <GoTrash className="text-[18px]" />
                        </Button>
                      </Tooltip>
                    </div>
                  </td>
                </tr>
              );
            })}
            {emptyRows > 0 && (
              <TableRow>
                <TableCell colSpan={7} />
              </TableRow>
            )}
          </tbody>
        </table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          className="mt-3"
        />
      </Paper>
    </div>
  );
};

export default Users;

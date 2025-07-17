import React, { useContext, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import { MyContext } from "../../App";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TablePagination from '@mui/material/TablePagination';
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const columns = [
  { id: "image", label: "IMAGE", minWidth: 250 },
  { id: "title", label: "CATEGORY NAME", minWidth: 200 },
  { id: "action", label: "ACTION", minWidth: 200 }
];

function createData(id, title, imgSrc) {
  return { id, title, imgSrc };
}

const rows = [
  createData(
    0,
    "Fashion",
    "https://serviceapi.spicezgold.com/download/1748955883517_NewProject(6).jpg",
  ),
];

const CategoryList = () => {
  const [isOpenOrderedProduct, setIsOpenOrderedProduct] = useState(null);
  
    const isShowOrderedProduct = (index) => {
      if (isOpenOrderedProduct === index) {
        setIsOpenOrderedProduct(null);
      } else {
        setIsOpenOrderedProduct(index);
      }
    };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const context = useContext(MyContext);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  return (
    <>
      <div className="flex items-center justify-between p-5">
        <h2 className="text-[18px] font-[600]">Category List</h2>
      </div>

      <div className="col w-[25%] ml-auto flex items-center justify-end gap-3">
        <Button
          className="btn-blue !text-white btn-sm"
          onClick={() =>
            context.setIsOpenFullScreenPanel({
              open: true,
              model: "Add New Category",
            })
          }
        >
          Add New Category
        </Button>
      </div>

      <div className="card my-4 pt-5 shadow-md sm:rounded-lg bg-white">
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table" className="!px-[10px]">
            <TableHead>
              <TableRow>
                  <TableCell
                    width={30}
                    className="!font-[600] !text-[15px]"
                  >&nbsp;</TableCell>
                {columns.map((column) => (
                  <TableCell
                    style={{ width: column.minWidth }}
                    key={column.id}
                    align={column.align}
                    className="!font-[600] !text-[15px]"
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row) => (
                <StyledTableRow>
                  <StyledTableCell key={row.title}>
                    <Button
                    className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1] !text-[rgba(0,0,0,0.7)]"
                    onClick={() => isShowOrderedProduct(0)}
                  >
                    {isOpenOrderedProduct !== null ? (
                      <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    ) : (
                      <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    )}
                  </Button>
                  </StyledTableCell>
                  <StyledTableCell key={row.title}>
                    <div className="w-full">
                      <div className="img w-[70%] rounded-md overflow-hidden group">
                        <Link to={"/product/hehe"} data-discover="true">
                          <img
                            src={row.imgSrc}
                            className="w-full group-hover:scale-105 transition-all"
                          />
                        </Link>
                      </div>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell key={row.title}>
                    <div className="flex items-center gap-4 w-[150px]">
                      <p>{row.title}</p>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell key={row.title}>
                    <div className="flex items-center gap-1">
                      <Tooltip title="Edit Product" placement="top-start">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full border !border-[rgba(0,0,0,0.4)]
                      hover:!bg-[#f1f1f1] !text-[rgba(0,0,0,0.7)]"
                        >
                          <AiOutlineEdit className="text-[18px]" />
                        </Button>
                      </Tooltip>
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
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          className="!py-3"
        />
      </div>
    </>
  );
};

export default CategoryList;

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


const label = { inputProps: { "aria-label": "Checkbox demo" } };

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
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const columns = [
  { id: "image", label: "IMAGE", minWidth: 250 },
  { id: "action", label: "ACTION", minWidth: 200 },
];

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const HomeSliderBanners = () => {
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
        <h2 className="text-[18px] font-[600]">Home Slider Banners</h2>
      </div>

      <div className="col w-[25%] ml-auto flex items-center justify-end gap-3">
        <Button
          className="btn-blue !text-white btn-sm"
          onClick={() =>
            context.setIsOpenFullScreenPanel({
              open: true,
              model: "Add Home Slide",
            })
          }
        >
          Add Home Slide
        </Button>
      </div>

      <div className="card my-4 pt-5 shadow-md sm:rounded-lg bg-white">
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell width={60}>
                  <Checkbox {...label} size="small" />
                </TableCell>

                {columns.map((column) => (
                  <TableCell
                    width={column.minWidth}
                    key={column.id}
                    align={column.align}
                    className="!font-[600] !pl-10 !text-[15px]"
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row) => (
                <StyledTableRow>
                  <StyledTableCell>
                    <Checkbox {...label} size="small" />
                  </StyledTableCell>

                  <StyledTableCell width={300} key={row.name}>
                    <div className="flex items-center gap-4 w-[300px]">
                      <div className="img w-full rounded-md overflow-hidden group">
                        <Link to={"/product/hehe"} data-discover="true">
                          <img
                            src="https://serviceapi.spicezgold.com/download/1748955883517_NewProject(6).jpg"
                            className="w-full group-hover:scale-105 transition-all"
                          />
                        </Link>
                      </div>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell width={100}>
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

export default HomeSliderBanners;

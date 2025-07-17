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
import TablePagination from '@mui/material/TablePagination';
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { Collapse } from "react-collapse";



const SubCategoryList = () => {

  const context = useContext(MyContext);

  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

  const isOpenSubMenu = (index) => {
    if(openSubMenuIndex === index) {
      setOpenSubMenuIndex(null)
    } else {
      setOpenSubMenuIndex(index)
    }
  }
  
  return (
    <>
      <div className="flex items-center justify-between p-5">
        <h2 className="text-[18px] font-[600]">Sub Category List</h2>
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

      <div className="card my-4 p-5 shadow-md sm:rounded-lg bg-white">
        <ul>
          <li className="list-none w-full mb-1">
            <div className="flex items-center justify-between w-full py-2 px-4 bg-[#f1f1f1] rounded-sm">
              <span className="text-[14px] font-[500] text-black">Fashion</span>
              <Button
                className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1] !text-[rgba(0,0,0,0.7)]"
                onClick={() => isOpenSubMenu(1)}
              >
                <FaAngleUp className={`transition-all ${openSubMenuIndex === 1 ? "rotate-180" : ""} 
                text-[16px] text-[rgba(0,0,0,0.7)]`}/>
              </Button>
            </div>
            <Collapse isOpened={openSubMenuIndex === 1 ? true : false}>
              <ul>
                <li>
                  <div className="flex items-center justify-between px-4">
                    <span className="text-[14px] font-[500] text-black">Women</span>
                    <div className="flex items-center gap-0">
                      <Tooltip title="Edit Product" placement="top-start">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full border !border-[rgba(0,0,0,0.4)]
                      hover:!bg-[#f1f1f1] !text-[rgba(0,0,0,0.7)]"
                        >
                          <AiOutlineEdit className="text-[16px]" />
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
                          <FaRegEye className="text-[16px]" />
                        </Button>
                      </Tooltip>

                      <Tooltip title="Remove Product" placement="top-start">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full border border-[rgba(0,0,0,0.4)]
                      hover:!bg-[#f1f1f1] !text-[rgba(0,0,0,0.7)]"
                        >
                          <GoTrash className="text-[16px]" />
                        </Button>
                      </Tooltip>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <div className="flex items-center justify-between pl-6 pr-4">
                        <span className="text-[14px] font-[500] text-black">Women</span>
                        <div className="flex items-center gap-0">
                      <Tooltip title="Edit Product" placement="top-start">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full border !border-[rgba(0,0,0,0.4)]
                      hover:!bg-[#f1f1f1] !text-[rgba(0,0,0,0.7)]"
                        >
                          <AiOutlineEdit className="text-[16px]" />
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
                          <FaRegEye className="text-[16px]" />
                        </Button>
                      </Tooltip>

                      <Tooltip title="Remove Product" placement="top-start">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full border border-[rgba(0,0,0,0.4)]
                      hover:!bg-[#f1f1f1] !text-[rgba(0,0,0,0.7)]"
                        >
                          <GoTrash className="text-[16px]" />
                        </Button>
                      </Tooltip>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>

                <li>
                  <div className="flex items-center justify-between px-4">
                    <span className="text-[14px] font-[500] text-black">Women</span>
                    <div className="flex items-center gap-0">
                      <Tooltip title="Edit Product" placement="top-start">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full border !border-[rgba(0,0,0,0.4)]
                      hover:!bg-[#f1f1f1] !text-[rgba(0,0,0,0.7)]"
                        >
                          <AiOutlineEdit className="text-[16px]" />
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
                          <FaRegEye className="text-[16px]" />
                        </Button>
                      </Tooltip>

                      <Tooltip title="Remove Product" placement="top-start">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full border border-[rgba(0,0,0,0.4)]
                      hover:!bg-[#f1f1f1] !text-[rgba(0,0,0,0.7)]"
                        >
                          <GoTrash className="text-[16px]" />
                        </Button>
                      </Tooltip>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <div className="flex items-center justify-between pl-6 pr-4">
                        <span className="text-[14px] font-[500] text-black">Women</span>
                        <div className="flex items-center gap-0">
                      <Tooltip title="Edit Product" placement="top-start">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full border !border-[rgba(0,0,0,0.4)]
                      hover:!bg-[#f1f1f1] !text-[rgba(0,0,0,0.7)]"
                        >
                          <AiOutlineEdit className="text-[16px]" />
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
                          <FaRegEye className="text-[16px]" />
                        </Button>
                      </Tooltip>

                      <Tooltip title="Remove Product" placement="top-start">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full border border-[rgba(0,0,0,0.4)]
                      hover:!bg-[#f1f1f1] !text-[rgba(0,0,0,0.7)]"
                        >
                          <GoTrash className="text-[16px]" />
                        </Button>
                      </Tooltip>
                        </div>
                      </div>
                    </li>
                    
                  </ul>
                </li>

                
              </ul>
            </Collapse>
          </li>

          

          <li className="list-none w-full mb-1">
            <div className="flex items-center justify-between w-full py-2 px-4 bg-[#f1f1f1] rounded-sm">
              <span className="text-[14px] font-[500] text-black">Fashion</span>
              <Button
                className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1] !text-[rgba(0,0,0,0.7)]"
                onClick={() => isOpenSubMenu(2)}
              >
                <FaAngleUp className={`transition-all ${openSubMenuIndex === 2 ? "rotate-180" : ""} 
                text-[16px] text-[rgba(0,0,0,0.7)]`}/>
              </Button>
            </div>
            <Collapse isOpened={openSubMenuIndex === 2 ? true : false}>
              <ul>
                <li>
                  <div className="flex items-center justify-between px-4">
                    <span className="text-[14px] font-[500] text-black">Women</span>
                    <div className="flex items-center gap-0">
                      <Tooltip title="Edit Product" placement="top-start">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full border !border-[rgba(0,0,0,0.4)]
                      hover:!bg-[#f1f1f1] !text-[rgba(0,0,0,0.7)]"
                        >
                          <AiOutlineEdit className="text-[16px]" />
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
                          <FaRegEye className="text-[16px]" />
                        </Button>
                      </Tooltip>

                      <Tooltip title="Remove Product" placement="top-start">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full border border-[rgba(0,0,0,0.4)]
                      hover:!bg-[#f1f1f1] !text-[rgba(0,0,0,0.7)]"
                        >
                          <GoTrash className="text-[16px]" />
                        </Button>
                      </Tooltip>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <div className="flex items-center justify-between pl-6 pr-4">
                        <span className="text-[14px] font-[500] text-black">Women</span>
                        <div className="flex items-center gap-0">
                      <Tooltip title="Edit Product" placement="top-start">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full border !border-[rgba(0,0,0,0.4)]
                      hover:!bg-[#f1f1f1] !text-[rgba(0,0,0,0.7)]"
                        >
                          <AiOutlineEdit className="text-[16px]" />
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
                          <FaRegEye className="text-[16px]" />
                        </Button>
                      </Tooltip>

                      <Tooltip title="Remove Product" placement="top-start">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full border border-[rgba(0,0,0,0.4)]
                      hover:!bg-[#f1f1f1] !text-[rgba(0,0,0,0.7)]"
                        >
                          <GoTrash className="text-[16px]" />
                        </Button>
                      </Tooltip>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>

                <li>
                  <div className="flex items-center justify-between px-4">
                    <span className="text-[14px] font-[500] text-black">Women</span>
                    <div className="flex items-center gap-0">
                      <Tooltip title="Edit Product" placement="top-start">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full border !border-[rgba(0,0,0,0.4)]
                      hover:!bg-[#f1f1f1] !text-[rgba(0,0,0,0.7)]"
                        >
                          <AiOutlineEdit className="text-[16px]" />
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
                          <FaRegEye className="text-[16px]" />
                        </Button>
                      </Tooltip>

                      <Tooltip title="Remove Product" placement="top-start">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full border border-[rgba(0,0,0,0.4)]
                      hover:!bg-[#f1f1f1] !text-[rgba(0,0,0,0.7)]"
                        >
                          <GoTrash className="text-[16px]" />
                        </Button>
                      </Tooltip>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <div className="flex items-center justify-between pl-6 pr-4">
                        <span className="text-[14px] font-[500] text-black">Women</span>
                        <div className="flex items-center gap-0">
                      <Tooltip title="Edit Product" placement="top-start">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full border !border-[rgba(0,0,0,0.4)]
                      hover:!bg-[#f1f1f1] !text-[rgba(0,0,0,0.7)]"
                        >
                          <AiOutlineEdit className="text-[16px]" />
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
                          <FaRegEye className="text-[16px]" />
                        </Button>
                      </Tooltip>

                      <Tooltip title="Remove Product" placement="top-start">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full border border-[rgba(0,0,0,0.4)]
                      hover:!bg-[#f1f1f1] !text-[rgba(0,0,0,0.7)]"
                        >
                          <GoTrash className="text-[16px]" />
                        </Button>
                      </Tooltip>
                        </div>
                      </div>
                    </li>
                    
                  </ul>
                </li>

                
              </ul>
            </Collapse>
          </li>

        </ul>
      </div>
    </>
  );
};

export default SubCategoryList;

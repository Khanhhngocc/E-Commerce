import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { RxDashboard } from "react-icons/rx";
import { FaRegImage } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { RiProductHuntLine } from "react-icons/ri";
import { TbCategory } from "react-icons/tb";
import { IoBagCheckOutline } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { TfiLayoutSlider } from "react-icons/tfi";
import { SiBloglovin } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";

import { Collapse } from "react-collapse";
import { MyContext } from "../../App";


const Sidebar = () => {
  const context = useContext(MyContext);
  
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

  const isOpenSubMenu = (index) => {
    if (openSubMenuIndex === index) {
      setOpenSubMenuIndex(null);
    } else {
      setOpenSubMenuIndex(index);
    }
  };

  return (
    <>
      <div className="sidebar fixed top-0 left-0 bg-[#fff] w-[20%] h-full border-r border-[rgba(0,0,0,0.1)] py-2 px-4">
        <div className="py-2">
          <Link to={"/"}>
            <img src="https://serviceapi.spicezgold.com/download/1750047766437_logo.jpg" />
          </Link>
        </div>

        <ul className="mt-10">
          <li className="list-none">
            <Link to={"/"}>
              <Button
                className="w-full !capitalize !flex !justify-start gap-3 !text-[rgba(0,0,0,0.8)]
                        !text-[15px] !font-[600] !py-2 hover:!bg-[#f1f1f1]"
              >
                <RxDashboard className="text-[20px]" /> <span>Dashboard</span>
              </Button>
            </Link>
          </li>
          <li className="list-none">
            <Button
              className="w-full !capitalize !flex !justify-start gap-3 !text-[rgba(0,0,0,0.8)]
                        !text-[15px] !font-[600] !py-2 hover:!bg-[#f1f1f1]"
              onClick={() => isOpenSubMenu(1)}
            >
              <FaRegImage className="text-[20px]" />
              <span>Home Slides</span>
              <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center">
                <FaAngleDown
                  className={`transition-all ${
                    openSubMenuIndex === 1 ? "rotate-180" : ""
                  }`}
                />
              </span>
            </Button>

            <Collapse isOpened={openSubMenuIndex === 1 ? true : false}>
              <ul>
                <li className="w-full">
                  <Link to={"/homeSlider/list"}>
                    <Button
                      className="!pl-9 !w-full !capitalize !text-[rgba(0,0,0,0.7)] 
                flex !justify-start !text-[13px] !font-[500] gap-3"
                    >
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                      Home Banners List
                    </Button>
                  </Link>
                </li>

                <li className="w-full">
                  <Link to={""}>
                    <Button
                      className="!pl-9 !w-full !capitalize !text-[rgba(0,0,0,0.7)]
                flex !justify-start !text-[13px] !font-[500] gap-3"
                    >
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                      Add Home Banner Slide
                    </Button>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li className="list-none">
            <Link to={"/users"}>
              <Button
                className="w-full !capitalize !flex !justify-start gap-3 !text-[rgba(0,0,0,0.8)]
                        !text-[15px] !font-[600] !py-2 hover:!bg-[#f1f1f1]"
              >
                <LuUsers className="text-[20px]" /> <span>Users</span>
              </Button>
            </Link>
          </li>
          <li className="list-none">
            <Button
              className="w-full !capitalize !flex !justify-start gap-3 !text-[rgba(0,0,0,0.8)]
                        !text-[15px] !font-[600] !py-2 hover:!bg-[#f1f1f1]"
              onClick={() => isOpenSubMenu(2)}
            >
              <RiProductHuntLine className="text-[20px]" />
              <span>Products</span>
              <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center">
                <FaAngleDown
                  className={`transition-all ${
                    openSubMenuIndex === 2 ? "rotate-180" : ""
                  }`}
                />
              </span>
            </Button>

            <Collapse isOpened={openSubMenuIndex === 2 ? true : false}>
              <ul>
                <li className="w-full">
                  <Link to={"/products"}>
                    <Button
                      className="!pl-9 !w-full !capitalize !text-[rgba(0,0,0,0.7)]
                    flex !justify-start !text-[13px] !font-[500] gap-3"
                    >
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                      Product List
                    </Button>
                  </Link>
                </li>
                <li className="w-full">
                  <Link to={"/product/upload"}>
                    <Button
                      className="!pl-9 !w-full !capitalize !text-[rgba(0,0,0,0.7)]
                    flex !justify-start !text-[13px] gap-3"
                      onClick={() => context.setIsOpenFullScreenPanel({
                        open: true,
                        model: "Add Product"
                      })}
                    >
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                      Product Upload
                    </Button>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li className="list-none">
            <Button
              className="w-full !capitalize !flex !justify-start gap-3 !text-[rgba(0,0,0,0.8)]
                        !text-[15px] !font-[600] !py-2 hover:!bg-[#f1f1f1]"
              onClick={() => isOpenSubMenu(3)}
            >
              <TbCategory className="text-[20px]" /> <span>Category</span>
              <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center">
                <FaAngleDown
                  className={`transition-all ${
                    openSubMenuIndex === 3 ? "rotate-180" : ""
                  }`}
                />
              </span>
            </Button>

            <Collapse isOpened={openSubMenuIndex === 3 ? true : false}>
              <ul>
                <li className="w-full">
                  <Link to={"/categories"}>
                    <Button
                      className="!pl-9 !w-full !capitalize !text-[rgba(0,0,0,0.7)]
                    flex !justify-start !text-[13px] gap-3"
                    >
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                      Category List
                    </Button>
                  </Link>
                </li>

                <li className="w-full">
                  <Link to={"/category/add"}>
                    <Button
                      className="!pl-9 !w-full !capitalize !text-[rgba(0,0,0,0.7)]
                    flex !justify-start !text-[13px] gap-3"
                    >
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                      Add A Category
                    </Button>
                  </Link>
                </li>

                <li className="w-full">
                  <Link to={"/category/subCat"}>
                    <Button
                      className="!pl-9 !w-full !capitalize !text-[rgba(0,0,0,0.7)]
                    flex !justify-start !text-[13px] gap-3"
                    >
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                      Sub Category List
                    </Button>
                  </Link>
                </li>

                <li className="w-full">
                  <Link to={"/category/subCat/add"}>
                    <Button
                      className="!pl-9 !w-full !capitalize !text-[rgba(0,0,0,0.7)]
                    flex !justify-start !text-[13px] gap-3"
                    >
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                      Add A Sub Category
                    </Button>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li className="list-none">
            <Link to={"/orders"}>
              <Button
                className="w-full !capitalize !flex !justify-start gap-3 !text-[rgba(0,0,0,0.8)]
                        !text-[15px] !font-[600] !py-2 hover:!bg-[#f1f1f1]"
              >
                <IoBagCheckOutline className="text-[20px]" />{" "}
                <span>Orders</span>
              </Button>
            </Link>
          </li>
          <li className="list-none">
            <Button
              className="w-full !capitalize !flex !justify-start gap-3 !text-[rgba(0,0,0,0.8)]
                        !text-[15px] !font-[600] !py-2 hover:!bg-[#f1f1f1]"
              onClick={() => isOpenSubMenu(4)}
            >
              <TfiLayoutSlider className="text-[20px]" />
              <span>Banners</span>
              <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center">
                <FaAngleDown
                  className={`transition-all ${
                    openSubMenuIndex === 4 ? "rotate-180" : ""
                  }`}
                />
              </span>
            </Button>

            <Collapse isOpened={openSubMenuIndex === 4 ? true : false}>
              <ul>
                <li className="w-full">
                  <Link to={""}>
                    <Button
                      className="!pl-9 !w-full !capitalize !text-[rgba(0,0,0,0.7)]
                    flex !justify-start !text-[13px] gap-3"
                    >
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                      Home Banner List
                    </Button>
                  </Link>
                </li>

                <li className="w-full">
                  <Link to={""}>
                    <Button
                      className="!pl-9 !w-full !capitalize !text-[rgba(0,0,0,0.7)]
                    flex !justify-start !text-[13px] gap-3"
                    >
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                      Add Home Banner
                    </Button>
                  </Link>
                </li>

                <li className="w-full">
                  <Link to={""}>
                    <Button
                      className="!pl-9 !w-full !capitalize !text-[rgba(0,0,0,0.7)]
                    flex !justify-start !text-[13px] gap-3"
                    >
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                      Home Banner List 2
                    </Button>
                  </Link>
                </li>

                <li className="w-full">
                  <Link to={""}>
                    <Button
                      className="!pl-9 !w-full !capitalize !text-[rgba(0,0,0,0.7)]
                    flex !justify-start !text-[13px] gap-3"
                    >
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                      Add Banner
                    </Button>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li className="list-none">
            <Button
              className="w-full !capitalize !flex !justify-start gap-3 !text-[rgba(0,0,0,0.8)]
                        !text-[15px] !font-[600] !py-2 hover:!bg-[#f1f1f1]"
              onClick={() => isOpenSubMenu(5)}
            >
              <SiBloglovin className="text-[20px]" />
              <span>Blogs</span>
              <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center">
                <FaAngleDown
                  className={`transition-all ${
                    openSubMenuIndex === 5 ? "rotate-180" : ""
                  }`}
                />
              </span>
            </Button>

            <Collapse isOpened={openSubMenuIndex === 5 ? true : false}>
              <ul>
                <li className="w-full">
                  <Link to={""}>
                    <Button
                      className="!pl-9 !w-full !capitalize !text-[rgba(0,0,0,0.7)]
                        flex !justify-start !text-[13px] gap-3"
                    >
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                      Blog List
                    </Button>
                  </Link>
                </li>

                <li className="w-full">
                  <Link to={""}>
                    <Button
                      className="!pl-9 !w-full !capitalize !text-[rgba(0,0,0,0.7)]
                        flex !justify-start !text-[13px] gap-3"
                    >
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                      Add Blog
                    </Button>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li className="list-none">
            <Link to={""}>
              <Button
                className="w-full !capitalize !flex !justify-start gap-3 !text-[rgba(0,0,0,0.8)]
                        !text-[15px] !font-[600] !py-2 hover:!bg-[#f1f1f1]"
              >
                <IoSettingsOutline className="text-[20px]" />
                <span>Settings</span>
              </Button>
            </Link>
          </li>
          <li className="list-none">
            <Link to={""}>
              <Button
                className="w-full !capitalize !flex !justify-start gap-3 !text-[rgba(0,0,0,0.8)]
                        !text-[15px] !font-[600] !py-2 hover:!bg-[#f1f1f1]"
              >
                <RiLogoutCircleRLine className="text-[20px]" />
                <span>Logout</span>
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

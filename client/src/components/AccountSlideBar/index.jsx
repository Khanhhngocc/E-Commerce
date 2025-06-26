import React from "react";
import Button from "@mui/material/Button";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";

const AccountSlideBar = () => {
  return (
    <div className="card shadow-ms rounded-md bg-white">
      <div className="w-full p-5 flex items-center justify-center flex-col">
        <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group">
          <img
            src="https://ecommerce-frontend-view.netlify.app/user.jpg"
            className="w-full h-full object-cover"
          />

          <div
            className="overlay w-full h-full bg-[rgba(0,0,0,0.7)] absolute top-0 left-0 z-50
                    opacity-0 flex items-center justify-center group-hover:opacity-100 transition-all cursor-pointer"
          >
            <FaCloudUploadAlt className="text-[#fff] text-[25px]" />
            <input
              type="file"
              className="absolute top-0 left-0 w-full h-full opacity-0"
            />
          </div>
        </div>

        <h3>Eren Yeager</h3>

        <h6 className="text-[13px] font-[500]">
          Eren.yeager.rumbling@gmail.com
        </h6>
      </div>

      <ul className="list-none bg-[#f1f1f1] pb-5 myAccountTabs">
        <li className="w-full">
          <NavLink to={"/my-account"} exact={true} activeClassName="isActive">
            <Button
              className="w-full !py-2 !px-5 rounded-none !text-left !justify-start !font-[600]
                        flex items-center gap-2 !capitalize !text-[rgba(0,0,0,0.8)]"
            >
              <FaRegUser className="text-[17px]" /> My Profile
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink to={"/address"} exact={true} activeClassName="isActive">
            <Button
              className="w-full !py-2 !px-5 rounded-none !text-left !justify-start !font-[600]
                        flex items-center gap-2 !capitalize !text-[rgba(0,0,0,0.8)]"
            >
              <FaMapMarkerAlt className="text-[17px]" /> Address
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink to={"/my-list"} exact={true} activeClassName="isActive">
            <Button
              className="w-full !py-2 !px-5 rounded-none !text-left !justify-start !font-[600]
                        flex items-center gap-2 !capitalize !text-[rgba(0,0,0,0.8)]"
            >
              <IoMdHeartEmpty className="text-[17px]" /> My List
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink to={"/my-orders"} exact={true} activeClassName="isActive">
            <Button
              className="w-full !py-2 !px-5 rounded-none !text-left !justify-start !font-[600]
                        flex items-center gap-2 !capitalize !text-[rgba(0,0,0,0.8)]"
            >
              <IoBagCheckOutline className="text-[17px]" /> My orders
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink to={"/logout"} exact={true} activeClassName="isActive">
            <Button
              className="w-full !py-2 !px-5 rounded-none !text-left !justify-start !font-[600]
                        flex items-center gap-2 !capitalize !text-[rgba(0,0,0,0.8)]"
            >
              <IoIosLogOut className="text-[17px]" /> Logout
            </Button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AccountSlideBar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { IoCloseSharp } from "react-icons/io5";
import Button from "@mui/material/Button";

const MyListItem = () => {
  return (
    <>
      <div className="myListItem w-full p-3 flex items-center gap-6 pb-5 border-b border-[rgba(0,0,0,0.1)]">
        <div className="img w-[12%] overflow-hidden rounded-md group">
          <Link to={"/product/hehe"}>
            <img
              src="https://serviceapi.spicezgold.com/download/1742439345825_fabflee-party-printed-women-s-top-women-tops-crepe-top-tops-for-women-tops-for-women-product-images-rvwdnv1ypj-2-202311010723.webp"
              className="w-full group-hover:scale-105 transition-all object-cover aspect-[2/3]"
            />
          </Link>
        </div>

        <div className="info w-[88%] relative">
          <IoCloseSharp className="text-[22px] cursor-pointer link absolute top-0 right-0 transition-all" />
          <span className="text-[13px]">Sangria</span>
          <h3 className="text-[15px]">
            <Link to={"/product/hehe"} className="link transition-all">
              A-Line Kurti With Sharara & Dupatta
            </Link>
          </h3>
          <Rating name="size-small" defaultValue={5} size="small" />

          <div className="flex items-center gap-4 mt-2">
            <span className="price text-black text-[14px] font-[600]">
              $58.00
            </span>
            <span className="oldPrice line-through text-gray-500 text-[14px] text-[600]">
              $58.00
            </span>
            <span className="discount text-primary text-[14px] font-[600]">
              55% OFF
            </span>

          </div>

            <br />

          <Button className="btn-org btn-sm">Add to Cart</Button>
        </div>
      </div>
    </>
  );
};

export default MyListItem;

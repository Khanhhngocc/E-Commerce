import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { GoTriangleDown } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";
import Menu from '@mui/material/Menu';
import MenuItem from "@mui/material/MenuItem";

const CartItems = (props) => {
  const [sizeAnchorEl, setSizeAnchorEl] = useState(null);
  const [selectedSize, setCartItems] = useState(props.size);
  const openSize = Boolean(sizeAnchorEl);
  const handleClickSize = (event) => {
    setSizeAnchorEl(event.currentTarget);
  };

  const handleCloseSize = (value) => {
    setSizeAnchorEl(null);
    if (value !== null) {
      setCartItems(value);
    }
  };

  return (
    <>
      <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]">
        <div className="img w-[12%] rounded-md overflow-hidden">
          <Link to={"/product/hehe"} className="group">
            <img
              src="https://serviceapi.spicezgold.com/download/1742439345825_fabflee-party-printed-women-s-top-women-tops-crepe-top-tops-for-women-tops-for-women-product-images-rvwdnv1ypj-2-202311010723.webp"
              className="w-full group-hover:scale-105"
            />
          </Link>
        </div>
        <div className="info w-[88%] relative">
          <IoCloseSharp className="cursor-pointer link text-[22px] absolute top-0 right-0 transition-all" />
          <span className="text-[13px]">Sangria</span>
          <h3 className="text-[15px]">
            <Link to={"/product/hehe"} className="link transition-all">
              A-Line Kurti With Sharara & Dupatta
            </Link>
          </h3>
          <Rating name="size-small" defaultValue={5} size="small" />

          <div className="flex items-center gap-4 mt-2">
            <div className="relative">
              <span
                className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] py-1 px-2 rounded-md cursor-pointer"
                onClick={handleClickSize}
              >
                Size: {selectedSize} <GoTriangleDown />
              </span>

              <Menu
                id="size-menu"
                anchorEl={sizeAnchorEl}
                open={openSize}
                onClose={() => handleCloseSize(null)}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={() => handleCloseSize("S")}>M</MenuItem>
                <MenuItem onClick={() => handleCloseSize("L")}>L</MenuItem>
                <MenuItem onClick={() => handleCloseSize("XL")}>XL</MenuItem>
              </Menu>
            </div>
            <div className="relative">
              <span className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] py-1 px-2 rounded-md cursor-pointer">
                Quantity: 1 <GoTriangleDown />
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <span className="price text-black text-[14px] font-[600]">
              $58.00
            </span>
            <span className="oldPrice line-through text-grey-500 text-[14px] font-[600]">
              $58.00
            </span>
            <span className="discount text-primary text-[14px] font-[600]">
              55% OFF
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;

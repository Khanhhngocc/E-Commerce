import React, { useContext } from "react";
import Drawer from "@mui/material/Drawer";
import { IoCloseSharp } from "react-icons/io5";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Button from "@mui/material/Button";

const CartPanel = () => {
  const context = useContext(MyContext);

  return (
    <Drawer
      open={context.openCartPanel}
      onClose={() => context.toggleCartPanel(false)}
      anchor="right"
      className="cartPanel"
    >
      <div className="flex items-center justify-between py-3 px-4 gap-3 border-b border-[rgba(0,0,0,0.1)]">
        <h2 className="text-[20px]">Shopping Cart</h2>
        <IoCloseSharp onClick={context.toggleCartPanel(false)} />
      </div>

      <div className="scroll w-full max-h-[465px] overflow-y-scroll overflow-x-hidden px-4">
        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] py-4">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
            <Link to={"/product/hehe"} className="block group">
              <img
                src="https://serviceapi.spicezgold.com/download/1742439345825_fabflee-party-printed-women-s-top-women-tops-crepe-top-tops-for-women-tops-for-women-product-images-rvwdnv1ypj-2-202311010723.webp"
                className="w-full group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="info w-[75%] pr-5 relative">
            <h4 className="text-[14px] font-[500]">
              <Link to={"/product/hehe"} className="link transition-all">
                Ethnic Motifs Embroidered
              </Link>
            </h4>
            <p className="flex items-center gap-5 my-2">
              <span>
                Qty: <span>2</span>
              </span>
              <span className="text-primary font-bold">Price: $25</span>
            </p>
            <MdOutlineDeleteOutline className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>
      </div>

      <div className="bottomSec w-full absolute bottom-[20px] right-0">
        <div className="bottomInfo py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between gap-2 flex-col">
          <div className="flex items-center justify-between w-full">
            <span className="text-[14px] font-[600]">1 item</span>
            <span className="text-primary font-bold">&86.00</span>
          </div>
          <div className="flex items-center justify-between w-full">
            <span className="text-[14px] font-[600]">Shipping</span>
            <span className="text-primary font-bold">%8.00</span>
          </div>
        </div>
        <div className="bottomInfo py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col">
          <div className="flex items-center justify-between w-full">
            <span className="text-[14px] font-[600]">Total (tax excl.)</span>
            <span className="text-primary font-bold">&93.00</span>
          </div>

          <br />

          <div className="flex items-center justify-between w-full gap-5">
            <Link to={"/cart"} className="w-[50%]">
              <Button className="btn-org btn-lg w-full">View Cart</Button>
            </Link>
            <Link to={"/checkout"} className="w-[50%]">
              <Button className="btn-org btn-lg w-full">Checkout</Button>
            </Link>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default CartPanel;

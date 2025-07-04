import React from "react";
import Button from "@mui/material/Button";
import { BsFillBagCheckFill } from "react-icons/bs";
import CartItems from "./cartItems";
import { Link } from "react-router-dom";

const CartPage = () => {
  return (
    <section className="section py-10 pb-10">
      <div className="container w-[80%] max-w-[80%] flex gap-5">
        <div className="leftPart w-[70%]">
          <div className="shadow-md rounded-md bg-white">
            <div className="pt-5 pb-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2>Your Cart</h2>
              <p className="mt-1">
                There are<span className="font-bold text-primary"> 2 </span>
                products in your cart
              </p>
            </div>

            <CartItems size="M" />
          </div>
        </div>

        <div className="rightPart w-[30%]">
          <div className="w-full shadow-md rounded-md bg-white p-5">
            <h3 className="pb-3">Cart Totals</h3>
            <hr />

            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Subtotal</span>
              <span className="text-primary font-bold">$1300</span>
            </p>

            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Shipping</span>
              <span className="font-bold">Free</span>
            </p>

            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Estimate for</span>
              <span className="font-bold">Vietnam</span>
            </p>

            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Total</span>
              <span className="text-primary font-bold">$1300</span>
            </p>

            <Button className="btn-org btn-lg w-full !mt-3">
              <Link to={"/checkout"} className="flex items-center gap-2">
                <BsFillBagCheckFill className="text-[20px]" />
                Checkout
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;

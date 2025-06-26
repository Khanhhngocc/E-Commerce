import React, { useContext, useState } from "react";
import { MyContext } from "../../App";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const ForgotPassword = () => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isPasswordShow2, setIsPasswordShow2] = useState(false);

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className="text-center text-[18px] text-black">
            Forgot Password
          </h3>

          <form action="" className="w-full mt-5">
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isPasswordShow === true ? "text" : "password"}
                id="password"
                label="New Password"
                variant="outlined"
                className="w-full"
                name="password"
              />
              <Button
                className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black !absolute top-[10px] right-[10px]"
                onClick={() => setIsPasswordShow(!isPasswordShow)}
              >
                {isPasswordShow === true ? (
                  <IoMdEye className="text-[20px] opacity-50" />
                ) : (
                  <IoMdEyeOff className="text-[20px] opacity-50" />
                )}
              </Button>
            </div>

            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isPasswordShow2 === true ? "text" : "password"}
                id="confirm_password"
                label="Confirm Password"
                variant="outlined"
                className="w-full"
                name="confirm_password"
              />
              <Button
                className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black !absolute top-[10px] right-[10px]"
                onClick={() => setIsPasswordShow2(!isPasswordShow2)}
              >
                {isPasswordShow2 === true ? (
                  <IoMdEye className="text-[20px] opacity-50" />
                ) : (
                  <IoMdEyeOff className="text-[20px] opacity-50" />
                )}
              </Button>
            </div>
          </form>

          <div className="w-full flex items-center my-3">
            <Button className="w-full btn-org btn-lg">Change Password</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;

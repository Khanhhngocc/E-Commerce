import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [isPasswordShow, setIsPasswordShow] = useState(true);

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[500px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className="text-center text-[18px] text-black">
            Login to your account
          </h3>
          <form className="w-full mt-5">
            <div className="form-group w-full mb-5">
              <TextField
                type="email"
                id="email"
                label="Email Id *"
                variant="outlined"
                className="w-full"
              />
            </div>

            <div className="form-group w-full mb-5 relative">
              <TextField
                type={`${isPasswordShow === false ? "type" : "password"}`}
                id="email"
                label="Password *"
                variant="outlined"
                className="w-full"
              />
              <Button
                className="!absolute !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black
                top-[10px] right-[10px]"
                onClick={() => setIsPasswordShow(!isPasswordShow)}
              >
                {isPasswordShow === false ? (
                  <IoMdEye className="text-[20px] opacity-50" />
                ) : (
                  <IoMdEyeOff className="text-[20px] opacity-50" />
                )}
              </Button>
            </div>

            <Link className="text-[14px] font-[600] link cursor-pointer">
              Forgot Password?
            </Link>

            <div className="w-full flex items-center my-3">
              <Button className="w-full btn-org btn-lg">Login</Button>
            </div>

            <p className="text-center">
              Not Registered?{" "}
              <Link
                className="text-primary text-[14px] font-[600]"
                to={"/register"}
              >
                {" "}
                Sign Up
              </Link>
            </p>

            <p className="text-center font-[500]">
              Or continue with social account
            </p>

            <Button className="w-full flex items-center gap-3 btn-lg !bg-[#f1f1f1] !text-black">
              <FcGoogle className="text-[20px]" />
              Login with Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;

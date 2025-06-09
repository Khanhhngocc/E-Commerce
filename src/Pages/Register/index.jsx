import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card m-auto shadow-md rounded-md w-[500px] bg-white p-5 px-10">
          <h3 className="text-center text-[18px] text-black">
            Register with a new account
          </h3>
          <form className="w-full mt-5">
            <div className="form-group mb-5">
              <TextField
                type="text"
                id="fullname"
                label="Full name *"
                variant="outlined"
                className="w-full"
              />
            </div>

            <div className="form-group mb-5">
              <TextField
                type="email"
                id="email"
                label="Email id *"
                variant="outlined"
                className="w-full"
              />
            </div>

            <div className="form-group mb-5 relative">
              <TextField
                type={`${isPasswordShow === false ? "password" : "text"}`}
                id="password"
                label="Password *"
                variant="outlined"
                className="w-full"
              />
              <Button
                className="!absolute top-[10px] right-[10px] !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black"
                onClick={() => setIsPasswordShow(!isPasswordShow)}
              >
                {isPasswordShow === true ? (
                  <IoMdEye className="text-[20px] opacity-50" />
                ) : (
                  <IoMdEyeOff className="text-[20px] opacity-50" />
                )}
              </Button>
            </div>

            <div className="flex items-center w-full my-3">
              <Button className="w-full btn-org btn-lg">Register</Button>
            </div>

            <p className="text-center">
              Already have an account?{" "}
              <Link
                className="text-primary text-[14px] font-[600]"
                to={"/login"}
              >
                Login
              </Link>
            </p>

            <p className="text-center font-[500]">
              Or continue with social account
            </p>

            <Button className="flex items-center gap-3 btn-lg w-full !bg-[#f1f1f1] !text-black">
              <FcGoogle className="20px" /> Login with Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;

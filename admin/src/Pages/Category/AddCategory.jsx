import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { IoMdClose } from "react-icons/io";
import UploadBox from "../../components/UploadBox";
import Button from "@mui/material/Button";
import { FaCloudUploadAlt } from "react-icons/fa";

const AddCategory = () => {
  return (
    <section className="p-5 bg-gray-50">
      <form className="py-3 p-8">
        <div className="scroll max-h-[75vh] overflow-y-scroll pr-4 pt-4">
          <div className="grid grid-cols-1 mb-3">
            <div className="col w-[50%]">
              <h3 className="text-[14px] font-[500] text-black mb-2">
                Category Name
              </h3>
              <input
                type="text"
                className="w-full h-[50px] border border-[rgba(0,0,0,0.2)] focus:outline-none
                            focus:border-[rgba(0,0,0,0.4)] rounded-md p-3 text-sm"
              />
            </div>
          </div>
          <br />
          <h3 className="text-[16px] font-[500] text-black mb-2">
            Category Image
          </h3>

          <div className="grid grid-cols-7 gap-4">
            <div className="uploadBoxWrapper relative">
              <span
                className="w-[20px] h-[20px] rounded-full absolute -top-[5px] -right-[5px]
                overflow-hidden bg-red-700 flex items-center justify-center z-50 cursor-pointer"
              >
                <IoMdClose className="text-white text-[17px]" />
              </span>
              <div
                className="uploadBox p-0 w-[100%] h-[150px] rounded-md bg-gray-10 border border-dashed border-[rgba(0,0,0,0.3)]
                    hover:bg-gray-200 overflow-hidden flex flex-col items-center justify-center cursor-pointer relative"
              >
                <LazyLoadImage
                  className="w-full h-full object-cover"
                  alt={"image"}
                  src={
                    "https://ecommerce-admin-view.netlify.app/shop-illustration.webp"
                  }
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                />
              </div>
            </div>

            <UploadBox multiple={false} />
          </div>
        </div>
        <br />

        <Button
          type="button"
          className="btn-blue btn-lg w-full flex items-center gap-2"
        >
          <FaCloudUploadAlt className="text-[25px] text-white" />
          Publish and View
        </Button>
      </form>
    </section>
  );
};

export default AddCategory;

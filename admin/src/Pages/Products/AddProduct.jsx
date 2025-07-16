import React, { useState } from "react";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Rating from "@mui/material/Rating";
import UploadBox from "../../components/UploadBox";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { IoMdClose } from "react-icons/io";
import Button from "@mui/material/Button";
import { FaCloudUploadAlt } from "react-icons/fa";

const AddProduct = () => {
  const [productCat, setProductCat] = useState("");
  const [productSubCat, setProductSubCat] = useState("");
  const [productFeatured, setProductFeatured] = useState("");
  const [productRams, setProductRams] = useState("");
  const [productWeight, setProductWeight] = useState("");
  const [productSize, setProductSize] = useState("");

  const handleChangeProductCat = (event) => {
    setProductCat(event.target.value);
  };
  const handleChangeProductSubCat = (event) => {
    setProductSubCat(event.target.value);
  };
  const handleChangeProductFeatured = (event) => {
    setProductFeatured(event.target.value);
  };
  const handleChangeProductRams = (event) => {
    setProductRams(event.target.value);
  };
  const handleChangeProductWeight = (event) => {
    setProductWeight(event.target.value);
  };
  const handleChangeProductSize = (event) => {
    setProductSize(event.target.value);
  };
  return (
    <section className="p-5 bg-gray-50">
      <form className="form py-3 px-8">
        <div className="sr max-h-[83vh] overflow-y-scroll">
          <div className="grid grid-cols-1 mb-3">
            <div className="col">
              <h3 className="text-[14px] font-[500] text-black mb-1">
                Product Name
              </h3>
              <input
                type="text"
                className="w-full h-[50px] border border-[rgba(0,0,0,0.2)] focus:outline-none
                        focus:border-[rgba(0,0,0,0.4)] rounded-md p-3 text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 mb-3">
            <div className="col">
              <h3 className="text-[14px] font-[500] text-black mb-1">
                Product Description
              </h3>
              <textarea
                className="w-full h-[140px] border border-[rgba(0,0,0,0.2)] focus:outline-none
                        focus:border-[rgba(0,0,0,0.4)] rounded-md p-3 text-sm"
              ></textarea>
            </div>
          </div>

          <div className="grid grid-cols-4 mb-3 items-end gap-3">
            <div className="col">
              <h3 className="text-[14px] font-[500] text-black mb-2">
                Product Category
              </h3>
              <Select
                labelId="demo-simple-select-label"
                id="productCatDrop"
                value={productCat}
                onChange={handleChangeProductCat}
                className="w-full"
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Women</MenuItem>
                <MenuItem value={20}>Men</MenuItem>
                <MenuItem value={30}>Kids</MenuItem>
              </Select>
            </div>

            <div className="col">
              <h3 className="text-[14px] font-[500] text-black mb-2">
                Product Sub Category
              </h3>
              <Select
                labelId="demo-simple-select-label"
                id="productCatDrop"
                value={productSubCat}
                onChange={handleChangeProductSubCat}
                className="w-full"
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Women</MenuItem>
                <MenuItem value={20}>Men</MenuItem>
                <MenuItem value={30}>Kids</MenuItem>
              </Select>
            </div>

            <div className="col">
              <h3 className="text-[14px] font-[500] text-black mb-1">Price</h3>
              <input
                type="number"
                className="w-full h-[57px] border border-[rgba(0,0,0,0.2)] focus:outline-none
                focus:border-[rgba(0,0,0,0.4)] rounded-md p-3 text-sm"
              />
            </div>

            <div className="col">
              <h3 className="text-[14px] font-[500] text-black mb-1">
                Old Price
              </h3>
              <input
                type="number"
                className="w-full h-[57px] border border-[rgba(0,0,0,0.2)] focus:outline-none
                focus:border-[rgba(0,0,0,0.4)] rounded-md p-3 text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-4 mb-3 items-end gap-3">
            <div className="col">
              <h3 className="text-[14px] font-[500] text-black mb-2">
                Is Featured
              </h3>
              <Select
                labelId="demo-simple-select-label"
                id="productCatDrop"
                value={productFeatured}
                onChange={handleChangeProductFeatured}
                className="w-full"
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Women</MenuItem>
                <MenuItem value={20}>Men</MenuItem>
                <MenuItem value={30}>Kids</MenuItem>
              </Select>
            </div>

            <div className="col">
              <h3 className="text-[14px] font-[500] text-black mb-2">
                Product Stock
              </h3>
              <Select
                labelId="demo-simple-select-label"
                id="productCatDrop"
                value={productSubCat}
                onChange={handleChangeProductSubCat}
                className="w-full"
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Women</MenuItem>
                <MenuItem value={20}>Men</MenuItem>
                <MenuItem value={30}>Kids</MenuItem>
              </Select>
            </div>

            <div className="col">
              <h3 className="text-[14px] font-[500] text-black mb-2">
                Product Brand
              </h3>
              <Select
                labelId="demo-simple-select-label"
                id="productCatDrop"
                value={productSubCat}
                onChange={handleChangeProductSubCat}
                className="w-full"
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Women</MenuItem>
                <MenuItem value={20}>Men</MenuItem>
                <MenuItem value={30}>Kids</MenuItem>
              </Select>
            </div>

            <div className="col">
              <h3 className="text-[14px] font-[500] text-black mb-2">
                Product Discount
              </h3>
              <Select
                labelId="demo-simple-select-label"
                id="productCatDrop"
                value={productSubCat}
                onChange={handleChangeProductSubCat}
                className="w-full"
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Women</MenuItem>
                <MenuItem value={20}>Men</MenuItem>
                <MenuItem value={30}>Kids</MenuItem>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-4 mb-3 items-end gap-3">
            <div className="col">
              <h3 className="text-[14px] font-[500] text-black mb-2">
                Product RAMS
              </h3>
              <Select
                labelId="demo-simple-select-label"
                id="productCatDrop"
                value={productRams}
                onChange={handleChangeProductRams}
                className="w-full"
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Women</MenuItem>
                <MenuItem value={20}>Men</MenuItem>
                <MenuItem value={30}>Kids</MenuItem>
              </Select>
            </div>
            <div className="col">
              <h3 className="text-[14px] font-[500] text-black mb-2">
                Product Weight
              </h3>
              <Select
                labelId="demo-simple-select-label"
                id="productCatDrop"
                value={productWeight}
                onChange={handleChangeProductWeight}
                className="w-full"
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Women</MenuItem>
                <MenuItem value={20}>Men</MenuItem>
                <MenuItem value={30}>Kids</MenuItem>
              </Select>
            </div>
            <div className="col">
              <h3 className="text-[14px] font-[500] text-black mb-2">
                Product Size
              </h3>
              <Select
                labelId="demo-simple-select-label"
                id="productCatDrop"
                value={productSize}
                onChange={handleChangeProductSize}
                className="w-full"
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Women</MenuItem>
                <MenuItem value={20}>Men</MenuItem>
                <MenuItem value={30}>Kids</MenuItem>
              </Select>
            </div>
            <div className="col">
              <h3 className="text-[14px] font-[500] text-black mb-2">
                Product Rating
              </h3>
              <Rating name="size-medium" defaultValue={4} />
            </div>
          </div>

          <div className="col w-full p-5 px-0">
            <h3 className="text-[18px] font-[500] mb-5">Media & Image</h3>

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

export default AddProduct;

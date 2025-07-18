import { Router } from "express";
const categoryRouter = Router();

import { auth } from '../middlewares/auth.middleware.js';
import upload from '../../../helpers/storageMulter.js';

import { createCategory, deleteCategory, getCategories, getCategoriesCount, getCategory, getSubCategoriesCount, removeImageFromCloudinary, updateCategory, uploadImages } from "../controllers/category.controller.js";

categoryRouter.post("/create", auth, upload.array("images"), createCategory);

categoryRouter.post("/uploadImages", auth, uploadImages);

categoryRouter.get("/", auth, getCategories);

categoryRouter.get("/get/count", auth, getCategoriesCount);

categoryRouter.get("/get/count/subCat", auth, getSubCategoriesCount);

categoryRouter.get("/:id", auth, getCategory);

categoryRouter.delete("/deleteImage", auth, removeImageFromCloudinary);

categoryRouter.delete("/:id", auth, deleteCategory);

categoryRouter.put("/:id", auth, updateCategory);


export default categoryRouter;
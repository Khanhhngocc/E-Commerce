import { Router } from "express";
import { auth } from "../middlewares/auth.middleware.js";
import upload from "../../../helpers/storageMulter.js";
import { createProduct, getAllProduct, getAllProductsByCatName, getAllProductsBySubCatId, getAllProductsBySubCatName, uploadImages, getAllProductsByThirdLevelName, getAllProductsByThirdLevelCatId, getAllProductsByPrice, getAllProductsByRating, getAllProductsCount, getAllFeaturedProducts, deleteProduct, getProduct, removeImageFromCloudinary, updateProduct, getAllProductsByCatId } from "../controllers/product.controller.js";
const productRouter = Router();

productRouter.post("/uploadImages", auth, upload.array('images'), uploadImages);

productRouter.post("/create", auth, upload.array('images'), createProduct);

productRouter.get("/getAllProducts", auth, getAllProduct);

productRouter.get("/getAllProductsByCatId/:id", auth, getAllProductsByCatId);

productRouter.get("/getAllProductsByCatName", auth, getAllProductsByCatName);

productRouter.get("/getAllProductsBySubCatId/:id", auth, getAllProductsBySubCatId);

productRouter.get("/getAllProductsByCatName", auth, getAllProductsBySubCatName);

productRouter.get("/getAllProductsByThirdLevelCatId/:id", auth, getAllProductsByThirdLevelCatId);

productRouter.get("/getAllProductsByThirdLevelName", auth, getAllProductsByThirdLevelName);

productRouter.get("/getAllProductsByPrice", auth, getAllProductsByPrice);

productRouter.get("/getAllProductsByRating", auth, getAllProductsByRating);

productRouter.get("/getAllProductsCount", auth, getAllProductsCount);

productRouter.get("/getAllFeaturedProducts", auth, getAllFeaturedProducts);    

productRouter.delete("/:id", auth, deleteProduct);    

productRouter.get("/:id", auth, getProduct);    

productRouter.delete("/deleteImage", auth, removeImageFromCloudinary);    

productRouter.put("/updateProduct/:id", auth, updateProduct);    


export default productRouter;
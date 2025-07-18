import { Router } from "express";
import { auth } from '../middlewares/auth.middleware.js';
import { addToCardItemController, deleteCartItemQtyController, getCartItemController, updateCartItemQtyController } from "../controllers/cart.controller.js";
const cartRouter = Router();

cartRouter.post("/add", auth, addToCardItemController);

cartRouter.get("/get", auth, getCartItemController);

cartRouter.put("/update-qty", auth, updateCartItemQtyController);

cartRouter.delete("/delete-cart-item", auth, deleteCartItemQtyController);

export default cartRouter;
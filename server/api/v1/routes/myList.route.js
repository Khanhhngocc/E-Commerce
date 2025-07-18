import { Router } from "express";
const myListRouter = Router();

import { auth } from "../middlewares/auth.middleware.js";
import { addToMyListController, deleteToMyListController, getMyListController } from "../controllers/myList.controller.js";

myListRouter.post("/add", auth, addToMyListController);

myListRouter.delete("/:id", auth, deleteToMyListController);

myListRouter.get("/", auth, getMyListController);

export default myListRouter;
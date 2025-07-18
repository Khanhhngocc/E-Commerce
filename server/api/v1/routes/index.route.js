import cartRouter from "./cart.route.js";
import categoryRouter from "./category.route.js";
import myListRouter from "./myList.route.js";
import productRouter from "./product.route.js";
import userRouter from "./user.route.js"

export default function routesApiVer1(app) {
    app.use("/api/user", userRouter);

    app.use("/api/category", categoryRouter);

    app.use("/api/product", productRouter);

    app.use("api/cart", cartRouter);

    app.use("api/myList", myListRouter);
}
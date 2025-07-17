import Category from "../../Pages/Category";
import Dashboard from "../../Pages/Dashboard";
import HomeSliderBanners from "../../Pages/HomeSliderBanners";
import ProductList from "../../Pages/Products";
import AddProduct from "../../Pages/Products/AddProduct";
import Header from "../Header";
import Sidebar from "../Sidebar";


export const routes = [
  {
    path: "/",
    element: (
      <>
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div
              className={`sidebarWrapper overflow-hidden ${
                isSidebarOpen === true
                  ? "w-[20%] opacity-100"
                  : "w-[0px] opacity-0"
              } transition-all`}
            >
              <Sidebar />
            </div>

            <div
              className={`contentRight py-4 px-5 ${
                isSidebarOpen === false ? "w-[100%]" : "w-[80%]"
              } transition-all`}
            >
              <Dashboard />
            </div>
          </div>
        </section>
      </>
    ),
  },
  {
    path: "/products",
    element: (
      <>
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div
              className={`sidebarWrapper overflow-hidden ${
                isSidebarOpen === true
                  ? "w-[20%] opacity-100"
                  : "w-[0px] opacity-0"
              } transition-all`}
            >
              <Sidebar />
            </div>

            <div
              className={`contentRight py-4 px-5 ${
                isSidebarOpen === false ? "w-[100%]" : "w-[80%]"
              } transition-all`}
            >
              <ProductList />
            </div>
          </div>
        </section>
      </>
    ),
  },
  {
    path: "/product/upload",
    element: (
      <>
        <AddProduct />
      </>
    ),
  },
  {
    path: "/homeSlider/list",
    element: (
      <>
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div
              className={`sidebarWrapper overflow-hidden ${
                isSidebarOpen === true
                  ? "w-[20%] opacity-100"
                  : "w-[0px] opacity-0"
              } transition-all`}
            >
              <Sidebar />
            </div>

            <div
              className={`contentRight py-4 px-5 ${
                isSidebarOpen === false ? "w-[100%]" : "w-[80%]"
              } transition-all`}
            >
              <HomeSliderBanners />
            </div>
          </div>
        </section>
      </>
    ),
  },
  {
    path: "/category/list",
    element: (
      <>
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div
              className={`sidebarWrapper overflow-hidden ${
                isSidebarOpen === true
                  ? "w-[20px] opacity-100"
                  : "w-[0px] opacity-0"
              } transition`}
            >
              <Sidebar />
            </div>

            <div
              className={`contentRight py-4 px-5 ${
                isSidebarOpen === false ? "w-[100%]" : "w-[80%]"
              } transition-all`}
            >
              <Category />
            </div>
          </div>
        </section>
      </>
    ),
  },
];

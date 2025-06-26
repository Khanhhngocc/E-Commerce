import React from "react";
import AccountSlideBar from "../../components/AccountSlideBar";
import MyListItem from "./MyListItem";

const MyList = () => {
  return (
    <section className="section py-10">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSlideBar />
        </div>

        <div className="col2 w-[70%]">
          <div className="shadow-md rounded-md bg-white">
            <div className="pt-5 pb-2 px-5 border-b border-[rgba(0,0,0,0.1)]">
              <h2>My List</h2>
              <p>
                There are <span className="text-primary font-bold">1</span>{" "}
                products in your My List
              </p>
            </div>
            
            <MyListItem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyList;

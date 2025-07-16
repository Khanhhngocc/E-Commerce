import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { GoGift } from "react-icons/go";
import { IoStatsChart } from "react-icons/io5";
import { AiTwotonePieChart } from "react-icons/ai";
import { BsBank } from "react-icons/bs";
import { RiProductHuntLine } from "react-icons/ri";


import { Navigation } from 'swiper/modules';

const DashboardBoxes = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="dashboardBoxesSlider"
      >
        <SwiperSlide>
            <div className="box p-5 bg-white rounded-md border border-[rgba(0,0,0,0.1)] cursor-pointer hover:bg-[#fafafa]
            flex items-center gap-4">
                <GoGift className="text-[40px] text-[#3872fa]"/>
                <div className="info w-[70%]">
                    <h3>New Orders</h3>
                    <b>1,3900</b>
                </div>
                <IoStatsChart className="text-[50px] text-[#3872fa]"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="box p-5 bg-white rounded-md border border-[rgba(0,0,0,0.1)] cursor-pointer hover:bg-[#fafafa]
            flex items-center gap-4">
                <AiTwotonePieChart className="text-[40px] text-[#10b981]"/>
                <div className="info w-[70%]">
                    <h3>Sales</h3>
                    <b>$57,809</b>
                </div>
                <IoStatsChart className="text-[50px] text-[#10b981]"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="box p-5 bg-white rounded-md border border-[rgba(0,0,0,0.1)] cursor-pointer hover:bg-[#fafafa]
            flex items-center gap-4">
                <BsBank className="text-[40px] text-[#7928ca]"/>
                <div className="info w-[70%]">
                    <h3>Revenue</h3>
                    <b>$13,80</b>
                </div>
                <IoStatsChart className="text-[50px] text-[#7928ca]"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="box p-5 bg-white rounded-md border border-[rgba(0,0,0,0.1)] cursor-pointer hover:bg-[#fafafa]
            flex items-center gap-4">
                <RiProductHuntLine className="text-[40px] text-[#312be1d8]"/>
                <div className="info w-[70%]">
                    <h3>Total Products</h3>
                    <b>1,3900</b>
                </div>
                <IoStatsChart className="text-[50px] text-[#312be1d8]"/>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default DashboardBoxes;

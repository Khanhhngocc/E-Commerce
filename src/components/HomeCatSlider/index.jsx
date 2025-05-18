import React from 'react'
import { Link } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation } from 'swiper/modules';

const HomeCatSlider = () => {
    return(
        <div className='homeCatSlider'>
            <div className='container'>
                <Swiper
                    slidesPerView={8}
                    spaceBetween={10}
                    navigation={true} 
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <Link to={"/"}>
                        <SwiperSlide>
                            <div className='item py-7 px-3 bg-white text-center rounded-sm flex items-center justify-center flex-col'>
                                <img src='https://serviceapi.spicezgold.com/download/1744509970781_fash.png' className='w-[60px] transition-all'/>
                                <h3 className='text-[15px] font-[500] mt-3'>Smart Tablet</h3>
                            </div>
                        </SwiperSlide>
                    </Link>
                    <Link to={"/"}>
                        <SwiperSlide>
                            <div className='item py-7 px-3 bg-white text-center rounded-sm flex items-center justify-center flex-col'>
                                <img src='https://serviceapi.spicezgold.com/download/1744509970781_fash.png' className='w-[60px] transition-all'/>
                                <h3 className='text-[15px] font-[500] mt-3'>Smart Tablet</h3>
                            </div>
                        </SwiperSlide>
                    </Link>
                    <Link to={"/"}>
                        <SwiperSlide>
                            <div className='item py-7 px-3 bg-white text-center rounded-sm flex items-center justify-center flex-col'>
                                <img src='https://serviceapi.spicezgold.com/download/1744509970781_fash.png' className='w-[60px] transition-all'/>
                                <h3 className='text-[15px] font-[500] mt-3'>Smart Tablet</h3>
                            </div>
                        </SwiperSlide>
                    </Link>
                    <Link to={"/"}>
                        <SwiperSlide>
                            <div className='item py-7 px-3 bg-white text-center rounded-sm flex items-center justify-center flex-col'>
                                <img src='https://serviceapi.spicezgold.com/download/1744509970781_fash.png' className='w-[60px] transition-all'/>
                                <h3 className='text-[15px] font-[500] mt-3'>Smart Tablet</h3>
                            </div>
                        </SwiperSlide>
                    </Link>
                    <Link to={"/"}>
                        <SwiperSlide>
                            <div className='item py-7 px-3 bg-white text-center rounded-sm flex items-center justify-center flex-col'>
                                <img src='https://serviceapi.spicezgold.com/download/1744509970781_fash.png' className='w-[60px] transition-all'/>
                                <h3 className='text-[15px] font-[500] mt-3'>Smart Tablet</h3>
                            </div>
                        </SwiperSlide>
                    </Link>
                    <Link to={"/"}>
                        <SwiperSlide>
                            <div className='item py-7 px-3 bg-white text-center rounded-sm flex items-center justify-center flex-col'>
                                <img src='https://serviceapi.spicezgold.com/download/1744509970781_fash.png' className='w-[60px] transition-all'/>
                                <h3 className='text-[15px] font-[500] mt-3'>Smart Tablet</h3>
                            </div>
                        </SwiperSlide>
                    </Link>
                    <Link to={"/"}>
                        <SwiperSlide>
                            <div className='item py-7 px-3 bg-white text-center rounded-sm flex items-center justify-center flex-col'>
                                <img src='https://serviceapi.spicezgold.com/download/1744509970781_fash.png' className='w-[60px] transition-all'/>
                                <h3 className='text-[15px] font-[500] mt-3'>Smart Tablet</h3>
                            </div>
                        </SwiperSlide>
                    </Link>
                    <Link to={"/"}>
                        <SwiperSlide>
                            <div className='item py-7 px-3 bg-white text-center rounded-sm flex items-center justify-center flex-col'>
                                <img src='https://serviceapi.spicezgold.com/download/1744509970781_fash.png' className='w-[60px] transition-all'/>
                                <h3 className='text-[15px] font-[500] mt-3'>Smart Tablet</h3>
                            </div>
                        </SwiperSlide>
                    </Link>
                    <Link to={"/"}>
                        <SwiperSlide>
                            <div className='item py-7 px-3 bg-white text-center rounded-sm flex items-center justify-center flex-col'>
                                <img src='https://serviceapi.spicezgold.com/download/1744509970781_fash.png' className='w-[60px] transition-all'/>
                                <h3 className='text-[15px] font-[500] mt-3'>Smart Tablet</h3>
                            </div>
                        </SwiperSlide>
                    </Link>
                    <Link to={"/"}>
                        <SwiperSlide>
                            <div className='item py-7 px-3 bg-white text-center rounded-sm flex items-center justify-center flex-col'>
                                <img src='https://serviceapi.spicezgold.com/download/1744509970781_fash.png' className='w-[60px] transition-all'/>
                                <h3 className='text-[15px] font-[500] mt-3'>Smart Tablet</h3>
                            </div>
                        </SwiperSlide>
                    </Link>
                </Swiper>
            </div>
        </div>
    )
}

export default HomeCatSlider;
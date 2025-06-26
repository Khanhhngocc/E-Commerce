import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Autoplay, Pagination } from 'swiper/modules';
import Button from '@mui/material/Button';

const HomeBannerV2 = () => {
    return(
        <>
            <Swiper 
                loop={true}
                spaceBetween={30}
                effect={'fade'}
                navigation={true} 
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Autoplay, Pagination, Navigation]} 
                className="homeSliderV2"
            >
                <SwiperSlide>
                    <div className='item w-full rounded-md overflow-hidden relative'>
                        <img src='https://serviceapi.spicezgold.com/download/1742439896581_1737036773579_sample-1.jpg' />

                        <div className='info absolute p-8 top-0 -right-[100%] opacity-0 transition-all duration-700
                        w-[50%] h-[100%] z-100 flex items-center justify-center flex-col'>
                            <h4 className='text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0'>
                                {/* sao phải có relative vào? */}
                                Big Saving Days Sale
                            </h4>
                            <h2 className='text-[35px] font-[700] w-full text-left relative -right-[100%] opacity-0'>
                                {/* sao phải -right- mà không phải right- */}
                                Women Solid Round Green T-Shirt
                            </h2>
                            <h3 className='text-[18px] font-[500] w-full flex items-center text-left gap-3 my-3 relative -right-[100%] opacity-0'>
                                Starting At Only{" "}
                                <span className='text-primary text-[30px] font-[700]'>$99.00</span>
                            </h3>

                            <div className='w-full relative -right-[100%] opacity-0 btn_'>
                                <Button className='btn-org'>SHOP NOW</Button>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item w-full rounded-md overflow-hidden relative'>
                        <img src='https://serviceapi.spicezgold.com/download/1742441193376_1737037654953_New_Project_45.jpg'/>

                        <div className='info absolute p-8 top-0 -right-[100%] opacity-0 transition-all duration-700
                        w-[50%] h-[100%] z-100 flex items-center justify-center flex-col'>
                            <h4 className='text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0'>
                                {/* sao phải có relative vào? */}
                                Big Saving Days Sale
                            </h4>
                            <h2 className='text-[35px] font-[700] w-full text-left relative -right-[100%] opacity-0'>
                                {/* sao phải -right- mà không phải right- */}
                                Apple iPhone 13 128 GB, Pink
                            </h2>
                            <h3 className='text-[18px] font-[500] w-full flex items-center text-left gap-3 my-3 relative -right-[100%] opacity-0'>
                                Starting At Only{" "}
                                <span className='text-primary text-[30px] font-[700]'>$99.00</span>
                            </h3>

                            <div className='w-full relative -right-[100%] opacity-0 btn_'>
                                <Button className='btn-org'>SHOP NOW</Button>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default HomeBannerV2;
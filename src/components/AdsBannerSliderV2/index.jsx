import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import BannerBox from '../BannerBox';

const AdsBannerSlider = (props) => {
    return(
        <div className='py-4 w-full'>
            <Swiper 
                slidesPerView={props.item}
                spaceBetween={10}
                navigation={true} 
                modules={[Navigation]} 
                className="smlBtn !py-4"
            >
                <SwiperSlide>
                    <BannerBox img={"https://serviceapi.spicezgold.com/download/1741669012402_banner1.webp"} link={""}/>
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox img={"https://serviceapi.spicezgold.com/download/1741669012402_banner1.webp"} link={""}/>
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox img={"https://serviceapi.spicezgold.com/download/1741669012402_banner1.webp"} link={""}/>
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox img={"https://serviceapi.spicezgold.com/download/1741669012402_banner1.webp"} link={""}/>
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox img={"https://serviceapi.spicezgold.com/download/1741669012402_banner1.webp"} link={""}/>
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox img={"https://serviceapi.spicezgold.com/download/1741669012402_banner1.webp"} link={""}/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default AdsBannerSlider;
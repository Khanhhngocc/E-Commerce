import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

const HomeSlider = () => {
    return (
        <div className='homeSlider py-4'>
            <div className='container'>
                <Swiper 
                    loop={true}
                    spaceBetween={20}
                    navigation={true} 
                    modules={[Autoplay, Navigation]} 
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="sliderHome"
                >
                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            {/* overflow-hidden: tránh việc tràn ra của img để áp được rounded-20px đúng không? */}
                            <img 
                                src='https://serviceapi.spicezgold.com/download/1741660881858_NewProject(11).jpg' 
                                alt='Banner slide'
                                className='w-full'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img 
                                src='https://serviceapi.spicezgold.com/download/1741660862304_NewProject(8).jpg' 
                                alt='Banner slide'
                                className='w-full'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img 
                                src='https://serviceapi.spicezgold.com/download/1745503990603_NewProject(13).jpg' 
                                alt='Banner slide'
                                className='w-full'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img 
                                src='https://serviceapi.spicezgold.com/download/1741660881858_NewProject(11).jpg' 
                                alt='Banner slide'
                                className='w-full'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img 
                                src='https://serviceapi.spicezgold.com/download/1741660881858_NewProject(11).jpg' 
                                alt='Banner slide'
                                className='w-full'
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default HomeSlider;
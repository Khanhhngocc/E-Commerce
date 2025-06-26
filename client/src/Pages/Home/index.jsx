import React from 'react';
import HomeSlider from '../../components/HomeSlider';
import HomeCatSlider from '../../components/HomeCatSlider';
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from '../../components/AdsBannerSlider';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductsSlider from '../../components/ProductsSlider';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

import BlogItem from '../../components/BlogItem';
import BannerBoxV2 from '../../components/BannerBoxV2';
import HomeBannerV2 from '../../components/HomeSliderV2';

const Home = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return(
        <>
            <HomeSlider />
            <HomeCatSlider />


            <section className='bg-white py-8'>
                <div className='container'>
                    <div className='flex items-center justify-between'>
                        <div className="leftSec">
                            <h2 className='text-[20px] font-[600]'>Popular Products</h2>
                            <p className='text-[14px] font-[400]'>Do not miss the current offers until the end of March.</p>
                        </div>


                        <div className="rightSec w-[65%]">
                            <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                            >
                                <Tab label="fashion" />
                                <Tab label="electronics" />
                                <Tab label="bags" />
                                <Tab label="footwear" />
                                <Tab label="groceries" />
                                <Tab label="beauty" />
                                <Tab label="wellness" />
                                <Tab label="jewellery" />
                            </Tabs>
                        </div>
                    </div>

                    <ProductsSlider item={6} />
                </div>
            </section>


            <section className='bg-white py-6'>
                <div className='container flex gap-5'>
                    <div className='part1 w-[70%]'>
                        <HomeBannerV2 />
                    </div>

                    <div className='part2 w-[30%] flex items-center justify-center flex-col gap-5'>
                        <BannerBoxV2 image={"https://serviceapi.spicezgold.com/download/1741664496923_1737020250515_New_Project_47.jpg"} info="left"/>
                        <BannerBoxV2 image={"https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg"} info="right"/>
                    </div>
                </div>
            </section>


            <section className='py-5 pt-2 bg-white'>
                <div className='container'>
                    <div className='freeShipping w-[80%] m-auto py-4 p-4 border-2 border-primary flex items-center justify-between rounded-md'>
                        <div className='col1 flex items-center gap-4'>
                            <LiaShippingFastSolid className='text-[50px]'/>
                            <span className='text-[20px] font-[600]'>Free Shipping</span>
                        </div>
                        <div className='col2 '>
                            <p className='mb-0 font-[500]'>Free Delivery Now On Your First Order and over $200</p>
                        </div>
                        <p className='font-bold text-[25px]'>- Only $200*</p>
                    </div>

                    <AdsBannerSlider item={4}/>
                </div>
            </section>

            <section className='py-5 pt-0 bg-white'>
                <div className="container">
                    <h2 className='text-[20px] font-[600]'>Lates Products</h2>
                    <ProductsSlider item={6} />

                    <AdsBannerSlider item={3}/>
                </div>
            </section>

            <section className='py-5 pt-0 bg-white'>
                <div className="container">
                    <h2 className='text-[20px] font-[600]'>Featured Products</h2>
                    <ProductsSlider item={6} />

                    <AdsBannerSlider item={3}/>
                </div>
            </section>


            <section className='py-5 pb-8 pt-0 bg-white blogSection'>
                <div className="container">
                    <h2 className='text-[20px] font-[600] mb-4'>From The Blog</h2>
                    <Swiper 
                        slidesPerView={4}
                        spaceBetween={30}
                        navigation={true} 
                        modules={[Navigation]} 
                        className="blogSlider"
                    >
                        <SwiperSlide>
                            <BlogItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            
        </>

    )
}

export default Home;
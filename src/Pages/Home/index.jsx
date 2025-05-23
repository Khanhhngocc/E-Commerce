import React from 'react';
import HomeSlider from '../../components/HomeSlider';
import HomeCatSlider from '../../components/HomeCatSlider';
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from '../../components/AdsBannerSlider';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductsSlider from '../../components/ProductsSlider';

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


            <section className='py-16 bg-white'>
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

        </>

    )
}

export default Home;
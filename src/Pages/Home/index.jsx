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


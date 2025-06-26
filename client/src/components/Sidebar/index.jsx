import React, { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Collapse} from 'react-collapse';
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import Button from '@mui/material/Button';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Rating from '@mui/material/Rating';

import './style.css';

export const Sidebar = () => {

    const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);

    return (
        <aside className='sidebar py-5'>
            <div className='box'>
                <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center pr-5'>
                    Shop by Category
                    <Button 
                    className='!w-[30px] !h[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]'
                    onClick={()=>setIsOpenCategoryFilter(!isOpenCategoryFilter)}>
                        {
                            isOpenCategoryFilter === true ? <FaAngleUp /> : <FaAngleDown />
                        }
                    </Button>
                    
                </h3>
                <Collapse isOpened={isOpenCategoryFilter}>
                    <div className='scroll px-4 relative -left-[13px]'>
                        <FormControlLabel control={<Checkbox size="small"/>} label="Fashion" className='w-full'/>
                        <FormControlLabel control={<Checkbox size="small"/>} label="Electronics" className='w-full'  />
                        <FormControlLabel control={<Checkbox size="small"/>} label="Bags" className='w-full'/>
                        <FormControlLabel control={<Checkbox size="small"/>} label="Footwear" className='w-full'/>
                        <FormControlLabel control={<Checkbox size="small"/>} label="Groceries" className='w-full'/>
                        <FormControlLabel control={<Checkbox size="small"/>} label="Beauty" className='w-full'/>
                        <FormControlLabel control={<Checkbox size="small"/>} label="Wellness" className='w-full'/>
                        <FormControlLabel control={<Checkbox size="small"/>} label="Jewellery" className='w-full'/>
                    </div>
                </Collapse>
            </div>

            <div className='box mt-4'>
                <h3 className='w-full mb-3 text-[16px] font-[600]'>
                    Filter By Price
                </h3>

                <RangeSlider />
                <div className='flex py-4 priceRange'>
                    <span className='text-[13px]'>
                        From: <strong className='text-black'>Rs: {100}</strong>
                    </span>
                    <span className='ml-auto text-[13px]'>
                        From: <strong className='text-black'>Rs: {5000}</strong>
                    </span>
                </div>

            </div>

            <div className='box mt-4'>
                <h3 className='w-full text-[16px] font-[600] mb-3'>
                    Filter By Rating
                </h3>

                <div className="w-full">
                    <Rating name="size-small" defaultValue={5} size="small" readOnly/>
                </div>
                <div className="w-full">
                    <Rating name="size-small" defaultValue={4} size="small" readOnly/>
                </div>
                <div className="w-full">
                    <Rating name="size-small" defaultValue={3} size="small" readOnly/>
                </div>
                <div className="w-full">
                    <Rating name="size-small" defaultValue={2} size="small" readOnly/>
                </div>
                <div className="w-full">
                    <Rating name="size-small" defaultValue={1} size="small" readOnly/>
                </div>
            </div>
            
        </aside>
    )
}
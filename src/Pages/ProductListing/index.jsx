import React, { useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import ProductItem from '../../components/ProductItem'
import Button from '@mui/material/Button';
import { IoGridSharp } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ProductItemListView from '../../components/ProductItemListView';
import Pagination from '@mui/material/Pagination';



const ProductListing = () => {

    const [itemView, setItemView] = useState('grid');

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <section className='bg-white py-5'>
            <div className='container flex gap-3'>
                <div className='sidebarWrapper w-[20%] h-full bg-white'>
                    <Sidebar />
                </div>

                <div className='rightContent w-[80%] py-3'>

                    <div className='bg-[#f1f1f1] p-2 w-full mb-4 rounded-md flex items-center justify-between'>
                        <div className='col1 flex items-center itemViewActions'>
                            <Button 
                                className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black 
                                    ${itemView === 'list' && 'active'}`}
                                onClick={() => setItemView("list")}
                            >
                                <LuMenu />
                            </Button>
                            <Button 
                                className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black
                                    ${itemView === 'grid' && 'active'}`}
                                onClick={() => setItemView("grid")}
                            >
                                <IoGridSharp />
                            </Button>

                            <span className='text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)'>There are 27 products</span>
                        </div>

                        <div className='col2 ml-auto flex items-center justify-end gap-3 pr-4'>
                            <span className='text-[14px] font-[500] text-[rgba(0,0,0,0.7)]'>
                                Sort By
                            </span>
                            
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                className='!bg-white !text-[12px] !text-black !capitalize !border-2 !border-black'
                            >
                                Name, A to Z
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose} className='!text-[13px] !text-black !capitalize'>Name, A to Z</MenuItem>
                                <MenuItem onClick={handleClose} className='!text-[13px] !text-black !capitalize'>Name, Z to A</MenuItem>
                                <MenuItem onClick={handleClose} className='!text-[13px] !text-black !capitalize'>Price, low to high</MenuItem>
                                <MenuItem onClick={handleClose} className='!text-[13px] !text-black !capitalize'>Price, high to low</MenuItem>
                                <MenuItem onClick={handleClose} className='!text-[13px] !text-black !capitalize'>Sales, hightest to lowest</MenuItem>
                                <MenuItem onClick={handleClose} className='!text-[13px] !text-black !capitalize'>Relevance</MenuItem>
                            </Menu>
                        </div>
                        
                    </div>

                    <div className={`grid ${itemView === 'grid' ? 'grid-cols-4 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-1'} gap-4`}>
                        {
                            itemView === 'grid' ? 
                            (
                                <>
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                </>

                            ) : (
                                <>
                                    <ProductItemListView />
                                    <ProductItemListView />
                                    <ProductItemListView />
                                    <ProductItemListView />
                                    <ProductItemListView />
                                    <ProductItemListView />
                                </>
                            )        
                        }
                        
                    </div>

                    <div className='flex items-center justify-center mt-10'>
                        <Pagination count={10} showFirstButton showLastButton />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductListing;
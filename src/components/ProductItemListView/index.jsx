import React, { useContext } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { MdZoomOutMap } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { MyContext } from '../../App';



const ProductItemListView = () => {
    const context = useContext(MyContext)

    return (
        <div className='productItem shadow-lg rounded-md overflow-hidden 
            border-1 border-[rgba(0,0,0,0.1)] flex items-center'
        >
            <div className="group imgWrapper w-[25%] overflow-hidden rounded-md relative">
                <Link to={"/"}>
                    <div className="img h-[220px] overflow-hidden">
                        <img 
                            src='https://serviceapi.spicezgold.com/download/1742462552739_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-0-202308161432.webp' 
                            className='w-full' 
                        />
                        <img 
                            src='https://serviceapi.spicezgold.com/download/1742462552741_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-3-202308161432.webp' 
                            className='w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105' 
                        />
                    </div>
                </Link>
                <span className='discount flex items-center justify-center absolute top-[10px] left-[10px] z-1000 p-1 bg-primary text-white
                rounded-lg text-[12px] font-[500]'>10%</span>

                <div className="actions absolute top-[-200px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100 right-[5px] w-[50px] z-100 flex items-center gap-2 flex-col">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary group'
                    onClick={() => context.setOpenProductDetailsModal(true)}>
                    <   MdZoomOutMap className='text-[18px] !text-black hover:!text-white'/>
                    </Button>
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary group'>
                    <   IoGitCompareOutline className='text-[18px] !text-black hover:!text-white'/>
                    </Button>
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary group'>
                    <   FaRegHeart className='text-[18px] !text-black hover:!text-white'/>
                    </Button>
                </div>
            </div>

            <div className="info p-3 py-5 px-8 w-[75%]">
                <h6 className='text-[15px] !font-[400]'>
                    <Link to={"/"} className='link transition-all'>Soylent Green</Link>
                </h6>
                <h3 className='text-[18px] title my-3 font-[500] mb-1 text-[#000]'>
                    <Link to={"/"} className='link transition-all'> 
                        Embroidered Satin Saree what the hell
                    </Link>
                </h3>

                <p className='text-[14px] mb-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                <Rating name="size-small" defaultValue={4} size="small" readOnly/>

                <div className="flex items-center gap-4">
                    <span className='oldPice line-through text-gray-500 text-[15px] font-[400]'>$58</span>
                    <span className='price text-primary text-[15px] font-[600]'>$58</span>
                </div>

                <div className='mt-3'>
                    <Button className='btn-org flex items-center gap-2'>
                        <MdShoppingCart className='text-[20px]'/>Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductItemListView;
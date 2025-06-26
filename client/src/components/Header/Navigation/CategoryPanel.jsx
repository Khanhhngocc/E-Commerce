import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { FaRegSquarePlus } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { FiMinusSquare } from "react-icons/fi";


import "../Navigation/style.css"
import { Link } from 'react-router-dom';



const CategoryPanel = (props) => {
    const [submenuIndex, setSubmenuIndex] = useState(null);
    const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

    const openSubmenu = (index) => {
        if(submenuIndex === index) {
            setSubmenuIndex(null);
        } else {
            setSubmenuIndex(index);
        }
    }
    const openInnerSubmenu = (index) => {
        if(innerSubmenuIndex === index){
            setInnerSubmenuIndex(null);
        } else {
            setInnerSubmenuIndex(index);
        }
    }
    
    // Tại sao lại phải thêm hàm toggle, nếu không có tại sao nó lại trở thành vòng lặp vĩnh viễn?
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" className='categoryPanel'>
        <h3 className='p-3 text-[16px] font-[500] flex items-center justify-between'>
            Shop By Categories{" "}
            {/* {" "} là gì? có tác dụng là gì */}
            <IoCloseSharp onClick={() => props.openCategoryPanel(false)} className='cursor-pointer text-[20px]'/>
        </h3>

        <div className='scroll'>
            <ul className='w-full'>
                <li className='list-none flex items-center flex-col relative'>
                    <Link to={"/"} className='w-full'>
                        <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                            Fashion
                        </Button>
                    </Link>
                    {submenuIndex === 0 ? (
                        <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer'onClick={() => openSubmenu(0)}/>
                    ) : (
                        <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer'onClick={() => openSubmenu(0)}/>          
                    )}

                    {submenuIndex === 0 && (
                        <ul className='submenu w-full pl-3'>
                            <li className='list-none relative'>
                                <Link to={"/"} className='w-full'>
                                    <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>Apparel</Button>
                                </Link>
                                {innerSubmenuIndex === 0 ? (
                                    <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer'onClick={() => openInnerSubmenu(0)}/>
                                ) : (
                                    <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer'onClick={() => openInnerSubmenu(0)}/>          
                                )}

                                {innerSubmenuIndex === 0 && (
                                    <ul className='inner_submenu w-full pl-3'>
                                        <li className='list-none relative'>
                                            <Link to={"/"} className='w-full'>
                                                <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>Apparel</Button>
                                            </Link>
                                        </li>
                                        <li className='list-none relative'>
                                            <Link to={"/"} className='w-full'>
                                                <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>Apparel</Button>
                                            </Link>
                                        </li>
                                        <li className='list-none relative'>
                                            <Link to={"/"} className='w-full'>
                                                <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>Apparel</Button>
                                            </Link>
                                        </li>
                                        <li className='list-none relative'>
                                            <Link to={"/"} className='w-full'>
                                                <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>Apparel</Button>
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    )}
                </li>

                <li className='list-none flex items-center flex-col relative'>
                    <Link to={"/"} className='w-full'>
                        <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                            Fashion
                        </Button>
                    </Link>
                    {submenuIndex === 1 ? (
                        <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer'onClick={() => openSubmenu(1)}/>
                    ) : (
                        <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer'onClick={() => openSubmenu(1)}/>          
                    )}

                    {submenuIndex === 1 && (
                        <ul className='submenu w-full pl-3'>
                            <li className='list-none relative'>
                                <Link to={"/"} className='w-full'>
                                    <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>Apparel</Button>
                                </Link>
                                {innerSubmenuIndex === 1 ? (
                                    <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer'onClick={() => openInnerSubmenu(1)}/>
                                ) : (
                                    <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer'onClick={() => openInnerSubmenu(1)}/>          
                                )}

                                {innerSubmenuIndex === 1 && (
                                    <ul className='inner_submenu w-full pl-3'>
                                        <li className='list-none relative'>
                                            <Link to={"/"} className='w-full'>
                                                <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>Apparel</Button>
                                            </Link>
                                        </li>
                                        <li className='list-none relative'>
                                            <Link to={"/"} className='w-full'>
                                                <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>Apparel</Button>
                                            </Link>
                                        </li>
                                        <li className='list-none relative'>
                                            <Link to={"/"} className='w-full'>
                                                <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>Apparel</Button>
                                            </Link>
                                        </li>
                                        <li className='list-none relative'>
                                            <Link to={"/"} className='w-full'>
                                                <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>Apparel</Button>
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
        </Box>
    );
    
    return(
        <>
            <Drawer open={props.isOpenCatPanel} onClose={() => {props.openCategoryPanel(false)}}>
                {DrawerList}
            </Drawer>
        </>
    )
}

export default CategoryPanel;
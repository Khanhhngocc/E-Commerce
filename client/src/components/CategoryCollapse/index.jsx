import React, {useState} from 'react';
import Button from '@mui/material/Button';
import { FaRegSquarePlus } from "react-icons/fa6";
import { FiMinusSquare } from "react-icons/fi";


import "../Navigation/style.css"
import { Link } from 'react-router-dom';


const CategoryCollapse = () => {
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

    return(
        <>
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
                </ul>
            </div>
        </>
    )
}

export default CategoryCollapse;
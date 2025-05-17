import React, { useState } from 'react'
import { Button } from '@mui/material'
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { GoRocket } from "react-icons/go";
import { Link } from 'react-router-dom';
import CategoryPanel from './CategoryPanel';


const Navigation = () => {
    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

    const openCategoryPanel = (newOpen) => {
        setIsOpenCatPanel(newOpen);
    }
    return (
        <>
            <nav className='py-2'>
                <div className='container flex items-center justify-end'>
                    <div className='col-1 w-[20%]'>
                        <Button className='!text-black gap-2 w-full' onClick={() => openCategoryPanel(true)}>
                            <RiMenu2Fill className='text-[18px] !font-[500]' /> 
                            Shop By Categories
                            <LiaAngleDownSolid className='text-[13px] ml-auto font-bold cursor-pointer'/>
                            {/* Tại sao khi không để ml-auto thì Button lại ở giữa mà khi để ml auto thì LiaAngleDown lại đẩy về phía bên phải như ý muốn */}
                        </Button>
                    </div>
                    <div className='col-2 w-[60%] nav'>
                        <ul className='flex items-center gap-3'>
                            <li className='list-none'>
                                <Link to={"/"} className='link transition text-[14px] font-[500]'>
                                    {/* Tại sao lại dùng font-[500] ở cả Link và Button, chẳng phải chỉ có Button có text thôi sao, sao không chỉ dùng ở Button */}
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Home</Button>
                                </Link>
                            </li>
                            <li className='list-none relative'>
                                {/* Tại sao font-weight lại không áp dụng được cho những thẻ này? */}
                                <Link to={"/"} className='link transition text-[14px] !font-[500]'>
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Fashion</Button>
                                </Link>

                                <div className='submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all'>
                                    {/* Tại sao phải để top-[120%] + opacity = 0 khi mà bên style khi đổi về opacity = 1 lại đặt top-[100%] có phải để top-[120%] ban đầu có phải thừa không, hay 
                                    nò dùng để kếp hợp với transition-all? */}
                                    <ul>
                                        <li className='list-none w-full relative'>
                                            <Link to={"/"} className='w-full'>
                                            {/* Sao phải kết hợp text-left và justify-startt không phải là cả 2 cái này đều cùng 1 tác dụng là để đoạn text 
                                            sang trái sao và trong thẻ này cũng chỉ có đoạn text chứ không thêm phần tử khác, đặt cả 2 như vậy có thừa không? */}
                                                <Button className='!text-[rgba(0,0,0,.8)] w-full !text-left !justify-start !rounded-none'>Men</Button>
                                                <div className='submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all'>
                                                    <ul>
                                                        <li className='list-none w-full relative'>
                                                            <Link to={"/"} className='w-full'>
                                                                <Button className='!text-[rgba(0,0,0,.8)] w-full !text-left !justify-start !rounded-none'>T-shirt</Button>
                                                            </Link>
                                                        </li>
                                                        <li className='list-none w-full'>
                                                            <Link to={"/"} className='w-full'>
                                                                <Button className='!text-[rgba(0,0,0,.8)] w-full text-left !justify-start !rounded-none'>Jeans</Button>
                                                            </Link>
                                                        </li>
                                                        <li className='list-none w-full'>
                                                            <Link to={"/"} className='w-full'>
                                                                <Button className='!text-[rgba(0,0,0,.8)] w-full text-left !justify-start !rounded-none'>Footwear</Button>
                                                            </Link>
                                                        </li>
                                                        <li className='list-none w-full'>
                                                            <Link to={"/"} className='w-full'>
                                                                <Button className='!text-[rgba(0,0,0,.8)] w-full text-left !justify-start !rounded-none'>Watch</Button>
                                                            </Link>
                                                        </li>
                                                        <li className='list-none w-full'>
                                                            <Link to={"/"} className='w-full'>
                                                                <Button className='!text-[rgba(0,0,0,.8)] w-full text-left !justify-start !rounded-none'>Pents</Button>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Link>


                                        </li>
                                        <li className='list-none w-full'>
                                            <Link to={"/"} className='w-full'>
                                                <Button className='!text-[rgba(0,0,0,.8)] w-full text-left !justify-start !rounded-none'>Women</Button>
                                            </Link>
                                        </li>
                                        <li className='list-none w-full'>
                                            <Link to={"/"} className='w-full'>
                                                <Button className='!text-[rgba(0,0,0,.8)] w-full text-left !justify-start !rounded-none'>Kids</Button>
                                            </Link>
                                        </li>
                                        <li className='list-none w-full'>
                                            <Link to={"/"} className='w-full'>
                                                <Button className='!text-[rgba(0,0,0,.8)] w-full text-left !justify-start !rounded-none'>Girls</Button>
                                            </Link>
                                        </li>
                                        <li className='list-none w-full'>
                                            <Link to={"/"} className='w-full'>
                                                <Button className='!text-[rgba(0,0,0,.8)] w-full text-left !justify-start !rounded-none'>Boys</Button>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='list-none'>
                                <Link to={"/"} className='link transition text-[14px] font-[500]'>
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Electronics</Button>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link to={"/"} className='link transition text-[14px] font-[500]'>
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Bags</Button>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link to={"/"} className='link transition text-[14px] font-[500]'>
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Footwear</Button>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link to={"/"} className='link transition text-[14px] font-[500]'>
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Groceries</Button>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link to={"/"} className='link transition text-[14px] font-[500]'>
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Beauty</Button>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link to={"/"} className='link transition text-[14px] font-[500]'>
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Wellness</Button>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link to={"/"} className='link transition text-[14px] font-[500]'>
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Jewellery</Button>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='col-3 w-[20%]'>
                        <p className='text-[14px] font-[500] flex items-center justify-end gap-3 mb-0 mt-0'>
                            <GoRocket className='18px'/>
                            Free International Delivery
                        </p>
                    </div>
                </div>
            </nav>

            <CategoryPanel openCategoryPanel={openCategoryPanel} isOpenCatPanel={isOpenCatPanel}/>
        </>
    )
}

export default Navigation;
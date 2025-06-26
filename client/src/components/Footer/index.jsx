import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { BiSupport } from "react-icons/bi";
import { PiKeyReturnLight } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LiaGiftSolid } from "react-icons/lia";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Footer = () => {
    return (
        <>
            <footer>
                <div className="pt-6 bg-[#fafafa]">
                    <div className="container">
                        <div className="flex items-center justify-center gap-2 py-8 pb-8">
                            <div className='col flex flex-col items-center justify-center w-[15%] group'>
                                <LiaShippingFastSolid className='text-[40px] transition-all duration-300 group-hover:text-primary
                                group-hover:-translate-y-1'/>
                                <h3 className='text-[16px] font-[600] mt-3'>Free Shipping</h3>
                                <p className='text-[13px] font-[500]'>For all Orders Over $100</p>
                            </div>

                            <div className='col flex flex-col items-center justify-center w-[15%] group'>
                                <PiKeyReturnLight className='text-[40px] transition-all duration-300 group-hover:text-primary
                                group-hover:-translate-y-1'/>
                                <h3 className='text-[16px] font-[600] mt-3'>30 Days Returns</h3>
                                <p className='text-[13px] font-[500]'>For an Exchange Product</p>
                            </div>

                            <div className='col flex flex-col items-center justify-center w-[15%] group'>
                                <BsWallet2 className='text-[40px] transition-all duration-300 group-hover:text-primary
                                group-hover:-translate-y-1' />
                                <h3 className='text-[16px] font-[600] mt-3'>Secured Payment</h3>
                                <p className='text-[13px] font-[500]'>Payment Cards Accepted</p>
                            </div>

                            <div className='col flex flex-col items-center justify-center w-[15%] group'>
                                <LiaGiftSolid className='text-[40px] transition-all duration-300 group-hover:text-primary
                                group-hover:-translate-y-1' />
                                <h3 className='text-[16px] font-[600] mt-3'>Special Gifts</h3>
                                <p className='text-[13px] font-[500]'>Our First Product Order</p>
                            </div>

                            <div className='col flex flex-col items-center justify-center w-[15%] group'>
                                <BiSupport className='text-[40px] transition-all duration-300 group-hover:text-primary
                                group-hover:-translate-y-1'/>
                                <h3 className='text-[16px] font-[600] mt-3'>Support 24/7</h3>
                                <p className='text-[13px] font-[500]'>Contact us Anytime</p>
                            </div>

                        </div>
                        <br />
                        <hr />

                        <div className='footer flex py-8'>
                            <div className="part1 w-[25%] border-r border-[rgba(0,0,0,0.1)]">
                                <h2 className=' text-[18px] font-[600]'>Contact us</h2>
                                <p className='text-[14px] py-6'>
                                    Classyshop - Mega Super Store
                                    <br />
                                    507-Union Trade Centre France
                                </p>
                                <Link className='text-[13px] link transition' to={"mailto:someone@example.com"}>
                                    sales@yourcompany.com
                                </Link>
                                <p className='text-primary text-[20px] font-[600] py-5'>(+91) 9876-543-210</p>
                                <div className="flex gap-2">
                                    <BiSupport className='text-[40px]'/>
                                    <p className='text-[16px] font-[500]'>
                                        Online Chat 
                                        <br />
                                        Get Expert Help
                                    </p>
                                </div>
                            </div>

                            <div className="part2 w-[40%] flex pl-8">
                                <div className="part2_col1 w-[50%]">
                                    <h2 className='text-[18px] font-[600] mb-4'>Products</h2>
                                    <ul className='flex flex-col gap-2'>
                                        <li className="list-none w-full"><Link className='link transition text-[14px]'>Prices drop</Link></li>
                                        <li className="list-none w-full"><Link className='link transition text-[14px]'>New products</Link></li>
                                        <li className="list-none w-full"><Link className='link transition text-[14px]'>Best sales</Link></li>
                                        <li className="list-none w-full"><Link className='link transition text-[14px]'>Contact us</Link></li>
                                        <li className="list-none w-full"><Link className='link transition text-[14px]'>Sitemap</Link></li>
                                        <li className="list-none w-full"><Link className='link transition text-[14px]'>Stores</Link></li>
                                    </ul>
                                </div>
                                <div className="part2_col2 w-[50%]">
                                    <h2 className='text-[18px] font-[600] mb-4'>Our company</h2>
                                    <ul className="flex flex-col gap-2">
                                        <li className="list-none w-full"><Link className='link transition text-[14px]'>Delivery</Link></li>
                                        <li className="list-none w-full"><Link className='link transition text-[14px]'>Legal Notice</Link></li>
                                        <li className="list-none w-full"><Link className='link transition text-[14px]'>Terms and conditions of use</Link></li>
                                        <li className="list-none w-full"><Link className='link transition text-[14px]'>About us</Link></li>
                                        <li className="list-none w-full"><Link className='link transition text-[14px]'>Secure payment</Link></li>
                                        <li className="list-none w-full"><Link className='link transition text-[14px]'>Login</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="part3 w-[35%] px-8 flex-col">
                                <h2 className='text-[18px] font-[600] mb-4'>Subscribe to newsletter</h2>
                                <p className='text-[13px]'>Subscribe to our latest newsletter to get news about special discounts.</p>
                                <form className='mt-5'>
                                    <input type='email' className='w-full h-[45px] border outline-none px-4 rounded-sm mb-4 focus:border-[rgba(0,0,0,0.3)]' placeholder='Your Email Address' />
                                </form>
                                <Button className='btn-org'>SUBSCRIBE</Button>
                                <FormControlLabel control={<Checkbox />} label="I agree to the terms and conditions and the privacy policy" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="bottomStrip border-t border-[rgba(0,0,0,0.1)] py-3 bg-white">
                <div className="container flex items-center justify-between">
                    <ul className='flex items-center gap-2'>
                        <li className='list-none'>
                            <Link
                                to={"/"}
                                target='_blank'
                                className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex
                                items-center justify-center group hover:bg-primary transition-all'
                            >
                                <FaFacebookF className=' text-[15px] group-hover:text-white'/>
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link
                                to={"/"}
                                target='_blank'
                                className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex
                                items-center justify-center group hover:bg-primary transition-all'
                            >
                                <AiOutlineYoutube className='text-[15px] group-hover:text-white' /> 
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link
                                to={"/"}
                                target='_blank'
                                className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex
                                items-center justify-center group hover:bg-primary transition-all'
                            >
                                <FaPinterestP className='text-[15px] group-hover:text-white' />
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link
                                to={"/"}
                                target='_blank'
                                className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex
                                items-center justify-center group hover:bg-primary transition-all'
                            >
                                <FaInstagram className='text-[15px] group-hover:text-white' />
                            </Link>
                        </li>
                    </ul>

                    <p className='text-[13px] text-center mb-0'>© 2024 - Ecommerce Template</p>

                    <div className='flex items-center gap-1'>
                        <img src='https://ecommerce-frontend-view.netlify.app/carte_bleue.png' alt='image' />
                        <img src='https://ecommerce-frontend-view.netlify.app/visa.png' alt='image' />
                        <img src='https://ecommerce-frontend-view.netlify.app/master_card.png' alt='image' />
                        <img src='https://ecommerce-frontend-view.netlify.app/american_express.png' alt='image' />
                        <img src='https://ecommerce-frontend-view.netlify.app/paypal.png' alt='image' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoIosGitCompare } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import Navigation from './Navigation';
import { MyContext } from '../../App';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FaRegUser } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";





const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
      padding: '0 4px',
    },
}));


const Header = () => {
    const context = useContext(MyContext);
    
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <header className='bg-[#ffffff]'>
            <div className='top-trip py-2 border-t-[1px] border-b-[1px] border-gray-200'>
                <div className='container'>
                    <div className='flex items-center justify-between'>
                        <div className='col-1 w-[50%]'>
                            <p className='text-[12px] font-[500]'>
                                Get up to 50% off new season styles, limited time only
                            </p>
                        </div>

                        <div className='col-2 flex items-center justify-end'>
                            <ul className='flex items-center gap-3'>
                                <li className='list-none'>
                                    <Link className='text-[13px] font-[500] link transition' to={"/help-center"}>Help-center</Link>
                                </li>
                                <li className='list-none'>
                                    <Link className='text-[13px] font-[500] link transition' to={"/order-tracking"}>Order-tracking</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='header py-4 border-t-[1px] border-b-[1px] border-gray-200'>
                <div className='container flex items-center justify-between'>
                    <div className='col-1 w-[25%]'>
                        <Link to={"/"}><img src='/logo.jpg' /></Link>
                    </div>

                    <div className='col-2 w-[40%]'>
                        <Search />
                    </div>

                    <div className='col-3 w-[35%]'>
                        <ul className='flex items-center justify-end gap-3 w-full'>
                            <li>
                                {context.isLoggedIn === false ? (
                                    <>
                                        <Link className='text-[15px] font-[500] link transition pr-2' to={"/login"}>Login</Link>
                                        |
                                        <Link className='text-[15px] font-[500] link transition pl-1 pr-14' to={"register"}>Register</Link>
                                    </>
                                ) : (
                                    <>
                                        <Button className='myAccountWrap !text-black flex items-center gap-3
                                        ' onClick={handleClick}>
                                            <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-[#f1f1f1]">
                                                <FaRegUser className='text-[17px] text-[rgba(0,0,0,0.7)]'/>
                                            </Button>
                                            <div className="info flex flex-col text-left justify-start capitalize !leading-[1.5]">
                                                <h4 className='text-[14px] mb-0 text-[rgba(0,0,0,0.6)]'>Eren</h4>
                                                <span className='text-[13px] !text-[rgba(0,0,0,0.6)]'>Eren.yeager.rumbling@gmail.com</span>
                                            </div>
                                        </Button>
                                
                                        <Menu
                                            anchorEl={anchorEl}
                                            id="account-menu"
                                            open={open}
                                            onClose={handleClose}
                                            onClick={handleClose}
                                            slotProps={{
                                            paper: {
                                                elevation: 0,
                                                sx: {
                                                overflow: 'visible',
                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                mt: 1.5,
                                                '& .MuiAvatar-root': {
                                                    width: 32,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,
                                                },
                                                '&::before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 14,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: 'background.paper',
                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                    zIndex: 0,
                                                },
                                                },
                                            },
                                            }}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >
                                            <Link to={"/my-account"}>
                                                <MenuItem onClick={handleClose} className='flex items-center gap-2 !py-2'>
                                                    <FaRegUser className='text-[18px]'/> <span className='text-[14px]'>My Account</span> 
                                                </MenuItem>
                                            </Link>

                                            <Link>
                                                <MenuItem onClick={handleClose} className='flex items-center gap-2 !py-2'>
                                                    <FaMapMarkerAlt className='text-[18px]'/> <span className='text-[14px]'>Address</span>
                                                </MenuItem>
                                            </Link>

                                            <Link>
                                                <MenuItem onClick={handleClose} className='flex items-center gap-2 !py-2'>
                                                    <IoMdHeartEmpty className='text-[18px]'/> <span className="text-[14px]">Orders</span>
                                                </MenuItem>
                                            </Link>

                                            <Link>
                                                <MenuItem onClick={handleClose} className='flex items-center gap-2 !py-2'>
                                                    <IoBagCheckOutline className='text-[18px]'/> <span className='text-[14px]'>My List</span>
                                                </MenuItem>
                                            </Link>

                                            <Link>
                                                <MenuItem onClick={handleClose} className='flex items-center gap-2 !py-2'>
                                                    <IoIosLogOut className='text-[18px]'/> <span className='text-[14px]'>Logout</span>
                                                </MenuItem>
                                            </Link>
                                        </Menu>
                                    </>
                                   
                                )}
                            </li>
                            <li>
                                <Tooltip title="Compare">
                                    <IconButton aria-label="Compare">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <IoIosGitCompare />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip title="Wishlish">
                                    <IconButton aria-label="Wishlish">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <IoMdHeartEmpty />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip title="Cart">
                                    <IconButton aria-label="Cart" onClick={context.toggleCartPanel(true)}>
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <HiOutlineShoppingCart />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Navigation />
        </header>
    )
}

export default Header;
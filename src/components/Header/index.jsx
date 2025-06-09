import React, { useContext } from 'react'
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

                    <div className='col-2 w-[45%]'>
                        <Search />
                    </div>

                    <div className='col-3 w-[30%]'>
                        <ul className='flex items-center justify-end gap-3 w-full'>
                            <li>
                                <Link className='text-[15px] font-[500] link transition pr-1' to={"/login"}>Login</Link>
                                |
                                <Link className='text-[15px] font-[500] link transition' to={"register"}>Register</Link>
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
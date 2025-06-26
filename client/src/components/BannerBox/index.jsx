import React from 'react'
import { Link } from 'react-router-dom';

const BannerBox = (props) => {
    return(
        <div className='w-full box bannerBox'>
            <Link to={"/"}>
                <div className=" w-full cardBox cardBox--close">
                    <img src={props.img} className='w-full h-full object-cover rounded-md' alt='banner'/>
                </div>
            </Link>
        </div>

        
    )
}

export default BannerBox;
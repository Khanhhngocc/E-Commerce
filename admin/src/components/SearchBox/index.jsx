import React from 'react';
import { IoSearch } from "react-icons/io5";


const SearchBox = () => {
    return(
        <div className="w-full h-auto relative overflow-hidden">
            <IoSearch className='absolute top-[13px] left-[10px] opacity-50 z-50 pointer-events-none'/>
            <input type="text" className='w-full h-[45px] bg-[#f1f1f1] border border-[rgba(0,0,0,0.1)] rounded-md
            p-2 pl-8 focus:outline-none focus:border-[rgba(0,0,0,0.3)] text-[15px]'
            placeholder='Search here...'/>
        </div>
    )
}

export default SearchBox;
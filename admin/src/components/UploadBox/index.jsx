import React from 'react';
import { FaRegImage } from "react-icons/fa";



const UploadBox = (props) => {
    return(
        <div className="uploadBox p-3 w-full h-[150px] rounded-md border border-dashed 
        border-[rgba(0,0,0,0.3)] overflow-hidden bg-gray-100 hover:bg-gray-200 cursor-pointer 
        flex items-center justify-center flex-col relative">
            <FaRegImage className="text-[40px] opacity-35 pointer-events-none"/>
            <h4 className='text-[14px] pointer-events-none'>Image Upload</h4>

            <input type="file" multiple={props.multiple !== undefined ? props.multiple : false} 
            className='w-full h-full absolute top-0 right-0 z-50 opacity-0'/>

        </div>
    )
}

export default UploadBox;
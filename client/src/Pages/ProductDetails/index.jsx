import React, { useState } from 'react'
import ProductZoom from '../../components/ProductZoom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ProductsSlider from '../../components/ProductsSlider';
import ProductDetailsComponent from '../../components/ProductDetailsComponent';



const ProductDetails = () => {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className='bg-white py-10'>
            <div className="container flex items-center gap-8">
                <div className="productZoomContainer w-[40%]">
                    <ProductZoom />
                </div>

                <div className="productContent w-[60%] px-10">
                    <ProductDetailsComponent />
                </div>
            </div>


            <div className="container pt-10">
                <div className="flex items-center gap-8 mb-5">
                    <span 
                        className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 0 ? 'text-primary' : ''}`}
                        onClick={() => setActiveTab(0)}
                    >
                        Description
                    </span>
                    <span 
                        className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 1 ? 'text-primary' : ''}`}
                        onClick={() => setActiveTab(1)}
                    >
                        Product Details
                    </span>
                    <span 
                        className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 2 ? 'text-primary' : ''}`}
                        onClick={() => setActiveTab(2)}
                    >
                        Reviews (5)
                    </span>
                </div>

                {activeTab === 0 && (
                    <div className="shadow-md w-[80%] py-5 px-8 rounded-md">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <h4>Lightweight Design</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <h4>Free Shipping & Return</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <h4>Money Back Guarantee</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <h4>Online Support</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                )}

                {activeTab === 1 && (
                    <div className="shadow-md w-[80%] py-5 px-8 rounded-md">
                        <div class="relative overflow-x-auto">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Stand Up
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Folded (w/o wheels)
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Folded (w/ wheels)
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Door Pass Through
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td class="px-6 py-4 font-[500]">
                                            35″L x 24″W x 37-45″H(front to back wheel)
                                        </td>
                                        <td class="px-6 py-4 font-[500]">
                                            35″L x 24″W x 37-45″H(front to back wheel)
                                        </td>
                                        <td class="px-6 py-4 font-[500]">
                                            35″L x 24″W x 37-45″H(front to back wheel)
                                        </td>
                                        <td class="px-6 py-4 font-[500]">
                                            35″L x 24″W x 37-45″H(front to back wheel)
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td class="px-6 py-4 font-[500]">
                                            35″L x 24″W x 37-45″H(front to back wheel)
                                        </td>
                                        <td class="px-6 py-4 font-[500]">
                                            35″L x 24″W x 37-45″H(front to back wheel)
                                        </td>
                                        <td class="px-6 py-4 font-[500]">
                                            35″L x 24″W x 37-45″H(front to back wheel)
                                        </td>
                                        <td class="px-6 py-4 font-[500]">
                                            35″L x 24″W x 37-45″H(front to back wheel)
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td class="px-6 py-4 font-[500]">
                                            35″L x 24″W x 37-45″H(front to back wheel)
                                        </td>
                                        <td class="px-6 py-4 font-[500]">
                                            35″L x 24″W x 37-45″H(front to back wheel)
                                        </td>
                                        <td class="px-6 py-4 font-[500]">
                                            35″L x 24″W x 37-45″H(front to back wheel)
                                        </td>
                                        <td class="px-6 py-4 font-[500]">
                                            35″L x 24″W x 37-45″H(front to back wheel)
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )} 

                {activeTab === 2 && (
                    <div className="shadow-md w-[80%] py-5 px-8 rounded-md">
                        <div className='w-full productReviewsContainer'>
                            <h2 className="text-[18px]">Customer questions & answers</h2>

                            <div className="reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-5">
                                <div className="review py-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                                    <div className="info w-[60%] flex items-center gap-3">
                                        <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                                            <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fpublicdomainvectors.org%2Fen%2Ffree-clipart%2FFemale-user-icon-image%2F71148.html&psig=AOvVaw1WViHJBeTdi04MlDuKizVt&ust=1749137944259000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIiWoOGM2I0DFQAAAAAdAAAAABAE' 
                                            className='w-full'/>
                                        </div>

                                        <div className="w-[80%]">
                                            <h4 className='text-[16px]'>Eren Yeager</h4>
                                            <h5 className='text-[13px] mb-0'>2024-06-09</h5>
                                            <p className='my-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem molestiae provident labore error distinctio vel amet non dolorem, suscipit dicta repudiandae nihil quis nam, doloribus sit dolorum tempore totam consequatur.</p>
                                        </div>
                                    </div>
                                    <Rating name="size-small" defaultValue={4} size="small" readOnly/>
                                </div>
                                <div className="review py-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                                    <div className="info w-[60%] flex items-center gap-3">
                                        <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                                            <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fpublicdomainvectors.org%2Fen%2Ffree-clipart%2FFemale-user-icon-image%2F71148.html&psig=AOvVaw1WViHJBeTdi04MlDuKizVt&ust=1749137944259000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIiWoOGM2I0DFQAAAAAdAAAAABAE' 
                                            className='w-full'/>
                                        </div>

                                        <div className="w-[80%]">
                                            <h4 className='text-[16px]'>Eren Yeager</h4>
                                            <h5 className='text-[13px] mb-0'>2024-06-09</h5>
                                            <p className='my-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem molestiae provident labore error distinctio vel amet non dolorem, suscipit dicta repudiandae nihil quis nam, doloribus sit dolorum tempore totam consequatur.</p>
                                        </div>
                                    </div>
                                    <Rating name="size-small" defaultValue={4} size="small" readOnly/>
                                </div>
                            </div>

                            <div className="reviewForm bg-[#fafafa] p-4 rounded-md">
                                <h2 className='text-[18px]'>Add a review</h2>
                                <form className="w-full mt-5">
                                    <TextField
                                    id="outlined-multiline-flexible"
                                    label="Write a review..."
                                    className='w-full'
                                    multiline
                                    rows={5}
                                    />
                                </form>
                                <br></br>
                                <Rating name="size-small" defaultValue={4} size="small"/>

                                <div className="flex items-center mt-5">
                                    <Button className='btn-org'>Submit Review</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div> 

            <div className="container pt-10">
                <h2 className="text-[20px] font-[600] pb-0">Related Products</h2>
                <ProductsSlider item={6}/>
            </div>
        </section>
    )
}

export default ProductDetails;
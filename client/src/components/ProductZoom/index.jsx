import React, { useRef, useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const ProductZoom = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSliderSml = useRef();

    const goto = (index) => {
        setSlideIndex(index);
        zoomSliderBig.current.swiper.slideTo(index);
        zoomSliderSml.current.swiper.slideTo(index);
    }
    return(
        <>
            <div className='flex gap-3'>
                <div className="slider w-[15%]">
                    <Swiper 
                    ref={zoomSliderSml}
                    direction={'vertical'}
                    slidesPerView={5}
                    spaceBetween={10}
                    navigation={true} 
                    modules={[Navigation]} 
                    className="zoomProductSliderThumbs h-[500px] overflow-hidden"
                    >
                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group 
                            ${slideIndex === 0 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(0)}>
                                <img src='https://api.spicezgold.com/download/file_1734526483285_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-1-202304220521.webp'
                                    className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group 
                            ${slideIndex === 1 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(1)}>
                                <img src='https://api.spicezgold.com/download/file_1734526483285_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-1-202304220521.webp'
                                    className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group 
                            ${slideIndex === 2 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(2)}>
                                <img src='https://api.spicezgold.com/download/file_1734526483285_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-1-202304220521.webp'
                                    className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group 
                            ${slideIndex === 3 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(3)}>
                                <img src='https://api.spicezgold.com/download/file_1734526483285_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-1-202304220521.webp'
                                    className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group 
                            ${slideIndex === 4 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(4)}>
                                <img src='https://api.spicezgold.com/download/file_1734526483285_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-1-202304220521.webp'
                                    className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group 
                            ${slideIndex === 5 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(5)}>
                                <img src='https://api.spicezgold.com/download/file_1734526483285_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-1-202304220521.webp'
                                    className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide></SwiperSlide>
                    </Swiper>
                </div>
                <div className="zoomContainer w-[85%] h-[500px] overflow-hidden">
                    <Swiper 
                        ref={zoomSliderBig}
                        slidesPerView={1}
                        spaceBetween={0}
                        navigation={false} 
                    >
                        <SwiperSlide>
                            <InnerImageZoom 
                            zoomType='hover' 
                            zoomScale={1} 
                            src="https://api.spicezgold.com/download/file_1734526483285_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-1-202304220521.webp"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <InnerImageZoom 
                            zoomType='hover' 
                            zoomScale={1} 
                            src="https://api.spicezgold.com/download/file_1734526483285_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-1-202304220521.webp"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <InnerImageZoom 
                            zoomType='hover' 
                            zoomScale={1} 
                            src="https://api.spicezgold.com/download/file_1734526483285_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-1-202304220521.webp"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <InnerImageZoom 
                            zoomType='hover' 
                            zoomScale={1} 
                            src="https://api.spicezgold.com/download/file_1734526483285_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-1-202304220521.webp"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <InnerImageZoom 
                            zoomType='hover' 
                            zoomScale={1} 
                            src="https://api.spicezgold.com/download/file_1734526483285_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-1-202304220521.webp"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <InnerImageZoom 
                            zoomType='hover' 
                            zoomScale={1} 
                            src="https://api.spicezgold.com/download/file_1734526483285_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-1-202304220521.webp"
                            />
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default ProductZoom;
import React from 'react'
// IoIosArrowDropleftCircle
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
export const Hero = () => {

    return (
        <>
            <div className='hidden lg:flex lg:flex-row sm:px-12 justify-between items-center pt-14 space-x-4'>
                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" transform="rotate(180 12 12)" fill="#A8B0C1" />
                    <path d="M14 16.5L9.5 12L14 7.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                </div>
                <div className='grid grid-cols-3 gap-3'>
                    <div className='2xl:w-[440px] h-[130px] px-4 space-x-5 flex flex-row card justify-start items-center bg-[#FFFFFF] rounded-[12px]'>
                        <div className=''>
                            <img src='/1.png' alt='Carasouel 1' className='w-[80px] 2xl:w-[100px]' />
                        </div>
                        <div className='flex flex-col justify-center items-start -mt-5 space-y-1'>
                            <div className='text-[#656C7E] font-normal text-lg'>
                                Take a quiz!
                            </div>
                            <div className='font-medium text-xl'>
                                Learn and earn $CKB
                            </div>
                        </div>
                    </div>
                    <div className='2xl:w-[440px] h-[130px] px-4 space-x-2 flex flex-row card justify-start items-center bg-[#FFFFFF] rounded-[12px]'>
                        <div className='w-[140px]'>
                            <img src='/2.png' alt='Carasouel 2' className='h-full' />
                        </div>
                        <div className='flex flex-col justify-center items-start -mt-1 space-y-1'>
                            <div className='text-[#656C7E] font-normal text-lg'>
                                Portfolio 🔥
                            </div>
                            <div className='font-medium xl:text-xl text-base'>
                                Track your trades in one place,
                                not all over the place
                            </div>
                        </div>
                    </div>
                    <div className='2xl:w-[440px] h-[130px] px-4 space-x-5 flex flex-row card justify-start items-center bg-[#FFFFFF] rounded-[12px]'>
                        <div className='w-[150px]'>
                            <img src='/3.png' alt='Carasouel 3' className='' />
                        </div>
                        <div className='flex flex-col justify-center items-start -mt-1 space-y-1'>
                            <div className='text-[#656C7E] font-normal text-lg'>
                                Portfolio
                            </div>
                            <div className='font-medium text-base xl:text-xl'>
                                Track your trades in one place,
                                not all over the place
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#A8B0C1" />
                        <path d="M10 7.5L14.5 12L10 16.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </div>
            </div>
            <div className='lg:hidden w-[380px] mx-auto bg-white'>
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    <SwiperSlide>
                        <div className='h-[170px]'>
                        <div className='w-[380px] h-[130px] px-4 space-x-5 flex flex-row card justify-start items-center bg-[#FFFFFF] rounded-[12px]'>
                            <div className=''>
                                <img src='/1.png' alt='Carasouel 1' className='w-[80px] 2xl:w-[100px]' />
                            </div>
                            <div className='flex flex-col justify-center items-start -mt-5 space-y-1'>
                                <div className='text-[#656C7E] font-normal text-lg'>
                                    Take a quiz!
                                </div>
                                <div className='font-medium text-xl'>
                                    Learn and earn $CKB
                                </div>
                            </div>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='w-[380px] h-[130px] px-4 space-x-2 flex flex-row card justify-start items-center bg-[#FFFFFF] rounded-[12px]'>
                        <div className='w-[140px]'>
                            <img src='/2.png' alt='Carasouel 2' className='h-full' />
                        </div>
                        <div className='flex flex-col justify-center items-start -mt-1 space-y-1'>
                            <div className='text-[#656C7E] font-normal text-lg'>
                                Portfolio 🔥
                            </div>
                            <div className='font-medium xl:text-xl text-base'>
                                Track your trades in one place,
                                not all over the place
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='w-[380px] h-[130px] space-x-5 flex flex-row card justify-start items-center bg-[#FFFFFF] rounded-[12px]'>
                        <div className='w-[150px]'>
                            <img src='/3.png' alt='Carasouel 3' className='' />
                        </div>
                        <div className='flex flex-col justify-center items-start -mt-1 space-y-1'>
                            <div className='text-[#656C7E] font-normal text-lg'>
                                Portfolio
                            </div>
                            <div className='font-medium text-base xl:text-xl'>
                                Track your trades in one place,
                                not all over the place
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

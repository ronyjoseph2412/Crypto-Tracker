import React from 'react'

export const HeroCard = () => {
    return (
        <div className='2xl:w-[440px] h-[130px] px-4 space-x-5 flex flex-row card justify-start items-center bg-[#FFFFFF] rounded-[12px]'>
            <div className=''>
                <img src='/1.png' alt='image' className='w-[80px] 2xl:w-[100px]' />
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
    )
}

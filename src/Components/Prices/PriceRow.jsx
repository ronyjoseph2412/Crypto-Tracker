import ProgressBar from '@ramonak/react-progress-bar'
import React from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
export const PriceRow = ({ price }) => {
    return (
<>

        <tr className="bg-white border-b text-gray-900">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 1L9.34153 4.96535L13.6819 5.49139L10.4797 8.46815L11.3206 12.7586L7.5 10.633L3.6794 12.7586L4.52034 8.46815L1.31813 5.49139L5.65847 4.96535L7.5 1Z" stroke="#ABB4C2" strokeWidth="1.2" strokeLinejoin="round" />
                </svg>
            </th>
            <td className="px-6 py-4">
                {price.market_cap_rank}
            </td>
            <td className="">
                <div className='flex flex-row justify-start items-center space-x-1'>
                    <div>
                        <img src={price.image} alt='CryptoCoin Logo' className='w-[24px] h-[24px]' />
                    </div>
                    <div className='text-[#222531] font-semibold'>
                        {price.name}
                    </div>
                    <div className='text-[#808A9D] uppercase font-medium'>
                        {price.symbol}
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 text-[#000000] font-semibold">
                ₹ {price.current_price}
            </td>
            <td className="px-2 py-4">
                {price.price_change_percentage_24h_in_currency < 0 ? (<div className='flex flex-row text-[#EA3943] font-semibold space-x-1'>
                    <div className='mt-2'>
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.32615 0H0.67383C0.0747082 0 -0.22532 0.766372 0.198308 1.21457L4.5245 5.79165C4.78707 6.06945 5.21293 6.06945 5.4755 5.79165L9.80164 1.21457C10.2254 0.766372 9.92529 0 9.32615 0Z" fill="#EA3943" />
                        </svg>
                    </div>
                    <div>
                        {Math.round((price.price_change_percentage_24h_in_currency) * 100) / 100}
                    </div>
                </div>) : (<div>
                    <div className='flex flex-row text-[#16C784] font-semibold items-center justify-start space-x-1'>
                        <div className='mt-0.5'>
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.32615 6H0.67383C0.0747082 6 -0.22532 5.23363 0.198308 4.78543L4.5245 0.20835C4.78707 -0.0694504 5.21293 -0.0694504 5.4755 0.20835L9.80164 4.78543C10.2254 5.23363 9.92529 6 9.32615 6Z" fill="#16C784" />
                            </svg>

                        </div>
                        <div>
                            {Math.round((price.price_change_percentage_24h_in_currency) * 100) / 100}
                        </div>
                    </div>
                </div>)}
            </td>
            <td className="px-2 py-4">
                {price.price_change_percentage_7d_in_currency < 0 ? (<div className='flex flex-row text-[#EA3943] font-semibold space-x-1'>
                    <div className='mt-2'>
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.32615 0H0.67383C0.0747082 0 -0.22532 0.766372 0.198308 1.21457L4.5245 5.79165C4.78707 6.06945 5.21293 6.06945 5.4755 5.79165L9.80164 1.21457C10.2254 0.766372 9.92529 0 9.32615 0Z" fill="#EA3943" />
                        </svg>
                    </div>
                    <div>
                        {Math.round((price.price_change_percentage_7d_in_currency) * 100) / 100}
                    </div>
                </div>) : (<div>
                    <div className='flex flex-row text-[#16C784] font-semibold items-center justify-start space-x-1'>
                        <div className='mt-0.5'>
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.32615 6H0.67383C0.0747082 6 -0.22532 5.23363 0.198308 4.78543L4.5245 0.20835C4.78707 -0.0694504 5.21293 -0.0694504 5.4755 0.20835L9.80164 4.78543C10.2254 5.23363 9.92529 6 9.32615 6Z" fill="#16C784" />
                            </svg>

                        </div>
                        <div>
                            {Math.round((price.price_change_percentage_7d_in_currency) * 100) / 100}
                        </div>
                    </div>
                </div>)}
            </td>
            <td className="px-2 py-4 text-[#000000] font-semibold">
            ₹ {Math.round((price.market_cap) * 100) / 100}
            </td>
            <td className="px-1 py-4 text-[#000000] font-semibold flex flex-col justify-start items-start">
                <div>
            ₹ {Math.round((price.total_volume) * 100) / 100}
                </div>
                <div className='text-opacity-60 text-black uppercase text-xs text'> 
                ({Math.round((price.total_volume)/price.current_price)} {price.symbol})
                </div>
            </td>
            <td className="px-6 py-4 text-[#000000] font-semibold">
                <div className='flex flex-col justify-start items-start'>
                    <div className='mb-2 uppercase'>
            {Math.round((price.circulating_supply) * 100) / 100} {price.symbol}
                    </div>
                    <ProgressBar 
    completed={price.circulating_supply}
    bgColor="#CFD6E4"
    height="5px"
    width="140px"
    borderRadius="4px"
    isLabelVisible={false}
    baseBgColor="#eff2f5"
    labelColor=""
    maxCompleted={price.total_supply}
    />
                </div>
            </td>
            <td>
            <BsThreeDotsVertical/>
            </td>
        </tr>

    </>
    )
}

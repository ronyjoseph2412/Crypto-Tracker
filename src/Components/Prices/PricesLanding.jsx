import React, { useEffect } from 'react'
import { PriceTable } from './PriceTable'
import { BsThreeDots } from 'react-icons/bs'
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io'
export const PricesLanding = () => {
    const [per_page, setper_page] = React.useState(10)
    const [current_page, setcurrent_page] = React.useState(1)
    const [data, setdata] = React.useState([])
    // https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h%2C7d
    useEffect(() => {
        const fetch_data = async () => {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=${per_page}&page=${current_page}&sparkline=false&price_change_percentage=24h%2C7d`)
            const data = await response.json()
            setdata(data)
        }

        fetch_data()
    }, [current_page, per_page])


    return (
        <div className='flex flex-col justify-start items-start px-2 md:px-14 mt-8'>
            <div className='font-bold text-xl md:text-2xl '>
                Top 100 Cryptocurrencies by Market Cap
            </div>
            <div className='flex flex-row justify-between items-center w-full'>
                <div className='flex flex-row space-x-2 justify-start items-start mt-4'>
                    <div className='bg-[#EFF2F5] p-2 rounded-lg text-xs flex flex-row space-x-1 cursor-pointer'>
                        <div>
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 1.5L9.34153 5.46535L13.6819 5.99139L10.4797 8.96815L11.3206 13.2586L7.5 11.133L3.6794 13.2586L4.52034 8.96815L1.31813 5.99139L5.65847 5.46535L7.5 1.5Z" stroke="#ABB4C2" strokeWidth="1.2" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className='font-medium'>
                            Favourites
                        </div>
                    </div>
                    <div className='bg-[#EFF2F5] p-2 rounded-lg text-xs flex flex-row cursor-pointer'>
                        <div className='font-semibold text-[#3861FB]'>
                            CryptoCurrencies
                        </div>
                    </div>
                    <div className='bg-[#EFF2F5] p-2 rounded-lg text-xs hidden md:flex md:flex-row  cursor-pointer'>
                        <div className='font-semibold text-[#5B667C]'>
                            DeFi
                        </div>
                    </div>
                    <div className='bg-[#EFF2F5] p-2 rounded-lg text-xs hidden md:flex md:flex-row cursor-pointer'>
                        <div className='font-semibold text-[#5B667C]'>
                            NFTs & Collectibles
                        </div>
                    </div>
                </div>
                <div className='flex flex-row space-x-2 justify-center items-center mt-3 md:py-0'>
                    <div className='text-[#5B667C]'>show rows</div>
                    <div className='bg-[#EFF2F5] rounded-lg text-center'>
                        <select className='bg-[#EFF2F5] rounded-lg py-1 px-2 cursor-pointer' value={per_page} onChange={(e) => { setper_page(e.target.value) }}>
                            <option>5</option>
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                        </select>
                    </div>
                </div>
                
            </div>
            <PriceTable prices={data} />
            <div className='flex flex-row justify-center lg:justify-between items-center w-full mb-4 mt-1 '>    
                <div className='hidden lg:block'></div>
                <div className='grid grid-cols-7 gap-x-2'>
                    <div className={`number px-2.5 py-1.5 cursor-pointer ${current_page>1? "":"cursor-not-allowed"} `} onClick={(e)=>{if(current_page>1){setcurrent_page(current_page-1)}}}>
                        <IoIosArrowBack />
                    </div>
                    <div className={` px-3 py-0.5 cursor-pointer font-bold border border-[#0052FE] text-[#0052FE] rounded`} onClick={(e)=>{setcurrent_page(current_page)}}>
                        {current_page}
                    </div>
                    <div className={`number pl-3 py-0.5 cursor-pointer font-bold`} onClick={()=>{setcurrent_page(current_page+1)}}>
                        {current_page + 1}
                    </div>
                    <div className={`number pl-3 py-1.5 cursor-pointer font-bold`}>
                    <BsThreeDots />
                    </div>
                    <div className={`number pl-3 py-0.5 cursor-pointer font-bold`} onClick={()=>{setcurrent_page(current_page+9)}}>
                        {current_page + 10 - 1}
                    </div>
                    <div className={`number px-2 py-0.5 cursor-pointer font-bold`} onClick={()=>{setcurrent_page(current_page+10)}}>
                        {current_page + 10}
                    </div>
                    <div className={`number px-2 py-1.5 cursor-pointer`}  onClick={(e)=>{setcurrent_page(current_page+1)}}>
                        <IoIosArrowForward />
                    </div>
                </div>
            </div>
        </div>
    )
}

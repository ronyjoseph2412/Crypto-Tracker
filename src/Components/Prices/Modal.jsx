import ProgressBar from '@ramonak/react-progress-bar'
import React from 'react'
import {GrClose} from 'react-icons/gr'
export const Modal = ({ setShowModal, price }) => {
    return (
        <div>
            <div
                className="mx-6 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-11/12 my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                        {/*header*/}
                        <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <div>
                                <img src={price.image} alt='CryptoCoin Logo' className='w-[24px] h-[24px] mr-2' />
                            </div>
                            <h3 className="text-2xl font-semibold">
                                {price.name}
                            </h3>
                            <button
                                className="p-1 ml-auto  border-0 text-black opacity-75 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                    <GrClose/>
                                {/* <span className="bg-transparent text-black opacity-95 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                </span> */}
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative py-6 flex flex-col uppercase px-8">
                            <div className='flex flex-row justify-between items-center'>
                                <div className='flex flex-col justify-start items-start font-semibold'>
                                    <div>
                                        price
                                    </div>
                                    <div>
                                        ₹ {price.current_price}
                                    </div>
                                </div>
                                <div className='flex flex-col justify-start items-start font-semibold'>
                                    <div className='text-xs'>
                                        24H
                                    </div>
                                    <div>
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
                                    </div>
                                </div>
                                <div className='flex flex-col justify-start items-start font-semibold'>
                                    <div className='text-xs'>
                                        7D
                                    </div>
                                    <div>
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
                                    </div>
                                </div>

                            </div>
                            <div className='pt-4 flex flex-col justify-start items-start font-semibold'>
                                <div>
                                    MARKET CAP
                                </div>
                                <div>
                                    ₹ {Math.round((price.market_cap) * 100) / 100}
                                </div>
                            </div>
                            <div className='pt-4 flex flex-col justify-start items-start font-semibold'>
                                <div>
                                    VOLUME(24H)
                                </div>
                                <div>
                                    <div>
                                        ₹ {Math.round((price.total_volume) * 100) / 100} <span className='text-black text-opacity-70'>({Math.round((price.total_volume) / price.current_price)} {price.symbol})</span>
                                    </div>
                                </div>
                            </div>
                            <div className='pt-4 flex flex-col justify-start items-start font-semibold'>
                                <div>
                                    CIRCULATING SUPPLY
                                </div>
                                <div>
                                    {Math.round((price.circulating_supply) * 100) / 100} {price.symbol}
                                </div>
                                <div className='mt-2'>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
    )
}

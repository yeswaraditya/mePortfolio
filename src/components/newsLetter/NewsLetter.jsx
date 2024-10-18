import React from 'react'
import grindKit from '../../assets/grindkit.png'

function NewsLetter() {
    return (
        <div className='fontLoosWide bg-[#000] text-[#fff] p-10 mr-0'>
            <h1 className='text-4xl mr-0'>News Letter</h1>
            {/* <div className='border-1 border-[#25D366] p-4 '> */}
            <div className='border-[#FFFFFF] p-4 sm:p-16 mt-10 flex flex-col sm:flex-row items-start' style={{ borderWidth: '1px', borderStyle: 'solid' }}>
                <img src={grindKit} width={200} alt="" className='hidden sm:block' />
                <img src={grindKit} width={200} alt="" className='w-full sm:hidden' />
                <div className='flex flex-col'>
                    <p className='text-[#FFFFFF] mt-4 sm:mt-0 sm:ms-10 text-md md:text-lg text-justify'>Subscribe for a tailored dose of productivity, tech, and entrepreneurship insights, directly to your mailbox. Stay ahead with expert advice, tips, and strategies delivered to you weekly. Don't miss out – subscribe now and stay informed!</p>

                    {/* <div className='pt-10 sm:mt-0 sm:ms-10 text-md md:text-lg'>
                        <p>Subscribe Now!</p>
                    </div> */}

                    <div className='flex flex-col items-start'>
                        <div className='pt-10 sm:mt-0 sm:ms-10 text-md md:text-lg'>
                            <a href="https://eaditya.substack.com/">
                                <p>Subscribe Now!</p>
                            </a>
                        </div>
                        <div className='mt-0 sm:ms-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="13" viewBox="0 0 188 13" fill="none">
                                <path d="M2 11C63.0699 4.03931 124.163 2 186 2" stroke="#FF6D00" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter
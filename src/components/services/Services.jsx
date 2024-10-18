import React from 'react'
import Arrow from  '../../assets/services/arrow.svg'
function Services() {
    return (
        <div className='bg-black p-4 md:p-10 pb-20'>
            <h1 className='fontLoosWide text-center text-4xl md:text-6xl text-white mb-6 md:mb-10'>Services</h1>
            <div className='fontOwners grid grid-cols-2 mx-auto md:grid-cols-3 ms-3 sm:ms-24 md:ms-10 lg:grid-cols-4 lg:ms-10 xl:ms-16 gap-6'>
                <div className='flex flex-col items-start'>
                    <h2 className='text-2xl md:text-3xl text-[#999999]'>Designing</h2>
                    <ul className='text-xl md:text-2xl text-[#FFFFFF] mt-3 font-light'>
                        <li className='my-2 md:my-3 flex'>Web Designing <img src={Arrow} alt="" width="14px" className='ms-2 mt-1.5' /></li>
                        <li className='my-2 md:my-3 flex'>Mobile UI/UX <img src={Arrow} alt="" width="14px" className='ms-2 mt-1.5' /></li>
                        <li className='my-2 md:my-3 flex'>Graphic Design <img src={Arrow} alt="" width="14px" className='ms-2 mt-1.5' /></li>
                    </ul>
                </div>
                <div className='flex flex-col items-start'>
                    <h2 className='text-2xl md:text-3xl text-[#999999]'>Development</h2>
                    <ul className='text-xl md:text-2xl text-[#FFFFFF] mt-3 font-light'>
                        <li className='my-2 md:my-3 flex'>Frontend <img src={Arrow} alt="" width="14px" className='ms-2 mt-1.5' /></li>
                        <li className='my-2 md:my-3 flex'>Backend<img src={Arrow} alt="" width="14px" className='ms-2 mt-1.5' /></li>
                    </ul>
                </div>
                <div className='flex flex-col items-start'>
                    <h2 className='text-2xl md:text-3xl text-[#999999]'>Notion</h2>
                    <ul className='text-xl md:text-2xl text-[#FFFFFF] mt-3 font-light'>
                        <li className='my-2 md:my-3 flex' >Templates<img src={Arrow} alt="" width="14px" className='ms-2 mt-1.5' /></li>
                    </ul>
                </div>
                <div className='flex flex-col items-start'>
                    <h2 className='text-2xl md:text-3xl text-[#999999] '>Newsletter</h2>
                    <ul className='text-xl md:text-2xl text-[#FFFFFF] mt-3 font-light'>
                        <li className='my-2 md:my-3 flex'>Management<img src={Arrow} alt="" width="14px" className='ms-2 mt-1.5' /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Services;


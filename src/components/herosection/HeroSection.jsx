import React from 'react'
import EswarImgCenter from '../../assets/hero-section/eswarimg.png'

function HeroSection() {
    return (
        <div className='mt-10 mb-10 '>
            <div className='flex justify-between'>
                <div className='flex-1 sm:me-20'></div>
                <div className='fontGimletNarrow sm:ms-20 flex flex-col sm:flex-row justify-center'>
                    <img src={EswarImgCenter} width={250} alt="" />
                    <div className='sm:ms-3 italic font-light'>
                        <p className='text-2xl'>UI/UX Designer</p>
                        <p className='text-2xl'>Developer</p>
                    </div>
                </div>
                <div className='flex-1'></div>
            </div>

            <div className='fontGimletNarrow text-center mt-5'>
                <h1 className='text-7xl font-normal'>Eswar Aditya*</h1>
                <p className='mt-4 text-2xl font-light'>U r not Lazy, just CREATIVE</p>
            </div>
        </div>





        // <div className='mt-10'>
        //     <div className='fontGimletNarrow flex flex-col sm:flex-row justify-center'>
        //         <img src={EswarImgCenter} width={250} alt="" />
        //         <div>
        //             <p className='text-2xl'>UI/UX Designer</p>
        //             <p className='text-2xl'>Developer</p>
        //         </div>
        //     </div>
        // </div>
    )
}

export default HeroSection
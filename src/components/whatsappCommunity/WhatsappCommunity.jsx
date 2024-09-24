import React from 'react'
import whatsAppQr from '../../assets/whatsappQr.png'

function WhatsappCommunity() {
    return (
        <div className='bg-[#000] text-[#fff] p-10'>
            <h1 className='text-5xl'>Whatsapp</h1>
            <h1 className='text-5xl'>Community</h1>
            {/* <div className='border-1 border-[#25D366] p-4 '> */}
            <div className='border-[#25D366] p-4 sm:p-16 mt-10 flex flex-col sm:flex-row items-start' style={{ borderWidth: '1px', borderStyle: 'solid' }}>
                <img src={whatsAppQr} width={200} alt="" className='hidden sm:block' />
                <img src={whatsAppQr} width={200} alt="" className='w-full sm:hidden' />
                <p className='text-[#0ACF83] mt-4 sm:mt-0 sm:ms-10 text-md md:text-lg text-justify'>Welcome to our dynamic WhatsApp community for personal branding enthusiasts, led by a passionate UI/UX designer! 🚀 Get exclusive newsletters,  tips, and proven practices to elevate your online presence and stand out. Join us for insightful discussions and connect with like-minded individuals. Let's amplify our personal brands together! 💼✨</p>
            </div>
        </div>
    )
}

export default WhatsappCommunity
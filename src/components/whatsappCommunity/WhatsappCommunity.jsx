import React from 'react';
import whatsAppQr from '../../assets/whatsappQr.png';

function WhatsappCommunity() {
    return (
        <div className='fontLoosWide bg-[#000] text-[#fff] p-10 pt-20'>
            <h1 className=' text-[#fff] text-4xl'>WhatsApp Community</h1>
            <div className=' p-4 sm:p-16 mt-10 flex flex-col sm:flex-row items-start' style={{ borderWidth: '1px', borderStyle: 'solid' }}>
                <img src={whatsAppQr} width={200} alt="WhatsApp QR" className='hidden sm:block' />
                <img src={whatsAppQr} width={200} alt="WhatsApp QR" className='w-full sm:hidden' />
                <div className='flex flex-col'>
                    <p className='text-[#fff] mt-4 sm:mt-0 sm:ms-10 text-md md:text-lg text-justify'>
                        Welcome to our dynamic WhatsApp community for personal branding enthusiasts, led by a passionate UI/UX designer! 🚀 Get exclusive newsletters, tips, and proven practices to elevate your online presence and stand out. Join us for insightful discussions and connect with like-minded individuals. Let's amplify our personal brands together! 💼✨
                    </p>
                    <div className='flex flex-col items-start'>
                        <div className='pt-10 sm:mt-0 sm:ms-10 text-md md:text-lg'>
                            <a href="https://chat.whatsapp.com/HYZ5hXTKrEmF9W7ooGbVs5">
                                <p>Join Now!</p>
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
    );
}

export default WhatsappCommunity;

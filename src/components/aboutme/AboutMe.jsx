import React from 'react';
import EswarProposing from "../../assets/about-me/eswarProposing.png";
import GoTo from './GoTo';
const AboutMe = () => {
    return (
        <div className=' flex flex-row justify-between bg-black text-white w-100  p-0'>
            <div className='h-full w-100 md:w-4/5 flex flex-col justify-start md:justify-between  md:gap-y-24 items-start px-5 pt-5 md:pt-12 md:px-0 md:py-6 md:pl-10 '>
                <div className='fontOwners text-xl md:text-2xl lg:text-3xl xl:text-5xl tracking-wider flex flex-col justify-center md:gap-16 font-normal '>
                    <p className='leading-relaxed'>
                        Passionate designer and developer skilled in web design, UI/UX, branding, and development.
                    </p>
                    <p className='leading-relaxed'>
                        I create innovative, visually compelling, and functional solutions. Let's collaborate!
                    </p>

                </div>
                <div className='w-[50px] lg:w-[80px] flex'>
                    <GoTo></GoTo>
                </div>

            </div>
            <div className='hidden md:flex flex-row justify-center items-center w-[885px]'>
                <img className='relative top-[-66px]' src={EswarProposing} />
            </div>
        </div>
    )
}

export default AboutMe;            
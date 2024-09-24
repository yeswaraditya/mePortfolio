import React from 'react';
import EswarProposing from "../../assets/about-me/eswarProposing.png";
import GoTo from './GoTo';
const AboutMe = () => {
    return (
        <div className=' flex flex-row justify-between items-start bg-black text-white w-100 h-screen border-b-0 border-sky-500 p-0'>
            <div className='h-screen w-1/2 text-2xl flex flex-col justify-between gap-5 pt-16 pb-4 pl-2 font-light'>
                <div className='text-4xl flex flex-col justify-evenly  font-light'>
                    <p>
                        Passionate designer and developer skilled in web design, UI/UX, branding, and development .
                    </p>
                    <p>
                        I create innovative, visually compelling, and functional solutions. Let's collaborate!
                    </p>

                </div>
                <div>
                    <GoTo></GoTo>
                </div>

            </div>
            <div className='w-[600px] flex flex-row'>
                <img className='' src={EswarProposing} />
            </div>
        </div>
    )
}

export default AboutMe;            
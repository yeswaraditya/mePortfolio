// import React from 'react';
// import EswarProposing from "../../assets/about-me/eswarProposing.png";
// import GoTo from './GoTo';

// const AboutMe = () => {
//     return (
//         <div className='flex flex-col md:flex-row justify-around bg-black text-white p-5 md:p-12'>
//             {/* Text */}
//             <div className='md:w-4/5 flex flex-col justify-start md:justify-between gap-y-10 items-start'>
//                 <div className='fontOwners tracking-wider flex flex-col justify-around gap-5 font-normal'>
//                     <p className='leading-relaxed fontLoosWide text-4xl sm:text-6xl break-words whitespace-normal'>
//                         About Me
//                     </p>

//                     <p className='leading-relaxed text-[1.6rem] sm:text-[2.8rem] font-light break-words whitespace-normal'>
//                         Passionate
//                         <span className='inline mx-2 relative custom-underline'>
//                             designer
//                             <style>{`
//                                 .custom-underline {
//                                     position: relative;
//                                 }

//                                 .custom-underline::after {
//                                     content: '';
//                                     position: absolute;
//                                     left: 0;
//                                     bottom: -2px; /* Adjust as needed */
//                                     width: 100%;
//                                     height: 2px; /* Adjust as needed */
//                                     background-color: #FF6D00; /* Orange color */
//                                     transition: transform 0.3s ease; /* Animation */
//                                 }

//                                 .custom-underline:hover::after {
//                                     transform: scaleX(1.1); /* Adjust scale as needed */
//                                 }
//                             `}</style>
//                         </span>
//                         and
//                         <span className='inline mx-2 relative custom-underline'>
//                             developer
//                         </span>
//                         skilled in web design, UI/UX, branding, and development.
//                     </p>

//                     <p className='leading-relaxed text-[1.6rem] sm:text-[2.8rem] font-light break-words whitespace-normal'>
//                         I create innovative, visually compelling, and functional solutions. Let's collaborate!
//                     </p>
//                 </div>
//                 {/* Button Arrow */}
//                 <div className='flex items-center w-[50px] lg:w-[80px]'>
//                     <GoTo />
//                 </div>
//             </div>
//             {/* Image */}
//             <div className='hidden lg:flex flex-row justify-start items-center w-full lg:w-[800px]'>
//                 <img className='max-w-full h-auto' src={EswarProposing} alt="Illustrative model" />
//             </div>
//         </div>
//     );
// }

// export default AboutMe;

// import React from 'react';
// import EswarProposing from "../../assets/about-me/eswarProposing.png";
// import GoTo from './GoTo';

// const AboutMe = () => {
//     return (
//         <div className='flex flex-col md:flex-row justify-around bg-black text-white p-5 md:p-12'>
//             {/* Text */}
//             <div className='md:w-4/5 flex flex-col justify-start md:justify-between gap-y-10 items-start'>
//                 <div className='fontOwners tracking-wider flex flex-col justify-around gap-5 font-normal'>
//                     <p className='leading-relaxed fontLoosWide text-4xl sm:text-6xl'>
//                         About Me
//                     </p>

//                     <p className='leading-relaxed text-[1.6rem] text-wrap sm:text-[2.8rem] font-light'>
//                         Passionate
//                         <span className='inline mx-2 text-wrap relative custom-underline'>
//                             designer
//                             <style>{`
//                                 .custom-underline {
//                                     position: relative;
//                                 }

//                                 .custom-underline::after {
//                                     content: '';
//                                     position: absolute;
//                                     left: 0;
//                                     bottom: -2px; /* Adjust as needed */
//                                     width: 100%;
//                                     height: 2px; /* Adjust as needed */
//                                     background-color: #FF6D00; /* Orange color */
//                                     transition: transform 0.3s ease; /* Animation */
//                                 }

//                                 .custom-underline:hover::after {
//                                     transform: scaleX(1.1); /* Adjust scale as needed */
//                                 }
//                             `}</style>
//                         </span>
//                         and
//                         <span className='inline mx-2 relative custom-underline'>
//                             developer
//                         </span>
//                         skilled in web design, UI/UX, branding, and development.
//                     </p>

//                     <p className='leading-relaxed text-[1.6rem] sm:text-[2.8rem] font-light'>
//                         I create innovative, visually compelling, and functional solutions. Let's collaborate!
//                     </p>
//                 </div>
//                 {/* Button Arrow */}
//                 <div className='flex items-center w-[50px] lg:w-[80px]'>
//                     <GoTo />
//                 </div>
//             </div>
//             {/* Image */}
//             <div className='hidden lg:flex flex-row justify-start items-center w-full lg:w-[800px]'>
//                 <img className='max-w-full h-auto' src={EswarProposing} alt="Illustrative model" />
//             </div>
//         </div>
//     );
// }

// export default AboutMe;

import React from 'react';
import EswarProposing from "../../assets/about-me/eswarProposing.png";
import GoTo from './GoTo';

const AboutMe = () => {
    return (
        <div className='overflow-hidden flex flex-col md:flex-row justify-around bg-black text-white p-0 w-full'>
            {/* Text */}
            <div className='md:w-4/5 flex flex-col justify-start md:justify-between md:gap-y-20 items-start px-5 pt-5 md:pt-12 md:px-0 md:py-6 md:pl-10'>
                <div className='fontOwners tracking-wider flex flex-col justify-around md:gap-14 font-normal'>

                    <p className='leading-relaxed fontLoosWide text-4xl sm:text-6xl'>
                        About Me
                    </p>

                    <div className='leading-relaxed text-[1.6rem] sm:text-[2.8rem] font-light text-wrap break-words flex flex-col'>

                        Passionate designer and developer skilled in web design, UI/UX, branding, and development.
                        {/* <p className='inline'>Passionate</p>
                        <p className='inline mx-2 text-[#FF6D00]'>
                            designer
                        </p>
                        <p className='inline'>and</p>
                        <p className='inline mx-2 text-[#FF6D00]'>
                            developer
                        </p>
                        <p className='inline'>
                            skilled in web design, UI/UX, branding, and development.
                        </p> */}
                        {/* <div className='flex flex-wrap'>
                            <div> Passionate</div>
                            <p className=' mx-2 underline'>
                                designer
                            </p>
                            and
                            <p className=' mx-2 underline'>
                                developer
                            </p>
                            <p>
                                skilled in web design, UI/UX, branding, and development.
                            </p>
                        </div> */}
                        <style>{`
                            .custom-underline {
                                position: relative;
                            }

                            .custom-underline::after {
                                content: '';
                                position: absolute;
                                left: 0;
                                bottom: -2px; /* Adjust as needed */
                                width: 100%;
                                height: 2px; /* Adjust as needed */
                                background-color: #FF6D00; /* Orange color */
                                transform: rotate(-4deg); /* Adjust the angle as needed */
                                transform-origin: left;
                                border-radius: 10px 10px 0px 0px;
                            }
                        `}
                        </style>
                    </div>

                    <p className='leading-relaxed text-[1.6rem] sm:text-[2.8rem] font-light'>
                        I create innovative, visually compelling, and functional solutions. Let's collaborate!
                    </p>

                </div>
                {/* Button Arrow */}
                <div className='w-[50px] lg:w-[80px] flex'>
                    <GoTo />
                </div>

            </div>
            {/* Image */}
            <div className='hidden lg:flex flex-row justify-start items-center w-full lg:w-[800px]'>
                <img className='max-w-full h-auto' src={EswarProposing} alt="Eswar Proposing" />
            </div>
        </div>
    );
}

export default AboutMe;


// import React from 'react';
// import EswarProposing from "../../assets/about-me/eswarProposing.png";
// import GoTo from './GoTo';
// import Underline from './Underline';
// const AboutMe = () => {
//     return (
//         <div className='overflow-hidden overflow-wrap flex flex-row justify-around bg-black text-white p-0 w-[200]'>
//             {/* Text */}
//             <div className='md:w-4/5 flex flex-col justify-start md:justify-between  md:gap-y-20 items-start px-5 pt-5 md:pt-12 md:px-0 md:py-6 md:pl-10 '>
//                 <div className='fontOwners tracking-wider flex flex-col justify-around md:gap-14 font-normal '>

//                     <p className='leading-relaxed fontLoosWide text-4xl sm:text-6xl'>
//                         About Me
//                     </p>

//                     <p className='leading-relaxed text-[1.6rem] sm:text-[2.8rem] font-light'>
//                         Passionate
//                         <span className='inline mx-2 custom-underline'>
//                             designer
//                         </span>
//                         <style >{`
//                             .custom-underline {
//                                 position: relative;
//                             }

//                             .custom-underline::after {
//                                 content: '';
//                                 position: absolute;
//                                 left: 0;
//                                 bottom: -2px; /* Adjust as needed */
//                                 width: 100%;
//                                 height: 2px; /* Adjust as needed */
//                                 background-color: #FF6D00; /* Orange color */
//                                 transform: rotate(-4deg); /* Adjust the angle as needed */
//                                 transform-origin: left;
//                                 border-radius:10px 10px 0px 0px;
//                             }
//                         `}</style>
//                         and
//                         <span className='inline mx-2 custom-underline'>
//                             developer
//                         </span>
//                         <style >{`
//                             .custom-underline {
//                                 position: relative;
//                             }

//                             .custom-underline::after {
//                                 content: '';
//                                 position: absolute;
//                                 left: 0;
//                                 bottom: -2px; /* Adjust as needed */
//                                 width: 100%;
//                                 height: 2px; /* Adjust as needed */
//                                 background-color: #FF6D00; /* Orange color */
//                                 transform: rotate(-4deg); /* Adjust the angle as needed */
//                                 transform-origin: left;
//                                 border-radius:10px 10px 0px 0px;
//                             }
//                         `}</style>
//                          skilled in web design, UI/UX, branding, and development.
//                     </p>
//                     <p className='leading-relaxed text-[1.6rem] sm:text-[2.8rem] font-light'>
//                         I create innovative, visually compelling, and functional solutions. Let's collaborate!
//                     </p>

//                 </div>
//                 {/*Buton Arrow */}
//                 <div className='w-[50px] lg:w-[80px] flex'>
//                     <GoTo></GoTo>
//                 </div>

//             </div>
//             {/* Model.. Model */}
//             <div className='hidden lg:flex flex-row justify-start items-center w-[800px]'>
//                 <img className='relative ' src={EswarProposing} />
//             </div>
//         </div>
//     )
// }

// export default AboutMe;
// import React from 'react';
// import EswarProposing from "../../assets/about-me/eswarProposing.png";
// import GoTo from './GoTo';
// import Underline from './Underline';

// const AboutMe = () => {
//     return (
//         <div className='flex flex-row justify-around bg-black text-white w-100 p-0'>
//             {/* Text */}
//             <div className='w-100 md:w-4/5 flex flex-col justify-start md:justify-between md:gap-y-20 items-start overflow-wrap pl-3 pt-5 md:pt-12 md:px-0 md:py-6 md:pl-10'>
//                 <div className='fontOwners tracking-wider flex flex-col justify-around md:gap-14 font-normal'>
//                     <p className='leading-relaxed fontLoosWide text-4xl sm:text-6xl'>
//                         About Me
//                     </p>
//                     <p className='leading-relaxed text-[1.2rem] sm:text-[2rem] md:text-[2.8rem] font-light'>
//                         Passionate
//                         <span className='inline mx-2 relative custom-underline'>
//                             designer
//                             <svg
//                                 className="absolute left-0 bottom-0 hidden md:block"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="203"
//                                 height="12"
//                                 viewBox="0 0 203 13"
//                                 fill="none"
//                             >
//                                 <path
//                                     d="M2 11C68.0484 4.03931 134.122 2 201 2"
//                                     stroke="#FF6D00"
//                                     strokeWidth="3"
//                                     strokeLinecap="round"
//                                 />
//                             </svg>
//                         </span>
//                         and
//                         <span className='inline mx-2 relative custom-underline'>
//                             developer
//                             <svg
//                                 className="absolute left-0 bottom-0 hidden md:block"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="203"
//                                 height="13"
//                                 viewBox="0 0 203 13"
//                                 fill="none"
//                             >
//                                 <path
//                                     d="M2 11C68.0484 4.03931 134.122 2 201 2"
//                                     stroke="#FF6D00"
//                                     strokeWidth="3"
//                                     strokeLinecap="round"
//                                 />
//                             </svg>
//                         </span>
//                         skilled in web design, UI/UX, branding, and development.
//                     </p>
//                     <p className='leading-relaxed text-[1.2rem] sm:text-[2rem] md:text-[2.8rem] font-light'>
//                         I create innovative, visually compelling, and functional solutions. Let's collaborate!
//                     </p>
//                 </div>
//                 {/* Button Arrow */}
//                 <div className='w-[50px] lg:w-[80px] flex'>
//                     <GoTo />
//                 </div>
//             </div>
//             {/* Image */}
//             <div className='hidden lg:flex flex-row justify-start items-center w-[800px]'>
//                 <img className='relative' src={EswarProposing} alt="Illustrative model" />
//             </div>
//         </div>
//     );
// }

// export default AboutMe;
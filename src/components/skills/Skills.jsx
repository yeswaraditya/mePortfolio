import React from 'react';
import eswarBg from '../../assets/skills/eswarbg.png';
import projectsArrow from '../../assets/skills/arrow.svg';

function Skills() {
    return (
        <div className='bg-black p-3'>
            <div
                className="fontLoosWide bg-center m-0 min-h-screen md:min-h-[1700px]"
                style={{
                    backgroundImage: `url(${eswarBg})`,
                    // height: '1400px',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    // minHeight: '100vh',
                    // height:'auto',
                }}
            >
                {/* Skills */}
                <div>
                    <h1 className='p-4 sm:p-8 text-5xl sm:text-7xl text-[#FF6D00]'>Skills.</h1>
                    <div className='text-[#fff] text-2xl sm:text-4xl'
                        style={{
                            fontWeight: '10'
                        }}
                    >
                        <div className='mx-5 md:mx-20 flex justify-between'>
                            <div className='flex flex-col gap-10'>
                                <p>UI/UX Design</p>
                                <p>Notion</p>
                            </div>
                            <div className='flex flex-col gap-10'>
                                <p>Web Development</p>
                                <p>Newsletter's</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Projects */}
                <div className='mt-32 sm:mt-64'>
                    <h1 className='p-4 sm:p-8 mb-10 sm:mb-20 text-5xl sm:text-7xl text-[#FF6D00]'>Projects.</h1>
                    <div className='text-[#fff] text-2xl sm:text-4xl'
                        style={{
                            fontWeight: '10'
                        }}
                    >
                        <div className='mx-5 md:mx-20 flex flex-col justify-center items-center underline'>

                            <div className='flex'>
                                <p>Wallpaper Pack</p>
                                <img src={projectsArrow} alt="Arrow" width={20} className='ms-3' />
                            </div>
                            <div className='flex mt-10'>
                                <p>College Clubs</p>
                                <img src={projectsArrow} alt="Arrow" width={20} className='ms-3' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;

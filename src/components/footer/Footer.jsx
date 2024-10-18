import React from 'react';
import Arrow from '../../assets/services/arrow.svg'; // Update the path as necessary

const Footer = () => {
  const textColor = '#FFFFFF';
  const headingColor = '#999999';

  return (
    <div className='bg-black p-4 md:p-10'>
      <h1 className='fontLoosWide text-left text-4xl md:text-6xl text-white mb-6 md:mb-10'>Get in Touch</h1>
      <div className='fontOwners grid grid-cols-1 mx-auto md:grid-cols-2 gap-6'>
        {/* Get in Touch Section */}
        <div className='flex flex-col items-start'>
          <h2 className='text-2xl md:text-3xl' style={{ color: headingColor }}>Contact Me</h2>
          <ul className='text-xl md:text-2xl mt-3 font-light' style={{ color: textColor }}>
            <li className='my-2 md:my-3 flex'>
              <a href="mailto:yeswaraditya3006@gmail.com" className='hover:underline'>
                Email
              </a>
              <img src={Arrow} alt="" width="14px" className='ms-2 mt-1.5' />
            </li>
          </ul>
        </div>

        {/* Socials Section */}
        <div className='flex flex-col items-start'>
          <h2 className='text-2xl md:text-3xl' style={{ color: headingColor }}>Socials</h2>
          <ul className='text-xl md:text-2xl mt-3 font-light' style={{ color: textColor }}>
            <li className='my-2 md:my-3 flex'>
              <a href="https://www.linkedin.com/in/yarlagaddaeswaraditya/" target="_blank" rel="noopener noreferrer" className='hover:underline'>
                LinkedIn
              </a>
              <img src={Arrow} alt="" width="14px" className='ms-2 mt-1.5' />
            </li>
            <li className='my-2 md:my-3 flex'>
              <a href="https://x.com/YarlagaddaEswar" target="_blank" rel="noopener noreferrer" className='hover:underline'>
                Twitter
              </a>
              <img src={Arrow} alt="" width="14px" className='ms-2 mt-1.5' />
            </li>
            <li className='my-2 md:my-3 flex'>
              <a href="https://github.com/yeswaraditya" target="_blank" rel="noopener noreferrer" className='hover:underline'>
                GitHub
              </a>
              <img src={Arrow} alt="" width="14px" className='ms-2 mt-1.5' />
            </li>
            <li className='my-2 md:my-3 flex'>
              <a href="https://www.instagram.com/eswaraditya5/" target="_blank" rel="noopener noreferrer" className='hover:underline'>
                Instagram
              </a>
              <img src={Arrow} alt="" width="14px" className='ms-2 mt-1.5' />
            </li>
            
            <li className='my-2 md:my-3 flex'>
              <a href="https://www.behance.net/eswaradyarlaga/projects" target="_blank" rel="noopener noreferrer" className='hover:underline'>
             Behance
              </a>
              <img src={Arrow} alt="" width="14px" className='ms-2 mt-1.5' />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

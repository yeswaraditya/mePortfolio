import React from 'react';
import hireme from '../../assets/hireme/hireme.svg'; // Assuming this is the image you uploaded
import Arrow from '../../assets/services/arrow.svg';

function HireMe() {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden mb-20 bg-black">
      <img
        src={hireme}
        alt="Hire Me"
        className="object-cover w-5/6 h-full"
      />

      <div className="absolute inset-0 flex items-center justify-center pe-36 pb-40">
        <h1 className="text-white text-5xl md:text-9xl font-semibold uppercase tracking-wider">
          Hire Me.
        </h1>
      </div>

      <div className="absolute bottom-20 right-0">
        <a
          href="/resume"
          className="text-white text-xl md:text-5xl flex items-center pe-28 font-light transition-all duration-300 translate-x-12" 
        >
          Resume
          <img src={Arrow} alt=""width="16px" className="ms-1 mt-4" />
        </a>
      </div>
    </div>
  );
}

export default HireMe;

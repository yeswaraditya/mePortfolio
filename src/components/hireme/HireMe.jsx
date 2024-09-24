import React from 'react';
import hireme from '../../assets/hireme/hireme.svg'; 
import Arrow from '../../assets/services/arrow.svg';

function HireMe() {
  return (
    <div className="relative w-full overflow-hidden mb-20 bg-black"> 
   
      <img
        src={hireme}
        alt="Hire Me"
        className="w-5/6 h-full"
      />

  
      <div className="absolute inset-0 flex items-center top-24 left-28 sm:top-0 justify- lg:pe-40 xl:ps-40 2xl:ps-72 pb-52">
        <h1 className="text-white text-xl md:text-9xl font-semibold uppercase tracking-wider">
          Hire Me.
        </h1>
      </div>

      <div className="absolute bottom-20 right-0 flex justify-end items-center w-full  pe-1 sm:pe-5 lg:pb-10  xl:p-10">
        <a
          href="/resume"
          className="text-white text-sm sm:6xl md:5xl lg:text-5xl flex items-center font-light "
        >
          Resume
          <img
            src={Arrow}
            alt=""
            // width="16px"
            className="ms-1 mt-2 md:mt-4 w-2 md:w-7"
          />
        </a>
      </div>
    </div>
  );
}

export default HireMe;

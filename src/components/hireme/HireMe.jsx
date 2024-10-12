import React from 'react';
import hireme from '../../assets/hireme/hireme.svg'; 
import Arrow from '../../assets/services/arrow.svg';

function HireMe() {
  return (
    <div className="relative w-full overflow-hidden bg-black"> 
      <img
        src={hireme}
        alt="Hire Me"
        className="w-5/6 h-full"
      />

      <div className="absolute inset-0 flex items-center  justify-start ps-32 pt-28  sm:ps-52 sm:pt-28 lg:left-28  lg:pt-0  lg:pe-40 lg:ps-40 2xl:ps-72 pb-52">
        <h1 className="text-white  text-2xl sm:text-5xl md:text-5xl  lg:text-9xl font-semibold uppercase tracking-wider">
          Hire Me.
        </h1>
      </div>

      <div className="absolute bottom-20 right-0 flex justify-end items-center w-full pe-1 sm:pe-5 lg:pb-10 xl:p-10">
        <a
          href="/resume"
          className="text-white text-sm sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl flex items-center font-light"
        >
          Resume
          <img
            src={Arrow}
            alt=""
            className="ms-1 mt-2 md:mt-4 w-2 md:w-4 md:pb-3 lg:w-5 xl:w-6 lg:pt-3"
          />
        </a>
      </div>
    </div>
  );
}

export default HireMe;

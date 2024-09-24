import React from 'react'
import eswarImage from '../../assets/Notch/eswarImage.svg'
import Music from '../../assets/Notch/Music.svg'

function Navbar() {
  return (
    <div className='flex flex-col sm:flex-row justify-between items-center px-6 mt-6'>
      {/*Logo*/}
      <div className='flex-1'>
        <h1 className='text-4xl'>YEA.</h1>
      </div>
      {/*Dynamic Island*/}
      <div className='flex-2 mt-4 sm:mt-0 flex justify-center'>
        <div className='flex items-center bg-black text-white rounded-full px-6 sm:px-8 py-2 sm:py-1.5'>
          <img src={eswarImage} width={25} alt="Eswar" className='mr-2 sm:mr-5' />
          <p className='text-sm font-semibold'>Try what makes you sleepless</p>
          <img src={Music} width={25} alt="Music" className='ml-2 sm:ml-5' />
        </div>
      </div>
      {/* Extra Space */}
      <div className='flex-auto'></div>
    </div>
  )
}

export default Navbar

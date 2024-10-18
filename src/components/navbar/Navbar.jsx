import React, { useEffect, useState } from 'react';
import eswarImage from '../../assets/Notch/eswarImage.svg';
import Music from '../../assets/Notch/Music.svg';
import spidermansong from '../../assets/spidermansong.mp3';
import MusicFix from '../../assets/Notch/Music_fix.svg';

function Navbar() {
  const [audio] = useState(new Audio(spidermansong));
  const [isPlaying, setIsPlaying] = useState(false); // Start with audio paused

  useEffect(() => {
    // Clean up audio when component unmounts
    return () => {
      audio.pause();
      audio.currentTime = 0; // Reset audio to the start
    };
  }, [audio]);

  const handleInteraction = () => {
    if (!isPlaying) {
      audio.play().then(() => {
        setIsPlaying(true);
        console.log("Audio Playing");
      }).catch((error) => {
        console.error("Audio Play Error: ", error);
      });
      
      // Remove the event listener after the first interaction
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause();
      console.log("Audio Paused");
    } else {
      audio.play().then(() => {
        console.log("Audio Resumed");
      }).catch((error) => {
        console.error("Audio Resume Error: ", error);
      });
    }
    setIsPlaying(!isPlaying); // Toggle the playing state
  };

  useEffect(() => {
    // Add event listeners for user interaction
    window.addEventListener('scroll', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);
    
    return () => {
      // Clean up event listeners
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  return (
    <div className='flex flex-col sm:flex-row justify-between items-center px-6 mt-6'>
      {/* Logo */}
      <div className='flex-1'>
        <h1 className='text-4xl fontGimletCompressed italic font-light'>YEA.</h1>
      </div>
      {/* Dynamic Island */}
      <div className='flex-2 mt-4 sm:mt-0 flex justify-center'>
        <div className='flex items-center bg-black text-white rounded-full px-6 sm:px-8 py-2 sm:py-1.5'>
          <img src={eswarImage} width={25} alt="Eswar" className='mr-2 sm:mr-5' />
          <p className='text-sm font-semibold'>Try what makes you sleepless</p>
          {
            !isPlaying ?
              <img
                src={MusicFix}
                width={25}
                alt="Pause Music"
                className='ml-2 sm:ml-4 cursor-pointer'
                onClick={toggleAudio} // Click to pause
              /> :
              <img
                src={Music}
                width={25}
                alt="Play Music"
                className='ml-2 sm:ml-4 cursor-pointer'
                onClick={toggleAudio} // Click to play
              />
          }
        </div>
      </div>
      {/* Extra Space */}
      <div className='flex-auto'></div>
    </div>
  );
}

export default Navbar;

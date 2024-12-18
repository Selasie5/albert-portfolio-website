"use client"
// components/Loader.js
import { useState, useEffect } from 'react';

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(oldProgress + 1, 100);
      });
    }, 90); // Adjust this value for speed of loader

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="  fixed inset-0 flex flex-col items-end justify-end px-20 py-10 container font-Reco  z-50">
      <span className=' text-black text-5xl '>
      {progress}{  } 
      <span className='font-DM'>{ }%</span> 
      </span>
      <p className="mt-4 text-primary text-xl font-bold italic">
        {progress <= 10}
        {progress > 10 && progress <= 25 && "Willkommen" }
        {progress > 25 && progress <= 50 && "Bienvenue !"}
        {progress > 50 && progress <= 75 && "  Valkommen!"}
        {progress > 75 && progress <= 99 &&  "Witaj!" }
        {progress === 100 && "Welcome" }
      </p>
      
    </div>
  );
}
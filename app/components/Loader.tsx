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
    <div className="  fixed inset-0 flex flex-col items-end justify-end px-20 py-10 container font-DM   z-50">
      <span className=' text-black text-5xl'>
      {progress} %
      </span>
      <p className="mt-4 text-black text-sm font-extralight italic">
        {progress <= 10}
        {progress > 10 && progress <= 25 }
        {progress > 25 && progress <= 50}
        {progress > 50 && progress <= 75}
        {progress > 75 && progress <= 99 }
        {progress === 100 }
      </p>
      
    </div>
  );
}
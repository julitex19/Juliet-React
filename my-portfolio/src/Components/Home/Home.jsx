
import React, { useState, useEffect } from 'react';
import About from '../About/About';

function Home() {
  const textItems = ['Front-end Developer', 'Freelancer', 'Tech Enthusiast'];
  const timeFrame = 220; // Adjust the delay between letters as needed

  const [visibleTextIndex, setVisibleTextIndex] = useState(0);
  const [visibleLetters, setVisibleLetters] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const text = textItems[visibleTextIndex];

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setVisibleLetters((prevText) => prevText + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, timeFrame); // Use timeFrame as the delay
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setVisibleTextIndex((visibleTextIndex + 1) % textItems.length);
        setCurrentIndex(0);
        setVisibleLetters('');
      }, timeFrame); // Use timeFrame as the delay
    }
  }, [currentIndex, visibleTextIndex]);

  return (
    <>
       <div className=' bg-secondaryColor  mt-16 text-white px-8 py-10 font-secondaryFont'>
        <p className='text-3xl'>Hello, My name is <span className='font-semibold text-5xl tracking-wider leading-tight'>JULIET N. SAMUEL</span> <br />And I'm a <span className='text-primaryColor font-semibold tracking-wider leading-relaxed text-3xl'>{visibleLetters}</span></p>
      </div>
      <About/>
    </>
  );
}

export default Home;

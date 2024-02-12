import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import './output.css';
import Content from './components/Content';
function App() {
  const [isClicked, setIsClicked] = useState(false);
  const svgRef = useRef(null);
  const [animationFinished, setAnimationFinished] = useState(false);

  const handleClick = () => {
      svgRef.current.classList.toggle('float');
      if (window.innerWidth <= 768) {
        document.body.classList.toggle('overflow-hidden');
      }
      setTimeout(() => {
      setIsClicked(!isClicked);
      }, 10);
  };
  useEffect(() => {
    if (svgRef.current) {
      const paths = svgRef.current.querySelectorAll('path');
      const classes = ['on-load-y-plus', 'on-load-y-minus', 'on-load-x-minus', 'on-load-x-plus'];
  
      paths.forEach((path, index) => {
        const randomClass = classes[Math.floor(Math.random() * classes.length)];
        path.classList.add(randomClass);
        path.style = { animationDelay: `${index * 2}s` }; // adjust delay as needed
      });
  
      // Set animationFinished to true after the total duration of the animation
      const totalAnimationDuration = paths.length * 0.2; // adjust as needed// convert to milliseconds 
    }
  }, []);

  return (
    <div className="w-full md:w-screen md:h-screen flex flex-col items-center justify-end">
      <div id='bar' className={`w-full h-[10vh] md:h-[20vh] bg-white flex justify-center items-center ${isClicked ? 'hidden' : ''}`}><h2 className='text-xl'>Click on the logo to start!</h2></div>
      <div className={`logo p-5 pt-10 pb-10 z-30 w-screen bg-[#1e1e1e] md:bg-transparent top-0 sticky md:static md:w-auto flex justify-center items-center h-[5vh] md:mt-5 ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>
        <svg id='MS' className='float' ref={svgRef} viewBox="0 0 948 762" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className=' glow' d="M866.101 457C872.437 487.606 882.941 659 667.5 659C667.499 631.455 667.5 619.4 667.5 567C670.668 567 780.557 524.333 736.202 457C800.944 457 834.418 457 866.101 457Z" fill="white"/>
          <path className='glow' d="M179.333 108L211 156.979V659H97V295.573V108H179.333Z" fill="white"/>
          <path className=' glow' d="M385.167 438L465 517.444L445.841 548H386.833H324.493L307 520.5L385.167 438Z" fill="white"/>
          <path className=' glow' d="M667.48 187.843C673.472 187.843 705.64 187.843 724.72 193.962C737.44 197.021 737.44 197.021 753.34 206.2C766.06 215.378 753.34 206.2 794.68 239.854C823.3 215.378 823.3 215.378 823.3 215.378C823.3 215.378 823.3 215.378 845.56 193.962C851.92 187.843 853.326 186.178 858.28 181.724C863.234 177.27 867.82 172.546 871 169.486L832.84 135.833L807.4 120.536L785.14 111.358L772.42 106.463L759.7 102.73L746.98 99.6095L734.26 97.1619L718.36 94.8367L705.64 93.613L692.92 93.0623L680.2 93L657.94 94.8367L635.68 97.2843L625.345 99.12L615.01 102.179L587.98 114.417L553 169.487L553 374.471L553 659H667.48L667.48 187.843Z" fill="white"/>
          <path className=' glow' d="M866.5 457C815.706 457 829.265 457 736.341 457C714.119 438.625 708.77 435.25 667.5 423C667.5 353.654 667.501 340.625 667.5 310C794.484 349.812 853.802 380.438 866.5 457Z" fill="white"/>
          <path className=' glow' d="M553 169.5V375L465 517.45L385.17 438L553 169.5Z" fill="white"/>
          <path className=' glow' d="M211 157L385.2 438L307 520.5L211 366.165V157Z" fill="white"/>        
        </svg>
        <h1 id="Name" className="text-3xl text-white font-bold name-enter absolute border-b border-white">Mohamed Sefyani</h1>
      </div>
      <svg id='name-svg' className={`flex justify-center align-middle w-screen absolute bottom-[20vh] ${isClicked ? 'clicked' : ''}`} >
        <text className='text-4xl md:text-7xl text-[rgba(255,255,255,0)] md:text-white' text-anchor='middle' dominant-baseline='middle' x='50%' y='50%'>
        Mohamed Sefyani
        </text>
      </svg>
      <div id="navbar" className={`invisible bg-[#1e1e1e] md:bg-transparent w-screen sticky top-[80px] md:static z-30 flex justify-center items-center h-[5vh] md:w-[90vw] md:m-3 ${isClicked ? 'clicked' : ''}`}>
        <ul className='flex flex-row justify-center items-center gap-5'>
          <li className='text-[#eee] text-sm opacity-50'>
          <a href='#home'>Home</a></li>
          <li className='text-[#eee] text-sm opacity-50'>
          <a href='#about'>About</a></li>
          <li className='text-[#eee] text-sm opacity-50'>
          <a href='#projects'>Projects</a></li>
          <li className='text-[#eee] text-sm opacity-50'>
          <a href='#contact'>Contact</a></li>
        </ul>
      </div>
      <div id="inner-body" className={`invisible flex flex-row justify-center items-start w-[95vw] h-max md:overflow-auto ${isClicked ? 'clicked' : ''}`}>
        <Content />
      </div>
      
    </div>
  );
}

export default App;
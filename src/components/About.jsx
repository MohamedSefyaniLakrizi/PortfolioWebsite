import React, { useEffect, useRef } from "react";
import "./About.css";
import about_img from "../assets/about.jpg";

function About() {
  const imgRef = useRef();

  useEffect(() => {
    const innerBodyDiv = document.getElementById('inner-body');

    const handleScroll = () => {

      if (window.innerWidth <= 768) {
        return;
      }
      
      const yPos = innerBodyDiv.scrollTop;
      const totalHeight = innerBodyDiv.scrollHeight - innerBodyDiv.clientHeight - 1000;
      const scrollPercent = (yPos / totalHeight) * 100;
      if (imgRef.current) {
        imgRef.current.style.objectPosition = `${scrollPercent}% center`; // change the objectPosition of the image
      }
    };
      innerBodyDiv.addEventListener("scroll", handleScroll, false);

    return () => {
      innerBodyDiv.removeEventListener("scroll", handleScroll, false);
    };
  }, []);

  return (
    <section id="about" className='flex flex-col md:flex-row justify-center items-center md:items-start w-screen md:h-[60vh] gap-2 mt-[10vh] md:mt-0'>
      <img draggable='false' ref={imgRef} src={about_img} alt="about" className='h-[300px] w-[300px] md:h-[400px] md:w-[400px] object-right object-cover m-5 overflow-hidden rounded-[20px]'/>
      <div className="m-5 gap-10 w-[80vw] md:w-auto md:m-5">
        <h1 className='text-2xl md:text-3xl font-bold text-white mb-4'>About me</h1>
        <p className='text-white font-thin text-sm md:text-base md:w-[500px] leading-6'>
        Passionate junior front-end dev at heart, full-stack curious by nature. 
        My CS degree gave me the logic, but frameworks like React and Jquery ignite my pixels-and-interaction love.
        I'm a detail-oriented team player, thriving in agile sprints with open communication. 
        My superpower? Crafting beautiful interfaces and intuitive interactions – every line of code a brushstroke in the user's masterpiece. 
        Seeking a project where I can bring code warrior skills and UX champion spirit to the table. Let's chat!
 <br/><span className="opacity-50">(And prepare for my fast learning... and coffee enthusiasm!)</span>
      </p>
      </div> 
    </section> 
  );
}

export default About;
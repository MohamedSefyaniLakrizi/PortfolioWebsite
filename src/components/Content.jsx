import React from "react";
import { Link, Element } from 'react-scroll';
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import "./Content.css";

function Content() {
    return (
        <div className='w-full flex flex-col items-center'>
            <Hero />
            <About />
            <Projects />
            <Contact />
        </div>
    )
}

export default Content;
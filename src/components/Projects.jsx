import React, { useState } from "react";
import fairstly_theme from "../assets/fairstly-theme.png";
import airbnb_clone from "../assets/airbnb-clone.png";
import "./Projects.css";
import "../assets/Tailwind.jsx";
import Tailwind from "../assets/Tailwind.jsx";
import JQuery from "../assets/JQuery.jsx";
import Liquid from "../assets/Liquid.jsx";
import Reactsvg from "../assets/Reactsvg.jsx";

function Projects() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <section
      id="projects"
      className="w-full flex flex-col justify-center items-center my-32 md:my-0"
    >
      <h1 className="text-4xl font-bold text-white">Projects</h1>
      <div className="flex flex-col items-center mt-10">
        <div
          className={`relative flex flex-col items-center group project ${
            isClicked ? "clicked" : ""
          }`}
          onClick={() => setIsClicked(!isClicked)}
        >
          <h1 className="text-white text-2xl">Shopify Theme</h1>
          <div className="flex">
            <img
              draggable="false"
              src={fairstly_theme}
              alt="shopify-store-img"
              className="transition-opacity duration-300 w-[800px] object-right object-cover m-5 overflow-hidden rounded-[20px] bg-transparent"
            />
            <div className="absolute flex h-[500px] left-[800px] items-center overflow-hidden">
              <div className="translate-x-[-800px] flex flex-col gap-3 h-[300px] w-[300px] project-info">
                <h1 className="text-lg font-medium text-indigo-300">
                  Shopify Store Theme
                </h1>
                <p className="text-white">
                  This theme allows users to see the different products
                  available and offer multiple customization options such as the
                  number of Hero Images, bg colors, text size, fonts, and even
                  has custom sections that can be added however needed.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-[30%] md:top-[33%] left-[35%] overflow-hidden">
            <ul className="text-image flex flex-col text-base md:text-3xl w-[200px]">
              <li className=" text-white md:mb-4 drop-shadow-2xl flex items-center ">
                • Tailwind <Tailwind className="tailwind" />
              </li>
              <li className=" text-white md:mb-4 drop-shadow-2xl flex items-center whitespace-nowrap ">
                • Jquery <JQuery className="jquery" />
              </li>
              <li className=" text-white md:mb-4 drop-shadow-2xl flex items-center whitespace-nowrap">
                • Liquid <Liquid className="liquid" />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-9 items-center">
          <a
            href="https://fairstly-themes.myshopify.com/"
            target="_blank"
            className="group text-sm md:text-lg text-white flex gap-2 items-center hover:text-indigo-500 transition-colors duration-500"
            rel="noopener noreferrer"
          >
            Live Demo
            <svg
              className="group-hover:fill-indigo-500 transition-colors duration-500 w-[30px] h-[30px] "
              viewBox="0 0 24 24"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M18 20.75H6C5.27065 20.75 4.57118 20.4603 4.05546 19.9445C3.53973 19.4288 3.25 18.7293 3.25 18V6C3.25 5.27065 3.53973 4.57118 4.05546 4.05546C4.57118 3.53973 5.27065 3.25 6 3.25H12C12.1989 3.25 12.3897 3.32902 12.5303 3.46967C12.671 3.61032 12.75 3.80109 12.75 4C12.75 4.19891 12.671 4.38968 12.5303 4.53033C12.3897 4.67098 12.1989 4.75 12 4.75H6C5.66848 4.75 5.35054 4.8817 5.11612 5.11612C4.8817 5.35054 4.75 5.66848 4.75 6V18C4.75 18.3315 4.8817 18.6495 5.11612 18.8839C5.35054 19.1183 5.66848 19.25 6 19.25H18C18.3315 19.25 18.6495 19.1183 18.8839 18.8839C19.1183 18.6495 19.25 18.3315 19.25 18V12C19.25 11.8011 19.329 11.6103 19.4697 11.4697C19.6103 11.329 19.8011 11.25 20 11.25C20.1989 11.25 20.3897 11.329 20.5303 11.4697C20.671 11.6103 20.75 11.8011 20.75 12V18C20.75 18.7293 20.4603 19.4288 19.9445 19.9445C19.4288 20.4603 18.7293 20.75 18 20.75Z"></path>{" "}
                <path d="M20 8.75C19.8019 8.74741 19.6126 8.66756 19.4725 8.52747C19.3324 8.38737 19.2526 8.19811 19.25 8V4.75H16C15.8011 4.75 15.6103 4.67098 15.4697 4.53033C15.329 4.38968 15.25 4.19891 15.25 4C15.25 3.80109 15.329 3.61032 15.4697 3.46967C15.6103 3.32902 15.8011 3.25 16 3.25H20C20.1981 3.25259 20.3874 3.33244 20.5275 3.47253C20.6676 3.61263 20.7474 3.80189 20.75 4V8C20.7474 8.19811 20.6676 8.38737 20.5275 8.52747C20.3874 8.66756 20.1981 8.74741 20 8.75Z"></path>{" "}
                <path d="M13.5 11.25C13.3071 11.2352 13.1276 11.1455 13 11C12.877 10.8625 12.809 10.6845 12.809 10.5C12.809 10.3155 12.877 10.1375 13 10L19.5 3.5C19.5687 3.42631 19.6515 3.36721 19.7435 3.32622C19.8355 3.28523 19.9348 3.26319 20.0355 3.26141C20.1362 3.25963 20.2362 3.27816 20.3296 3.31588C20.423 3.3536 20.5078 3.40974 20.579 3.48096C20.6503 3.55218 20.7064 3.63701 20.7441 3.7304C20.7818 3.82379 20.8004 3.92382 20.7986 4.02452C20.7968 4.12523 20.7748 4.22454 20.7338 4.31654C20.6928 4.40854 20.6337 4.49134 20.56 4.56L14 11C13.8724 11.1455 13.6929 11.2352 13.5 11.25Z"></path>{" "}
              </g>
            </svg>
          </a>
          <p className="opacity-50 text-white text-xs md:text-base">
            (Password: rowqui)
          </p>
          <a
            href="https://github.com/MohamedSefyaniLakrizi/Shopify-Theme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="hover:fill-indigo-500 transition-colors duration-500 w-[30px] h-[30px]"
              viewBox="0 -0.5 48 48"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>Github-color</title> <desc>Created with Sketch.</desc>{" "}
                <defs> </defs>{" "}
                <g
                  id="Icons"
                  stroke="none"
                  stroke-width="1"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="Color-"
                    transform="translate(-700.000000, -560.000000)"
                  >
                    {" "}
                    <path
                      d="M723.9985,560 C710.746,560 700,570.787092 700,584.096644 C700,594.740671 706.876,603.77183 716.4145,606.958412 C717.6145,607.179786 718.0525,606.435849 718.0525,605.797328 C718.0525,605.225068 718.0315,603.710086 718.0195,601.699648 C711.343,603.155898 709.9345,598.469394 709.9345,598.469394 C708.844,595.686405 707.2705,594.94548 707.2705,594.94548 C705.091,593.450075 707.4355,593.480194 707.4355,593.480194 C709.843,593.650366 711.1105,595.963499 711.1105,595.963499 C713.2525,599.645538 716.728,598.58234 718.096,597.964902 C718.3135,596.407754 718.9345,595.346062 719.62,594.743683 C714.2905,594.135281 708.688,592.069123 708.688,582.836167 C708.688,580.205279 709.6225,578.054788 711.1585,576.369634 C710.911,575.759726 710.0875,573.311058 711.3925,569.993458 C711.3925,569.993458 713.4085,569.345902 717.9925,572.46321 C719.908,571.928599 721.96,571.662047 724.0015,571.651505 C726.04,571.662047 728.0935,571.928599 730.0105,572.46321 C734.5915,569.345902 736.603,569.993458 736.603,569.993458 C737.9125,573.311058 737.089,575.759726 736.8415,576.369634 C738.3805,578.054788 739.309,580.205279 739.309,582.836167 C739.309,592.091712 733.6975,594.129257 728.3515,594.725612 C729.2125,595.469549 729.9805,596.939353 729.9805,599.18773 C729.9805,602.408949 729.9505,605.006706 729.9505,605.797328 C729.9505,606.441873 730.3825,607.191834 731.6005,606.9554 C741.13,603.762794 748,594.737659 748,584.096644 C748,570.787092 737.254,560 723.9985,560"
                      id="Github"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </a>
        </div>
        <div
          className={`relative flex flex-col items-center group project mt-20 ${
            isClicked ? "clicked" : ""
          }`}
          onClick={() => setIsClicked(!isClicked)}
        >
          <h1 className="text-white text-2xl">Airbnb Clone</h1>
          <div className="flex">
            <img
              draggable="false"
              src={airbnb_clone}
              alt="shopify-store-img"
              className="transition-opacity duration-300 w-[800px] object-right object-cover m-5 overflow-hidden rounded-[20px] bg-transparent"
            />
            <div className="absolute flex h-[500px] left-[820px] items-center overflow-hidden">
              <div className="translate-x-[-800px] flex flex-col gap-3 h-[300px] w-[300px] project-info">
                <h1 className="text-lg font-medium text-indigo-300">
                  Airbnb Clone Project
                </h1>
                <p className="text-white">
                  This Airbnb clone is responsive and allows multiple
                  functionalities such as, the seach feature (that is fully
                  functional apart from the date picker), responsive design,
                  pop-up.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-[30%] md:top-[37%] left-[35%] md:left-[40%] overflow-hidden">
            <ul className="text-image flex flex-col text-base md:text-3xl w-[200px]">
              <li className=" text-white md:mb-4 drop-shadow-2xl flex items-center ">
                • React <Reactsvg className="react" />
              </li>
              <li className=" text-white md:mb-4 drop-shadow-2xl flex items-center ">
                • Tailwind <Tailwind className="tailwind" />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-9 items-center">
          <a
            href="https://mohamedsefyani-airbnb.web.app/"
            target="_blank"
            className="group text-sm md:text-lg text-white flex gap-2 items-center hover:text-indigo-500 transition-colors duration-500"
            rel="noopener noreferrer"
          >
            Live Demo
            <svg
              className="group-hover:fill-indigo-500 transition-colors duration-500 w-[30px] h-[30px] "
              viewBox="0 0 24 24"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M18 20.75H6C5.27065 20.75 4.57118 20.4603 4.05546 19.9445C3.53973 19.4288 3.25 18.7293 3.25 18V6C3.25 5.27065 3.53973 4.57118 4.05546 4.05546C4.57118 3.53973 5.27065 3.25 6 3.25H12C12.1989 3.25 12.3897 3.32902 12.5303 3.46967C12.671 3.61032 12.75 3.80109 12.75 4C12.75 4.19891 12.671 4.38968 12.5303 4.53033C12.3897 4.67098 12.1989 4.75 12 4.75H6C5.66848 4.75 5.35054 4.8817 5.11612 5.11612C4.8817 5.35054 4.75 5.66848 4.75 6V18C4.75 18.3315 4.8817 18.6495 5.11612 18.8839C5.35054 19.1183 5.66848 19.25 6 19.25H18C18.3315 19.25 18.6495 19.1183 18.8839 18.8839C19.1183 18.6495 19.25 18.3315 19.25 18V12C19.25 11.8011 19.329 11.6103 19.4697 11.4697C19.6103 11.329 19.8011 11.25 20 11.25C20.1989 11.25 20.3897 11.329 20.5303 11.4697C20.671 11.6103 20.75 11.8011 20.75 12V18C20.75 18.7293 20.4603 19.4288 19.9445 19.9445C19.4288 20.4603 18.7293 20.75 18 20.75Z"></path>{" "}
                <path d="M20 8.75C19.8019 8.74741 19.6126 8.66756 19.4725 8.52747C19.3324 8.38737 19.2526 8.19811 19.25 8V4.75H16C15.8011 4.75 15.6103 4.67098 15.4697 4.53033C15.329 4.38968 15.25 4.19891 15.25 4C15.25 3.80109 15.329 3.61032 15.4697 3.46967C15.6103 3.32902 15.8011 3.25 16 3.25H20C20.1981 3.25259 20.3874 3.33244 20.5275 3.47253C20.6676 3.61263 20.7474 3.80189 20.75 4V8C20.7474 8.19811 20.6676 8.38737 20.5275 8.52747C20.3874 8.66756 20.1981 8.74741 20 8.75Z"></path>{" "}
                <path d="M13.5 11.25C13.3071 11.2352 13.1276 11.1455 13 11C12.877 10.8625 12.809 10.6845 12.809 10.5C12.809 10.3155 12.877 10.1375 13 10L19.5 3.5C19.5687 3.42631 19.6515 3.36721 19.7435 3.32622C19.8355 3.28523 19.9348 3.26319 20.0355 3.26141C20.1362 3.25963 20.2362 3.27816 20.3296 3.31588C20.423 3.3536 20.5078 3.40974 20.579 3.48096C20.6503 3.55218 20.7064 3.63701 20.7441 3.7304C20.7818 3.82379 20.8004 3.92382 20.7986 4.02452C20.7968 4.12523 20.7748 4.22454 20.7338 4.31654C20.6928 4.40854 20.6337 4.49134 20.56 4.56L14 11C13.8724 11.1455 13.6929 11.2352 13.5 11.25Z"></path>{" "}
              </g>
            </svg>
          </a>
          <a
            href="https://github.com/MohamedSefyaniLakrizi/Airbnb-Clone"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="hover:fill-indigo-500 transition-colors duration-500 w-[30px] h-[30px]"
              viewBox="0 -0.5 48 48"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>Github-color</title> <desc>Created with Sketch.</desc>{" "}
                <defs> </defs>{" "}
                <g
                  id="Icons"
                  stroke="none"
                  stroke-width="1"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="Color-"
                    transform="translate(-700.000000, -560.000000)"
                  >
                    {" "}
                    <path
                      d="M723.9985,560 C710.746,560 700,570.787092 700,584.096644 C700,594.740671 706.876,603.77183 716.4145,606.958412 C717.6145,607.179786 718.0525,606.435849 718.0525,605.797328 C718.0525,605.225068 718.0315,603.710086 718.0195,601.699648 C711.343,603.155898 709.9345,598.469394 709.9345,598.469394 C708.844,595.686405 707.2705,594.94548 707.2705,594.94548 C705.091,593.450075 707.4355,593.480194 707.4355,593.480194 C709.843,593.650366 711.1105,595.963499 711.1105,595.963499 C713.2525,599.645538 716.728,598.58234 718.096,597.964902 C718.3135,596.407754 718.9345,595.346062 719.62,594.743683 C714.2905,594.135281 708.688,592.069123 708.688,582.836167 C708.688,580.205279 709.6225,578.054788 711.1585,576.369634 C710.911,575.759726 710.0875,573.311058 711.3925,569.993458 C711.3925,569.993458 713.4085,569.345902 717.9925,572.46321 C719.908,571.928599 721.96,571.662047 724.0015,571.651505 C726.04,571.662047 728.0935,571.928599 730.0105,572.46321 C734.5915,569.345902 736.603,569.993458 736.603,569.993458 C737.9125,573.311058 737.089,575.759726 736.8415,576.369634 C738.3805,578.054788 739.309,580.205279 739.309,582.836167 C739.309,592.091712 733.6975,594.129257 728.3515,594.725612 C729.2125,595.469549 729.9805,596.939353 729.9805,599.18773 C729.9805,602.408949 729.9505,605.006706 729.9505,605.797328 C729.9505,606.441873 730.3825,607.191834 731.6005,606.9554 C741.13,603.762794 748,594.737659 748,584.096644 C748,570.787092 737.254,560 723.9985,560"
                      id="Github"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;

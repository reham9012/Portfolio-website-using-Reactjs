import React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaGit } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaSass } from "react-icons/fa";



const Skills = () => {
    return(
        < div className="text-center mt-16">
            <h1 className="text-4xl  mb-8 ">My Skills</h1>
            <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 ml-16 text-4xl pt-8"> 
            <div className="bg-gray-800 rounded-sm shadow-md shadow-black flex p-2 h-20 w-20 mb-4">
            <IoLogoJavascript />
            </div>
          
            <div className="bg-gray-800 rounded-sm shadow-md shadow-black flex p-2 h-20 w-20 mb-4">
            <FaReact />
            </div> 
            <div className="bg-gray-800 rounded-sm shadow-md shadow-black flex p-2 h-20 w-20 mb-4">
            <RiNextjsFill />
            </div>
            <div className="bg-gray-800 rounded-sm shadow-md shadow-black flex p-2 h-20 w-20 mb-4">
            <FaGit />
            </div>
            <div className="bg-gray-800 rounded-sm shadow-md shadow-black flex p-2 h-20 w-20 mb-4">
            <RiTailwindCssFill />
            </div>
            <div className="bg-gray-800 rounded-sm shadow-md shadow-black flex p-2 h-20 w-20 mb-4">
            <FaBootstrap />
            </div>
            <div className="bg-gray-800 rounded-sm shadow-md shadow-black flex p-2 h-20 w-20 mb-4">
            <FaSass />
            </div>
            <div className="bg-gray-800 rounded-sm shadow-md shadow-black flex p-2 h-20 w-20 mb-4">
            <FaHtml5 />
            </div>
            
           


            </div>
        
        </div>
    ) 
}
export default Skills;


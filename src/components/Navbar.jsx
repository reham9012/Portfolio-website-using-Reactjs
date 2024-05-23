import React from "react";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";



const Nav=() =>{
    return(
        <nav className="flex justify-between border-b-2 border-b-gray-500 p-4" >
        <div className="flex items-center gap-4 text-2xl">
            <div className="bg-gray-600 p-3 rounded-full"><FaFacebookMessenger /></div>
            <span>Get in touch</span>
        </div>
        <ul className="flex items-center gap-4 text-2xl">
            <li className="cursor-pointer md:hidden"><FaLinkedin /></li>
            <li className="cursor-pointer md:hidden"><FaGithub /></li>
            <li className="cursor-pointer md:hidden"><FaFacebookSquare /></li>

            <li className="hidden md:block md:text-l after:content-['/'] after:ml-2"><a href="https://www.linkedin.com/in/reham-mohamed-036629273/">Linkedin</a></li>
            <li className="hidden md:block md:text-l after:content-['/'] after:ml-2"><a href="https://github.com/reham9012">Github</a></li>
            <li className="hidden md:block md:text-l after:ml-2"><a href="#">Facebook</a></li>
        </ul>
        
        </nav>
        
        
    )
}
export default Nav;
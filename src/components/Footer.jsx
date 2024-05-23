import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
const Footer =() =>{
    return(
        <footer className="flex justify-between pt-4" >
        <div>
        
            <span>&copy; All Rights Reserved 2023</span>
        </div>
        <ul className="flex items-center gap-4 text-2xl">
            <li className="cursor-pointer md:hidden"><FaLinkedin /></li>
            <li className="cursor-pointer md:hidden"><FaGithub /></li>
            <li className="cursor-pointer md:hidden"><FaFacebookSquare /></li>

            <li className="hidden md:block md:text-sm after:content-['/'] after:ml-2"><a href="https://www.linkedin.com/in/reham-mohamed-036629273/">Linkedin</a></li>
            <li className="hidden md:block md:text-sm after:content-['/'] after:ml-2"><a href="https://github.com/reham9012">Github</a></li>
            <li className="hidden md:block md:text-sm after:ml-2"><a href="#">Facebook</a></li>
        </ul>
        
        </footer>
        
        
    );
};
export default Footer;
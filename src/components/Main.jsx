import React from "react";
import '/Users/nico/Desktop/portfoliosite/portfolio/src/App.css'
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaFacebook, FaInstagram} from 'react-icons/fa'
import { BsGithub } from "react-icons/bs";
import snow from '../assets/snow.png';


const Main = () => {
    return (
        <div id="Main">
            <img className="w-full h-screen object-cover object-left scale-x-[-1]" src="/src/assets/snow.png" />
            
            <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
                <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center  ">
                    <h1 id="name_Text" className="sm:text-5xl text-4xl font-bold text-gray-800/95 font-">
                    My Name is Nick..</h1>
                    <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800 ">I'm a
                    <TypeAnimation
                    sequence={[
                    'Developer', // Types 'One'
                    1000, // Waits 1s
                    'Grappler', // Deletes 'One' and types 'Two'
                    2000, // Waits 2s
                    'HUMAN', // Types 'Three' without deleting 'Two'
                    3000
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1em', paddingLeft: '5px' }}
                    />
                    </h2>
        
                    <div className="flex justify-between pt-6
                     max-w-[200px] w-full">
                        <FaFacebook className="cursor-pointer" size={35}/>
                        <FaInstagram className="cursor-pointer" size={35}/>
                        <BsGithub className="cursor-pointer" size={35} />
                        <FaTwitter className="cursor-pointer" size={35} />
                    </div>
                 </div>
            </div>
    </div>
    );
};

export default Main;
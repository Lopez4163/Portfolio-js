import React from 'react'
import huluImg from "../assets/hulu.jpeg"
import amazonImg from "../assets/amazon.png"
import netflixImg from "../assets/netflix.jpeg"
import space_gameImg from "../assets/space_game.png"
import ProjectItem from './ProjectItem'

function Projects() {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Programming Journey</h1>
      <p className='text-center py-8'>
        Goto you project directory by cd your-project-name. run npm run dev command 
        and try again (In your npm command "N" is capital). and if not work please check below link 
        (please refer green tick answer) 
      </p>
      <div className=' grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={huluImg} title='Hulu App'/>
        <ProjectItem img={amazonImg} title='AWS App'/>
        <ProjectItem img={netflixImg} title='Netflix App'/>
        <ProjectItem img={space_gameImg} title='Space App'/>
      </div>
    </div>
  );
};

export default Projects
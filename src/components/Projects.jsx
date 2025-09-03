import React from 'react'
import ItemProject from './AnimatedProjects.jsx'
import { projectObj } from '../constance/projectObj.js'
import AnimatedProjects from './AnimatedProjects.jsx'

const Projects = () => {
    
  return (
    <section className='relative px-2 sm:px- md:px-0 my-6 sm:my-8 md:my-10 flex w-full max-w-7xl flex-col justify-center overflow-hidden rounded-2xl sm:rounded-3xl dark border-2 shadow-2xl max-sm:px-4 ' id='projects' aria-labelledby="projects-heading">
        
        <div className='max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 max-sm:pb-0 max-sm:pt-10'>
          <h2 id="projects-heading" className=" text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl  font-bold max-sm:pl-5">
            PROJECTS
          </h2>
          <div className='px-2 sm:px-4 md:px-10 lg:px-20' role="region" aria-label="Project showcase">
          <AnimatedProjects />
          </div>  
        </div>
    </section>
  )
}

export default Projects
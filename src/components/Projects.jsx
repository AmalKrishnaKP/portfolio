import React from 'react'
import ItemProject from './ItemProject'
import { projectObj } from '../constance/projectObj.js'
const Projects = () => {
    const allprojects=projectObj.map((item,index)=>(
      <ItemProject
      key={index}
                id={item.id}
                title={item.title}
                img={item.img}
                discription={item.discription}
                github={item.github}
                diploy={item.diploy}

            />
    ))
  return (
    <div className='bg-[#0a0a0a] rounded-2xl mt-[50px] p-10 ' id='projects'>
        <h2 className="text-lg md:text-4xl mb-4 text-white dark:text-white max-w-4xl  font-bold pl-10">
          PROJECTS
        </h2>
        <div className='px-20 max-sm:px-5' >
            {allprojects}
        </div>
    </div>
  )
}

export default Projects
import React from 'react'
import ItemProject from './ItemProject'
import { projectObj } from '../constance/projectObj.js'
const Projects = () => {
    const allprojects=projectObj.map((item,index)=>(
      <ItemProject
      key={index}
                title={item.title}
                img={item.img}
                discription={item.discription}
                github={item.github}
                diploy={item.diploy}

            />
    ))
  return (
    <div className='bg-[#0a0a0a] rounded-2xl mt-[50px] p-10 ' id='projects'>
        projects
        <div className='px-20 max-sm:px-5' >
            {allprojects}
        </div>
    </div>
  )
}

export default Projects
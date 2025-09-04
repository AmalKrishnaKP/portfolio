import React from 'react'
import { TracingBeam } from "@/components/ui/tracing-beam";

import Education from './Education';

import Projects from './Projects';
import Skills from './Skills';
import Profile from './Profile';

const Body = () => {
  return (
    <div className='px-2 pt-10 sm:px-4 md:px-5 lg:px-8 box-sizing: border-box flex flex-col justify-center items-center' role="main">

            <Profile />
            <Education />
            <Projects />
            <Skills />
          
    </div>
  )
}

export default Body
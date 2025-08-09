import React from 'react'
import { TracingBeam } from "@/components/ui/tracing-beam";

import Education from './Education';

import Projects from './Projects';
import Skills from './Skills';
import Profile from './Profile';
const Body = () => {
  return (
    <div className='px-5'>


        <TracingBeam>
            <Profile />
            <Education />
            <Projects />
            <Skills />
        </TracingBeam>
    </div>
  )
}

export default Body
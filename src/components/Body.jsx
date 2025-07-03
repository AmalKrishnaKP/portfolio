import React from 'react'
import { TracingBeam } from "@/components/ui/tracing-beam";
import Education from './Education';
import Marque from './Marque'
import Projects from './Projects';
import Skills from './Skills';
const Body = () => {
  return (
    <div>
        <TracingBeam>
            <Marque />
            <Education />
            <Projects />
            <Skills />
        </TracingBeam>
    </div>
  )
}

export default Body
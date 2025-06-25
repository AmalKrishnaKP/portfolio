import React from 'react'
import { TracingBeam } from "@/components/ui/tracing-beam";
import Education from './Education';
import Marque from './Marque'
import Projects from './Projects';
const Body = () => {
  return (
    <div>
        <TracingBeam>
            <Marque />
            <Education />
            <Projects />
        </TracingBeam>
    </div>
  )
}

export default Body
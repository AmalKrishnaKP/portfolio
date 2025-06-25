import React from 'react'
import { TracingBeam } from "@/components/ui/tracing-beam";
import Education from './Education';
import Marque from './Marque'
const Body = () => {
  return (
    <div>
        <TracingBeam>
            <Marque />
            <Education />
        </TracingBeam>
    </div>
  )
}

export default Body
import React from "react";
import { Timeline } from "@/components/ui/timeline";


const Education = () => {
    const data=[
        {
            title:"2022-26",
            content:(
                <div>
                    <div className="font-bold text-sm sm:text-base md:text-lg lg:text-2xl">
                        Bachelor of Technology in Computer Science and Engineering
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0 text-xs sm:text-sm md:text-base lg:text-xl pt-2 max-w-full lg:w-[690px]">
                        <h2>Rajiv Gandhi Institute of Technology, Kottayam</h2>
                        <h2>CGPA: 8.2</h2>
                    </div>
                </div>
            )
        },
        {
            title:"2022",
            content:(
                <div>
                    <div className="font-bold text-sm sm:text-base md:text-lg lg:text-2xl">
                         Higher Secondary Education
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0 text-xs sm:text-sm md:text-base lg:text-xl pt-2 max-w-full lg:w-[690px]">
                        <h2>GVHSS Koyilandy</h2>
                        <h2>98.6</h2>
                    </div>
                </div>
            )
        },
        {
            title:"2020",
            content:(
                <div>
                    <div className="font-bold text-sm sm:text-base md:text-lg lg:text-2xl">
                        Secondary School Education
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0 text-xs sm:text-sm md:text-base lg:text-xl pt-2 max-w-full lg:w-[690px]">
                        <h2>GVHSS Koyilandy</h2>
                        <h2>Full A+</h2>
                    </div>
                </div>
            )
        },
    ]
    return (
    <section id="education" className="relative px-2 sm:px- md:px-0 my-6 sm:my-8 md:my-10 flex w-full max-w-7xl flex-col justify-center overflow-hidden rounded-2xl sm:rounded-3xl dark border-2 shadow-2xl max-sm:px-4 " aria-labelledby="education-heading">
        <h2 id="education-heading" className="sr-only">Education Timeline</h2>
        <div className="relative w-full overflow-clip dark rounded-2xl sm:rounded-3xl">
        <Timeline data={data} />
        </div>
    </section>
  )
}

export default Education


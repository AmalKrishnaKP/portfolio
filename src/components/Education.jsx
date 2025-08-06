import React from "react";
import { Timeline } from "@/components/ui/timeline";


const Education = () => {
    const data=[
        {
            title:"2022-26",
            content:(
                <div>
                    <div className="font-bold lg:text-2xl max-sm:text-sm">
                        Bachelor of Technology in Computer Science and Engineering
                    </div>
                    <div className="flex flex-row justify-between lg:w-[690px] text-xl pt-2 max-sm:text-sm">
                        <h2>Rajiv Gandhi Institute of Technology,Kottayam</h2>
                        <h2>CGPA: 8.2</h2>
                    </div>
                </div>
            )
        },
        {
            title:"2022",
            content:(
                <div>
                    <div className="font-bold lg:text-2xl max-sm:text-sm">
                         Higher Secondary Education
                    </div>
                    <div className="flex flex-row justify-between lg:w-[690px] text-xl pt-2 max-sm:text-sm">
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
                    <div className="font-bold lg:text-2xl max-sm:text-sm">
                        Secondary School Education
                    </div>
                    <div className="flex flex-row justify-between lg:w-[690px] text-xl pt-2 max-sm:text-sm">
                        <h2>GVHSS Koyilandy</h2>
                        <h2>Full A+</h2>
                    </div>
                </div>
            )
        },
    ]
    return (
    <section id="education ">
        <div className="relative w-full overflow-clip dark rounded-3xl">
        <Timeline  data={data} />
        </div>
    </section>
  )
}

export default Education


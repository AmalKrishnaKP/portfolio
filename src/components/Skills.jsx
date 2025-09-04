import React from 'react'
import { BoxReveal } from "@/components/magicui/box-reveal";
import { skillCategories,skillImages } from '../constance/skill';
const Skills = () => {
  // Skill images mapping - you can replace these with actual skill images
 

  return (
    <section id='skills' className="relative px-2 sm:px- md:px-0 my-6 sm:my-8 md:my-10 flex w-full max-w-7xl flex-col justify-center overflow-hidden rounded-2xl sm:rounded-3xl dark border-2 shadow-2xl max-sm:px-4" aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Skills & Technologies</h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            {skillCategories.map((category, index) => (
              <BoxReveal key={index}>
                <div className="p-4 text-center flex flex-col items-center" role="region" aria-labelledby={`skill-category-${index}`}>
                  <h3 id={`skill-category-${index}`} className="text-lg font-semibold mb-3">{category.title}</h3>
                  <div className="flex flex-wrap justify-center gap-2" role="list">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex flex-col items-center p-3 rounded-lg  hover:text-black hover:bg-gray-100 transition-colors" role="listitem">
                        <img 
                          src={skillImages[skill] || "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg"} 
                          alt={skill}
                          className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                          onError={(e) => {
                            e.target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg";
                          }}
                        />
                        <span className="text-xs mt-1 text-center max-w-20 break-words font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </BoxReveal>
            ))}
        </div>
    </section>
  )
}

export default Skills
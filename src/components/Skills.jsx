import React from 'react'
import { BoxReveal } from "@/components/magicui/box-reveal";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "HTML5", "CSS3", "JavaScript (ES6+)", "Tailwind CSS", "Responsive Design"]
    },
    {
      title: "Backend Development", 
      skills: ["Node.js", "Express.js", "RESTful APIs", "MongoDB", "Mongoose", "JWT Authentication"]
    },
    {
      title: "Database Management",
      skills: ["MongoDB", "MongoDB Atlas", "Database Design", "Data Modeling", "CRUD Operations"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Git & GitHub", "VS Code", "Postman", "Heroku", "Vercel", "npm/yarn"]
    }
  ];

  return (
    <section className="px-2 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16" aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Skills & Technologies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {skillCategories.map((category, index) => (
              <BoxReveal key={index}>
                <div className="p-4 text-center" role="region" aria-labelledby={`skill-category-${index}`}>
                  <h3 id={`skill-category-${index}`} className="text-lg font-semibold mb-3">{category.title}</h3>
                  <ul className="text-sm space-y-1" role="list">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} role="listitem">{skill}</li>
                    ))}
                  </ul>
                </div>
              </BoxReveal>
            ))}
        </div>
    </section>
  )
}

export default Skills
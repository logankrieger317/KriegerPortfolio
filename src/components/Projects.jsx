import React from 'react'
import { useState } from 'react'

function Projects() {
 
    const [projects, setProjects] = useState([
    {
      name: <p className='skillName'> Project 1</p>, 
      description: 'A description of project 1',
      image: 'project1.png',
      githubLink: 'https://github.com/...',
      demoLink: 'https://myproject1.com'
    },
    {
      name: <p className='skillName'> Project 2 </p>,
      description: 'A description of project 2',  
      image: 'project2.png',
      githubLink: 'https://github.com/...',
      demoLink: 'https://myproject2.com'
    }
  ])

  return(
    <>
    <section id="projects">
        {projects.map(project => (
          <div className="project">
            <h3>{project.name}</h3>
            <img src={project.image} alt={project.name} />
            <p>{project.description}</p>
            <a href={project.githubLink}>Github</a>
            <a href={project.demoLink}>Live Demo</a>  
          </div>
        ))}
      </section>
    </>
  )
}

export default Projects
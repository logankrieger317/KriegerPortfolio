import React from 'react'

function Skills() {
  const skills = [
    {
      name: <p className='skillName'> HTML</p>,
      icon: <img className='skillIcons' src="./src/icons/html5.png" alt="HTML5 icon" />,
    },
    {
      name: <p className='skillName'> CSS</p>,
      icon: <img className='skillIcons' src="./src/icons/CSS.png" alt="CSS3 icon" />,
    },
    {
      name: <p className='skillName'> JavaScript</p>,
      icon: <img className='skillIcons' src="./src/icons/js.png" alt="JavaScript icon" />,
    },
    {
      name: <p className='skillName'> React.js</p>,
      icon: <img className='skillIcons' src="./src/icons/science.png" alt="React.js icon" />,

    },
    {
      name: <p className='skillName'> Node.js</p>,
      icon: <img className='skillIcons' src="./src/icons/nodejs.png" alt="Node.js icon" />,
    },
    {
      name: <p className='skillName'> Express.js</p>,
      icon: <img className='skillIcons' src="./src/icons/Express.png" alt="Express.js icon" />,
    },
    {
      name: <p className='skillName'> MongoDB</p>,
      icon: <img className='skillIcons' src="./src/icons/Mongodb.png" alt="MongoDB icon" />,
    }, 
    { 
      name: <p className='skillName'> GitHub</p>,
      icon: <img className='skillIcons' src="./src/icons/github.png" alt="GitHub icon" />,
    }
  ]
    return (
    <>
        <section>
            <div className="skills">
            {skills.map(skill => (
            <span key={skill.name}>{skill.icon}     
            {skill.name}</span>  
            ))}
            </div>  
              
        </section>
    </>
    
  )
}

export default Skills
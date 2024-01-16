// Project: Portfolio
import { useState } from 'react'

import './App.css'

function App() {

  const [projects, setProjects] = useState([
    {
      name: <h4 className='skillName'> Project 1</h4>, 
      description: 'A description of project 1',
      image: 'project1.png',
      githubLink: 'https://github.com/...',
      demoLink: 'https://myproject1.com'
    },
    {
      name: <h4 className='skillName'> Project 2 </h4>,
      description: 'A description of project 2',  
      image: 'project2.png',
      githubLink: 'https://github.com/...',
      demoLink: 'https://myproject2.com'
    }
  ])

  const skills = [
    {
      name: <h4 className='skillName'> HTML</h4>,
      icon: <img className='skillIcons' src="./src/icons/html5.png" alt="HTML5 icon" />,
    },
    {
      name: <h4 className='skillName'> CSS</h4>,
      icon: <img className='skillIcons' src="./src/icons/CSS.png" alt="CSS3 icon" />,
    },
    {
      name: <h4 className='skillName'> JavaScript</h4>,
      icon: <img className='skillIcons' src="./src/icons/js.png" alt="JavaScript icon" />,
    },
    {
      name: <h4 className='skillName'> React.js</h4>,
      icon: <img className='skillIcons' src="./src/icons/science.png" alt="React.js icon" />,

    },
    {
      name: <h4 className='skillName'> Node.js</h4>,
      icon: <img className='skillIcons' src="./src/icons/nodejs.png" alt="Node.js icon" />,
    },
    {
      name: <h4 className='skillName'> Express.js</h4>,
      icon: <img className='skillIcons' src="./src/icons/Express.png" alt="Express.js icon" />,
    },
    {
      name: <h4 className='skillName'> MongoDB</h4>,
      icon: <img className='skillIcons' src="./src/icons/Mongodb.png" alt="MongoDB icon" />,
    }, 
    { 
      name: <h4 className='skillName'> GitHub</h4>,
      icon: <img className='skillIcons' src="./src/icons/github.png" alt="GitHub icon" />,
    }
  ]

  const [contactForm, setContactForm] = useState({
    name:  '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // submit form data
  }

  return (
  <>
    <div className='App'>
      {/* About section */}
      <section className='about'>
        <img className='avatar' src="src/images/Avatar.jpeg" alt="Logan Krieger" />
        <p>
          At the intersection of web development, data analysis, and business development lies my unique skillset – a trifecta that fuels my work and drives your success.

          As a Web Development Specialist, I transform your ideas into reality by leveraging the latest technologies to create responsive, user-friendly websites. Be it an engaging e-commerce platform or a dynamic blog, I ensure every line of code contributes to an intuitive user experience and aesthetic appeal.

          And with a background in Business Development , I understand the importance of growth and expansion for every organization. Utilizing my web development and data analysis skills, I provide services that lead to your business growth.
        </p>
      </section>
        <div className="skills">
          {skills.map(skill => (
            <span key={skill.name}>{skill.icon}{skill.name}</span>  
          ))}
        </div>

      {/* Projects section */}
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

      {/* Contact section */}
      <section id="contact">
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            placeholder="Name"
            name="name"
            value={contactForm.name}
            onChange={handleChange}  
          />
          <input
            type="email" 
            placeholder="Email"
            name="email"
            value={contactForm.email}
            onChange={handleChange}
          />
          <input 
            type='phone'
            placeholder="Phone"
            name="phone"
            value={contactForm.phone}
            onChange={handleChange}
          />
          <textarea
            placeholder="Message"
            name="message"
            value={contactForm.message}
            onChange={handleChange}  
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </section>

     {/* Footer */}
     <footer> 
     <p>&copy; Logan Krieger 2023</p>
     </footer>


    </div>
  </>

  )
}

export default App




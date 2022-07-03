import React from 'react'
import './about.css'
import SHE from '../../assets/she.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {FaLaptopCode} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={SHE} alt="she"></img>
          </div>
        </div>

      <div className='about_content'>
          <div className="about_cards">    
          <article className='about_card'>
              <FaLaptopCode className='about_icon'/>
              <h5>Programming Languages</h5>
              <small>Frontend: JavaScript | Backend: Java - Spring</small>
            </article>

            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>8+ Months Student DEVinHouse</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
        </div>

        <p>
          Hello, my name is Gesiel Neves. I am 43 years old, graduated in Sistemas de Innformação from Estacio.

           I'm currently taking DEVinHouse, Dev FullStack training course.

          In this course I already got knowledge on the frontend about HTML, CSS, JavaScript and React. And, on the backend: Java, Spring Boot, Spring Security and database using PostgreSQL. In addition, during the course, concepts of methodologies such as Scrum and Kanban, code versioning using Git and some Docker commands were worked on.
          In addition to this knowledge, I recently learned and am learning about TDD, Unit and Integration Testing, both for the backend (in Java Spring) and for the frontend (in React).

   
        </p>

        </div>
      </div>
    </section>
  )
}

export default About
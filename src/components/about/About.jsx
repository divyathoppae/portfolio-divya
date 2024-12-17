import React from 'react'
import './about.css'
import myImage from '../../assets/my-image2.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h2>Divya Thoppae</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
          <p>
                    I'm a second year student at Northeastern University pursuing a degree in <b>Computer Science and Fintech</b>. 
                    I'm passionate about the intersection of technolgy and business to drive innovation.
                    I have built a solid foundation in object oriented design, analyzing data and creating
                    projects. I am excited to use these experiences to take on new complex challenges
                    in this field!
                    
            </p>

            {/* <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>Bsc.(Hons) Software Engneering(UG) <br /><i>University of Kelaniya.</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Current GPA</h5>
                  <small>3.21</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>Net Centric</li>
                      <li>Mobile Applications</li>
                    </ul>
                  </small>
              </article>

              

            </div> */}
            

          </div>
      </div>
    </section>
  )
}

export default About
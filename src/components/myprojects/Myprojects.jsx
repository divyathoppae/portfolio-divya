import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/img5.jpg'
import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Stock GUI</h3>
            <small className='text-light'>a Java-based desktop application that allows users to track
               and analyze stock market data through an intuitive graphical interface.
                It enables users to visualize stock trends, compare performances, and make data-driven financial
                 decisions.</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/divyathoppae/StockGUIProject" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Minesweeper</h3>
            <small className='text-light'>a Java-based implementation of the classic logic puzzle game, where players
               uncover tiles while avoiding hidden mines. It features a user-friendly interface and customizable difficulty
                levels, offering both challenge and entertainment.</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/divyathoppae/Minesweeper" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>My Portfolio(This website)</h3>
            <small className='text-light'>a personal website showcasing my skills, experiences, and projects,
               built using modern web development tools like HTML, CSS, and JavaScript. It serves as a dynamic
                platform to highlight my work, share my journey, and connect with potential collaborators or employers.</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/divyathoppae/portfolio-divya" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://divyathoppae.github.io/portfolio-divya" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Myprojects
import React from 'react'
import './home.css'
const Home=()=> {
    return (
        <div style={{marginTop:'3rem'}}>
        <section id="features" class="features">
        <div class="container">
  
          <div class="section-title" data-aos="fade-up">
            <p>Easy Learning</p>
            <h6>Super charge your learning process using AI</h6>
            
          </div>
  
          <div class="row" data-aos="fade-left">
            
            <div class="col-lg-12 col-md-12 mt-4 mt-md-0">
              <div class="icon-box" data-aos="zoom-in" data-aos-delay="100">
                <i class="fa fa-bar-chart" style={{color: '#5578ff'}}></i>
                <h3><a href="">Simplyify and break down topics and entities in complex academic text or Research papers</a></h3>
              </div>
            </div>
            <div class="col-lg-12 col-md-12 mt-4 mt-md-0">
              <div class="icon-box" data-aos="zoom-in" data-aos-delay="150">
                <i class="fa fa-file-text-o" style={{color: '#ffbb2c'}}></i>
                <h3><a href="">Get easy to understand summary and boost your learning</a></h3>
              </div>
            </div>
            
            
            
            
            
            
          </div>
  
        </div>
      </section>
        </div>
    )
}


export default Home;
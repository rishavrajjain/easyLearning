import React,{ useContext,useEffect,useState } from 'react'
import { Link } from 'react-router-dom';

import './navbar.css'










const Navbar = (props) => {

    
    

    

    


    
    

    

   

    

      

    

    
    return (
        <nav className="navbar navbar-expand-lg fixed-top text-dark portfolio-navbar">
        <div className="container-fluid"><Link className="navbar-brand logo" to="/">Easy Learning</Link><button data-toggle="collapse" className="navbar-toggler" data-target="#navbarNav"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"><i class="fa fa-bars" style={{color:'#fff'}}></i></span></button>
            <div className="collapse navbar-collapse"
                id="navbarNav">
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item" role="presentation"><Link className="nav-link left" to="/dashboard">Learn</Link></li>
                    
                    
                    
                    
                    

                    
                    
                    
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Navbar;

import React from 'react'
import {FiFacebook,FiTwitter,FiGithub,FiInstagram,FiLinkedin,} from "react-icons/fi";
import { AiOutlineReddit } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Button from '../routes/Button'
import "./Footer.css"

const today = new Date()
const Footer = ({text}) => {
    return(
        
        <div className='footer'>
    <section class="semicircle">
    <h1 className='connect'>Let's connect</h1>
 <p className='para-connect'>Would you like to stay connected, feel free to message me.</p>
 <div className='email'>
     <Button text={"Say hello"}/>
     </div>
    </section>
    <div className='footer-nav'>
    <ul className='social'>
            <li><a href='https://www.reddit.com/uiser/amr0b0tx'><AiOutlineReddit/></a></li>
             <li><a href="https://twitter.com/iamr0b0tx"><FiTwitter/></a></li>
             <li><a href="https://web.facebook.com/abduladeneye"><FiFacebook/></a></li>
            <li><a href="https://www.github.com/iamr0b0tx"><FiGithub/></a></li>
           <li> <a href="https://www.linkedin.com/in/abduladeneye/"><FiLinkedin/></a></li>
            <li><a href='https://www.instagram.com/iamr0b0tx/'><FiInstagram/></a></li>
            </ul>
    <ul className='nav-social'>
        <li> <Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/work">Work</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </ul>
    </div>
    <div className='coder'>
        <p className='copy'>&copy; Abdulfatah Adeneye {today.getFullYear()}
        </p>
        <p className='copy one'> Designed and coded by motuncoded</p>
    </div>
            </div>
        
            
    )
}

export default Footer

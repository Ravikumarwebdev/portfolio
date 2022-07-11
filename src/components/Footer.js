import '../styles/footer.css'
import {BsGithub} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="social-icon">
            <a href="https://www.linkedin.com/in/ravi-kumar-97372b182" target='blank' style={{color:'white'}}><FaLinkedinIn /></a>
            <a href="https://github.com/Ravikumarwebdev" target='blank' style={{color:'white'}}><BsGithub /></a>
            <a href="https://wa.link/6bwz72" target='blank' style={{color:'white'}}><FaWhatsapp /></a>
        </div>
        <p>Copyright 2022. All Rights Reserved</p>
    </footer>
  )
}

export default Footer;
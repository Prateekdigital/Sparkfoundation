import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook} from 'react-icons/fa';
import '../Component/footer.css'
const Footer = () => {
  return (
    <div className='myFooter'>
         <div className="brand">The Spark Foundation</div>
         <div className="lists">
            <li>Html</li>
            <li>Css</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Jquery</li>
         </div>
         
         <div className="Adress">
              <p><FaGithub /></p>
              <p><FaLinkedin/></p>
              <p><FaFacebook/></p>
         </div>
         
    </div>
  )
}

export default Footer

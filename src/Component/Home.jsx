import React from 'react'
import "../Component/home.css"
import Nav from 'react-bootstrap/Nav';


const Home = () => {

return (
    
    
    <div className='notecontainer'>
        <div className='content'>
            <h1>Welcome to Spark Bank</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa sapiente aperiam eum in expedita at mollitia modi. Quia, fuga, quis repudiandae ratione impedit saepe ullam exercitationem consequuntur perspiciatis mollitia laudantium!</p>
            <Nav.Link href="/Transfer" className='mybtn'>Transfer Money</Nav.Link>
            <Nav.Link href="/Contact" className='mybtn'>Enquiry</Nav.Link>

        </div>
        <div className='imgcontainer'></div>
    </div>
   
  )
}

export default Home

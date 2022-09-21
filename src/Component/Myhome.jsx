import React from 'react'
import "../Component/myhome.css"

const Myhome = (props) => {
  return (
    <div className='myhome'>
        <div className='content'>
            <h1>{props.brand}</h1>
            <p>{props.text}</p>
        </div>
        <div className='imagecontainer'><img src={props.img} alt="Avatar_img"/></div>   
    </div>
  )
}

export default Myhome

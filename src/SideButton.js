import React from 'react'
import { Store } from './Context';
import { useState, useEffect, useContext } from 'react';
import './SideButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faDiamond } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'


function SideButtons() {
  const { Button1, setButton1, Button2, setButton2} = useContext(Store)

  return (
    <div className='buttonsContainer'>
      <div className='buttonContainer'>
        <button
          className={Button1 ? "buttonON" : "buttonOFF"}
          onClick={() => setButton1(!Button1)}
        >
          <button
            className='slider'
            onClick={() => setButton1(!Button1)}
            style={Button1 ? { transform: `translateX(-5px)`, transition: `0.5s` } : { transform: `translateX(20px)`, transition: `0.5s` }}
          ></button>
        </button>
        <FontAwesomeIcon icon={faCircle} size="xs" color="black" style={{ height: "25px", marginLeft: "20px" }} />
        <div className='description'>{`Topical bimatoprost 0.03% QD, all fellow eyes (n=75)`}</div>
      </div>
      <div className='buttonContainer'>
        <button
          className={Button2 ? "buttonON" : "buttonOFF"}
          onClick={() => setButton2(!Button2)}
        >
          <button
            className='slider'
            onClick={() => setButton2(!Button2)}
            style={Button2 ? { transform: `translateX(-5px)`, transition: `0.5s` } : { transform: `translateX(20px)`, transition: `0.5s` }}
          ></button>
        </button>
        <FontAwesomeIcon icon={faCircle} style={{  height: "25px", marginLeft: "20px" }} color="blue" />
        <div className='description'>{`Bimatoprost implant (n=75, all doses)`}</div>
      </div>
    </div>
  )
}

export default SideButtons
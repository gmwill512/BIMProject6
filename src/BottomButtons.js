import React from 'react'
import { Store } from './Context';
import { useState, useEffect, useContext } from 'react';
import './BottomButtons.css'

function BottomButtons() {
    const { Button1, setButton1, Button2, setButton2, Button3, setButton3, Button4, setButton4, Button5, setButton5 } = useContext(Store)




    useEffect(() => {
    }, [Button1, setButton1, Button2, setButton2, Button3, setButton3, Button4, setButton4])

    return (
        <div className='BottomButtonsContainer'>
            <div className='BotttombuttonContainer'>
                <button onClick={() => setButton4(!Button4)}
                className= {Button4 ? "buttonOff" : "buttonOn"}
                
                >
                    ADD BREAKPOINT
                </button>
            </div>
            <div className='BottombuttonContainer'>
                <button onClick={() => setButton5(!Button5)}
                className= {Button5 ? "buttonOff" : "buttonOn"}

                >
                    SHOW DATA
                </button>
            </div>

        </div>
    )
}

export default BottomButtons
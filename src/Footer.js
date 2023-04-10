import React from 'react'
import './Footer.css'

function Footers() {
    return (
        <div className='footerContainer'>
            <div className='footer'>
                <div style={{marginTop: '10px'}}><sup>a</sup>{`Data are presented as number of patients (%)`}<sup>7</sup></div>
                <div><sup>b</sup>{`Phase 1/2, prospective, 24-month, dose-ranging, paired-eye controlled clinical trial.`}<sup>7</sup></div>
                <div><sup>c</sup>{`Any ocular adverse event.`}<sup>7</sup></div>
                <div><sup>d</sup>{`Error bars show the SD. The blue arrow indicates the timing of bimatoprost implant administration`}<sup>7</sup></div>
                <div style={{marginTop:"15px"}}>{`References:`}</div>
                <div >{`7. Craven ER, et al. Drugs. 2020;80(2):167-179;`}</div>
                </div>
        </div>
    )
}

export default Footers
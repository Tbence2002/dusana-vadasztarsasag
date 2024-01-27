import React from 'react'
import "./Home.css";
import heroimage from '../../assets/hero.jpg';

function Hero() {
    return (
        <>
            <div className='hero-container'>
                <div className='hero-image'>
                    <img src={heroimage} alt="Hero" />
                </div>
                <div className='hero-text'>
                    <h1>Dusána <span>Vadásztársaság</span></h1>
                    <h2><span>Budapesttől</span> 250km-re</h2>
                    13000 hektárnyi területtel rendelkezünk, mely főként mezőgazdasági és <br /> árterületeket foglal magában.
                    A területünk kiválóan alkalmas apróvad vadászatra, <br />és büszkék vagyunk arra, hogy olyan jellemző vadfajoknak ad otthont, mint a mezei nyúl,<br /> fácán, vizivad, őz, vaddisznó és váltóvadként még a gímszarvas is megtalálható.
                </div>
            </div>
        </>
    )
}

export default Hero
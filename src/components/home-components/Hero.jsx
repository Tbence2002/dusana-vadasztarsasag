import React from 'react'
import "./Home.css";
import heroimage from '../../assets/hero.jpg';
import {motion} from 'framer-motion'

function Hero() {
    return (
        <>
            <motion.div className='hero-container'
             initial="hidden"
             whileInView="visible"
             viewport={{ once: false }}
             transition={{ duration: 0.3 }}
             variants={{
                 visible: { opacity: 1, scale: 1 },
                 hidden: { opacity: 0, scale: 0 }
             }}>
                <div className='hero-image'>
                    <img src={heroimage} alt="Hero" />
                </div>
                <div className='hero-text'>
                    <h1>Dusána <span>Vadásztársaság</span></h1>
                    <h2><span>Budapesttől</span> 250km-re</h2>
                    13000 hektárnyi területtel rendelkezünk, mely főként mezőgazdasági és <br /> árterületeket foglal magában.
                    A területünk kiválóan alkalmas apróvad vadászatra, <br />és büszkék vagyunk arra, hogy olyan jellemző vadfajoknak ad otthont, mint a mezei nyúl,<br /> fácán, vizivad, őz, vaddisznó és váltóvadként még a gímszarvas is megtalálható.
                </div>
            </motion.div>
        </>
    )
}

export default Hero
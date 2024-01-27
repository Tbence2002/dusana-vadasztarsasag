import React from 'react'
import "./footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import footer from "../../assets/footer.jpg"

function Footer() {
    return (
        <section className='footer-container'>
            <div className="footer-content">
                <div className="footer-left">
                </div>
                <div className="footer-image">
                    <img src={footer} alt="Török Bence" />
                </div>
                <div className="footer-text">
                    <div className="footer-about">
                        <h3>Török Bence</h3>
                        <p>Junior Frontend Fejlesztő</p>
                        <div className="footer-icons">
                            <div className="github">
                            <a href="https://github.com/Tbence2002" target="_blank" rel="noreferrer"><FaGithub /></a>
                            </div>
                            <div className="linkedin">
                                <a href="https://www.linkedin.com/in/t%C3%B6r%C3%B6k-bence-50653227b/" target="_blank" rel='noreferrer'><FaLinkedin /></a>
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="footer-contact">
                        <h3>Elérhetőség</h3>
                        <div className="email">
                            <MdEmail className='email-icon' />
                            <a href="mailto:torokbencee.2002@gmail.com" rel="noreferrer">torokbencee.2002@gmail.com</a>
                        </div>
                        <div className="website">
                            <CgWebsite className='website-icon' />
                            <a href="https://torokbence-dev.hu/" target='_blank' rel="noreferrer">torokbence-dev.hu</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
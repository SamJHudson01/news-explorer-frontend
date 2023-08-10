import React from 'react';
import githubIcon from '../../images/github.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p className='footer__copyright'>© 2022 Supersite, Powered by News API</p>
            <div className="footer__group-right">
                <div className="footer__links">
                    <a href="/home" className="footer__home-link">
                        Home
                    </a>
                    <a href="https://tripleten.com/" className="footer__triple-ten-link">
                        TripleTen
                    </a>
                </div>
                <div className="footer__socials">
                    <a href="https://github.com/SamJHudson01" className="footer__github-link">
                        <img src={githubIcon} alt="GitHub Icon" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
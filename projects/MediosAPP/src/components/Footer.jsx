import React from "react";
import '../styles/Footer.css';

import logouni from '../assets/logo_unicauca.png';
import facebook from '../assets/icons8-facebook-30.png';
import instragram from '../assets/icons8-instagram-24.png';
import twitter from '../assets/icons8-twitter-30.png';
import youtube from '../assets/icons8-youtube-play-24.png';

const Footer = () => {
    return(
        <footer>
        <div className="container">
            <div className="footer-left">
                <ul>
                    <li>
                        <img src={logouni} alt="" className="logo-uni" />
                        <p>Copyright 2024©</p>
                    </li>
                </ul>
            </div>
            <div className="footer-rigth">
                <div>
                    <h3>Grupo</h3>
                    <ul className="list-3">
                        <li><a href="">Andrea</a></li>
                        <li><a href="">Duber Elian</a></li>
                        <li><a href="">Camilo Sauca</a></li>
                        <li><a href="">Daniel Fernando Morales Calambas</a></li>
                    </ul>
                </div>
                <div className="container-icons">                
                    <img src={facebook} alt="" />
                    <a href="https://www.instagram.com/danferjr/"><img src={instragram} alt=""/></a>
                    <img src={twitter} alt="" />
                    <img src={youtube} alt=""/>
                </div>
            </div>
        </div>
    </footer> 
    );
}
export default Footer;
import './footer.styles.scss';
import React, { Component } from 'react';
import LineIcon from 'react-lineicons';
import Logo2 from '../../../src/assets/logo-light.svg'
import LogoIcon from '../../../src/assets/logo-icon.svg'
import GooglePlay from '../../assets/images/google-play.png';
import AppStore from '../../assets/images/app-store.png';

const Footer = () =>  (
    <div className='footer'>
         <div className='container'>
                <div className='col'>
                    <div className='logo-wrapper'>
                        <img src={Logo2} alt='logo'/>
                    </div>
                    <div className='download-section'>
                        <a href='#'><img src={GooglePlay} /></a>
                        <a href='#'><img src={AppStore} /></a>
                    </div>
                </div>
                <div className='col'>
                    <h2>Quick Links</h2>
                    <ul className='quicklinks'>
                        <li><a>Ride</a></li>
                        <li><a>Drive</a></li>
                        <li><a>Fleet</a></li>
                        <li><a>Business</a></li>
                        <li><a>Freight</a></li>
                    </ul>
                </div>
                <div className='col'>
                    <h2>Contact us</h2>
                    <ul className='contact'>
                       <li><a mailto='info@hala.ng'>info@hala.com</a></li> 
                       <li><a tel='09090092222'>09090092222</a></li>
                    </ul>
                
                    <ul className='socials'>
                        <li><a><LineIcon size='sm' effect='tada' name="facebook-filled" /></a></li>
                        <li><a><LineIcon size='sm' effect='tada' name="twitter-filled" /></a></li>
                        <li><a><LineIcon size='sm' effect='tada' name="linkedin-filled" /></a></li>
                    </ul>
                </div>
            </div>
            <div className='bottom-footer'>
                &copy; 2019 Hala. All rights reserved
            </div>
    </div>
)

export default Footer;
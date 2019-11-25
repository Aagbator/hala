import React from 'react';
import './homepage.styles.scss';
import CityIcon from '../assets/images/icons/city.svg'
import SmartphoneIcon from '../assets/images/icons/smartphone.svg';
import RideIcon from '../assets/images/icons/ride.svg';
import ShieldIcon from '../assets/images/icons/shield.svg';
import CheapIcon from '../assets/images/icons/cheap.svg';
import ClockIcon from '../assets/images/icons/clock.svg';
import GooglePlay from '../assets/images/google-play.png';
import AppStore from '../assets/images/app-store.png';
import Mockup from '../assets/images/mockup.png';

const Homepage = () => (
    <div>
        <div className='homepage-banner'>
        <div className='homepage-banner-content'>
            <h6>Hala your next ride</h6>
            <h1>Ride with ease, <br></br> fast and affordable</h1>
        </div>
        </div>
        <section className='highlight-section'>
            <div className='container'>
                <div className='col'>
                    <img src={RideIcon} alt='ride'/>
                    <h2>Get a Ride</h2>
                    <p>Hala offers you a ride in minutes</p>
                </div>
                <div className='col'>
                    <img src={CityIcon} alt='city' />
                    <h2>The best prices</h2>
                    <p>We offer the best prices in your city</p>
                </div>
                <div className='col'>
                    <img src={SmartphoneIcon} alt='smartphone' />
                    <h2>Easy to use</h2>
                    <p>Get wherever you need to go as quickly as possible</p>
                </div>
            </div>
        </section>
        <section className='showcase-section'>
            <div className='container'>
                <div className='col'>
                    <h1>What are you waiting for?</h1>
                    <p>Pick your destination, request a ride, meet your driver, enjoy the journey.</p>
                    <div className='download-section'>
                        <a href='#'><img src={GooglePlay} /></a>
                        <a href='#'><img src={AppStore} /></a>
                    </div>
                </div>
                <div className='col'>
                    <div className='showcase-display'>
                        <img src={Mockup} />
                    </div>
                </div>
            </div>
        </section>
        <section className='benefits-section container'>
            <div className='container'>
                <div className='col'>
                    <img src={ShieldIcon} alt='safe'/>
                    <h2>Ride Safe</h2>
                    <p>Know in advance the car that is going to pick you up. 
                        Share your ride and let others know exactly where you are. 
                        Contact our support team 24/7
                    </p>
                </div>
                <div className='col'>
                    <img src={CheapIcon} alt='pay less' />
                    <h2>Pay Less</h2>
                    <p>Great cars and a fantastic experience at everyday prices. 
                        Move around your city with less and unlock its endless possibilities.</p>
                </div>
                <div className='col'>
                    <img src={ClockIcon} alt='fast' />
                    <h2>Get There Fast</h2>
                    <p>Thousands of drivers are available 24/7 at the tap of a button. 
                        Just pick your destination and get there fast, whenever you need so. </p>
                </div>
            </div>
        </section>
    </div>
    
);

export default Homepage;
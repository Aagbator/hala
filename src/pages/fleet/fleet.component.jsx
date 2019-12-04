import React from 'react';
import './fleet.styles.scss';
import carImage from '../../assets/images/car.png';
import TruckImage from '../../assets/images/truck.png';

import WOW from 'wow.js';

class Fleet extends React.Component {
    componentDidMount(){
        window.scrollTo(0, 0);
        const wow = new WOW();
        wow.init();
    }

    render(){
        return (
            <div>
                <div className='fleet-banner'>
                    <div className='fleet-banner-content'>
                        {/* <h6>Why Hala for fleet?</h6> */}
                        <h1>Fleet</h1>
                        {/* <p>
                            Easily define how your people ride via an all-in-one dashboard, and the webdesk
                            does the rest. They&#39;ll never have to worry about taking out-of-policy rides or
                            finding their receipt for expense reports.
                        </p> */}
                    </div>
                </div>
                <section className='fleet-section'>
                    <div className='container'>
                        <div className='col'>
                            <h2>COMFORT</h2>
                            <p>
                                Travel in style and comfort everyday.
                            </p>
                            <ul>
                                <li><strong>Model:</strong>2006 +</li>
                                <li><strong>No of seats:</strong>4</li>
                                <li><strong>Car CC:</strong>1300+</li>
                                <li><strong>Condition:</strong> Neat | Clean | A/C | Approved by MOT</li>
                                <li><strong>Comfortability:</strong>Excellent</li>
                                <li><strong>Luggage:</strong>Good</li>
                            </ul>
                        </div>
                        <div className='col' data-wow-delay='0.5s'>
                            <img className='wow slideInRight' src={carImage} alt='pay less' />
                        </div>
                    </div>
                </section>
                <section className='fleet-section'>
                    <div className='container'>
                        <div className='col' data-wow-delay='0.5s'>
                            <img className='wow slideInLeft' src={TruckImage} alt='pay less' />
                        </div>
                        <div className='col'>
                            <h2>TRUCKS</h2>
                            <p>
                                Get your goods where they need to be on time, every time!
                            </p>
                            <ul>
                            <li>4 TO 6 TON TRUCKS</li>
                            <li><strong>Model:</strong>2006 +</li>
                            <li><strong>No of seats:</strong>1</li>
                            <li><strong>Condition:</strong>Neat | Clean | Road Certified | Approved by MOT</li>
                            <li><strong>Comfortability:</strong>Excellent</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            
        )
    }
}

export default Fleet;
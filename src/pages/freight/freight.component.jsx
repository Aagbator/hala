import React from 'react';
import './freight.styles.scss';
import BusinessManIcon from '../../assets/images/icons/businessman.svg'
import halaTechIcon from '../../assets/images/icons/hala-technology.svg';
import DeliveryTruckIcon from '../../assets/images/icons/delivery-truck.svg';

const Freight = () => (
    <div>
        <div className='freight-banner'>
            <div className='freight-banner-content'>
                {/* <h6>Why Hala for freight?</h6> */}
                <h1>Drive your business forward with hala freight</h1>
                {/* <p>
                    Easily define how your people ride via an all-in-one dashboard, and the webdesk
                    does the rest. They&#39;ll never have to worry about taking out-of-policy rides or
                    finding their receipt for expense reports.
                </p> */}
            </div>
        </div>
        <section className='highlight-section'>
            <div className='container'>
                <div className='col'>
                    <img src={BusinessManIcon} alt='safe'/>
                    <h2>Transparency</h2>
                    <p>
                        With clear, upfront pricing and unrivaled visibility, you always have the information needed to make the right business decisions.
                    </p>
                </div>
                <div className='col'>
                    <img src={DeliveryTruckIcon} alt='fast' />
                    <h2>Freight at your fingertips</h2>
                    <p>Our streamlined workflow and 24/7 support keeps your business rolling, quickly, and efficiently.</p>
                </div>
                <div className='col'>
                    <img src={halaTechIcon} alt='pay less' />
                    <h2>The Hala of freight</h2>
                    <p>Hala technology has revolutionized the way people move. Now, we’re doing the same for the freight industry.</p>
                </div>
            </div>
        </section>
        <section className='action-section'>
            <div className='container'>
                <div className='col'>
                    <h2>I have a truck</h2>
                    <p>
                    Tired of getting poor investment returns? Register your truck on hala today and
watch your money grow.
                    </p>
                    <a>Register as a partner</a>
                </div>
                <div className='col'>
                    <h2>I want to move goods</h2>
                    <p>We partner with trusted shippers and carriers to handle their most important and
immediate cargo needs.</p>
                    <a className='white-outline-btn'>Register as a partner</a>
                </div>
            </div>
        </section>
    </div>
    
);

export default Freight;
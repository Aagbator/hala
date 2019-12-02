import React from 'react';
import './drive.styles.scss';
import UploadIcon from '../../assets/images/icons/upload.svg'
import CashIcon from '../../assets/images/icons/cash.svg';
import ClockIcon from '../../assets/images/icons/clock.svg';
import LoginIcon from '../../assets/images/icons/log-in.svg';
import BusinessManIcon from '../../assets/images/icons/businessman.svg'

const Drive = () => (
    <div>
        <div className='drive-banner'>
            <div className='drive-banner-content'>
                <h1>Why Hala?</h1>
            </div>
        </div>
        <section className='highlight-section'>
            <div className='container'>
                <div className='col'>
                    <img src={CashIcon} alt='safe'/>
                    <h2>Earn money</h2>
                    <p>Drive with hala and earn extra income..</p>
                </div>
                <div className='col'>
                    <img src={ClockIcon} alt='fast' />
                    <h2>Drive anytime</h2>
                    <p>Work with your own schedule. No minimum hours and no boss.</p>
                </div>
                <div className='col'>
                    <img src={BusinessManIcon} alt='pay less' />
                    <h2>Two plans system</h2>
                    <p>No risk, choose a plan that you like to work it.</p>
                </div>
            </div>
        </section>
        <section className='sign-up-section'>
            <div className='container'>
            <div className='col'>
                    <h1>How to Sign Up</h1>
                </div>
                <div className='col'>
                    <img src={LoginIcon} alt='safe'/>
                    <h2>Register</h2>
                    <p>Enter your valid details</p>
                </div>
                <div className='col'>
                    <img src={UploadIcon} alt='fast' />
                    <h2>Upload Documents</h2>
                    <p>Submit Vehicle and Personal Documents</p>
                </div>
                <div className='col'>
                    <img src={BusinessManIcon} alt='pay less' />
                    <h2>Get Verified!</h2>
                    <p>Becomae a Driver after Document Verification</p>
                </div>
            </div>
        </section>
    </div>
    
);

export default Drive;
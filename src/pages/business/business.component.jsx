import React from 'react';
import './business.styles.scss';
import BudgetIcon from '../../assets/images/icons/budget.svg'
import CreditCardIcon from '../../assets/images/icons/credit-card.svg';
import PolicyIcon from '../../assets/images/icons/policy.svg';
import ShieldIcon from '../../assets/images/icons/shield.svg';

const Business = () => (
    <div>
        <div className='business-banner'>
            <div className='business-banner-content'>
                {/* <h6>Why Hala for Business?</h6> */}
                <h1>Hala for Business</h1>
                <p>
                    Easily define how your people ride via an all-in-one dashboard, and the webdesk
                    does the rest. They&#39;ll never have to worry about taking out-of-policy rides or
                    finding their receipt for expense reports.
                </p>
            </div>
        </div>
        <section className='highlight-section'>
            <div className='container'>
                <div className='col'>
                    <img src={CreditCardIcon} alt='safe'/>
                    <h2>Effortless Rides</h2>
                    <p>
                        Pay for your work rides with business credit card, 
                        and skip individual expense reporting.
                    </p>
                </div>
                <div className='col'>
                    <img src={PolicyIcon} alt='fast' />
                    <h2>Clear Policies</h2>
                    <p>Define when and who can use business rides,
                        manage your business on all devices. You can offer both
                        instant and pre-booking services.</p>
                </div>
                <div className='col'>
                    <img src={BudgetIcon} alt='pay less' />
                    <h2>Easy Budgeting</h2>
                    <p>Get a clear overview of your company&#39;s transport expenses in a monthly statement.</p>
                </div>
            </div>
        </section>
    </div>
    
);

export default Business;
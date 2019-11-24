import './navigation.styles.scss';
import React, { Component } from 'react';
import Logo from '../../../src/assets/logo.svg'

class Navigation extends Component {
    state = {isOpen: false}

    render(){
        return(
            <div className='navigation'>
                <div className='main-nav'>
                <div className='logo'>
                    <img src={Logo} height='50' alt='logo' />
                </div>
                <nav>
                    <ul>
                        <li><a>Ride</a></li>
                        <li><a>Drive</a></li>
                        <li><a>Fleet</a></li>
                        <li><a>Business</a></li>
                        <li><a>Freight</a></li>
                    </ul>
                </nav>
                    <a className='get-started'>Sign Up</a>
                </div>
            </div>
        )
    }
}

export default Navigation;
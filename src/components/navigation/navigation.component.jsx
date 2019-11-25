import './navigation.styles.scss';
import React, { Component } from 'react';
import LineIcon from 'react-lineicons';
import Logo from '../../../src/assets/logo.svg'

class Navigation extends Component {
    state = {isOpen: false}

    toggleMenu = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    render(){
        return(
            <div className='navigation'>
                <div className='main-nav'>
                    <div className='logo'>
                        <img src={Logo} height='50' alt='logo' />
                    </div>
                    <nav className={`nav-menu ${this.state.isOpen ? 'is-open' : ''}`}>
                        <ul>
                            <li><a>Ride</a></li>
                            <li><a>Drive</a></li>
                            <li><a>Fleet</a></li>
                            <li><a>Business</a></li>
                            <li><a>Freight</a></li>
                        </ul>
                        <span onClick={this.toggleMenu} className='close-btn'><LineIcon size='sm' effect='tada' name="close" /></span>
                    </nav>
                    <a className='get-started'>Sign Up</a>
                    <span onClick={this.toggleMenu} className='open-btn'><LineIcon size='md' effect='tada' name="menu" /></span>
                </div>
            </div>
        )
    }
}

export default Navigation;
import './navigation.styles.scss';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
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
                    <NavLink to='/'>
                    <div className='logo'>
                        <img src={Logo} height='50' alt='logo' />
                    </div>
                    </NavLink>
                    <nav className={`nav-menu ${this.state.isOpen ? 'is-open' : ''}`}>
                        <ul>
                            <li><NavLink exact activeClassName="active" to='/'>Ride</NavLink></li>
                            <li><NavLink activeClassName="active" to='/drive'>Drive</NavLink></li>
                            <li><NavLink activeClassName="active" to='/fleet'>Fleet</NavLink></li>
                            <li><NavLink activeClassName="active" to='/business'>Business</NavLink></li>
                            <li><NavLink activeClassName="active" to='/freight'>Freight</NavLink></li>
                        </ul>
                        <span onClick={this.toggleMenu} className='close-btn'><LineIcon size='sm' effect='tada' name="close" /></span>
                    </nav>
                    {/* <a className='get-started'>Sign Up</a> */}
                    <span onClick={this.toggleMenu} className='open-btn'><LineIcon size='md' effect='tada' name="menu" /></span>
                </div>
            </div>
        )
    }
}

export default Navigation;
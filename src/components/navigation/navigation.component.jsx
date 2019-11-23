import './navigation.styles.scss';
import React, { Component } from 'react';

class Navigation extends Component {
    state = {isOpen: false}

    render(){
        return(
            <div className='container'>
                <h1>Hello Navigation</h1>
            </div>
        )
    }
}

export default Navigation;
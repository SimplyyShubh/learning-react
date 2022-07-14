import React from 'react'
import logo from '../reactjs-sm.png' ;

export default (props) =>{
    return (
        <nav>
            <img className ="nav-logo" src= {logo} alt="React Logo" width='50px' />
            <h2 className="heading">ReactFacts</h2>
            <div className="courseTitle">
                React Course - Project 1
                </div>
        </nav>
    );
}
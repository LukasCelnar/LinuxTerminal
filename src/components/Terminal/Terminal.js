import React, { Component } from 'react';
import './Terminal.css';

export default class Terminal extends Component {
    render() {
        return (
            <div className="terminal">
                <div className="terminal__menu">
                    <span className="terminal__menu-name">name@ubuntu: ~</span>
                    <ul className="terminal__menu-buttons">
                        <li className="terminal__menu-buttons-item"><img className="terminal__menu-buttons-img terminal__menu-minus-button" alt="" src="images/minus2.png" /></li>
                        <li className="terminal__menu-buttons-item"><img className="terminal__menu-buttons-img terminal__menu-rectangle-button" alt="" src="images/rectangle3.png" /></li>
                        <li className="terminal__menu-buttons-item"><img className="terminal__menu-buttons-img terminal__menu-x-button" alt="" src="images/x.png" /></li>
                    </ul>
                </div>
                <div className="terminal__content">
                    <form className="terminal__content-form">
                        <label className="terminal__content-label">
                            <span className="terminal__content-name">name@ubuntu</span>:<span className="terminal__content-tilde">~</span>$&nbsp;&nbsp;
                        </label>
                        <input className="terminal__content-input" />
                    </form>
                </div>
            </div>
        );
    };
};

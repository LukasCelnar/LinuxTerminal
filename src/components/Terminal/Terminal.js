import React, { Component } from 'react';
import TerminalContent from '../TerminalContent/TerminalContent';
import { connect } from 'react-redux';
import { changeInputValue, updateContentHistory } from '../../actions';
import './Terminal.css';

class Terminal extends Component {

    renderContent() {
        return this.props.contentHistory.map((content, index) => {
            // console.log("mapping")
            return <TerminalContent key={index} content={content} />
        });
    };
    

    render() {
        return (
            <div className="terminal">
                <div className="terminal__menu">
                    <span className="terminal__menu-name">name@ubuntu: ~</span>
                    <ul className="terminal__menu-buttons">
                        <li className="terminal__menu-buttons-item"><img className="terminal__menu-buttons-img terminal__menu-minus-button" alt="" src="images/minus.png" /></li>
                        <li className="terminal__menu-buttons-item"><img className="terminal__menu-buttons-img terminal__menu-rectangle-button" alt="" src="images/rectangle.png" /></li>
                        <li className="terminal__menu-buttons-item"><img className="terminal__menu-buttons-img terminal__menu-x-button" alt="" src="images/x.png" /></li>
                    </ul>
                </div>
                <div className="terminal__content">
                    {this.renderContent()}
                    <TerminalContent onFormSubmit={this.onFormSubmit} />
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        contentHistory: state.contentHistory
    }
}

export default connect(mapStateToProps, { changeInputValue, updateContentHistory })(Terminal)
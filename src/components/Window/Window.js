import React, { Component } from 'react';
import TerminalContent from '../TerminalContent/TerminalContent';
import Help from '../Help/Help';
import { connect } from 'react-redux';
import { changeInputValue, updateContentHistory, showWindow } from '../../actions';
import './Window.css';
import Draggable from 'react-draggable';

class Window extends Component {

    renderTerminal() {
        return this.props.contentHistory.map((content, index) => {
            return <TerminalContent key={index} content={content} />
        });
    };

    renderWindow() {
        switch (this.props.type) {
            case 'terminal':
                return (
                    <>
                        {this.renderTerminal()}
                        <TerminalContent onFormSubmit={this.onFormSubmit} />
                    </>
                )
            case 'help':
                return <Help />
            default:
                return null
        }
    }

    render() {
        return (
            <Draggable handle=".window__menu">
                <div className="window">
                    <div className="window__menu">
                        <span className="window__menu-name">{this.props.name}</span>
                        <ul className="window__menu-buttons">
                            <li className="window__menu-buttons-item" onClick={() => this.props.showWindow('')}>
                                <img className="window__menu-buttons-img window__menu-minus-button" alt="" src="images/minus.png" />
                            </li>
                            <li className="window__menu-buttons-item">
                                <img className="window__menu-buttons-img window__menu-rectangle-button" alt="" src="images/rectangle.png" />
                            </li>
                            <li className="window__menu-buttons-item" onClick={() => this.props.showWindow('')}>
                                <img className="window__menu-buttons-img window__menu-x-button" alt="" src="images/x.png" />
                            </li>
                        </ul>
                    </div>
                    <div style={this.props.contentStyles} className="window__content">
                        {this.renderWindow()}
                    </div>
                </div>
            </Draggable>
        );
    };
};

const mapStateToProps = state => {
    return { 
        contentHistory: state.contentHistory }
}

export default connect(mapStateToProps, { changeInputValue, updateContentHistory, showWindow })(Window)
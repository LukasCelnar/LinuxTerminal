import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeInputValue, updateContentHistory, enterCommand } from '../../actions';
import './TerminalContent.css'

class TerminalContent extends Component {

    onFormSubmit = (e) => {
        e.preventDefault()
        /*
            if (this.state.inputValue.split(" ").length === 2 && this.state.inputValue.split(" ")[0] === "mkdir") {
                console.log("you are trying to create dir with name " + this.state.inputValue.split(" ")[1]);
            };
        */
        this.props.enterCommand(this.props.inputValue);
        this.props.updateContentHistory(this.props.inputValue, `you have entered: "${this.props.inputValue}"`);
        this.props.changeInputValue('');
    };

    renderInput() {
        if (!this.props.content) {
            return <input value={this.props.inputValue} onChange={(e) => this.props.changeInputValue(e.target.value)} className="terminal__content-input" />
        }

        return <input value={this.props.content.input} readOnly className="terminal__content-input" />
    }

    render() {

        const name = "name@ubuntu"

        return (
            <form onSubmit={(e) => this.onFormSubmit(e)} className="terminal__content-form">
                <div className="terminal__content-container">
                    <div className="terminal__content-input-container">
                        <label className="terminal__content-label">
                            <span className="terminal__content-name">{name}</span>:<span className="terminal__content-tilde">~</span>$&nbsp;&nbsp;
                        </label>
                        {this.renderInput()}
                    </div>
                    {this.props.content ? <div className="terminal__content-output">{this.props.content.output}</div> : null}
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return { inputValue: state.inputValue }
}

export default connect(mapStateToProps, { changeInputValue, updateContentHistory, enterCommand })(TerminalContent)
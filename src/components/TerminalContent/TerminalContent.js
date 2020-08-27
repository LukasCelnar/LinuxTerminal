import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeInputValue, updateContentHistory} from '../../actions';
import submitCommand from '../../commands/submitCommand';
import './TerminalContent.css'

class TerminalContent extends Component {

    onFormSubmit = (e) => {
        e.preventDefault()

        this.props.submitCommand(this.props.inputValue)
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
                            <span className="terminal__content-name">{name}</span>:<span className="terminal__content-path">~</span>$&nbsp;&nbsp;
                        </label>
                        {this.renderInput()}
                    </div>
                    {
                    this.props.content ? 
                    (
                        <div className="terminal__content-output">
                            {this.props.content.output}
                        </div>
                    )
                    : null
                    }
                </div>
            </form>
        );
    };
}

const mapStateToProps = state => {
    return { inputValue: state.inputValue }
}

export default connect(mapStateToProps, { changeInputValue, updateContentHistory, submitCommand})(TerminalContent)
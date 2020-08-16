import React, { Component } from 'react';

export default class TerminalContent extends Component {

    renderInput() {
        if (this.props.onInputChange) {
            return <input value={this.props.inputValue} onChange={(e) => this.props.onInputChange(e)} className="terminal__content-input" />
        }
        return <input value={this.props.inputValue} readOnly className="terminal__content-input" />
    }

    render() {

        return (
            <form onSubmit={(e) => this.props.onFormSubmit(e)} className="terminal__content-form">
                <div style={{width: '100%'}}>
                    <div className="" style={{display: 'flex', width: '100%'}}>
                        <label className="terminal__content-label">
                            <span className="terminal__content-name">{this.props.name}</span>:<span className="terminal__content-tilde">~</span>$&nbsp;&nbsp;
                        </label>
                        {this.renderInput()}
                    </div>
                    {this.props.output ? <div className="terminal__content-output">{this.props.output}</div> : null}
                </div>
            </form>
        );
    }
}

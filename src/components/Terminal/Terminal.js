import React, { Component } from 'react';
import TerminalContent from '../TerminalContent/TerminalContent';
import './Terminal.css';

export default class Terminal extends Component {
    state = { 
        inputValue: '',
        terminalContent: [
            { input: 'ls', output: 'dir1 file1 dir2' },
            { input: 'mkdir car', output: 'dir1 file1 dir2 car dir1 file1 dir2 car dir1 file1 dir2 car dir1 file1 dir2 car dir1 file1 dir2 car' }
        ]
    };

    componentDidUpdate() {
        // I want to die
        // WTF NOW
        console.log(this.state)

    }

    renderContent() {
        return this.state.terminalContent.map((content, index) => {
            console.log("rendering")
            return (
                <TerminalContent 
                    key={index}
                    onFormSubmit={this.onFormSubmit} 
                    name="name@ubuntu"
                    inputValue={content.input}
                    output={content.output}
                />
            )
        })
    }

    onInputChange = (e) => {
        this.setState({ inputValue: e.target.value })
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.inputValue)
        /*
        if (this.state.inputValue.split(" ").length === 2 && this.state.inputValue.split(" ")[0] === "mkdir") {
            console.log("you are trying to create dir with name " + this.state.inputValue.split(" ")[1]);
        };
        */
       
        this.setState({ terminalContent: [...this.state.terminalContent, { input: this.state.inputValue, output: `You have entered: "${this.state.inputValue}"`}],   })
        this.setState({ inputValue: '' })
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
                    <TerminalContent 
                        onFormSubmit={this.onFormSubmit} 
                        name="name@ubuntu"
                        inputValue={this.state.inputValue}
                        onInputChange={this.onInputChange}
                    />
                </div>
            </div>
        );
    };
};

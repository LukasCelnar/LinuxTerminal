import React, { Component } from 'react';
import './Help.css'

export default class Help extends Component {
    render() {
        return (
            <div className="help">
                <h3>Ubuntu Terminal Guide</h3>
                <div>
                    Hey, my name is Lukas Celnar and today i want to learn you how to use basic and most common commands that you can 
                    use in your Terminal.
                    You might or might not notice but this whole webpage has a UI of Ubuntu.
                    What is Ubuntu you may ask ?
                </div>
                <br />
                <div>
                    <strong>Ubuntu</strong>: is a free operating system that uses the Linux kernel.
                    It is pronounced "oo-boon-too". It is one of the most popular Linux distributions and it is based on 
                    Debian Linux computer operating system.
                    The word "ubuntu" is an African word meaning "humanity to others".
                    Ubuntu is a popular operating system for cloud computing.
                    The goal with Ubuntu is to make it easy to use and install onto a computer. 
                    Ubuntu can be used on all types of personal computers (and even devices such as robots) including in Windows 10
                </div>
                <br />
                <div>
                    Now that we have ubuntu out of the way, i would want to learn you some words that are
                    really important in this world and that might confuse you later:
                </div>
                <br />
                <div>
                    <strong>Terminal</strong>: the text interface to the shell program, can't do anything on its own apart from giving 
                    input to the shell and displaying output from shell
                </div>
                <br />
                <div>
                    <strong>Shell</strong>: a program that processes commands and returns an output, for example terminal runs a shell
                    is an interface between a user and OS to access to an operating system's services. 
                    It can be either GUI or CLI (Command Line interface)
                </div>
                <br />
                <div>
                    <strong>sh (Bourne SHell)</strong>: is type of shell program (or shell language).
                </div>
                <br />
                <div>
                    <strong>bash (Bourne Again SHell)</strong>: is a type of shell program (or shell language). 
                    Bash and shell aren't synonymous. Bash is superset of sh.
                </div>
                <br />
                <div>
                    Bash will most likely be your default type of shell after installing ubuntu to be completly sure you can 
                    type: echo $SHELL which gives the full path to your default shell. And echo $0 which gives the name of your 
                    current shell.
                </div>
                <br />
                <div>
                    <strong>Command line interface (CLI)</strong>: is just a style of user interface that requires users to type in commands to get the computer 
                    to do stuff as opposed to for example a GUI (Graphical user interface) where the user clicks.
                </div>
                <br />
                <div>
                    <strong>Console</strong>: refers to physical device like monitor and keyboard that is running a terminal that the user types commands
                    into, but in essence it is just a terminal
                </div>
                <br />
                <div>
                    You might not see why we need to know this right now, but trust me, it will come handy in your future
                </div>
                <br />
                <div>
                    Now lets get to the fun part, now are going to learn shell commands
                </div>
                <br />
                <br />
                <br />
            </div>
        );
    };
};

import React, { Component } from 'react';
import Terminal from './Terminal/Terminal';
import FileMenu from './FileMenu/FileMenu';
import './App.css';
import SystemMenu from './SystemMenu/SystemMenu';

export default class App extends Component {
    render() {
        return (
            <div>
                <SystemMenu />
                <FileMenu />
                <Terminal />
            </div>
        );
    };
};
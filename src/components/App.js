import React, { Component } from 'react';
import FileMenu from './FileMenu/FileMenu';
import SystemMenu from './SystemMenu/SystemMenu';
import { connect } from 'react-redux';
import Window from './Window/Window'
import './App.css';


class App extends Component {

    renderWindow() {
        switch (this.props.window) {
            case 'terminal':
                return <Window name='name@ubuntu: ~' type='terminal' />
            case 'help':
                return <Window  name='Ubuntu Terminal Guide' type='help' contentStyles={{padding: 0, backgroundColor: '#fff'}} />
            default:
                return null
        }
    }

    render() {

        return (
            <div>
                <SystemMenu />
                <FileMenu />
                {this.renderWindow()}
            </div>
        );
    };
};

const mapStateToProps = state => {
    return { window: state.window }
}

export default connect(mapStateToProps)(App)
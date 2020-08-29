import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showWindow } from '../../actions'
import './FileMenu.css'

class FileMenu extends Component {

    render() {
        return (
            <div className="file-menu file-menu__first-icon">
                <div className="file-menu__image-container">
                    <img onClick={() => this.props.showWindow('terminal')} className="file-menu__image" src="/images/terminal.png" alt="" />
                </div>
                <div className="file-menu__image-container">
                    <img onClick={() => this.props.showWindow('help')} className="file-menu__image" src="/images/help.png" alt="" />
                </div>
            </div>
        );
    };
};

export default connect(null, { showWindow })(FileMenu);

import React, { Component } from 'react';
import './FileMenu.css'

class FileMenu extends Component {
    render() {
        return (
            <div className="file-menu file-menu__first-icon">
                <div className="file-menu__image-container">
                    <img className="file-menu__image" src="/images/firefox.png" alt="" />
                </div>
                <div className="file-menu__image-container">
                    <img className="file-menu__image" src="/images/folder.png" alt="" />
                </div>
                <div className="file-menu__image-container">
                    <img className="file-menu__image" src="/images/terminal.png" alt="" />
                </div>
                <div className="file-menu__image-container">
                    <img className="file-menu__image" src="/images/help.png" alt="" />
                </div>
                <div className="file-menu__image-container file-menu__menu-icon">
                    <img className="file-menu__image" src="/images/menu.png" alt="" />
                </div>
            </div>
        );
    };
};

export default FileMenu;

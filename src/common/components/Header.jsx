import React from 'react';
import $ from "jquery";

class Logo extends React.PureComponent {

    render() {
        let logoStyle = {
            ...this.props.style,
            paddingLeft: "5px",
            paddingTop: "13px",
            width: '160px'
        };

        return (
            <img style={logoStyle} />
        )
    }
}

class FullScreen extends React.PureComponent {

    handleToggle() {
        const $body = $('body');
        if (!$body.hasClass("full-screen")) {
            $body.addClass("full-screen");
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            }
        } else {
            $body.removeClass("full-screen");
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }
    
    render() {
        return (
            <div id="fullscreen" onClick={this.handleToggle} className={this.props.className}>
                <span>
                    <button className="tool" title="Full Screen">
                        <i className="fa fa-arrows-alt" />
                    </button>
                </span>
            </div>
        )
    }
}

export default class Header extends React.PureComponent {
    
    render() {
        return (
            <header id="header">
                <a id="downloadLink" style={{display: 'none'}} />
                <div id="logo-group">
                    <span id="logo">
                        <Logo className="logo" />
                    </span>
                </div>
                <div className="baseline" />
                <div className="pull-right">
                    <FullScreen className="pull-right" />
                </div>
            </header>
        )
    }
}
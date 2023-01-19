import React from 'react';

export default class ContentsHeader extends React.PureComponent {

    render() {
        return (
            <header className="content-header">
                <div className="header-title">
                    <h2>{this.props.title}</h2>
                    <h4>{this.props.description}</h4>
                </div>
            </header>
        )
    }
}
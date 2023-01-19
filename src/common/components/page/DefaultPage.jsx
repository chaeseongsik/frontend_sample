import React from 'react';
import ContentsHeader from './ContentsHeader';

export default class DefaultPage extends React.PureComponent {

    render() {
        return (
            <div className="default-page" style={this.props.mainStyle ? this.props.mainStyle : null}>
                <ContentsHeader title={this.props.title} description={this.props.description} />
                <main style={this.props.mainStyle ? this.props.mainStyle : null}>
                    {this.props.children}
                </main>
            </div>
        )
    }
}
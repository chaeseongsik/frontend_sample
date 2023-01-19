import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Layout extends React.PureComponent {

    render() {
        return (
            <React.Fragment>
                <div>
                    <Header />
                    <div id="main" role="main">
                        <div id="content" className="container-mod">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default connect(
    (state) => state,
    (dispatch) => ({

    })
)(Layout);
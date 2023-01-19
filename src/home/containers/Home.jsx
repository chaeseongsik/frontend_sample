import React from 'react';
import { connect } from 'react-redux';
import { actionCreators as HomeActionCreators } from '../../store/Home';

class Home extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            </React.Fragment>
        )
    }
}

export default connect(
    (state) => ({ home: state.home }),
    HomeActionCreators
)(Home);
import React from 'react';

export default class TabPanel extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <ul className="nav nav-tabs">
                    {
                        this.props.tabs.map((item) => {
                            return (
                                <li key={item.id} className="nav-item">
                                    <a className={this.props.activeTab === item.id ? 'nav-link active' : 'nav-link'} data-toggle="tab" href={`#${item.id}`} onClick={() => {
                                        this.props.onChangeTab(item.id);
                                    }}>{item.label}</a>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="tab-content" style={{backgroundColor: 'white'}}>
                    {
                        this.props.tabs.map((item) => {
                            return (
                                <div key={item.id} className={this.props.activeTab === item.id ? 'tab-pane active' : 'tab-pane'} style={{padding: '20px'}} id={item.id}>
                                    {this.props.children}
                                </div>
                            )
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}
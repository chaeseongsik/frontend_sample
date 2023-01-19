import React from 'react';

export class AsideContents extends React.PureComponent {

    render() {
        const asideWidth = this.props.asideWidth ? this.props.asideWidth + "px" : "200px"
        const mainWidth = "calc(100% - " + asideWidth + ")"

        return (
            <div className="row" style={{padding: 0, height: '850px'}}>
                <div className="aside" style={{padding: this.props.asidePadding ? this.props.asidePadding : null, overflowX: 'auto', width: '100%', maxWidth: `${asideWidth}`, overflowY: 'auto', maxHeight: this.props.maxHeight ? this.props.maxHeight : null}}>
                    <header style={{widows: asideWidth}}>
                        <h2>{this.props.title}</h2>
                    </header>
                    <div style={{marginRight: '15px'}}>
                        {this.props.aside}
                    </div>
                </div>
                <div className="aside-main" style={{width: mainWidth}}>
                    {this.props.main}
                </div>
            </div>
        )
    }
}
import React from 'react';

export class ContentsPanel extends React.PureComponent {

    render() {
        return (
            <div className="content-panel">
                <div className="panel-header">
                    <span className="panel-icon">
                        <i className="material-icons md-24" aria-hidden>{this.props.icon ? this.props.icon : ''}</i>
                    </span>
                    <div className="panel-title-bar">
                        <h2>{this.props.title}</h2>
                        <div className="panel-ctrls">
                        </div>
                    </div>
                </div>
                {
                    this.props.icons && this.props.icons.length > 0 ?
                    <div className="panel-icon-bar" style={{paddingLeft: '10px', paddingRight: '10px', paddingTop: '5px', paddingBottom: '5px'}}>
                        {
                            this.props.icons.map((icon) => {
                                return (
                                    icon.className === 'material-icons' ?
                                    <span key={icon.id} style={{cursor: 'pointer'}} className={`${icon.className}${(icon.activation ? icon.activation() : true) ? '' : ' inactive'}`} title={icon.id.toUpperCase()} onClick={(icon.activation ? icon.activation() : true) ? icon.onClick : null}>{icon.iconName}</span> 
                                    : <span key={icon.id} style={{cursor: 'pointer'}}>
                                        <i className={`${icon.className}${(icon.activation ? icon.activation() : true) ? '' : ' inactive'}`} onClick={(icon.activation ? icon.activation() : true) ? icon.onClick : null}>{icon.iconName}</i>
                                    </span>
                                )
                            })
                        }
                    </div> : null
                }
                <div className="panel-main padding-20">
                    <React.Fragment>{this.props.children}</React.Fragment>
                </div>
            </div>
        )
    }
}
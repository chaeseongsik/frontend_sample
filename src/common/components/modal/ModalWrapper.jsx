import React from 'react';
import $ from 'jquery';
import { generateGuid } from "../../util/guid";

export default class ModalWrapper extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $('.modal-dialog').draggable({'cancel': '.modal-nodraggable'});
        if(this.props.onClose) {
            $(`#${this.props.modalId}`).on('hidden.bs.modal', (event) => {
                this.props.onClose(event);
            })
        }
        if(this.props.onShow) {
            $(`#${this.props.modalId}`).on('show.bs.modal', (event) => {
                this.props.onShow(event);
            })
        }
    }

    render() {
        return (
            <div id={this.props.modalId} className="modal fade" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog" style={this.props.modalWidthStyle}>
                    <form>
                        <div className="modal-content" style={{height: this.props.contentHeigth ? this.props.contentHeigth : null}}>
                            <div className="modal-header">
                                <h4>
                                    <div className="row">
                                        <div>
                                            {
                                                this.props.iconType === 'mi'?
                                                <i className="material-icons" style={{paddingTop: '3px'}}>{this.props.icon}</i> :
                                                <i className={this.props.icon} />
                                            }
                                        </div>
                                        <div style={{paddingLeft: '5px'}}>{this.props.title}</div>
                                        <div className="modal-nodraggable" style={{paddingTop: '5px', marginLeft: 'auto'}}>
                                            <i className="material-icons" data-dismiss="modal" aria-hidden="true" style={{cursor: 'pointer'}} onClick={this.props.headerCancelEvent ? this.props.headerCancelEvent : null}>cancel</i>
                                        </div>
                                    </div>
                                </h4>
                            </div>
                            {
                                typeof(this.props.maxHeigth) === 'undefined' && this.props.maxHeigth === true ?
                                <div className="modal-body custom-scroll terms-body modal-nodraggable" style={{maxHeight: this.props.bodyMaxHeight ? this.props.bodyMaxHeight : null}}>{this.props.children}</div> :
                                <div className="modal-body custom-scroll modal-nodraggable" style={{maxHeight: this.props.bodyMaxHeight ? this.props.bodyMaxHeight : null, height: this.props.bodyHeight ? this.props.bodyHeight : null}}>{this.props.children}</div>
                            }
                            {
                                this.props.footer ?
                                <div className="modal-footer modal-nodraggable">
                                    <div className="row" style={{ display: 'block', width: '100%'}}>
                                    {
                                        this.props.footer && this.props.footer.map((f, fIdx) => {
                                            return (
                                                <div key={generateGuid()} className="edit-form" style={{ display: 'block', textAlign: 'right', marginLeft: '0.5rem'}}>
                                                    <button className={f.className} type={f.type} onClick={e => {
                                                         if(f.onClick)
                                                            f.onClick(e);
                                                        else {
                                                            e.preventDefault();
                                                            return;
                                                        }
                                                    }}>{f.title}</button>
                                                </div>
                                            )
                                        })
                                    }
                                    </div>
                                </div> : null
                            }
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
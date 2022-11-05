import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    return (
      <div>

        <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{this.props.content.name}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <img src={this.props.content.image} alt="..." style={{width: '300px', height: '350px',margin: 'auto', marginTop: '-70px'}}  className="d-flex"/>
                        <h5>Name: {this.props.content.name}</h5>
                        <h6>Price: {this.props.content.price}$</h6>
                        <h6>Description: {this.props.content.description}</h6>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>

      </div>
    )
  }
}


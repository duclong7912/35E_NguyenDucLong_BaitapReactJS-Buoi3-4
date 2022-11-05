import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {

    const {prod, prodClick} = this.props;
    return (
      <div className="card">
        <img src={prod.image} alt />
        <div className="card-body bg-dark text-white">
            <h5 className="card-title" style={{fontWeight: 'bold'}}>{prod.name}</h5>
            <h6 className="card-text">{prod.price}$</h6>
            <button className='btn btn-success mt-2' data-toggle="modal" data-target="#modelId" onClick={() => prodClick(prod)}>Xem chi tiết</button>
        </div>
    </div>

    )
  }
}

import React, { Component } from 'react'
import ProductItem from './ProductItem'


export default class ProductList extends Component {
    
    renderProduct = () => {
        const {arrProd, prodClick} = this.props;
        return arrProd.map((prod, i) => {
            return <div className="col-4 mb-3" key={i}>
                <ProductItem prodClick={prodClick}  prod={prod}/>
            </div>
        })
    }

  render() {
    return (
      <div className='row mt-4'>
        {this.renderProduct()};
      </div>
    )
  }
}

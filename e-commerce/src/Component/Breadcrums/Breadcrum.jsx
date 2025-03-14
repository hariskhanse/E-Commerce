import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assests/breadcrum_arrow.png'
const Breadcrum = (props) => {
    const {product} = props;
  return (
    <>
        <div className="breadcrum">
            HOME <img src={arrow_icon} />
            SHOP <img src={arrow_icon} />
            {product.category} <img src={arrow_icon} />
            {product.name} <img src={arrow_icon} />
        </div>
    </>
  )
}

export default Breadcrum
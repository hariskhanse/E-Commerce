import React from 'react'
import data_product from '../../Component/Assests/data.js'
import './Popular.css'
import { Item } from '../Item/Item.jsx'
export const Popular = () => {
  return (
    <>
        <div className="popular">
            <h1>
                Popular In Women
            </h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item, i) => (
                    <Item
                        key={i}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                ))}
            </div>
        </div>
    </>
  )
}

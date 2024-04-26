import React from 'react'
import './NewCollections.css'
import  new_collections  from '../Assests/new_collections.js'
import {Item}  from '../Item/Item.jsx'

export const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>New Collections</h1>
        <hr />
        <div className="new-collections-item">
            {new_collections.map((item, i) => (
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
  )
}

import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import './CSS/ShopCategory.css'
import dropdown_icon from '../Component/Assests/dropdown_icon.png'
import { Item } from '../Component/Item/Item'
export const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext)
  return (
    <>
      <div className="shop-category">
        <img className='shopcategory-banner' src={props.banner} alt="" />
        <div className="shopcategory-indexSort">
          <p>
            <span>
              Show 1-12
            </span>
            out of 36
          </p>
          <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>
        <div className="shopcategory-products">
          {all_products.map((item, i) => {
            if (item.category === props.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              )
            } else {
              return null
            }
          })}
        </div>
        <div className="shopcategory-loadmore">
            Explore More
        </div>
      </div>
    </>
  )
}

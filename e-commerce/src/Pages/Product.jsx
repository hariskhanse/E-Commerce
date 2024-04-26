import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import {ShopContext} from '../Context/ShopContext'
import Breadcrum from '../Component/Breadcrums/Breadcrum';
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay';

export const Product = () => {
  const {all_products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_products.find((e)=> e.id === Number(productId));
  return (
    <>
      <div>
          <Breadcrum product={product} />
          <ProductDisplay product={product} />
      </div>
    </>
  )
}

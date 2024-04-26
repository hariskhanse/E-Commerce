import React, { createContext } from "react";
import all_products from '../Component/Assests/all_product.js'

export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {

    const contextValue = { all_products }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
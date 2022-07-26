import React, {useContext} from 'react';
import {ProductContext} from './ProductPage';
import Data from '../Data/products.json';

function ProdDetail() {
    let ele_id = useContext(ProductContext)

    let prodDetails = () =>{
        Data["product"].filter((product) =>
            (product["id"] === ele_id)
        ).map((product, index) => {
            <div>
                <h3>{product["brand"]} {product["title"]}</h3>
                <h3>{product["price"]}</h3>
                <p>{product["description"]}</p>
                <p>{product["rating"]}</p>
            </div>
        })

        // let i = 1;
        // while (True){
        //     if (ele_id === i){
        //         Data["product"]["id"]
        //     } else {
        //         i++;
        //     }
        // }
    }

    return (
        <div>
            {prodDetails}
        </div>
    )
}

export default ProdDetail;
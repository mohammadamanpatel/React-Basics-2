import Card from './Card.js'
import ProductDate from './productDate.js'
import './productItems.css'
import './Card.css'
import { useState } from 'react'
function ProductItems(props) {
    const [title,setTitle]= useState(props.title)
    function myEventHandler() {
        console.log("Clicked");
        setTitle("Maggi")
    }
    return (
        <div>
            <Card className='Product_Item'>
                <ProductDate date={props.date} />
                <div className='product_description'>
                    <h2>{title}</h2>
                </div>
                <button onClick={myEventHandler}>Add To Cart</button>
            </Card>
        </div>

    )
}
export default ProductItems;
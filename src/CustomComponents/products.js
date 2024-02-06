import ProductItems from './productItems'
import Card from './Card'
import './Products.css'
function Products(props) {
    return (
      <Card className = 'Card'>
        <ProductItems
                title={props.items[0].title}
                price={props.items[0].price}
                date={props.items[0].date}
            />
            <ProductItems
                title={props.items[1].title}
                price={props.items[1].price}
                date={props.items[1].date}
            />
            <ProductItems
                title={props.items[2].title}
                price={props.items[2].price}
                date={props.items[2].date}
            />
            <ProductItems
                title={props.items[3].title}
                price={props.items[3].price}
                date={props.items[3].date}
            />
      </Card>
    )
}
export default Products;
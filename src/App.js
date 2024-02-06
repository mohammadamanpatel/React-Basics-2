import logo from './logo.svg';
import './App.css';
import Products from './CustomComponents/products'
import NewProduct from './CustomComponents/newProduct';
function App() {
  const products = [
    {
      id: 'p1',
      title: 'Nirma',
      price: 23,
      date: new Date(1990, 7, 23)
    },
    {
      id: 'p2',
      title: 'surfExcel',
      price: 45,
      date: new Date(2000, 6, 7)
    },
    {
      id: 'p3',
      title: 'tide',
      price: 67,
      date: new Date(2002, 2, 4)
    },
    {
      id: 'p4',
      title: 'NirmaNaya',
      price: 78,
      date: new Date(2003, 2, 5)
    }
  ]
  function SaveProduct(data) {
    console.log("data in App.js ",data);
  }
  return (
    <div className="App">
      <NewProduct savedProductData={SaveProduct}></NewProduct>
      <Products items={products} />
    </div>
  );
}

export default App;

import { Fragment, useState } from 'react';
import CardProduct from '../components/Fragments/CardProduct';
import Button from '../components/elements/Button';

// definisikan komponen menjadi rendering lists
const DataProducts = [
  {
    id: 1, 
    title: "Kaos Oblong",
    price: 150000,
    image: "images/product-tshirt.jpg",
    alt: "T-Shirt Product",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Repellat nobis fuga corporis illum officia 
                  error illo porro quidem libero asperiores.`,
  },
  {
    id: 2, 
    title: "Kaos Bola",
    price: 100000,
    image: "images/product-tshirt.jpg",
    alt: "T-Shirt Product",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.  
                  error illo porro quidem libero asperiores`,
  },
  {
    id: 3, 
    title: "Kaos Oblong",
    price: 200000,
    image: "images/product-tshirt.jpg",
    alt: "T-Shirt Product",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
];

const email = localStorage.getItem('email');

const ProductsPage = () => {

  const [cart, setCart] = useState([{
    id : 1,
    qty : 2,
  }]);

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = "/login";
  }

  const handleAddToCart = (id ) => {
    // Logic to add item to cart
    if( cart.find((item) => item.id === id)) {
      setCart(
        cart.map(item => item.id === id ? {...item, qty: item.qty + 1} :item)
      )
    } else {
      setCart([
        ...cart, {id, qty: 1}
      ])
    }
  }

    return (
      <Fragment>
        <div className="flex justify-end h-10 bg-blue-500 text-white items-center px-5">
          {email}
          <Button classname="ml-5 bg-red-500" onClick={handleLogout}>Logout</Button>  
        </div>
        <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap gap-5 justify-center">
          {DataProducts.map((product) => (
          <CardProduct key={product.id}> // memberikan key pada setiap item
            <CardProduct.Header image={product.image} alt={product.alt} />
              <CardProduct.Body title={product.title}>
                {product.description}
              </CardProduct.Body>
            <CardProduct.Footer 
            price={product.price} 
            id={product.id}
            handleAddToCart={handleAddToCart}></CardProduct.Footer>
        </CardProduct>
        ))}
        </div>
        <div className="w-1/4">
            <h1 className='text-3xl font-bold text-blue-600 ml-5 '>Cart</h1>
            {/* <ul>
              {cart.map((item) => (
                <li key={item.id}>{item.id}</li>
              ))}
            </ul> */}
            <table className="w-full text-left border-separate border-spacing-x-5 mt-5">
              <thead>
                <tr>
                  <th>Product ID</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  const product = DataProducts.find((product) => product.id === item.id);
                  return (
                    <tr key={item.id}>
                      <td>{product.id}</td>
                      <td>
                        Rp {product.price.toLocaleString('id-ID')}
                        </td>
                      <td>{item.qty}</td>
                      <td> 
                        Rp {(product.price * item.qty).toLocaleString('id-ID')}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
        </div>
      </div>  
      
      </Fragment>
    );
}

export default ProductsPage;
import { Fragment, useEffect, useState, useRef } from 'react';
import CardProduct from '../components/Fragments/CardProduct';
import Button from '../components/elements/Button';
import Counter from '../components/Fragments/Counter';
import { createRoutesFromElements, data } from 'react-router-dom';
import {getProducts} from '../services/product.service';

// definisikan komponen menjadi rendering lists
// const DataProducts = [
//   {
//     id: 1, 
//     title: "Kaos Oblong",
//     price: 150000,
//     image: "images/product-tshirt.jpg",
//     alt: "T-Shirt Product",
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//                   Repellat nobis fuga corporis illum officia 
//                   error illo porro quidem libero asperiores.`,
//   },
//   {
//     id: 2, 
//     title: "Kaos Bola",
//     price: 100000,
//     image: "images/product-tshirt.jpg",
//     alt: "T-Shirt Product",
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.  
//                   error illo porro quidem libero asperiores`,
//   },
//   {
//     id: 3, 
//     title: "Kaos Oblong",
//     price: 200000,
//     image: "images/product-tshirt.jpg",
//     alt: "T-Shirt Product",
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
//   },
// ];

const email = localStorage.getItem('email');

const ProductsPage = () => {

  // lifecycle method componentDidMount
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, [])

  // Get API
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    })
  }, [])

  // lifecycle method componentDidUpdate
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + (product.price * item.qty);
    }, 0);
    setTotalPrice(sum); // update total price
    localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart, products])

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

  // useRef 
  const cartRef = useRef(JSON.parse(localStorage.getItem('cart')) || []
)
  // HandleAddToCart with useRef
  const handleAddToCartRef  = (id) => {
    cartRef.current = [...cartRef.current, {id, qty: 1}];
    localStorage.setItem('cart', JSON.stringify(cartRef.current));
  }

  // Manipulasi DOM langsung dengan useRef
  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = 'table-row';
    } else {
      totalPriceRef.current.style.display = 'none';
    }
  }, [cart])

    return (
      <Fragment>
        <div className="flex justify-end h-10 bg-blue-500 text-white items-center px-5">
          {email}
          <Button classname="ml-5 bg-red-500" onClick={handleLogout}>Logout</Button>  
        </div>
        <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap gap-5 justify-center">
          {products.length > 0 && products.map((product) => (
          <CardProduct key={product.id}>
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
                {products.length > 0 && cart.map((item) => {
                  const product = products.find((product) => product.id === item.id);
                  return (
                    <tr key={item.id}>
                      <td>{product.title.substring(0, 20)}...</td>
                      <td>
                        $ {product.price.toLocaleString('id-ID')}
                        </td>
                      <td>{item.qty}</td>
                      <td> 
                        $ {(product.price * item.qty).toLocaleString('id-ID')}</td>
                    </tr>
                  )
                })}
                <tr ref={totalPriceRef} className='font-bold'>
                  <td colSpan={3}>Total Price</td>
                  <td> $ {totalPrice.toLocaleString('id-ID')}</td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>  
        {/* test lifecycle */}
        {/* <div className="mt-5 flex justify-center"> */}
          {/* <Counter></Counter> */}
        {/* </div> */}
      </Fragment>
    );
}

export default ProductsPage;
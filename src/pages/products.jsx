import { Fragment } from 'react';
import CardProduct from '../components/Fragments/CardProduct';
import Button from '../components/Elements/Button';
import Counter from '../components/Fragments/Counter';

// definisikan komponen menjadi rendering lists
const DataProducts = [
  {
    id: 1, 
    title: "Kaos Oblong",
    price: "Rp. 150.000",
    image: "images/product-tshirt.jpg",
    alt: "T-Shirt Product",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Repellat nobis fuga corporis illum officia 
                  error illo porro quidem libero asperiores.`,
  },
  {
    id: 2, 
    title: "Kaos Bola",
    price: "Rp. 100.000",
    image: "images/product-tshirt.jpg",
    alt: "T-Shirt Product",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.  
                  error illo porro quidem libero asperiores`,
  },
  {
    id: 3, 
    title: "Kaos Oblong",
    price: "Rp. 200.000",
    image: "images/product-tshirt.jpg",
    alt: "T-Shirt Product",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
];

const email = localStorage.getItem('email');

const ProductsPage = () => {

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = "/login";
  }

    return (
      <Fragment>
        <div className="flex justify-end h-10 bg-blue-500 text-white items-center px-5">
          {email}
          <Button classname="ml-5 bg-red-500" onClick={handleLogout}>Logout</Button>  
        </div>
        <div className="flex justify-center py-5">
        {DataProducts.map((product) => (
          <CardProduct key={product.id}> // memberikan key pada setiap item
            <CardProduct.Header image={product.image} alt={product.alt} />
              <CardProduct.Body title={product.title}>
                {product.description}
              </CardProduct.Body>
            <CardProduct.Footer price={product.price}></CardProduct.Footer>
        </CardProduct>
        ))}
      </div>  
      <div className='flex justify-center w-100'>
        <Counter></Counter>
      </div>
      </Fragment>
    );
}

export default ProductsPage;
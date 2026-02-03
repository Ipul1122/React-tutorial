import CardProduct from '../components/Fragments/CardProduct';

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

const ProductsPage = () => {
    return (
      <div className="flex justify-center py-5">


        {DataProducts.map((product) => (
          <CardProduct >
            <CardProduct.Header image={product.image} alt={product.alt} />
              <CardProduct.Body title={product.title}>
                {product.description}
              </CardProduct.Body>
            <CardProduct.Footer price={product.price}></CardProduct.Footer>
        </CardProduct>
        ))}
      </div>  
    );
}

export default ProductsPage;
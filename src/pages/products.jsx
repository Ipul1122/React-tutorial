import CardProduct from '../components/Fragments/CardProduct';


const ProductsPage = () => {
    return (
      <div className="flex justify-center py-5">
          <CardProduct >
            <CardProduct.Header image="images/product-tshirt.jpg" alt="T-Shirt Product" />
            <CardProduct.Body title="Kaos Oblong">
                    Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit.
                    Doloremque, minima.
            </CardProduct.Body>
            <CardProduct.Footer price="Rp. 150.000"></CardProduct.Footer>
          </CardProduct>

          <CardProduct >
            <CardProduct.Header image="images/product-tshirt.jpg" alt="T-Shirt Product" />
            <CardProduct.Body title="Kaos Oblong">
                    Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit.
                    Doloremque, minima.
            </CardProduct.Body>
            <CardProduct.Footer price="Rp. 150.000"></CardProduct.Footer>
          </CardProduct>

      </div>  
    );
}

export default ProductsPage;
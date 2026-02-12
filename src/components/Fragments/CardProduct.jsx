import Button from '../elements/Button';


const CardProduct = (props) => {
    const {children} = props;
    return (
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-5 flex flex-col justify-between">
            {children}
        </div>
            
    );
}

// Children Components
const Header = (props) => {
    const {image, alt} = props;
    return (
        <a href="#">
            <img src={image} 
            alt={alt}
            className="p-8 rounded-t-lg h-60 w-full object-cover" />
        </a>            
    );
}

// Children Components
const Body = (props)=> {
    const {children, title} = props;
    return (
        <div className="px-5 pb-5 h-full">
                <a href="">
                  <h5 className="text-xl font-semibold tracking-tight text-white">
                    {title.substring(0, 10)}...
                  </h5>
                  <p className="text-m text-white">
                    {children.substring(0, 30)}...
                  </p>
                </a>
        </div>
    );
}

// Children Components
const Footer = (props) => {
    const {price, handleAddToCart, id} = props;
    return (
        <div className="flex items-center justify-between px-5 pb-5">
                <span className="text-3xl font-bold text-white">
                     $ {price.toLocaleString('id-ID', 
                        {style: 'currency', currency : 'USD'})}
                </span>
                <Button classname="bg-blue-600 hover:bg-blue-700" onClick={() => handleAddToCart(id)}>Keranjang</Button>
        </div>
    );
}

// Ekport children components sebagai properti dari komponen utama
CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
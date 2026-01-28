
// Arrow Function Component + Props 
const Button = (props) => {
  const { children, classname = "bg-black" } = props;
  return (
    // Manipulating class via Template Literals
    <button className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`} type="submit">
      {/* Manipulating text  */}
          {children}
    </button>
  );
}

export default Button;
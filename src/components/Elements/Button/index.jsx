
// Arrow Function Component + Props 
const Button = (props) => {
  const { 
    children, 
    classname = "bg-black", 
    onClick = () => {}, 
    type="button" 
  } = props;
  return (
    // Manipulating class via Template Literals
    <button 
    className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`} 
    type={type}
    onClick = {() => onClick()}
    >
          {children}
    </button>
  );
}

export default Button;

import React from 'react';

// Class Component
/*
class Button extends React.Component {
  render(){
    return (
       <button className="h-10 px-6 font-semibold rounded-md bg-black text-white mr-4 " type="submit">
          Buy now
        </button>
    );
  }
}
*/

// Functional Component
/*
function ButtonBlue (){
  return (
    <button className="h-10 px-6 font-semibold rounded-md bg-blue-600 text-white mr-4 " type="submit">
          Buy now
    </button>
  );
}
*/

// Arrow Function Component + Props 
const Button = (props) => {
  const { children, variant = "bg-black" } = props;
  return (
    // Manipulating class via Template Literals
    <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`} type="submit">
      {/* Manipulating text  */}
          {children}
    </button>
  );
}

function App(){
  return (
  <div className="App flex justify-center items-center h-screen font-bold gap-4">
    <div className='flex gap-x-3'>
      {/* Button from class */}
      <Button variant="bg-red-700">Logout </Button>
      <Button variant="bg-blue-700">Login </Button>
    </div>
  </div>
  );
}

export default App;
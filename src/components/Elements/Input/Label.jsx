const Label = (props) => {
    const {htmlFor, children} = props;
    return (
        <label 
          htmlFor={htmlFor} 
          className="block text-sm font-medium text-gray-700 mb-1"
          >
          {children}
          </label>
    );
};

export default Label; 
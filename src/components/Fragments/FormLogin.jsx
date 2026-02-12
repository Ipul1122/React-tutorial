import Button from '../Elements/Button';
import InputForm from '../Elements/Input';
import { useEffect, useRef } from 'react';

const FormLogin = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        // Menyimpan data ke localStorage
        localStorage.setItem('email', e.target.email.value);
        localStorage.setItem('password', e.target.password.value);
        window.location.href = "/products";
    };

    const emailRef = useRef(null);
        
    useEffect(() => {
        emailRef.current.focus();
    }, []);

    return (
        <form onSubmit={handleLogin} action="">
        {/* Input Email Form */}
        <InputForm 
            label="email" 
            name="email"    
            type="email" 
            placeholder="test@mail.com"
            ref={emailRef}
            >
            
        </InputForm>
        {/* Input Password Form */}
        <InputForm
            label="password"
            name="password"
            type="password"
            placeholder="*****"
            >
        </InputForm>

        <Button classname="bg-blue-600 w-full" type="submit">
            Login
        </Button>
      </form>
    );
}

export default FormLogin;
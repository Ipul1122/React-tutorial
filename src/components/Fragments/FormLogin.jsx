import Button from '../Elements/Button';
import InputForm from '../Elements/Input';

const FormLogin = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        // Menyimpan data ke localStorage
        localStorage.setItem('email', e.target.email.value);
        localStorage.setItem('password', e.target.password.value);
        window.location.href = "/products";
    };

    return (
        <form onSubmit={handleLogin} action="">
        {/* Input Email Form */}
        <InputForm 
            label="email" 
            name="email"    
            type="email" 
            placeholder="test@mail.com">
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
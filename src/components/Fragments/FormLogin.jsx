import Button from '../Elements/Button';
import InputForm from '../Elements/Input';

const FormLogin = () => {
    return (
        <form action="">
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

        <Button>Login</Button>
      </form>
    );
}

export default FormLogin;
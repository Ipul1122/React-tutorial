import Button from '../Elements/Button';
import InputForm from '../Elements/Input';

const FormRegister = () => {
    return (
        <form action="">
        {/* Input Fullname Form */}
        <InputForm 
            label="fullname" 
            name="fullname"    
            type="text" 
            placeholder="John Doe">
        </InputForm>

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

        <InputForm
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="*****"
            >
        </InputForm>

        <Button>Register</Button>
      </form>
    );
}

export default FormRegister;
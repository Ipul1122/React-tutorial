import AuthLayouts from '../components/Layouts/AuthLayouts';
import FormRegister from '../components/Fragments/FormRegister';
import { Link as LINK } from "react-router-dom";


const RegisterPage = () => {
    return (
        // Menggunakan AuthLayouts dengan title Register
        <AuthLayouts title="Register" type="register">
            <FormRegister></FormRegister>
            
        </AuthLayouts>
    );
}

export default RegisterPage;    
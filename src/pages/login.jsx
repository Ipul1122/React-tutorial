import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from '../components/Fragments/FormLogin';

const LoginPage = () => {
    return (
        // Menggunakan AuthLayouts dengan title Login
        <AuthLayouts title="Login" type="login">
            <FormLogin></FormLogin>
            
        </AuthLayouts>
    );
}

export default LoginPage;
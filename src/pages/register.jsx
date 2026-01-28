import AuthLayouts from '../components/Layouts/AuthLayouts';
import FormRegister from '../components/Fragments/FormRegister';

const RegisterPage = () => {
    return (
        // Menggunakan AuthLayouts dengan title Register
        <AuthLayouts title="Register">
            <FormRegister></FormRegister>
        </AuthLayouts>
    );
}

export default RegisterPage;    
import AuthLayouts from '../components/Layouts/AuthLayouts';
import FormRegister from '../components/Fragments/FormRegister';
import { Link as LINK } from "react-router-dom";


const RegisterPage = () => {
    return (
        // Menggunakan AuthLayouts dengan title Register
        <AuthLayouts title="Register">
            <FormRegister></FormRegister>
            <p className='mt-10'>Sudah punya akun? 
                {/* Pindah halaman tanpa reload */}
                <LINK to="/login" className="text-blue-500 hover:underline">
                    Login di sini
                </LINK>
            </p>
        </AuthLayouts>
    );
}

export default RegisterPage;    
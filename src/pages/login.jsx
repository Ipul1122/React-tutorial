import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from '../components/Fragments/FormLogin';
import { Link as LINK } from "react-router-dom";

const LoginPage = () => {
    return (
        // Menggunakan AuthLayouts dengan title Login
        <AuthLayouts title="Login">
            <FormLogin></FormLogin>
            <p className="mt-10">Tidak punya akun? 
                {/* Pindah halaman tanpa reload */}
                <LINK to="/register" 
                className="text-blue-500 hover:underline">
                    Daftar di sini
                </LINK>
            </p>
        </AuthLayouts>
    );
}

export default LoginPage;
import { Link as LINK } from "react-router-dom";


const AuthLayouts = (props) => {
    const {children, title, type} = props;
    return (
         <div className="flex justify-center items-center min-h-screen font-bold gap-4">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
                <p className="font-medium text-slate-500 mb-8">
                    Welcome, please login to your account
                </p>
                {children}
                <Navigation type={type}></Navigation>
            </div>
        </div>
    );
}

// Dipecah menjadi komponen terpisah
const Navigation = ({type}) => {
    if(type === "login") {
        return (
            <p className="text-sm mt-5 text-center">
                Belum punya akun?{" "}
                <LINK to="/register" className="text-blue-500 hover:underline ml-1">
                    Register di sini
                </LINK>
            </p>
        )
    } else {
        return (
            <p className="text-sm mt-5 text-center">
                Sudah punya akun? {" "}
                <LINK to="/login" className="text-blue-500 hover:underline ml-1">
                    Login di sini
                </LINK>
            </p>
        );
    }
};

export default AuthLayouts;
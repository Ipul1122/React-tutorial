const AuthLayouts = (props) => {
    const {children, title} = props;
    return (
         <div className="flex justify-center items-center min-h-screen font-bold gap-4">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
                <p className="font-medium text-slate-500 mb-8">
                    Welcome, please login to your account
                </p>
                {children}
            </div>
        </div>
    );
}

export default AuthLayouts;
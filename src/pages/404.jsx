import { useRouteError } from "react-router-dom";

const NotFound = () => {
    const error = useRouteError();
    return (
        
        <div className="flex justify-center items-center min-h-screen font-bold gap-4">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl font-bold mb-2 text-blue-600">404 - Not Found</h1>
                <p className="font-medium text-slate-500 mb-8">
                    The page you are looking for does not exist.
                </p>
                <p className="font-medium text-red-500">
                    {error.statusText || error.message}
                </p>
            </div>
        </div>
    );
}

export default NotFound;
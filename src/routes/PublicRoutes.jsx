import { Navigate } from "react-router-dom";

import useAuthStore from "../store/authStore";

import LoadingScreen from "../components/common/LoadingScreen";

const PublicRoute = ({ children }) => {

    const {
        user,

        isAuthenticated,

        isLoading,

    } = useAuthStore();

    if (isLoading) {

        return <LoadingScreen />;

    }

    if (isAuthenticated && user) {

        return <Navigate to="/dashboard" replace />;

    }

    return children;

};

export default PublicRoute;
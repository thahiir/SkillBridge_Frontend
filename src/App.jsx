import { useEffect } from "react";

import AppRoutes from "./routes/AppRoutes";

import useAuth from "./features/auth/hooks/useAuth";
import useAuthStore from "./store/authStore";

const App = () => {

    const { fetchUser } = useAuth();

    const token = useAuthStore(
        (state) => state.token
    );

    const setLoading = useAuthStore(
        (state) => state.setLoading
    );

    useEffect(() => {

        if (!token) {

            setLoading(false);

            return;

        }

        fetchUser();

    }, [token, fetchUser, setLoading]);

    return <AppRoutes />;

};

export default App;
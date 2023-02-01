import { useContext } from "react";
import jwtDecode from "jwt-decode";

import authStorage from "./storage";
import AuthContaxt from "./context";

export default useAuth = () => {
    const {user, setUser} = useContext(AuthContaxt);

    const login = (authToken) => {
        const user = jwtDecode(authToken);
        setUser(user);
        authStorage.storeToken(authToken);
    }

    const logout = () => {
        setUser(null);
        authStorage.removeToken();

    }
    return {user, login, logout};
}
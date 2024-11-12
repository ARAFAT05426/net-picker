import { useContext } from "react";
import authentication_context_types from "../types/authentication_context_type";

const useAuthentication = (): authentication_context_types => {
    const context = useContext(AuthenticationContext);
    if (!context) {
        throw new Error('useAuthentication must be used within an AuthenticationProvider');
    }
    return context;
};

export default useAuthentication;
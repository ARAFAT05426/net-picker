import { createContext, useState, useContext, FC, ReactNode, useEffect } from 'react';
import axios_common from '../utils/axios_common';
import user_props from '../types/user_props';
import { toast } from 'sonner';

interface ContextProviderType {
    isLoading: boolean;
    logout: () => void;
    error: string | null;
    user: user_props | null;
    forgetPassword: (email: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string) => Promise<void>;
    resetPassword: (token: string, email: string, password: string) => Promise<void>;

    // Add Compare and Wishlist States
    wishlist: any[];
    compareList: any[];
    isCompareModalOpen: boolean;
    closeCompareModal: () => void;

    addToCompare: (item: any) => void;
    removeFromCompare: (item: any) => void;

    addToWishlist: (item: any) => void;
    removeFromWishlist: (item: any) => void;
}

const AuthenticationContext = createContext<ContextProviderType | undefined>(undefined);

interface ContextProviderProps {
    children: ReactNode;
}

const ContextProvider: FC<ContextProviderProps> = ({ children }) => {

    const [error, setError] = useState<string | null>(null);
    const [user, setUser] = useState<user_props | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isCompareModalOpen, setIsCompareModalOpen] = useState<boolean>(false);
    const [compareList, setCompareList] = useState<any[]>([]);
    const [wishlist, setWishlist] = useState<any[]>([]);

    // Fetch user data (CSRF token, user data, etc.)
    const fetchUser = async () => {
        try {
            const response = await axios_common.get('/api/user');
            setUser(response.data);  // Assuming response.data has a user object
        } catch (err) {
            console.error('Error fetching user:', err);
            setError('Failed to fetch user data');
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    // Auth Functions
    const login = async (email: string, password: string) => {
        try {
            setIsLoading(true);
            setError(null);
            await axios_common.get('/sanctum/csrf-cookie');  // CSRF Token
            const response = await axios_common.post('/login', { email, password });
            setUser(response.data.user);  // Update user after login
        } catch (err: any) {
            setError(err?.response?.data?.message || 'Login failed');
        } finally {
            setIsLoading(false);
        }
    };

    const register = async (name: string, email: string, password: string) => {
        try {
            setIsLoading(true);
            setError(null);
            await axios_common.get('/sanctum/csrf-cookie');  // CSRF Token
            const response = await axios_common.post('/register', { name, email, password });
            setUser(response.data.user);  // Update user after registration
        } catch (err: any) {
            setError(err?.response?.data?.message || 'Registration failed');
        } finally {
            setIsLoading(false);
        }
    };

    const logout = async () => {
        try {
            await axios_common.post('/logout');
            setUser(null);  // Clear user state after logout
        } catch (err) {
            setError('Logout failed');
        }
    };

    const forgetPassword = async (email: string) => {
        try {
            const response = await axios_common.post('/forgot-password', { email });
            console.log('Password reset link sent', response);
        } catch (err: any) {
            setError('Failed to send reset link');
        }
    };

    const resetPassword = async (token: string, email: string, newPassword: string) => {
        if (!email || !newPassword) {
            setError('Email and password are required');
            return;
        }

        try {
            const response = await axios_common.post('/reset-password', {
                token,
                email,
                password: newPassword,
            });
            console.log('Password has been reset successfully', response.data);
        } catch (err) {
            console.log(err);
            setError('Failed to reset password');
        }
    };

    // Compare List Functions
    const openCompareModal = () => {
        if (compareList.length > 1) {
            setIsCompareModalOpen(true);
        }
    };

    const closeCompareModal = () => {
        setIsCompareModalOpen(false);
    };

    const addToCompare = (item: any) => {
        const isItemAlreadyInCompare = compareList.some((i) => i.id === item.id);
        if (isItemAlreadyInCompare) {
            toast.error('This product is already in the comparison list.');
            return;
        }

        setCompareList((prev) => {
            const newCompareList = [...prev, item];
            toast.success('Product added to comparison successfully.');

            // Open the modal if there are at least two products after the update
            if (newCompareList.length >= 2) {
                setIsCompareModalOpen(true);
            }

            return newCompareList;
        });
    };

    const removeFromCompare = (item: any) => {
        setCompareList((prev) => {
            const updatedList = prev.filter((i) => i.id !== item.id);
            return updatedList;
        });
    };

    // Wishlist Functions
    const addToWishlist = (item: any) => {
        setWishlist((prev) => [...prev, item]);
    };

    const removeFromWishlist = (item: any) => {
        setWishlist((prev) => prev.filter((i) => i.id !== item.id));
    };

    return (
        <AuthenticationContext.Provider
            value={{
                user,
                error,
                isLoading,
                login,
                register,
                logout,
                forgetPassword,
                resetPassword,
                wishlist,
                compareList,
                closeCompareModal,
                isCompareModalOpen,
                addToCompare,
                addToWishlist,
                removeFromCompare,
                removeFromWishlist,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};

const useProvider = (): ContextProviderType => {
    const context = useContext(AuthenticationContext);
    if (!context) {
        throw new Error('useProvider must be used within a ContextProvider');
    }
    return context;
};

export { ContextProvider, useProvider };

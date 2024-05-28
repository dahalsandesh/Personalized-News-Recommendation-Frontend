import axios from 'axios';
import Alert from '../Alert/Alert';

export const handleLogout = async ({ onLogout }) => {
    try {
        const response = await axios.post(
            'http://127.0.0.1:8000/api/account/user/Logout',
            {},
            {
                withCredentials: true,
            }
        );

        if (response.status === 200) {
            localStorage.removeItem('isLoggedIn');
            window.dispatchEvent(new Event('loginStateChanged'));
            onLogout();
            return { success: 'Logout successful' };
        }
    } catch (error) {
        console.error('Logout failed', error);
        return { error: 'Logout failed. Please try again.' };
    }
};

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Assuming you're using jwt-decode for decoding JWT tokens

const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    if (!token) {
      // No token found, redirect to login page
      navigate('/'); // Change this to your login route
      return;
    }

    try {
      // Verify the token
      const decodedToken = jwtDecode(token);

      // Check if token is expired
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        localStorage.removeItem('authToken');
        navigate('/'); // Redirect to login page if token is expired
      }
    } catch (error) {
      // Token is invalid, redirect to login page
      localStorage.removeItem('authToken');
      navigate('/'); // Redirect to login page
    }
  }, [navigate]);

  return null; // This hook doesn't return any UI elements
};

export default useAuth;

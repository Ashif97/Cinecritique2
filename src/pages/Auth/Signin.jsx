import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { baseurl } from '../../baseurl/baseurl';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false); // State to store admin status

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseurl}/api/auth/login`, {
        email,
        password,
      });

      // Set cookie with token, expires in 1 day
      Cookies.set('token', response.data.token, { expires: 1 });

      // Redirect to determine role and redirect accordingly
      fetchUserRoleAndRedirect();
    } catch (error) {
      console.error('Error signing in', error);
      // Handle error (e.g., show error message)
    }
  };

  const fetchUserRoleAndRedirect = async () => {
    try {
      const token = Cookies.get('token');
      if (!token) {
        // Handle case where token is not found (e.g., redirect to login)
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(`${baseurl}/api/admin/users`, config);
      const userRole = response.data.role;

      setIsAdmin(userRole === 'admin');

      // Redirect based on role
      if (userRole === 'admin') {
        navigate('/admin');
      } else {
        navigate('/home');
      }
    } catch (error) {
      console.error('Error fetching user role', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSignIn} className="w-1/3 bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl mb-6">Sign In</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Sign In
        </button>
      </form>
    </div>
  );
}

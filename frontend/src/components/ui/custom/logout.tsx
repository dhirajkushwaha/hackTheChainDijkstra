// components/Logout.js
'use client'
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Logout() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Make a request to the backend's logout endpoint
      await axios.post('http://localhost:5000/api/auth/logout', {}, {
        withCredentials: true, // Send cookies with the request
      });

      // Redirect to the login page after logout
      router.push('/login');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <button onClick={handleLogout} style={{ padding: '8px 16px', background: 'red', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
      Logout
    </button>
  );
}
// pages/register.js
'use client'
import { useState, useEffect } from 'react'; // Add useEffect
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import axios from 'axios'; // Import axios for making requests
import { Button } from '@/components/ui/button';

import Header from '@/components/ui/custom/Header';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [authCheckLoading, setAuthCheckLoading] = useState(true); // Add auth check loading state

  const router = useRouter();
  const { register } = useAuth();

  // Check if the user is already logged in
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/me', {
          withCredentials: true, // Send cookies with the request
        });

        if (response.data.user) {
          // If the user is authenticated, redirect to the home page
          router.push('/home');
        }
      } catch (err) {
        // If the user is not authenticated, do nothing
        console.log('User is not authenticated');
      } finally {
        setAuthCheckLoading(false); // Set auth check loading to false
      }
    };

    checkAuth();
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError(''); // Clear any previous errors
      setLoading(true); // Disable the submit button

      // Call the register function from AuthContext
      await register(username, email, password);

      // Redirect to the login page after successful registration
      router.push('/login');
    } catch (error) {
      setError(error.message); // Set the error message
    } finally {
      setLoading(false); // Re-enable the submit button
    }
  };

  if (authCheckLoading) {
    return <p>Checking authentication...</p>; // Show loading message while checking auth
  }

  return (

    <div >
      <Header></Header>

<div className='container mx-auto mt-20 xsm:w-fit px-5 xsm:px-0' >

    <div className='bg-[white] p-10 border border-[#fff3fc] border-2 bg-[#ffffff] rounded-[10px]'> 
          <h1 className='poly text-2xl text-center' >Register</h1>
          <img src="/assets/images/hero_sec_img.png" alt="hero_sec_image_bg" style={{userSelect:'none', zIndex:'-1'}} className="absolute w-[80%] top-[-20%] right-0"/>

          {error && <p style={styles.error}>{error}</p>}


          
          <form className='mt-8' onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={styles.input}
              />
            </div>
            {/* <button type="submit" disabled={loading} style={styles.button}>
              {loading ? 'Registering...' : 'Register'}
            </button> */}

            <Button className='mt-2 bg-[#FF00BF]'  type="submit" disabled={loading} >
            {loading ? 'Registering...' : 'Register'}
          </Button>
          </form>
          <p className='mt-3'>
            Already have an account?{' '}
            <a href="/login" style={styles.link}>
              Log in here
            </a>
          </p>
        </div>
</div>
    </div>

  );
}

// Basic styles for the page
const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    textAlign: 'left',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
    cursor: 'not-allowed',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
  link: {
    color: '#0070f3',
    textDecoration: 'none',
  },
};
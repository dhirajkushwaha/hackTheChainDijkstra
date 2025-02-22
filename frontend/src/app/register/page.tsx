// pages/register.js
'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import Header from '@/components/ui/custom/Header';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationDocLink, setVerificationDocLink] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [authCheckLoading, setAuthCheckLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/me', {
          withCredentials: true,
        });
        if (response.data.user) {
          router.push('/community');
        }
      } catch (err) {
        console.log('User is not authenticated');
      } finally {
        setAuthCheckLoading(false);
      }
    };
    checkAuth();
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);

      const data = {
        username,
        email,
        password,
        verificationDocLink,
      };
      await axios.post('http://localhost:5000/api/auth/register', data, {
        withCredentials: true,
      });

      router.push('/login');
    } catch (error) {
      setError(error.response?.data?.error || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  if (authCheckLoading) {
    return <p>Checking authentication...</p>;
  }

  return (
    <div> 
      <div className='container mx-auto mt-20 xsm:w-fit px-5 xsm:px-0'>
        <div className='bg-[white] p-10 border border-[#fff3fc] border-2 bg-[#ffffff] rounded-[10px]'>
          <h1 className='poly text-2xl text-center'>Register</h1>
          <img
            src="/assets/images/hero_sec_img.png"
            alt="hero_sec_image_bg"
            style={{ userSelect: 'none', zIndex: '-1' }}
            className="absolute w-[80%] top-[-20%] right-0"
          />

          {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}

          <form className='mt-8' onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', textAlign: 'left' }}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', textAlign: 'left', marginTop: '10px' }}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', textAlign: 'left', marginTop: '10px' }}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', textAlign: 'left', marginTop: '10px' }}>
              <label htmlFor="verificationDocLink">Verification Document Link</label>
              <input
                type="text"
                id="verificationDocLink"
                value={verificationDocLink}
                onChange={(e) => setVerificationDocLink(e.target.value)}
                required
                style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
              />
            </div>
            <Button className='mt-2 bg-[#FF00BF]' type="submit" disabled={loading}>
              {loading ? 'Registering...' : 'Register'}
            </Button>
          </form>
          <p className='mt-3'>
            Already have an account?{' '}
            <a href="/login" style={{ color: '#0070f3', textDecoration: 'none' }}>
              Log in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
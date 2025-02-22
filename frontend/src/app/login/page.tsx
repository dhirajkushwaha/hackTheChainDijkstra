// pages/login.js
'use client'
import { useState, useEffect } from 'react'; // Add useEffect
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import Cursor from '@/components/ui/'
import Link from 'next/link';

import Header from '@/components/ui/custom/Header';
import Footer from '@/components/ui/custom/footer';

import axios from 'axios';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Check if the user is already logged in
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/me', {
          withCredentials: true, // Send cookies with the request
        });

        if (response.data.user) {
          // If the user is authenticated, redirect to the home page
          router.push('/community');
        }
      } catch (err) {
        // If the user is not authenticated, do nothing
        console.log('User is not authenticated');
      }
    };

    checkAuth();
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password }, {
        withCredentials: true,
      });

      // Handle successful login
      console.log('Logged in successfully');

      // Redirect to the home page
      router.push('/community');
    } catch (err) {
      setError('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div> 
      {/* <Header></Header> */}

      <div className='container mx-auto mt-20 xsm:w-fit px-5 xsm:px-0' >
        <img src="/assets/images/hero_sec_img.png" alt="hero_sec_image_bg" style={{userSelect:'none', zIndex:'-1'}} className="absolute w-[80%] top-[-20%] right-0"/>

        <div className='bg-[white] p-10 border border-[#fff3fc] border-2 bg-[#ffffff] rounded-[10px]' >
          
          <h1 className='poly text-2xl text-center' >Login</h1>

          {error && <p>{error}</p>}
          <form className=' flex mt-4 flex-col items-center' onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              {/* <input /> */}
              <Input  type="email" value={email} onChange={(e) => setEmail(e.target.value)}  />

            </div>

            <div className='mt-5' >
              <label>Password:</label> 
              <Input  type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

              
            </div>


          <Button className='mt-5 bg-[#FF00BF]'  type="submit" disabled={loading} >
          {loading ? 'Logging in...' : 'Login'}
          </Button>
            
          </form>

          <p className='mt-10' >Haven't Registered Yet?</p>
          <p  >Register <Link className=''
                            href="/register" 
                        >
                            Here
                        </Link> </p>
        </div>

      </div>
      
    </div>
  );                        
}

import React, { useState, useEffect } from 'react'
import { useGlobalState } from '../context/GlobalState';
import { useRouter } from 'next/navigation';
import authService from '../services/auth.service';
import { jwtDecode } from "jwt-decode";
import styles from '../styles/home.module.css';
import Link from 'next/link';
import FishPage from '../components/FishList';
import NavBar from '@/components/NavBar';
import axios from 'axios';
import Toggle from '@/components/Toggle';
// import MyApp from './_app';

export default function Home() {

  const apiUrl = "http://127.0.0.1:8000/api/v1/fish/"
  const [ fish, setFish ] = useState(null)
  const { state, dispatch } = useGlobalState();

  useEffect(() => {
    const getUserFromLocalStorage = () => {
      const userData = localStorage.getItem('user');
      if (userData) {
        const user = jwtDecode(userData);
        console.log('User data:', user);
        dispatch({
          type: 'SET_USER',
          payload: user
        });
      }
    };
    getUserFromLocalStorage();

    axios.get(apiUrl)
      .then((response) => {
        console.log(response.data)
        setFish(response.data)
      })

      console.log(fish)

  }, []);

  const handleLogout = () => {
    authService.logout();
    dispatch({ type: 'LOGOUT_USER' });
    router.push('/');


  };

  return (
    <>
      <main className='bg-scroll flex flex-row items-center justify-center h-screen'>
        <div className="flex flex-col h-screen">
          <NavBar />
        {state.user ? (
            <li className="nav-item">
              <Link href="/" className={styles.logout} onClick={handleLogout}>Logout</Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link href="/login">Login</Link>
            </li>
          )}
        </div>
        <Toggle />
      </main>
    </>
  )
}

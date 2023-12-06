"use client"

import React, { useState, useEffect } from 'react'
import { useGlobalState } from '../context/GlobalState';
import { useRouter } from 'next/navigation';
import authService from '../services/auth.service';
import { jwtDecode } from "jwt-decode";
import styles from '../styles/home.module.css';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import axios from 'axios';
import Toggle from '@/components/Toggle';
// import MyApp from './_app';
// import { Accordion, CreatureAccordion } from '@/components/Accordion';

export default function Home() {

  const apiUrlFish = "http://127.0.0.1:8000/api/v1/fish/"
  const apiUrlBugs = "http://127.0.0.1:8000/api/v1/bugs/"
  const apiUrlDeepSea = "http://127.0.0.1:8000/api/v1/deep-sea-creatures/"

  const [ fish, setFish ] = useState(null)
  const [ bugs, setBugs ] = useState(null)
  const [ deepSea, setDeepSea] = useState(null)
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
  }, []);

   useEffect(() => {
    axios.get(apiUrlFish)
      .then((response) => {
        setFish(response.data)
      })

      console.log(fish)
    }, []); 

    useEffect(() => {
      axios.get(apiUrlBugs)
        .then((response) => {
          setBugs(response.data)
        })
  
        console.log(bugs)
      }, []); 

      useEffect(() => {
        axios.get(apiUrlDeepSea)
          .then((response) => {
            setDeepSea(response.data)
          })
    
          console.log(deepSea)
        }, []); 



  const handleLogout = () => {
    authService.logout();
    dispatch({ type: 'LOGOUT_USER' });
    router.push('/');


  };

  return (
    <>
      <main className='bg-scroll flex flex-row items-center justify-center h-screen bg-animal_crossing_brown mt-24'>
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
        <div >
          <Toggle />
        </div>
        <div>
          {/* <CreatureAccordion /> */}
        </div>
      </main>
    </>
  )
}

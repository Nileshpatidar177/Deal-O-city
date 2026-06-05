import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Routes, Route, useLocation } from 'react-router-dom';
import Add from './pages/Add';
import List from './pages/List';
import Orders from './pages/Orders';
import Login from './components/Login';
import EditProduct from './pages/Edit';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = "$";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const location = useLocation(); // Get current route path

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  // Determine if sidebar should be shown
  const showSidebar = location.pathname !== '/';

  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <hr />
          <div className='flex w-full'>
            {showSidebar && <Sidebar />}
            <div className={`${showSidebar ? 'w-[70%] ml-[max(5vw,25px)]' : 'w-full'} mx-auto my-8 text-gray-600 text-base`}>
              <Routes>
                <Route path='/' element={<Home token={token} />} />
                <Route path='/add' element={<Add token={token} />} />
                <Route path='/list' element={<List token={token} />} />
                <Route path='/orders' element={<Orders token={token} />} />
                <Route path='/edit/:id' element={<EditProduct token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;

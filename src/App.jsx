import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login';
import { useAppContext } from './context/AppContext'; // ✅ Import it

function App() {
  const isSellerPath = useLocation().pathname.includes("seller");
  const { showUserLogin } = useAppContext(); // ✅ Now it works

  return (
    <div>
      {/* Show navbar unless it's a seller path */}
      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <Login /> : null}

      {/* ✅ Toast Notifications */}
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

      {/* Routes */}
      <div className={isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;


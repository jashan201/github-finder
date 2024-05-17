import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from './media/logo.png';
import Profile from './components/User';
import SearchPage from './components/SearchPage';
import './css/style.css';

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw"
  },
  in: {
    opacity: 1,
    x: 0
  },
  out: {
    opacity: 0,
    x: "100vw"
  }
};

const pageTransition = {
  type: "tween",
  duration: 0.5
};

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
            <SearchPage />
            </motion.div>
          }
        />
        <Route
          path="/profile/:username"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Profile />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <main>
      <div className="container">
        <header>
          <h1>GITHUB FINDER</h1>
          <img src={logo} className="logo" alt='logo' />
        </header>
          <AnimatedRoutes />
      </div>
    </main>
  );
}

export default App;
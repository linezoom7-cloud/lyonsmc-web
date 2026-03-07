import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { supabase } from './supabaseClient';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import HomeStats from './components/HomeStats/HomeStats';
import WhyLyons from './components/WhyLyons/WhyLyons';
import CallToAction from './components/CallToAction/CallToAction';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import AdminPanel from './components/Admin/AdminPanel';
import About from './pages/About/About';
import FeaturesPage from './pages/Features/FeaturesPage';
import Store from './pages/Store/Store';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Kvkk from './pages/Policies/Kvkk';
import CookiePolicy from './pages/Policies/CookiePolicy';

const Home = () => (
  <>
    <Hero />
    <HomeStats />
    <WhyLyons />
    <Profile />
    <CallToAction />
  </>
);

function App() {
  const [user, setUser] = useState(null);
  // showLoader controls the visual loading screen — only dismissed by LoadingScreen's own timer
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Auth check runs in background — does NOT control the loading screen
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <Router>
      {showLoader ? (
        <LoadingScreen onComplete={() => setShowLoader(false)} />
      ) : (
        <div className="app-container">
          <Navbar user={user} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/store" element={<Store />} />
            <Route path="/kvkk" element={<Kvkk />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/admin" element={
              <ProtectedRoute user={user} roleRequired="admin">
                <AdminPanel />
              </ProtectedRoute>
            } />
          </Routes>

          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;

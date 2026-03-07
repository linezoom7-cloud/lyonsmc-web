import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import AuthModal from '../Auth/AuthModal';
import './Navbar.css';

const Navbar = ({ user }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Auth Modal State
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'

  // Admin Check
  const isAdmin = user?.user_metadata?.role === 'admin';

  useEffect(() => {
    // Scroll listener
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openAuthModal = (mode) => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
    setMenuOpen(false); // mobile menu close
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setMenuOpen(false);
    navigate('/'); // go home on logout
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">

          {/* 1. Left aligned logo */}
          <div className="logo-container">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <img src="/logo.png" alt="LyonsMC" className="nav-logo-img" />
            </Link>
          </div>

          {/* 2. Centered Nav Links */}
          <div className={`nav-links-center ${menuOpen ? 'active' : ''}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>Ana Sayfa</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>Hakkımızda</Link>
            <Link to="/features" onClick={() => setMenuOpen(false)}>Özellikler</Link>

            {/* Admin Panel Link (Mobile) */}
            {isAdmin && (
              <div className="mobile-only-actions">
                <Link to="/admin" className="store-btn" onClick={() => setMenuOpen(false)} style={{ marginBottom: '10px', background: 'rgba(255,50,50,0.2)', borderColor: '#ff4757', color: '#ff4757' }}>🛡️ Admin Paneli</Link>
              </div>
            )}

            {/* Mobile-only actions */}
            <div className="mobile-only-actions">
              <Link to="/store" className="store-btn" onClick={() => setMenuOpen(false)}>Mağaza</Link>

              {user ? (
                <>
                  <div className="user-info-mobile">
                    <span>{user.user_metadata?.username || 'Oyuncu'}</span>
                  </div>
                  <button className="auth-btn logout-btn" onClick={handleLogout}>Çıkış Yap</button>
                </>
              ) : (
                <div className="auth-buttons-mobile">
                  <button className="auth-btn login-btn" onClick={() => openAuthModal('login')}>Giriş Yap</button>
                  <button className="auth-btn register-btn" onClick={() => openAuthModal('register')}>Kayıt Ol</button>
                </div>
              )}
            </div>
          </div>

          {/* 3. Right aligned actions (Store + Auth) */}
          <div className="nav-actions-right">
            {isAdmin && (
              <Link to="/admin" className="store-btn desktop-only" style={{ background: 'rgba(255,50,50,0.1)', borderColor: '#ff4757', color: '#ff4757' }}>🛡️ Admin Paneli</Link>
            )}
            <Link to="/store" className="store-btn desktop-only">Mağaza</Link>

            {user ? (
              <div className="user-dropdown">
                <div className="user-profile-btn">
                  <span className="user-icon">👤</span>
                  <span className="username">{user.user_metadata?.username || 'Oyuncu'}</span>
                </div>
                <div className="user-dropdown-menu">
                  <Link to="/">Profilim</Link>
                  <button className="logout-text-btn" onClick={handleLogout}>Çıkış Yap</button>
                </div>
              </div>
            ) : (
              <div className="auth-action-group desktop-only">
                <button className="auth-btn login-btn" onClick={() => openAuthModal('login')}>Giriş Yap</button>
                <button className="auth-btn register-btn" onClick={() => openAuthModal('register')}>Kayıt Ol</button>
              </div>
            )}

            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
              <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
              <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
              <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            </div>
          </div>

        </div>
      </nav>

      {/* Auth Modal Component */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />
    </>
  );
};

export default Navbar;

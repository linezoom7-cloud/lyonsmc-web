import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <img src="/logo.png" alt="LyonsMC" className="footer-logo-img" />
                        <p className="footer-desc">
                            LyonsMC, Minecraft sunucu deneyimini Box Mining ile zirveye taşır.
                            Topluluğumuza katıl ve eğlencenin tadını çıkar!
                        </p>
                    </div>

                    <div className="footer-links-group">
                        <div className="footer-col">
                            <h3>Hızlı Bağlantılar</h3>
                            <Link to="/">Ana Sayfa</Link>
                            <Link to="/features">Sistemler</Link>
                            <Link to="/store">Mağaza</Link>
                            <Link to="/about">Hakkımızda</Link>
                        </div>

                        <div className="footer-col">
                            <h3>Yasal</h3>
                            <Link to="/kvkk">KVKK Metni</Link>
                            <Link to="/cookie-policy">Çerez Politikası</Link>
                            <a href="#kurallar">Oyun Kuralları</a>
                        </div>

                        <div className="footer-col">
                            <h3>Topluluk</h3>
                            <a href="#discord">Discord</a>
                            <a href="#forum">Forum</a>
                            <a href="#destek">Destek Talebi</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} LyonsMC. Tüm Hakları Saklıdır.</p>
                    <div className="footer-socials">
                        {/* Social Icons Placeholders */}
                        <a href="#discord" className="social-icon">🎮</a>
                        <a href="#youtube" className="social-icon">📺</a>
                        <a href="#twitter" className="social-icon">🐦</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

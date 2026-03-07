import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [copied, setCopied] = useState(false);
    const serverIP = "play.lyonsmc.xyz";

    const handleCopyIP = () => {
        navigator.clipboard.writeText(serverIP);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <section id="home" className="hero-section">
            {/* Background elements */}
            <div className="hero-bg-overlay"></div>
            <div className="glowing-orb orb-1"></div>
            <div className="glowing-orb orb-2"></div>

            <div className="hero-content">
                <div className="logo-presentation">
                    <img src={import.meta.env.BASE_URL + 'logo.png'} alt="LyonsMC Logo" className="main-logo-img" />
                </div>

                <h2 className="subtitle">Lider <span>Box Mining</span> Sunucusu</h2>
                <p className="description">
                    Özel eşyalar, rekabetçi ekonomi ve benzersiz Box Mining deneyimi seni bekliyor.
                    Hemen katıl ve maceraya başla!
                </p>

                <div className="cta-group">
                    <button className="copy-ip-btn" onClick={handleCopyIP}>
                        {copied ? (
                            <span className="success-text">IP Kopyalandı!</span>
                        ) : (
                            <span><i className="ip-icon">🎮</i> Sunucu IP Kopyala</span>
                        )}
                        <div className="ip-address">{serverIP}</div>
                    </button>

                    <a href="#store" className="secondary-btn">Mağazayı Keşfet</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

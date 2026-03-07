import React from 'react';
import { Link } from 'react-router-dom';
import './CallToAction.css';

const CallToAction = () => (
    <section className="cta-section">
        <div className="cta-orb cta-orb-l" />
        <div className="cta-orb cta-orb-r" />

        <div className="cta-inner">
            <p className="cta-eyebrow">⚔️ Macera Seni Bekliyor</p>
            <h2 className="cta-title">
                Topluluğumuza <span className="accent">Katıl</span>
            </h2>
            <p className="cta-desc">
                Binlerce oyuncuyla aynı dünyada Box Mining yap, lider tablolarına otur ve efsane eşyalar topla.
                Sunucuya bağlanmak için tek yapmen gereken IP adresini kopyalamak!
            </p>
            <div className="cta-actions">
                <Link to="/store" className="cta-btn-primary">🛒 Mağazayı Gez</Link>
                <Link to="/about" className="cta-btn-secondary">Hakkımızda →</Link>
            </div>

            {/* IP highlight box */}
            <div className="cta-ip-box">
                <span className="cta-ip-label">Sunucu IP</span>
                <span className="cta-ip-value">play.lyonsmc.xyz</span>
                <span className="cta-ip-version">Java &amp; Bedrock · 1.16.5 – 1.21.8</span>
            </div>
        </div>
    </section>
);

export default CallToAction;

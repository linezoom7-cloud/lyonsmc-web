import React from 'react';
import { Link } from 'react-router-dom';
import './WhyLyons.css';

const reasons = [
    {
        icon: '⛏️',
        title: 'Özel Box Mining',
        desc: 'Hiçbir yerde bulamayacağınız, tamamen özelleştirilmiş Box Mining sistemiyle benzersiz bir macera sizi bekliyor.',
    },
    {
        icon: '⚖️',
        title: 'Dengeli Ekonomi',
        desc: 'Oyuncu dostu fiyatlar ve adil bir ekonomi sistemiyle hem yeni başlayanlar hem de profesyoneller için tasarlandı.',
    },
    {
        icon: '🏆',
        title: 'Rekabetçi Skor Tahtası',
        desc: 'Haftalık ve aylık lider tablolarıyla sunucunun en iyisi olmak için mücadele et, özel ödüller kazan.',
    },
    {
        icon: '🛡️',
        title: 'Güvenli Altyapı',
        desc: 'Yüksek performanslı anti-hile sistemi ve 7/24 aktif moderasyon ekibiyle güvenli bir oyun ortamı garanti.',
    },
    {
        icon: '🎁',
        title: 'Günlük Ödüller',
        desc: 'Her gün giriş yapan oyunculara özel eşya, coin ve kasa anahtarları hediye ediyoruz.',
    },
    {
        icon: '💬',
        title: 'Canlı Topluluk',
        desc: '1.200+ kişilik Discord topluluğumuzda etkinliklere katıl, arkadaşlar edin ve anlık destek al.',
    },
];

const WhyLyons = () => (
    <section className="why-section">
        <div className="why-header">
            <p className="why-eyebrow">Neden Biz?</p>
            <h2 className="why-title">
                <span className="accent">LyonsMC</span>'yi Özel Kılan Şeyler
            </h2>
            <p className="why-subtitle">
                Sıradan bir Minecraft sunucusu değil — birbirinden farklı özelliklerle dolu bir dünya.
            </p>
        </div>
        <div className="why-grid">
            {reasons.map((r) => (
                <div className="why-card" key={r.title}>
                    <div className="why-icon">{r.icon}</div>
                    <h3 className="why-card-title">{r.title}</h3>
                    <p className="why-card-desc">{r.desc}</p>
                </div>
            ))}
        </div>
        <div className="why-cta">
            <Link to="/features" className="why-link-btn">Tüm Sistemleri Gör →</Link>
        </div>
    </section>
);

export default WhyLyons;

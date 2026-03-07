import React, { useEffect } from 'react';
import './About.css';

const About = () => {
    // Sayfa yüklendiğinde en üste scroll yap
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-container about-page">
            {/* Ambient Background Effects */}
            <div className="ambient-glow glow-1"></div>
            <div className="ambient-glow glow-2"></div>

            <div className="about-hero">
                <h1 className="page-title">
                    <span className="accent">LyonsMC</span> Hakkında
                </h1>
                <p className="about-subtitle">
                    Box Mining türünün en yenilikçi ve rekabetçi hali. LyonsMC,
                    sıradan Minecraft deneyimini aşarak oyunculara eşsiz bir ekonomi,
                    pazar ve savaş sistemi sunar.
                </p>
            </div>

            <div className="about-vision">
                <div className="vision-card">
                    <div className="vision-icon">🌟</div>
                    <h3>Vizyonumuz</h3>
                    <p>Oyuncuların emeklerinin karşılığını aldığı, adil, hilesiz ve kesintisiz (7/24) bir oyun ekosistemi kurmak.</p>
                </div>
                <div className="vision-card">
                    <div className="vision-icon">🛡️</div>
                    <h3>Misyonumuz</h3>
                    <p>Yenilikçi eklentiler, özel eşyalar ve dengeli bir ekonomi ile Türkiye'nin en büyük Box Mining sunucusu olmak.</p>
                </div>
            </div>
        </div>
    );
};

export default About;

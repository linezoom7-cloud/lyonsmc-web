import React, { useEffect } from 'react';
import Features from '../../components/Features/Features';
import './FeaturesPage.css';

const FeaturesPage = () => {
    // Sayfa yüklendiğinde en üste scroll yap
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-container features-page-wrapper">
            {/* Ambient Background Effects */}
            <div className="ambient-glow glow-1"></div>
            <div className="ambient-glow glow-2"></div>

            <div className="features-page-header">
                <h1 className="page-title">
                    <span className="accent">LyonsMC</span> Sistemleri
                </h1>
                <p className="about-subtitle">
                    Klasikleşmiş Minecraft yeteneklerini bir kenara bırakın.
                    Sunucumuzda sizi bekleyen benzersiz özellikleri keşfedin.
                </p>
            </div>

            <div className="features-wrapper">
                <Features />
            </div>
        </div>
    );
};

export default FeaturesPage;

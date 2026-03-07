import React from 'react';
import './Features.css';

const Features = () => {
    const featuresList = [
        {
            icon: "⛏️",
            title: "Gelişmiş Box Mining",
            description: "Sadece blok kırmakla kalma! Eşsiz sistemler ile madencilik yaparak nadir cevherler topla, seviyeni yükselt ve sunucu sıralamasında üstlere tırman."
        },
        {
            icon: "⚔️",
            title: "Özel Boss Savaşları",
            description: "Zindanlara inerek özel bossları mağlup et! Çıkan destansı ganimetlerle karakterini donat ve rekabette öne geç."
        },
        {
            icon: "💰",
            title: "Dengeli Ekonomi",
            description: "Oyuncu odaklı ekonomi sistemimizde takas yap, açık artırmaya eşya koy ve zenginliğini diğer oyunculara kanıtla."
        },
        {
            icon: "🚀",
            title: "Sürekli Etkinlikler",
            description: "Haftalık turnuvalar, kasa anahtarı dağıtımları ve yenilikçi oyun modları sayesinde her anı dolu dolu bir macera yaşa."
        }
    ];

    return (
        <section id="features" className="features-section">
            <div className="features-container">
                <div className="section-header">
                    <h2 className="section-title">BOX MINING <span className="highlight">DENEYİMİ</span></h2>
                    <p className="section-subtitle">Neden LyonsMC'yi tercih etmelisin?</p>
                    <div className="header-line"></div>
                </div>

                <div className="features-grid">
                    {featuresList.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <div className="feature-icon-wrapper">
                                <span className="feature-icon">{feature.icon}</span>
                                <div className="icon-glow"></div>
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

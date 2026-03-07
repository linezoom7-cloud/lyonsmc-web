import React, { useEffect, useState, useRef } from 'react';
import './LoadingScreen.css';

// Randomly generates particle positions for the background
const generateParticles = (count) => {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 4,
        opacity: Math.random() * 0.5 + 0.1,
    }));
};

const particles = generateParticles(60);

const LoadingScreen = ({ onComplete }) => {
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [progress, setProgress] = useState(0);
    const [statusText, setStatusText] = useState('Sunucuya bağlanılıyor...');
    const intervalRef = useRef(null);

    useEffect(() => {
        // Animated fake loading text
        const loadingSteps = [
            { at: 0, text: 'Sunucuya bağlanılıyor...' },
            { at: 700, text: 'Dünya yükleniyor...' },
            { at: 1400, text: 'Envanter hazırlanıyor...' },
            { at: 2000, text: 'Macera başlıyor...' },
        ];

        loadingSteps.forEach(({ at, text }) => {
            setTimeout(() => setStatusText(text), at);
        });

        // Smooth progress bar driven by requestAnimationFrame
        const startTime = Date.now();
        const totalDuration = 2500;
        const tick = () => {
            const elapsed = Date.now() - startTime;
            const pct = Math.min((elapsed / totalDuration) * 100, 100);
            setProgress(pct);
            if (pct < 100) {
                intervalRef.current = requestAnimationFrame(tick);
            }
        };
        intervalRef.current = requestAnimationFrame(tick);

        // Begin fade-out at 2.5s
        const fadeTimer = setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => onComplete(), 900);
        }, totalDuration);

        return () => {
            clearTimeout(fadeTimer);
            cancelAnimationFrame(intervalRef.current);
        };
    }, [onComplete]);

    return (
        <div className={`ls-container ${isFadingOut ? 'ls-fade-out' : ''}`}>

            {/* Particle field */}
            <div className="ls-particles">
                {particles.map((p) => (
                    <span
                        key={p.id}
                        className="ls-particle"
                        style={{
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                            animationDuration: `${p.duration}s`,
                            animationDelay: `${p.delay}s`,
                            opacity: p.opacity,
                        }}
                    />
                ))}
            </div>

            {/* Ambient glow orbs */}
            <div className="ls-orb ls-orb-1" />
            <div className="ls-orb ls-orb-2" />
            <div className="ls-orb ls-orb-3" />

            {/* Central content */}
            <div className="ls-content">
                {/* Rotating border ring  */}
                <div className="ls-ring-outer">
                    <div className="ls-ring-inner">
                        <div className="ls-logo-wrap">
                            <img src={import.meta.env.BASE_URL + 'logo.png'} alt="LyonsMC" className="ls-logo" />
                        </div>
                    </div>
                </div>

                {/* Brand name */}
                <h1 className="ls-brand">
                    Lyons<span className="ls-accent">MC</span>
                </h1>

                {/* Tagline */}
                <p className="ls-tagline">Box Mining Sunucusu</p>

                {/* Progress bar */}
                <div className="ls-bar-wrap">
                    <div className="ls-bar-track">
                        <div className="ls-bar-fill" style={{ width: `${progress}%` }} />
                        <div className="ls-bar-glow" style={{ left: `${progress}%` }} />
                    </div>
                    <span className="ls-pct">{Math.round(progress)}%</span>
                </div>

                {/* Status text */}
                <p className="ls-status">{statusText}</p>

                {/* Corner decorations */}
                <div className="ls-corner ls-corner-tl" />
                <div className="ls-corner ls-corner-tr" />
                <div className="ls-corner ls-corner-bl" />
                <div className="ls-corner ls-corner-br" />
            </div>
        </div>
    );
};

export default LoadingScreen;

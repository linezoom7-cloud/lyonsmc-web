import React, { useEffect, useState } from 'react';
import './HomeStats.css';

const HomeStats = () => {
    const [status, setStatus] = useState(null);   // null = loading
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                const res = await fetch('https://api.mcsrvstat.us/3/play.lyonsmc.xyz');
                if (!res.ok) throw new Error('API hatası');
                const data = await res.json();
                setStatus(data);
            } catch (e) {
                console.error('Sunucu durumu alınamadı:', e);
                setError(true);
            }
        };
        fetchStatus();
        // Refresh every 60 seconds
        const interval = setInterval(fetchStatus, 60_000);
        return () => clearInterval(interval);
    }, []);

    const online = status?.online ?? false;
    const playerCount = status?.players?.online ?? 0;
    const playerMax = status?.players?.max ?? 0;
    const version = status?.version ?? '—';
    const motd = status?.motd?.clean?.[0] ?? 'LyonsMC Box Mining';

    return (
        <section className="home-stats-section">
            <div className="divider-line"><span className="divider-diamond">◆</span></div>

            {/* Live status badge */}
            {status === null && !error ? (
                <div className="live-loading">
                    <span className="loading-dot" /><span className="loading-dot" /><span className="loading-dot" />
                    <p>Sunucu durumu kontrol ediliyor...</p>
                </div>
            ) : error ? (
                <div className="live-badge offline">
                    <span className="status-dot offline-dot" />
                    Sunucu bilgisi alınamadı
                </div>
            ) : (
                <>
                    {/* Top live badge */}
                    <div className={`live-badge ${online ? 'online' : 'offline'}`}>
                        <span className={`status-dot ${online ? 'online-dot' : 'offline-dot'}`} />
                        {online ? 'Sunucu Çevrimiçi' : 'Sunucu Çevrimdışı'}
                        <span className="badge-ip">play.lyonsmc.xyz</span>
                    </div>

                    {/* MOTD */}
                    {motd && <p className="server-motd">{motd}</p>}

                    {/* Stats grid */}
                    <div className="stats-grid">
                        {/* Online players */}
                        <div className="stat-card featured">
                            <span className="stat-icon">👥</span>
                            <span className="stat-value">
                                {online ? playerCount : '—'}
                                {online && playerMax > 0 && (
                                    <span className="stat-max">/{playerMax}</span>
                                )}
                            </span>
                            <span className="stat-label">Aktif Oyuncu</span>
                        </div>

                        {/* Server version */}
                        <div className="stat-card">
                            <span className="stat-icon">🎮</span>
                            <span className="stat-value version-val">{version}</span>
                            <span className="stat-label">Sunucu Versiyonu</span>
                        </div>

                        {/* Uptime */}
                        <div className="stat-card">
                            <span className="stat-icon">⏱️</span>
                            <span className="stat-value">24/7</span>
                            <span className="stat-label">Kesintisiz Sunucu</span>
                        </div>

                        {/* Custom plugins count */}
                        <div className="stat-card">
                            <span className="stat-icon">📦</span>
                            <span className="stat-value">50+</span>
                            <span className="stat-label">Özel Eklenti</span>
                        </div>
                    </div>

                    <p className="live-refresh-note">Veriler her 60 saniyede bir güncellenir</p>
                </>
            )}

            <div className="divider-line"><span className="divider-diamond">◆</span></div>
        </section>
    );
};

export default HomeStats;

import React, { useEffect } from 'react';
import './Store.css';

const Store = () => {
    // Sayfa yüklendiğinde en üste scroll yap
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-container store-page">
            <div className="store-hero">
                <h1 className="page-title">
                    <span className="accent">Lyons</span> Mağaza
                </h1>
                <p className="store-subtitle">
                    Eşsiz VİP paketleri, Kasa Anahtarları ve Lyons Coin ile sunucuda farkını ortaya koy!
                </p>
            </div>

            {/* Placeholder for real backend logic */}
            <div className="store-coming-soon">
                <div className="item-icon">🛒</div>
                <h3 className="item-name">Mağaza Yapım Aşamasında</h3>
                <p className="item-desc">Şu an için mağazadan ürün satın alınamaz. Yakında eklenecek olan VİP, Kasa ve Lyson Coin paketleri için takipte kalın!</p>
            </div>
        </div>
    );
};

export default Store;

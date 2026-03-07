import React from 'react';
import { supabase } from '../../supabaseClient';
import './AdminPanel.css';

const AdminPanel = () => {
    return (
        <section className="admin-section">
            <div className="admin-container">
                <div className="admin-header">
                    <h2><span className="accent">Yönetim</span> Paneli</h2>
                    <p>LyonsMC Yönetim Sistemine Hoş Geldiniz</p>
                </div>

                <div className="admin-dashboard">
                    <div className="admin-card">
                        <div className="admin-card-icon">👥</div>
                        <h3>Oyuncular</h3>
                        <p>Sisteme kayıtlı tüm oyuncuları yönetin.</p>
                        <button className="admin-action-btn">Yönet</button>
                    </div>

                    <div className="admin-card">
                        <div className="admin-card-icon">🛒</div>
                        <h3>Mağaza</h3>
                        <p>Mağazadaki ürünleri ve fiyatları güncelleyin.</p>
                        <button className="admin-action-btn">Yönet</button>
                    </div>

                    <div className="admin-card">
                        <div className="admin-card-icon">⚙️</div>
                        <h3>Ayarlar</h3>
                        <p>Site ve API ayarlarını yapılandırın.</p>
                        <button className="admin-action-btn">Yönet</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminPanel;

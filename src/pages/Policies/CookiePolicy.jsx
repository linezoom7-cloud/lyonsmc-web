import React, { useEffect } from 'react';
import './Policies.css';

const CookiePolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-container policy-page">
            <div className="policy-header">
                <h1 className="page-title">
                    <span className="accent">Çerez</span> Politikası
                </h1>
                <p className="about-subtitle">
                    Size daha iyi bir deneyim sunabilmek için web sitemizde çerezler kullanıyoruz.
                </p>
            </div>

            <div className="policy-content">
                <div className="policy-section">
                    <h2>1. Çerez Nedir?</h2>
                    <p>
                        Çerezler (cookies), ziyaret ettiğiniz web siteleri tarafından tarayıcınız aracılığıyla cihazınıza veya ağ sunucusuna depolanan küçük metin dosyalarıdır. Çerezler, web sitesinin daha verimli çalışmasını sağlamak ve ayrıca web sitesi sahiplerine bilgi sağlamak amacıyla yaygın olarak kullanılmaktadır.
                    </p>
                </div>

                <div className="policy-section">
                    <h2>2. Neden Çerez Kullanıyoruz?</h2>
                    <p>
                        LyonsMC platformunda çerezler, oturum sürekliliğinizi (giriş yapılı kalmanızı) sağlamak, tercihlerinizi hatırlamak ve sitenin teknik olarak düzgün çalışması amacıyla (Supabase kimlik doğrulaması vb.) zorunlu olarak kullanılmaktadır.
                    </p>
                </div>

                <div className="policy-section">
                    <h2>3. Çerez Türleri</h2>
                    <p>
                        <strong>Zorunlu Çerezler:</strong> Web sitemizin düzgün çalışması ve özelliklerinden tam olarak faydalanabilmeniz için kesinlikle gerekli olan çerezlerdir. Kimlik doğrulama süreçleri bunlara dahildir (auth tokens).<br /><br />
                        <strong>Performans ve Analiz Çerezleri:</strong> (Eğer kullanılıyorsa) Sitenin kullanım şeklini anlamamıza yardımcı olarak performansı artırmamızı sağlayan çerezlerdir.
                    </p>
                </div>

                <div className="policy-section">
                    <h2>4. Çerez Tercihlerinin Yönetimi</h2>
                    <p>
                        Zorunlu çerezler dışındaki çerezler şuan sitemizde aktif değildir. Tarayıcı ayarlarınızı değiştirerek çerezlere ilişkin tercihlerinizi her zaman kişiselleştirebilir, mevcut çerezleri silebilirsiniz. Ancak zorunlu çerezleri engellemeniz durumunda siteye giriş (Oturum Açma) işlemlerini çalıştıramayabilirsiniz.
                    </p>
                </div>

                <div className="policy-footer-note">
                    <p>Son Güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicy;

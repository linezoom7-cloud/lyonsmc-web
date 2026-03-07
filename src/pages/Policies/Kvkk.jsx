import React, { useEffect } from 'react';
import './Policies.css';

const Kvkk = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-container policy-page">
            <div className="policy-header">
                <h1 className="page-title">
                    Kişisel Verilerin Korunması <span className="accent">(KVKK)</span>
                </h1>
                <p className="about-subtitle">
                    LyonsMC olarak gizliliğinize ve kişisel verilerinizin güvenliğine önem veriyoruz.
                </p>
            </div>

            <div className="policy-content">
                <div className="policy-section">
                    <h2>1. Veri Sorumlusu</h2>
                    <p>
                        6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca, elde edilen kişisel verileriniz veri sorumlusu sıfatıyla LyonsMC ("Sunucu") tarafından aşağıda açıklanan kapsamda işlenebilecektir.
                    </p>
                </div>

                <div className="policy-section">
                    <h2>2. Kişisel Verilerin İşlenme Amacı</h2>
                    <p>
                        Toplanan kişisel verileriniz, LyonsMC tarafınca sunulan ürün ve hizmetlerden sizleri faydalandırmak için gerekli çalışmaların iş birimlerimiz tarafından yapılması, sunucu güvenliğinin tesis edilmesi ve hile (hile koruması) süreçlerinin yönetilmesi amaçlarıyla işlenebilecektir. Kaydedilen e-posta adresiniz, bildirimler ve hesap kurtarma işlemleri için tutulur.
                    </p>
                </div>

                <div className="policy-section">
                    <h2>3. İşlenen Verilerin Kimlere Aktarılabileceği</h2>
                    <p>
                        İşlenen kişisel verileriniz, zorunlu hukuki süreçler ve yasaların gerektirdiği adli makamlar haricinde hiçbir şekilde üçüncü kişi veya kurumlarla (reklam/pazarlama amaçlı) paylaşılmamaktadır. Supabase altyapımız ile verileriniz endüstri standartlarında şifrelenerek korunur.
                    </p>
                </div>

                <div className="policy-section">
                    <h2>4. İlgili Kişinin Hakları</h2>
                    <p>
                        KVKK’nın 11. maddesi uyarınca veri sahipleri; kişisel verilerinin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, eksik veya yanlış işlenmişse düzeltilmesini isteme haklarına sahiptir. Bu kapsamda bizimle destek bileti veya resmi iletişim kanallarımız üzerinden iletişime geçebilirsiniz.
                    </p>
                </div>

                <div className="policy-footer-note">
                    <p>Son Güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>
                </div>
            </div>
        </div>
    );
};

export default Kvkk;

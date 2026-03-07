import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import './Profile.css';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isChangingEmail, setIsChangingEmail] = useState(false);
    const [newEmail, setNewEmail] = useState('');
    const [emailMessage, setEmailMessage] = useState({ text: '', type: '' });
    const [emailLoading, setEmailLoading] = useState(false);

    useEffect(() => {
        // Session state dinleme
        const fetchUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setUser(session?.user ?? null);
            setLoading(false);
        };

        fetchUser();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    const handleChangeEmail = async (e) => {
        e.preventDefault();
        setEmailLoading(true);
        setEmailMessage({ text: '', type: '' });

        try {
            const { error } = await supabase.auth.updateUser({ email: newEmail });
            if (error) throw error;
            setEmailMessage({ text: 'Doğrulama linkleri hem eski hem de yeni e-posta adresine gönderildi. Lütfen onaylayın!', type: 'success' });
            setTimeout(() => {
                setIsChangingEmail(false);
                setEmailMessage({ text: '', type: '' });
                setNewEmail('');
            }, 5000);
        } catch (error) {
            setEmailMessage({ text: error.message, type: 'error' });
        } finally {
            setEmailLoading(false);
        }
    };

    if (loading) return null; // Yüklenirken bir şey gösterme

    // Eğer kullanıcı giriş yapmamışsa profili gösterme
    if (!user) return null;

    const username = user.user_metadata?.username || 'Steve';
    // Minotar veya Crafatar API kullanarak Minecraft kafasını çekiyoruz
    const avatarUrl = `https://minotar.net/helm/${username}/150.png`;

    return (
        <section className="profile-section" id="profil">
            <div className="profile-container">
                <div className="profile-card">
                    <div className="profile-header">
                        <h2 className="section-title">
                            <span className="accent">Oyuncu</span> Profili
                        </h2>
                    </div>

                    <div className="profile-content">
                        <div className="avatar-container">
                            <div className="avatar-wrapper">
                                <img
                                    src={avatarUrl}
                                    alt={`${username} Minecraft Skin`}
                                    className="mc-avatar"
                                    onError={(e) => {
                                        // Eğer kullanıcının premium skini yoksa varsayılan steve kafası ver
                                        e.target.src = 'https://minotar.net/helm/Steve/150.png';
                                    }}
                                />
                                <div className="avatar-glow"></div>
                            </div>
                        </div>

                        <div className="user-details">
                            <h3 className="mc-username">{username}</h3>
                            <div className="user-badge">LyonsMC Oyuncusu</div>

                            <div className="user-info-list">
                                <div className="info-item">
                                    <span className="info-icon">📧</span>
                                    <div className="info-text">
                                        <span className="info-label">Kayıtlı E-posta</span>
                                        <span className="info-value">
                                            {user.email}
                                            <span
                                                className="change-email-btn"
                                                onClick={() => setIsChangingEmail(!isChangingEmail)}
                                            >
                                                (Değiştir)
                                            </span>
                                        </span>
                                    </div>
                                </div>

                                {isChangingEmail && (
                                    <form onSubmit={handleChangeEmail} className="change-email-form">
                                        <input
                                            type="email"
                                            placeholder="Yeni E-posta Adresi"
                                            value={newEmail}
                                            onChange={(e) => setNewEmail(e.target.value)}
                                            required
                                        />
                                        <button type="submit" disabled={emailLoading}>
                                            {emailLoading ? '...' : 'Güncelle'}
                                        </button>
                                        {emailMessage.text && (
                                            <p className={`email-msg ${emailMessage.type}`}>{emailMessage.text}</p>
                                        )}
                                    </form>
                                )}

                                <div className="info-item">
                                    <span className="info-icon">📅</span>
                                    <div className="info-text">
                                        <span className="info-label">Kayıt Tarihi</span>
                                        <span className="info-value">
                                            {new Date(user.created_at).toLocaleDateString('tr-TR', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;

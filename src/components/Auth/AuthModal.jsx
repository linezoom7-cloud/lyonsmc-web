import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose, initialMode }) => {
    // Modes: 'login', 'register', 'forgot_password', 'magic_link'
    const [mode, setMode] = useState(initialMode || 'login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' });

    if (!isOpen) return null;

    const handleAuth = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ text: '', type: '' });

        try {
            if (mode === 'login') {
                const { error } = await supabase.auth.signInWithPassword({ email, password });
                if (error) throw error;
                onClose();
            } else if (mode === 'register') {
                const { error } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        data: { username: username },
                        emailRedirectTo: 'https://lyonsmc.xyz/auth/callback',
                    }
                });
                if (error) throw error;
                setMessage({ text: 'Kayıt başarılı! Lütfen gelen kutunuzu (Mail) kontrol edip hesabınızı onaylayın.', type: 'success' });
                setTimeout(() => setMode('login'), 3500);
            } else if (mode === 'forgot_password') {
                const { error } = await supabase.auth.resetPasswordForEmail(email, {
                    redirectTo: 'https://lyonsmc.xyz/auth/callback',
                });
                if (error) throw error;
                setMessage({ text: 'Şifre sıfırlama bağlantısı e-postanıza gönderildi!', type: 'success' });
            } else if (mode === 'magic_link') {
                const { error } = await supabase.auth.signInWithOtp({
                    email,
                    options: {
                        emailRedirectTo: 'https://lyonsmc.xyz/auth/callback'
                    }
                });
                if (error) throw error;
                setMessage({ text: 'Sihirli giriş bağlantısı e-postanıza gönderildi! Linke tıklayarak şifresiz girebilirsiniz.', type: 'success' });
            }
        } catch (error) {
            if (error.message.includes('User already registered')) {
                setMessage({ text: 'Bu e-posta adresi zaten kayıtlı!', type: 'error' });
            } else if (error.message.includes('Invalid login credentials')) {
                setMessage({ text: 'E-posta veya şifre hatalı!', type: 'error' });
            } else {
                setMessage({ text: error.message, type: 'error' });
            }
        } finally {
            setLoading(false);
        }
    };

    const getTitle = () => {
        switch (mode) {
            case 'login': return 'Giriş Yap';
            case 'register': return 'Kayıt Ol';
            case 'forgot_password': return 'Şifremi Unuttum';
            case 'magic_link': return 'Sihirli Bağlantı';
            default: return '';
        }
    };

    const getSubtitle = () => {
        switch (mode) {
            case 'login': return 'LyonsMC hesabına eriş.';
            case 'register': return 'Box Mining macerasına şimdi katıl!';
            case 'forgot_password': return 'E-postanı gir, şifreni sıfırlayalım.';
            case 'magic_link': return 'Şifre girmeden sadece mail ile hızlıca giriş yap.';
            default: return '';
        }
    };

    return (
        <div className="auth-modal-overlay" onClick={onClose}>
            <div className="auth-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>×</button>

                <div className="auth-header">
                    <h2>{getTitle()}</h2>
                    <p>{getSubtitle()}</p>
                </div>

                {message.text && (
                    <div className={`auth-message ${message.type}`}>
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleAuth} className="auth-form">
                    {mode === 'register' && (
                        <div className="form-group">
                            <label>Oyun İçi Adın (Nick)</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Örn: Steve"
                                required
                            />
                        </div>
                    )}

                    <div className="form-group">
                        <label>E-posta Adresi</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-posta girin"
                            required
                        />
                    </div>

                    {(mode === 'login' || mode === 'register') && (
                        <div className="form-group">
                            <label>Şifre</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Şifrenizi girin (min 6 karakter)"
                                required
                                minLength="6"
                            />
                        </div>
                    )}

                    {mode === 'login' && (
                        <div className="forgot-password-link">
                            <span onClick={() => setMode('forgot_password')}>Şifremi Unuttum?</span>
                            <span onClick={() => setMode('magic_link')} className="magic-link-btn">✨ Sihirli Link ile Giriş</span>
                        </div>
                    )}

                    <button type="submit" className="submit-auth-btn" disabled={loading}>
                        {loading ? 'Bekleniyor...' : getTitle()}
                    </button>
                </form>

                <div className="auth-footer">
                    {mode === 'login' ? (
                        <p>Hesabın yok mu? <span onClick={() => setMode('register')}>Hemen Kayıt Ol</span></p>
                    ) : (
                        <p>Zaten hesabın var mı? <span onClick={() => setMode('login')}>Giriş Yap</span></p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthModal;

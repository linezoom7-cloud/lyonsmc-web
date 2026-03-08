import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import './AuthCallback.css';

const AuthCallback = () => {
    const navigate = useNavigate();
    const [status, setStatus] = useState('loading'); // 'loading' | 'success' | 'error'
    const [message, setMessage] = useState('');

    useEffect(() => {
        const handleCallback = async () => {
            try {
                // Supabase detects the token from the URL hash automatically
                const { data, error } = await supabase.auth.getSession();

                if (error) throw error;

                if (data?.session) {
                    setStatus('success');
                    setMessage('E-posta adresin doğrulandı! Ana sayfaya yönlendiriliyorsun...');
                    setTimeout(() => navigate('/'), 2500);
                } else {
                    // Try to exchange the code/token from the URL
                    const hashParams = new URLSearchParams(window.location.hash.substring(1));
                    const searchParams = new URLSearchParams(window.location.search);

                    const accessToken = hashParams.get('access_token');
                    const refreshToken = hashParams.get('refresh_token');
                    const code = searchParams.get('code');

                    if (accessToken && refreshToken) {
                        const { error: setErr } = await supabase.auth.setSession({
                            access_token: accessToken,
                            refresh_token: refreshToken,
                        });
                        if (setErr) throw setErr;
                        setStatus('success');
                        setMessage('E-posta adresin doğrulandı! Ana sayfaya yönlendiriliyorsun...');
                        setTimeout(() => navigate('/'), 2500);
                    } else if (code) {
                        const { error: exchErr } = await supabase.auth.exchangeCodeForSession(code);
                        if (exchErr) throw exchErr;
                        setStatus('success');
                        setMessage('E-posta adresin doğrulandı! Ana sayfaya yönlendiriliyorsun...');
                        setTimeout(() => navigate('/'), 2500);
                    } else {
                        throw new Error('Geçersiz veya süresi dolmuş doğrulama bağlantısı.');
                    }
                }
            } catch (err) {
                console.error('Auth callback error:', err);
                setStatus('error');
                setMessage(err.message || 'Doğrulama sırasında bir hata oluştu.');
            }
        };

        handleCallback();
    }, [navigate]);

    return (
        <div className="auth-callback-container">
            <div className="auth-callback-card">
                {status === 'loading' && (
                    <>
                        <div className="auth-callback-spinner" />
                        <h2>Hesabın Doğrulanıyor...</h2>
                        <p>Lütfen bekleyin.</p>
                    </>
                )}
                {status === 'success' && (
                    <>
                        <div className="auth-callback-icon success">✓</div>
                        <h2>Doğrulama Başarılı!</h2>
                        <p>{message}</p>
                    </>
                )}
                {status === 'error' && (
                    <>
                        <div className="auth-callback-icon error">✗</div>
                        <h2>Bir Hata Oluştu</h2>
                        <p>{message}</p>
                        <button onClick={() => navigate('/')} className="auth-callback-btn">
                            Ana Sayfaya Dön
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default AuthCallback;

# LyonsMC - Özel E-Posta (Email) Şablonları

E-posta sağlayıcıları (Gmail, Outlook vb.) çok gelişmiş CSS ve animasyonları desteklemezler. Bu yüzden e-postalar için **"E-postaya özel optimize edilmiş, koyu temalı (Dark Mode) ve turuncu vurgulu (Orange Accent)"** şık HTML şablonları hazırladım. Mümkün olan en iyi gölgelendirmeler ve buton tasarımları kullanıldı.

Lütfen aşağıdaki kodları **Supabase Paneli -> Authentication -> Email Templates** bölümündeki ilgili sayfalara kopyalayın.

---

### 1- Confirm Signup (Kayıt Onayı Şablonu)
*Kullanıcı yeni kayıt olduğunda gider.*

```html
<div style="background-color:#0a0805; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px 0; color: #ffffff;">
    <div style="max-width: 500px; margin: 0 auto; background-color: #1a1511; border: 1px solid rgba(255,184,0,0.2); border-radius: 12px; padding: 40px 30px; text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
        <h1 style="color: #ffb800; margin-bottom: 5px; font-size: 28px;">LyonsMC</h1>
        <p style="color: #a0a0a0; font-size: 14px; margin-top: 0;">Box Mining Serüvenine Hoş Geldin!</p>
        
        <div style="margin: 30px 0; padding: 20px; background-color: rgba(255,255,255,0.02); border-radius: 8px;">
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 25px;">Maceraya başlamak için son bir adım kaldı. Lütfen aşağıdaki butona tıklayarak hesabını aktifleştir.</p>
            
            <a href="{{ .ConfirmationURL }}" style="display: inline-block; background-color: #ff6b00; color: #ffffff; text-decoration: none; padding: 14px 30px; border-radius: 6px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(255,107,0,0.3);">Hesabımı Onayla</a>
        </div>
        
        <p style="font-size: 12px; color: #666; margin-top: 30px;">Eğer bu kaydı sen yapmadıysan, lütfen bu postayı dikkate alma.</p>
    </div>
</div>
```

---

### 2- Magic Link (Sihirli Giriş Şablonu)
*Kullanıcı şifresiz hızlı giriş yapmak istediğinde gider.*

```html
<div style="background-color:#0a0805; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px 0; color: #ffffff;">
    <div style="max-width: 500px; margin: 0 auto; background-color: #1a1511; border: 1px solid rgba(255,184,0,0.2); border-radius: 12px; padding: 40px 30px; text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
        <h1 style="color: #ffb800; margin-bottom: 5px; font-size: 28px;">LyonsMC</h1>
        <p style="color: #a0a0a0; font-size: 14px; margin-top: 0;">Sihirli Bağlantın Hazır ✨</p>
        
        <div style="margin: 30px 0; padding: 20px; background-color: rgba(255,255,255,0.02); border-radius: 8px;">
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 25px;">Şifre girmekle uğraşmana gerek yok! Aşağıdaki "Tek Tıkla Giriş" butonuna basarak doğrudan LyonsMC hesabına bağlanabilirsin.</p>
            
            <a href="{{ .ConfirmationURL }}" style="display: inline-block; background: linear-gradient(135deg, #ffb800, #ff6b00); color: #ffffff; text-decoration: none; padding: 14px 30px; border-radius: 6px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 20px rgba(255,184,0,0.4);">✨ Tek Tıkla Giriş</a>
        </div>
        
        <p style="font-size: 12px; color: #666; margin-top: 30px;">Bu bağlantı kısa bir süre sonra geçerliliğini yitirecektir. Senden başkasıyla paylaşma!</p>
    </div>
</div>
```

---

### 3- Reset Password (Şifre Sıfırlama Şablonu)
*Kullanıcı şifresini unuttuğunda gider.*

```html
<div style="background-color:#0a0805; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px 0; color: #ffffff;">
    <div style="max-width: 500px; margin: 0 auto; background-color: #1a1511; border: 1px solid rgba(255,71,87,0.3); border-radius: 12px; padding: 40px 30px; text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
        <h1 style="color: #ffb800; margin-bottom: 5px; font-size: 28px;">LyonsMC</h1>
        <p style="color: #a0a0a0; font-size: 14px; margin-top: 0;">Şifre Sıfırlama Talebi</p>
        
        <div style="margin: 30px 0; padding: 20px; background-color: rgba(255,255,255,0.02); border-radius: 8px;">
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 25px;">Hesabın için bir şifre sıfırlama talebinde bulundun. Güvenliğin için yeni şifreni aşağıdaki butona tıklayarak hemen oluşturabilirsin.</p>
            
            <a href="{{ .ConfirmationURL }}" style="display: inline-block; background-color: #ff4757; color: #ffffff; text-decoration: none; padding: 14px 30px; border-radius: 6px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(255,71,87,0.3);">Yeni Şifre Belirle</a>
        </div>
        
        <p style="font-size: 12px; color: #666; margin-top: 30px;">Eğer şifre sıfırlama talebini sen yapmadıysan bu e-postayı güvenlik amacıyla silebilirsin.</p>
    </div>
</div>
```

---

### 4- Change Email (E-Posta Değişikliği Şablonu)
*Kullanıcı mailini güncellemek istediğinde gider.*

```html
<div style="background-color:#0a0805; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px 0; color: #ffffff;">
    <div style="max-width: 500px; margin: 0 auto; background-color: #1a1511; border: 1px solid rgba(255,184,0,0.2); border-radius: 12px; padding: 40px 30px; text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
        <h1 style="color: #ffb800; margin-bottom: 5px; font-size: 28px;">LyonsMC</h1>
        <p style="color: #a0a0a0; font-size: 14px; margin-top: 0;">Hesap Güncellemesi</p>
        
        <div style="margin: 30px 0; padding: 20px; background-color: rgba(255,255,255,0.02); border-radius: 8px;">
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 25px;">E-posta adresini değiştirmek istediğini gördük. Lütfen bu değişikliği onaylamak için aşağıdaki butona tıkla.</p>
            
            <a href="{{ .ConfirmationURL }}" style="display: inline-block; background-color: #2ed573; color: #ffffff; text-decoration: none; padding: 14px 30px; border-radius: 6px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(46,213,115,0.3);">Onayla ve Güncelle</a>
        </div>
        
        <p style="font-size: 12px; color: #666; margin-top: 30px;">Bu talebi sen oluşturmadıysan hesabının şifresini acilen değiştirmeni öneririz.</p>
    </div>
</div>
```

---

### 5- Invite User (Kullanıcı Davet Şablonu)
*Admin panelinden bir yetkiliyi veya VİP'yi özel olarak siteye davet ettiğinde gider.*

```html
<div style="background-color:#0a0805; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px 0; color: #ffffff;">
    <div style="max-width: 500px; margin: 0 auto; background-color: #1a1511; border: 1px solid rgba(156,39,176,0.3); border-radius: 12px; padding: 40px 30px; text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
        <h1 style="color: #ffb800; margin-bottom: 5px; font-size: 28px;">LyonsMC</h1>
        <p style="color: #a0a0a0; font-size: 14px; margin-top: 0;">Özel Davetiye 🎫</p>
        
        <div style="margin: 30px 0; padding: 20px; background-color: rgba(255,255,255,0.02); border-radius: 8px;">
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 25px;">LyonsMC Network yönetiminden özel bir davet aldın! Aramıza katılmak ve kurulumu tamamlamak için hemen tıkla.</p>
            
            <a href="{{ .ConfirmationURL }}" style="display: inline-block; background: linear-gradient(135deg, #9c27b0, #673ab7); color: #ffffff; text-decoration: none; padding: 14px 30px; border-radius: 6px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 20px rgba(156,39,176,0.4);">Daveti Kabul Et</a>
        </div>
        
        <p style="font-size: 12px; color: #666; margin-top: 30px;">Bu davetiye sana özeldir, lütfen başkalarıyla paylaşma.</p>
    </div>
</div>
```

---

### 6- Reauthentication (Yeniden Doğrulama Şablonu)
*Zaten giriş yapmış biri silme/şifre değiştirme gibi çok tehlikeli/güvenlikli bir işlem yapacağı zaman "gerçekten o kişi mi?" diye sorulan şablondur.*

```html
<div style="background-color:#0a0805; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px 0; color: #ffffff;">
    <div style="max-width: 500px; margin: 0 auto; background-color: #1a1511; border: 1px solid rgba(255,184,0,0.4); border-radius: 12px; padding: 40px 30px; text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
        <h1 style="color: #ffb800; margin-bottom: 5px; font-size: 28px;">LyonsMC</h1>
        <p style="color: #ff4757; font-size: 14px; margin-top: 0; font-weight: bold;">Güvenlik Uyarısı: İşlem Doğrulaması ⚠️</p>
        
        <div style="margin: 30px 0; padding: 20px; background-color: rgba(255,255,255,0.02); border-radius: 8px;">
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 25px;">Hesabında yüksek güvenlik gerektiren kritik bir işlem yapılmak isteniyor. Bu işlemi senin yaptığını teyit etmek zorundayız.</p>
            
            <a href="{{ .ConfirmationURL }}" style="display: inline-block; background-color: #ffb800; color: #0a0805; text-decoration: none; padding: 14px 30px; border-radius: 6px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(255,184,0,0.3);">İşleme İzin Ver</a>
        </div>
        
        <p style="font-size: 12px; color: #666; margin-top: 30px;">Eğer sitede şu an herhangi bir işlem yapmıyorsan HİÇBİR ŞEYE TIKLAMA ve hesabının şifresini derhal değiştir.</p>
    </div>
</div>
```

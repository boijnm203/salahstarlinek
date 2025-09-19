// JavaScript للتفاعلات والتأثيرات الفاخرة

// معلومات الاتصال
const contactInfo = {
    phone: '+966501234567',
    whatsapp: '+966501234567',
    website: 'https://www.techcompany.com',
    tiktok: 'https://www.tiktok.com/@ahmed_tech',
    location: 'الرياض، المملكة العربية السعودية',
    email: 'ahmed@techcompany.com'
};

// متغيرات الوضع الليلي
let isDarkTheme = true;

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    addScrollEffects();
    addTouchEffects();
    initializeAnimations();
    initializeTheme();
});

// تهيئة الصفحة
function initializePage() {
    // إضافة تأثيرات التحميل للبطاقات
    const cards = document.querySelectorAll('.vip-card, .info-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 300);
    });
    
    // إضافة تأثيرات للأيقونات الاجتماعية
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach((link, index) => {
        setTimeout(() => {
            link.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }, 1200 + (index * 150));
    });
    
    // تأثيرات خاصة لتاج VIP
    const vipCrown = document.querySelector('.vip-crown');
    if (vipCrown) {
        setTimeout(() => {
            vipCrown.style.animation = 'crownGlow 3s ease-in-out infinite';
        }, 500);
    }
}

// تأثيرات التمرير
function addScrollEffects() {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.luxury-navbar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // تأثير الشفافية للـ navbar
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(26, 26, 26, 0.98)';
            navbar.style.boxShadow = '0 -4px 20px rgba(212, 175, 55, 0.3)';
        } else {
            navbar.style.background = 'rgba(26, 26, 26, 0.95)';
            navbar.style.boxShadow = '0 -4px 20px rgba(212, 175, 55, 0.2)';
        }
        
        // تأثيرات خاصة للبطاقة VIP
        const vipCard = document.querySelector('.vip-card');
        if (vipCard) {
            const cardRect = vipCard.getBoundingClientRect();
            if (cardRect.top < window.innerHeight && cardRect.bottom > 0) {
                vipCard.style.transform = `translateY(${scrollTop * 0.1}px)`;
            }
        }
        
        lastScrollTop = scrollTop;
    });
}

// تأثيرات اللمس للهواتف
function addTouchEffects() {
    const buttons = document.querySelectorAll('.nav-btn, .floating-save-btn, .social-link');
    
    buttons.forEach(button => {
        button.addEventListener('touchstart', function(e) {
            this.style.transform = 'scale(0.95)';
            this.style.transition = 'transform 0.1s ease';
            
            // تأثير ذهبي للضغط
            if (this.classList.contains('primary-btn')) {
                this.style.boxShadow = '0 0 25px rgba(255, 215, 0, 0.8)';
            }
        });
        
        button.addEventListener('touchend', function(e) {
            this.style.transform = 'scale(1)';
            setTimeout(() => {
                this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                this.style.boxShadow = '';
            }, 100);
        });
    });
}

// تهيئة الرسوم المتحركة
function initializeAnimations() {
    // تأثير النبض لزر الحفظ العائم
    const floatingSaveBtn = document.querySelector('.floating-save-btn');
    if (floatingSaveBtn) {
        setInterval(() => {
            floatingSaveBtn.style.animation = 'none';
            setTimeout(() => {
                floatingSaveBtn.style.animation = 'pulse 2s infinite';
            }, 10);
        }, 5000);
    }
    
    // تأثيرات التمرير للأقسام
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // تأثيرات خاصة للبطاقات VIP
                if (entry.target.classList.contains('info-card')) {
                    entry.target.style.boxShadow = '0 8px 30px rgba(212, 175, 55, 0.4)';
                }
            }
        });
    }, observerOptions);
    
    const sections = document.querySelectorAll('.info-card');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(section);
    });
    
    // تأثيرات خاصة للصورة الشخصية
    const profileFrame = document.querySelector('.profile-frame');
    if (profileFrame) {
        profileFrame.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.6)';
        });
        
        profileFrame.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '';
        });
    }
}

// وظائف الأزرار

// إجراء اتصال هاتفي
function makeCall() {
    showLoadingEffect();
    
    setTimeout(() => {
        // محاولة فتح تطبيق الهاتف
        const phoneLink = `tel:${contactInfo.phone}`;
        
        // للهواتف المحمولة
        if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            window.location.href = phoneLink;
        } else {
            // لأجهزة الكمبيوتر - نسخ الرقم
            copyToClipboard(contactInfo.phone);
            showNotification('تم نسخ رقم الهاتف إلى الحافظة', 'success');
        }
        
        hideLoadingEffect();
    }, 500);
}

// فتح WhatsApp
function openWhatsApp() {
    showLoadingEffect();
    
    setTimeout(() => {
        const message = encodeURIComponent('مرحباً! أريد التواصل معك بخصوص خدماتك.');
        const whatsappLink = `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`;
        
        window.open(whatsappLink, '_blank');
        hideLoadingEffect();
    }, 500);
}

// فتح TikTok
function openTikTok() {
    showLoadingEffect();
    
    setTimeout(() => {
        window.open(contactInfo.tiktok, '_blank');
        hideLoadingEffect();
    }, 500);
}

// فتح الموقع الإلكتروني
function openWebsite() {
    showLoadingEffect();
    
    setTimeout(() => {
        window.open(contactInfo.website, '_blank');
        hideLoadingEffect();
    }, 500);
}

// فتح الخريطة
function openMaps() {
    showLoadingEffect();
    
    setTimeout(() => {
        const encodedLocation = encodeURIComponent(contactInfo.location);
        const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
        
        window.open(mapsLink, '_blank');
        hideLoadingEffect();
    }, 500);
}

// عرض QR Code
function showQRCode() {
    const modal = document.getElementById('qrModal');
    modal.style.display = 'block';
    
    // تأثير الظهور
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

// إغلاق QR Code
function closeQRModal() {
    const modal = document.getElementById('qrModal');
    modal.style.opacity = '0';
    
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// حفظ جهة الاتصال
function saveContact() {
    showLoadingEffect();
    
    setTimeout(() => {
        // إنشاء ملف vCard
        const vcard = createVCard();
        
        // تحميل الملف
        downloadVCard(vcard);
        
        hideLoadingEffect();
        showNotification('تم حفظ البطاقة بنجاح!', 'success');
    }, 1000);
}

// إنشاء ملف vCard
function createVCard() {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:أحمد محمد العلي
ORG:شركة التقنية المتقدمة
TITLE:مطور ويب ومصمم جرافيك
TEL:${contactInfo.phone}
EMAIL:${contactInfo.email}
URL:${contactInfo.website}
ADR:;;${contactInfo.location};;;;
NOTE:مطور ويب ومصمم جرافيك متخصص في تطوير المواقع الإلكترونية وتصميم الهوية البصرية
END:VCARD`;
    
    return vcard;
}

// تحميل ملف vCard
function downloadVCard(vcard) {
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    link.href = url;
    link.download = 'ahmed-contact.vcf';
    link.style.display = 'none';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    window.URL.revokeObjectURL(url);
}

// نسخ النص إلى الحافظة
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
    } else {
        // طريقة بديلة للمتصفحات القديمة
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
}

// عرض إشعار
function showNotification(message, type = 'info') {
    // إنشاء عنصر الإشعار
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // إضافة الأنماط
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        font-family: 'Cairo', sans-serif;
        font-weight: 500;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // تأثير الظهور
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // إزالة الإشعار بعد 3 ثوان
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// تأثيرات التحميل
function showLoadingEffect() {
    const buttons = document.querySelectorAll('.nav-btn, .cta-button');
    buttons.forEach(button => {
        button.classList.add('loading');
        button.style.pointerEvents = 'none';
    });
}

function hideLoadingEffect() {
    const buttons = document.querySelectorAll('.nav-btn, .cta-button');
    buttons.forEach(button => {
        button.classList.remove('loading');
        button.style.pointerEvents = 'auto';
    });
}

// إغلاق Modal عند النقر خارجها
window.addEventListener('click', function(event) {
    const modal = document.getElementById('qrModal');
    if (event.target === modal) {
        closeQRModal();
    }
});

// تهيئة الوضع الليلي
function initializeTheme() {
    // تحميل الوضع المحفوظ
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        toggleTheme();
    }
}

// تبديل الوضع الليلي
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle i');
    
    isDarkTheme = !isDarkTheme;
    
    if (isDarkTheme) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeToggle.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');

    } else {

        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeToggle.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
    }
    
    // تأثيرات انتقالية للعناصر
    const elements = document.querySelectorAll('.vip-card, .info-card, .modal-content');
    elements.forEach(element => {
        element.style.transition = 'all 0.5s ease';
    });
}

// تأثيرات إضافية للتفاعل
document.addEventListener('DOMContentLoaded', function() {
    // تأثيرات الأيقونات الاجتماعية عند التمرير
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.1)';
            this.style.boxShadow = '0 8px 25px rgba(212, 175, 55, 0.4)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });
    
    // تأثيرات بطاقة VIP
    const vipCard = document.querySelector('.vip-card');
    if (vipCard) {
        vipCard.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 20px 50px rgba(212, 175, 55, 0.4)';
        });
        
        vipCard.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 8px 30px rgba(212, 175, 55, 0.4)';
        });
    }
    
    // تأثيرات خاصة للأزرار الأساسية
    const primaryButtons = document.querySelectorAll('.primary-btn');
    primaryButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.6)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
});

// تحسين الأداء - Lazy Loading للصور
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// تهيئة Lazy Loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// تأثيرات الصوت (اختيارية)
function playClickSound() {
    // يمكن إضافة أصوات للتفاعلات
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
    audio.volume = 0.1;
    audio.play().catch(() => {
        // تجاهل الأخطاء إذا لم يتمكن من تشغيل الصوت
    });
}

// إضافة تأثيرات الصوت للأزرار
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.nav-btn, .floating-save-btn');
    buttons.forEach(button => {
        button.addEventListener('click', playClickSound);
    });
    
    // تأثيرات خاصة لزر تبديل الوضع الليلي
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            // تأثير بصري إضافي
            this.style.transform = 'scale(1.2) rotate(180deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
            }, 300);
        });
    }
});
function enterSite() {
    // إخفاء النافذة الأولى
    document.getElementById("splash-screen").style.display = "none";

    // تشغيل ملف صوت/فيديو ترحيبي
    let audio = new Audio("hello.wav"); // ضع ملفك الصوتي باسم welcome.mp3
    audio.play();
}
function captureAndSave() {
    html2canvas(document.body).then(canvas => {
        // تحويل اللقطة إلى صورة
        let image = canvas.toDataURL("image/png");

        // إنشاء رابط تنزيل
        let link = document.createElement("a");
        link.href = image;
        link.download = "موقعي.png"; // اسم الملف الذي سيُحفظ
        link.click();
    });
}

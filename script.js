// ===================================
// 1. كود وظيفة زر "X" (الإغلاق)
// ===================================

// نحصل على زر الإغلاق باستخدام الكلاس الذي استخدمناه في HTML
// الكلاس هو .close-btn
const closeButton = document.querySelector('.close-btn');

// إضافة مستمع لحدث النقر على الزر
if (closeButton) {
    closeButton.addEventListener('click', function() {
        // الوظيفة الأكثر شيوعاً لزر الإغلاق هي العودة إلى الصفحة السابقة
        // يمكنك تغيير هذا السلوك لفتح صفحة محددة إذا أردت (مثل الصفحة الترحيبية)
        window.history.back();
        
        // أو إذا أردت الانتقال إلى صفحة محددة بدلاً من الرجوع:
        // window.location.href = 'index.html'; // استبدل index.html باسم صفحة البداية
    });
}


// ===================================
// 2. كود وظيفة زر العين (Show/Hide Password) (للتذكير)
// ===================================

// هذا الكود السابق لزر العين في صفحة تسجيل الدخول (login.html)
const passwordInput = document.getElementById('passwordInput');
const togglePassword = document.getElementById('togglePassword');

if (togglePassword && passwordInput) {
    togglePassword.addEventListener('click', function (e) {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        // تغيير شكل الأيقونة
        if (type === 'text') {
            this.textContent = '🔒';
        } else {
            this.textContent = '👁️'; 
        }
    });
}
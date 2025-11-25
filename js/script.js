// ZATCA Website JavaScript
// هيئة الزكاة والضريبة والجمارك

// Tab switching functionality
function switchTab(tabId, buttonElement) {
    // Hide all tab contents
    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(tab => tab.classList.remove('active'));

    // Remove active class from all buttons
    const allButtons = document.querySelectorAll('.tab-button');
    allButtons.forEach(btn => btn.classList.remove('active'));

    // Show selected tab
    const activeTab = document.getElementById(tabId);
    activeTab.classList.add('active');

    // Ensure كل الأقسام في التبويب نشطة ومرئية
    activeTab.querySelectorAll('.section, .achievement-section').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    });

    // Add active class to clicked button
    buttonElement.classList.add('active');

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Dropdown functionality
function toggleDropdown(id) {
    const content = document.getElementById(id);
    const arrow = content.previousElementSibling.querySelector('.dropdown-arrow');

    if (content.classList.contains('active')) {
        content.classList.remove('active');
        arrow.style.transform = 'rotate(0deg)';
    } else {
        // إغلاق جميع القوائم المنسدلة الأخرى
        document.querySelectorAll('.dropdown-content').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelectorAll('.dropdown-arrow').forEach(item => {
            item.style.transform = 'rotate(0deg)';
        });

        // فتح القائمة المحددة
        content.classList.add('active');
        arrow.style.transform = 'rotate(180deg)';
    }
}

// Apply animation to sections
document.addEventListener('DOMContentLoaded', function () {
    const loginOverlay = document.getElementById('login-overlay');
    const loginForm = document.getElementById('login-form');
    const passwordInput = document.getElementById('password-input');
    const loginError = document.getElementById('login-error');
    const protectedContent = document.getElementById('protected-content');

    if (loginOverlay && loginForm && passwordInput && protectedContent) {
        document.body.classList.add('page-locked');
        const unlockContent = () => {
            loginOverlay.classList.add('login-overlay--hidden');
            protectedContent.classList.remove('protected-content--locked');
            protectedContent.removeAttribute('aria-hidden');
            protectedContent.style.display = 'block';
            document.body.classList.remove('page-locked');
        };

        setTimeout(() => passwordInput.focus(), 0);

        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            if (passwordInput.value.trim() === '4525') {
                loginError.textContent = '';
                unlockContent();
                passwordInput.value = '';
            } else {
                loginError.textContent = 'كلمة المرور غير صحيحة، حاول مرة أخرى.';
                passwordInput.value = '';
                passwordInput.focus();
            }
        });
    }

    document.querySelectorAll('.section, .achievement-section').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    });

    // Fallback للمتصفحات التي لا تدعم IntersectionObserver أو تعطل الأحداث
    document.querySelectorAll('.section, .achievement-section').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    });

    // Add smooth scrolling effect for dropdown headers
    document.querySelectorAll('.dropdown-header').forEach(header => {
        header.addEventListener('click', function () {
            setTimeout(() => {
                this.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        });
    });

    // Initialize modular components
    if (window.renderMediaServices) {
        window.renderMediaServices('media-services-container');
    }

    // Add hover effects to achievement cards
    document.querySelectorAll('.achievement-card').forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

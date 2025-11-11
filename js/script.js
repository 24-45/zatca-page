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
    document.getElementById(tabId).classList.add('active');
    
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

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to sections
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.section, .achievement-section').forEach(el => {
        // Skip the analysis sections to avoid hiding them
        if (!el.querySelector('h2') || !el.querySelector('h2').textContent.includes('تقرير التحليل الإعلامي')) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        } else {
            // Make sure analysis sections are visible
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });

    // Add smooth scrolling effect for dropdown headers
    document.querySelectorAll('.dropdown-header').forEach(header => {
        header.addEventListener('click', function() {
            setTimeout(() => {
                this.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        });
    });

    // Add hover effects to achievement cards
    document.querySelectorAll('.achievement-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

import { NewsManager } from './components/NewsManager.js';

document.addEventListener('alpine:init', () => {
    Alpine.data('app', () => ({
        currentTab: 'news',

        init() {
            // Force render NewsManager immediately
            this.$nextTick(() => {
                const newsManager = new NewsManager('news-container');
            });

            // Watch for tab changes if needed, or just handle via click
            this.$watch('currentTab', (value) => {
                if (value === 'services') {
                    this.loadServices();
                } else if (value === 'analysis') {
                    this.loadAnalysis();
                }
            });
        },

        loadServices() {
            // Check if renderMediaServices exists (from legacy script)
            if (window.renderMediaServices) {
                window.renderMediaServices('services-container');
            } else {
                // Try to dynamically import if it was a module, but it's likely a global script
                // If it's not loaded yet, we might need to load the script tag dynamically or assume it's in index.html
                console.log('Attempting to load Services...');
            }
        },

        loadAnalysis() {
            console.log('Loading Analysis...');
            // Placeholder for future GlobalAnalysis component
            const container = document.getElementById('analysis-container');
            if (container && container.innerHTML === '') {
                container.innerHTML = '<div class="p-10 text-center text-gray-500">Technical Analysis Charts Loading...</div>';
            }
        }
    }));
});

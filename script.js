
// Auto-scrolling for swiper wrapper
document.addEventListener('DOMContentLoaded', () => {
    const scrollingContainers = document.querySelectorAll('.swiper-wrapper');
    
    scrollingContainers.forEach(container => {
        // Clone contents for seamless infinite scroll
        container.innerHTML += container.innerHTML;
        
        let isHovered = false;
        
        // Pause scrolling on hover or touch
        container.addEventListener('mouseenter', () => isHovered = true);
        container.addEventListener('mouseleave', () => isHovered = false);
        container.addEventListener('touchstart', () => isHovered = true, {passive: true});
        container.addEventListener('touchend', () => isHovered = false);

        function autoScroll() {
            // Only scroll if it's visible and not hovered
            if (!isHovered && container.offsetParent !== null) {
                container.scrollLeft += 1;
                
                // If we've scrolled past the first half, jump back to start seamlessly
                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0;
                }
            }
            requestAnimationFrame(autoScroll);
        }
        
        // Start scrolling
        requestAnimationFrame(autoScroll);
    });
});

// Tab switching logic for the new Popular Programs section
document.addEventListener('DOMContentLoaded', () => {
    const tabLinks = document.querySelectorAll('.nav-pills .nav-link');
    const tabPanes = document.querySelectorAll('.tab-content .tab-pane');

    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links and panes
            tabLinks.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => {
                pane.classList.remove('show', 'active');
            });
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Show corresponding pane
            const targetId = link.getAttribute('data-bs-target');
            if (targetId) {
                const targetPane = document.querySelector(targetId);
                if (targetPane) {
                    targetPane.classList.add('show', 'active');
                }
            }
        });
    });
});

// Slider logic for events
document.addEventListener('DOMContentLoaded', () => {
    const eventContainer = document.querySelector('#related-events .scrolling-container');
    const prevBtn = document.querySelector('#related-events .prev-btn');
    const nextBtn = document.querySelector('#related-events .next-btn');

    if (eventContainer && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            eventContainer.scrollBy({ left: -eventContainer.clientWidth, behavior: "smooth" });
        });
        nextBtn.addEventListener('click', () => {
            eventContainer.scrollBy({ left: eventContainer.clientWidth, behavior: "smooth" });
        });
    }
});



// View switching logic
document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('back-to-events');
    const eventsListView = document.getElementById('events-list-view');
    const eventDetailsView = document.getElementById('event-details-view');
    const heroBreadcrumb = document.getElementById('hero-breadcrumb');
    const heroTitle = document.getElementById('hero-title');

    // Handle 'Explore Event Details' clicks
    const exploreButtons = document.querySelectorAll('.event-details-card .btn-primary, .course-card .btn-view-course');
    exploreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            if (button.classList.contains('btn-primary')) {
                if (eventsListView) eventsListView.style.display = 'none';
                if (eventDetailsView) eventDetailsView.style.display = 'block';
                if (heroBreadcrumb) heroBreadcrumb.textContent = 'Home > Event Details';
                if (heroTitle) heroTitle.textContent = 'Event Details';
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Handle 'Back to Events' click
    if (backButton) {
        backButton.addEventListener('click', () => {
            if (eventDetailsView) eventDetailsView.style.display = 'none';
            if (eventsListView) eventsListView.style.display = 'block';
            if (heroBreadcrumb) heroBreadcrumb.textContent = 'Home > News & Events';
            if (heroTitle) heroTitle.textContent = 'News & Events';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});


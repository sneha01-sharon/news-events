document.addEventListener('DOMContentLoaded', () => {
    const exploreButtons = document.querySelectorAll('.event-details-card .btn-primary');
    const backButton = document.getElementById('back-to-events');
    const eventsListView = document.getElementById('events-list-view');
    const eventDetailsView = document.getElementById('event-details-view');
    const heroBreadcrumb = document.getElementById('hero-breadcrumb');
    const heroTitle = document.getElementById('hero-title');

    // Handle "Explore Event Details" clicks
    exploreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            
            // Hide list, show details
            eventsListView.style.display = 'none';
            eventDetailsView.style.display = 'block';
            
            // Update hero section
            heroBreadcrumb.textContent = 'Home > Event Details';
            heroTitle.textContent = 'Event Details';

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Handle "Back to Events" click
    if (backButton) {
        backButton.addEventListener('click', () => {
            // Hide details, show list
            eventDetailsView.style.display = 'none';
            eventsListView.style.display = 'block';
            
            // Revert hero section
            heroBreadcrumb.textContent = 'Home > News & Events';
            heroTitle.textContent = 'News & Events';

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

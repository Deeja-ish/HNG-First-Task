document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.querySelector('[data-testid="test-user-time"]');

    function updateTime(){
        if (!timeElement) {
            console.warn('Time element not found: [data-testid="test-user-time"]');
            return;
        }

        let formatted;
        try {
            const fmt = new Intl.DateTimeFormat('en-GB', {
                timeZone: 'Africa/Lagos',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            });
            formatted = fmt.format(new Date());
        } catch (e) {
            // Fallback: compute UTC+1 .
            const now = new Date();
            const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
            const lagos = new Date(utc + (3600000 * 1)); // UTC+1
            formatted = lagos.toUTCString().replace('GMT', 'WAT');
        }

        timeElement.textContent = formatted;
    }

    // Update immediately, then every second
    updateTime();
    setInterval(updateTime, 1000);

})
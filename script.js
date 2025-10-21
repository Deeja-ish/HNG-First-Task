document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.querySelector('[data-testid="test-user-time"]');

    function updateTime(){
        if (!timeElement) {
            return;
        }

        let formatted;
        try {
            const now = new Date();
            const milliseconds = now.getTime();

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
            formatted = fmt.format(now);
            timeElement.textContent = `${formatted} (${milliseconds} ms)`;
        } catch (e) {
            // Fallback: compute UTC+1 .
            const now = new Date();
            const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
            const lagos = new Date(utc + (3600000 * 1)); // UTC+1
            formatted = lagos.toUTCString().replace('GMT', 'WAT');
            timeElement.textContent = formatted;
        }
    }

    // Update immediately, then every second
    updateTime();
    setInterval(updateTime, 1000);

    const contactForm = document.getElementById('contact-form')

    if(contactForm) {
        const name = document.getElementById('name');
        const email = document.getElementById("email");
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');
        const successMessage = document.getElementById('success-message');

        const errorName = document.getElementById('error-name');
        const errorEmail = document.getElementById('error-email');
        const errorSubject = document.getElementById('error-subject');
        const errorMessage = document.getElementById('error-message');

        // function to show error
        function showError(input, errorElement, message){
            errorElement.textContent = message;
            input.setAttribute('aria-describeby', errorElement.id);
            input.setAttribute('aria-invalid', 'true');
        }
        // function to clear error
        function clearError(input, errorElement){
            errorElement.textContent ='';
            input.removeAttribute('aria-describedby');
            input.removeAttribute('aria-invalid');
        }

        function validateEmail(email){
            const emailSample = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return emailSample.test(String(email).toLowerCase());
        }

        contactForm.addEventListener('submit', (e) =>{
            e.preventDefault()

            let isValid = true;

            clearError(name, errorName);
            clearError(email, errorEmail);
            clearError(subject, errorSubject);
            clearError(message, errorMessage);
            successMessage.style.display = 'none';

            //  validate name
            if(name.value.trim() === ''){
                isValid = false;
                showError(name, errorName, 'Full Name is required.')
            }

            // validate email
            if(email.value.trim() === ""){
                isValid = false
                showError(email, errorEmail, 'Email is required.')
            }else if(!validateEmail(email.value.trim())) {
                isValid = false
                showError(email, errorEmail, 'Please enter a valid email address.')
            }
            // validate subject
            if(subject.value.trim() === '') {
                isValid = false
                showError(subject, errorSubject, 'Subject is required.')
            }
            if(message.value.trim().length < 10){
                isValid = false
                showError(message, errorMessage, 'Message must be atleast 10 characters long.')
            }

            if(isValid){
                successMessage.style.display ='block';
                contactForm.reset()
            }else{
                successMessage.style.display = 'none'
            }
            
        });
    }

});
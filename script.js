// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu after clicking a link
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

(function(){
    emailjs.init("x33FIFUUsMhtrgdCt"); // Replace with your EmailJS user ID
    console.log("EmailJS initialized!"); // Log when EmailJS is initialized
})();

// Form Submission
const contactForm = document.getElementById('contact-form');
const submitButton = contactForm.querySelector('button[type="submit"]');

console.log("Script loaded!"); // Log when the script loads

if (contactForm) {
    console.log("Contact form found!"); // Log when the form is found
    
    contactForm.addEventListener('submit', function(e) {
        console.log("Event listener attached!"); // Log when the event listener is attached
        console.log("Form submission event triggered!"); // Log when the form submission event is triggered
        e.preventDefault();
        
        console.log("Form submitted!"); // Log when the form is submitted
        
        const formData = new FormData(this);
        console.log("Form data:", formData); // Log the form data
        
        const data = Object.fromEntries(formData);
        
        // Debugging: Log the data object to check its contents
        console.log("Data being sent to EmailJS:", data);
        
        // Send the data to EmailJS
        emailjs.send("service_portfolio", "template_eh4uzps", data).then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            console.log("Response from EmailJS:", response); // Added log for response details

            alert("Thank you for your message! I will get back to you soon.");
            this.reset(); // Clear form
          },
          (error) => {
            console.log("FAILED...", error);
            console.error("Error details:", error); // Added log for error details

            alert(
              "Sorry, there was an error sending your message. Please try again later."
            );
          }
        );

    });
} else {
    console.error("Contact form not found!"); // Log an error if the form is not found
}

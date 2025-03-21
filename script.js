document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            document.querySelector(".nav-link.active").classList.remove("active");
            this.classList.add("active");
        });
    });

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".navbar ul");
    menuToggle.addEventListener("click", function() {
        navMenu.classList.toggle("show");
    });
});


// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (name && email && message) {
        alert('Form submitted successfully!');
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    updateSliderPosition();
}

function updateSliderPosition() {
    const slider = document.getElementById('slider');
    const slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Auto slide every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);

// Initialize the first position
updateSliderPosition();


// Get DOM elements
const chatIcon = document.getElementById('chat-icon');
const chatPopup = document.getElementById('chat-popup');
const closeChat = document.getElementById('close-chat');
const chatInput = document.getElementById('chat-input');
const messagesContainer = document.getElementById('messages');

// Open the chat popup
chatIcon.addEventListener('click', () => {
    chatPopup.style.display = 'block';
    chatInput.focus();
});

// Close the chat popup
closeChat.addEventListener('click', () => {
    chatPopup.style.display = 'none';
});

// Send a message when the user hits "Enter"
chatInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && chatInput.value.trim() !== '') {
        const userMessage = chatInput.value.trim();
        displayMessage(userMessage, 'user');
        chatInput.value = ''; // Clear the input

        // Simulate a response from the system
        setTimeout(() => {
            displayMessage('Thank you for reaching out! How can I help you?', 'system');
        }, 1000);
    }
});

// Display messages in the chat window
function displayMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(sender);
    messageDiv.textContent = message;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}


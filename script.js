// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// imgage slider

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

setInterval(() => {
    moveSlide(1);
}, 5000);

updateSliderPosition();



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


// chat popup
const chatIcon = document.getElementById('chat-icon');
const chatPopup = document.getElementById('chat-popup');
const closeChat = document.getElementById('close-chat');
const chatInput = document.getElementById('chat-input');
const messagesContainer = document.getElementById('messages');


chatIcon.addEventListener('click', () => {
    chatPopup.style.display = 'block';
    chatInput.focus();
});


closeChat.addEventListener('click', () => {
    chatPopup.style.display = 'none';
});


chatInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && chatInput.value.trim() !== '') {
        const userMessage = chatInput.value.trim();
        displayMessage(userMessage, 'user');
        chatInput.value = '';


        setTimeout(() => {
            displayMessage('Thank you for reaching out! How can I help you?', 'system');
        }, 1000);
    }
});


function displayMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(sender);
    messageDiv.textContent = message;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}


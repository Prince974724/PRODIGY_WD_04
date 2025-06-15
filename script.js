// Mobile menu toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;
      menuBtn.setAttribute('aria-expanded', !expanded);
      if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
        mobileMenu.setAttribute('aria-hidden', 'true');
      } else {
        mobileMenu.style.display = 'block';
        mobileMenu.setAttribute('aria-hidden', 'false');
      }
    });

    // Contact form validation and submission simulation
    const form = document.getElementById('contact-form');
    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const messageInput = form.querySelector('#message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const formSuccess = document.getElementById('form-success');

    function validateEmail(email) {
      // Simple email regex
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let valid = true;

      if (!nameInput.value.trim()) {
        nameError.classList.add('visible');
        valid = false;
      } else {
        nameError.classList.remove('visible');
      }

      if (!validateEmail(emailInput.value.trim())) {
        emailError.classList.add('visible');
        valid = false;
      } else {
        emailError.classList.remove('visible');
      }

      if (!messageInput.value.trim()) {
        messageError.classList.add('visible');
        valid = false;
      } else {
        messageError.classList.remove('visible');
      }

      if (valid) {
        // Simulate form submission
        formSuccess.classList.add('visible');
        form.reset();
        setTimeout(() => {
          formSuccess.classList.remove('visible');
        }, 5000);
      }
    });
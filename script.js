const skillTabs = document.querySelectorAll(".skills-tab");
const skillCards = document.querySelectorAll(".skill-card");

if (skillTabs.length && skillCards.length) {
  skillTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const selectedSkill = tab.dataset.skill;

      skillTabs.forEach((item) => item.classList.remove("is-active"));
      tab.classList.add("is-active");

      skillCards.forEach((card) => {
        const shouldShow = card.dataset.skill === selectedSkill;
        card.classList.toggle("is-visible", shouldShow);
      });
    });
  });
}

// Contact form submission (Formspree)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('form-status');
    const endpoint = contactForm.action;

    status.textContent = 'Sending message...';

    const formData = new FormData(contactForm);

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        status.textContent = 'Message sent — I will get back to you soon.';
        contactForm.reset();
      } else {
        const data = await res.json();
        status.textContent = data.error || 'Error sending message. Please try again later.';
      }
    } catch (err) {
      status.textContent = 'Network error. Please try again.';
    }
  });
}

// Newsletter form submission (Formspree)
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const button = newsletterForm.querySelector('button');
    const originalText = button.textContent;
    const endpoint = 'https://formspree.io/f/xaqvnlbw';

    button.textContent = 'Subscribing...';
    button.disabled = true;

    const formData = new FormData();
    formData.append('email', newsletterForm.querySelector('input[type="email"]').value);
    formData.append('_subject', 'Newsletter Subscription');

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        button.textContent = '✓ Subscribed!';
        newsletterForm.reset();
        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
        }, 3000);
      } else {
        button.textContent = 'Error - Try again';
        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
        }, 3000);
      }
    } catch (err) {
      button.textContent = 'Network error';
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 3000);
    }
  });
}

// script.js

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.color = '#ff0000'; // Change color on hover
    });
  
    link.addEventListener('mouseout', () => {
      link.style.color = ''; // Revert color on mouse out
    });
  });
  

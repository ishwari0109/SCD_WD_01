// Get the navigation menu and sections
const nav = document.getElementById('nav');
const sections = document.querySelectorAll('section');

// Add event listener to navigation menu items
nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    const sectionId = e.target.getAttribute('href').replace('#', '');
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
});

// Add event listener to window scroll
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      nav.classList.add('scrolled');
      const navItem = nav.querySelector(`[href="#${section.id}"]`);
      navItem.classList.add('active');
    } else {
      navItem.classList.remove('active');
    }
  });
});

// Add event listener to navigation menu hover
nav.addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'A') {
    const navItem = e.target;
    navItem.classList.add('hover');
  }
});

nav.addEventListener('mouseout', (e) => {
  if (e.target.tagName === 'A') {
    const navItem = e.target;
    navItem.classList.remove('hover');
  }
});

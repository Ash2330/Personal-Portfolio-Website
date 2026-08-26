document.addEventListener('DOMContentLoaded',()=>{
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click',()=>{
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    const links = document.querySelectorAll('.nav-links a');
    links.forEach((link)=>{
        link.addEventListener('click',(e)=>{
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({behavior: 'smooth'});
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
      // Highlight active nav link based on scroll position
    const sections = document.querySelectorAll('section[id]');
  console.log('Sections found:', sections.length, sections);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log('Observer fired for:', entry.target.id, 'isIntersecting:', entry.isIntersecting);

      const id = entry.target.getAttribute('id');
      const correspondingLink = document.querySelector(`.nav-links a[href="#${id}"]`);
      console.log('Matching link found:', correspondingLink);

      if (entry.isIntersecting) {
        links.forEach((link) => link.classList.remove('active-link'));
        if (correspondingLink) {
          correspondingLink.classList.add('active-link');
        }
      }
    });
  }, {
    threshold: 0.5
  });

  sections.forEach((section) => observer.observe(section));
});
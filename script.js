document.addEventListener('DOMContentLoaded', () => {
  // Render articles from articles.js data
  const postsContainer = document.querySelector('.posts');
  if (postsContainer && typeof articles !== 'undefined') {
    postsContainer.innerHTML = articles.map(a => `
      <article data-id="${a.id}">
        <span>${a.readTime}</span>
        <p class="article-category">${a.category}</p>
        <h3>${a.title}</h3>
        <p class="article-excerpt">${a.excerpt}</p>
      </article>
    `).join('');
  }

  // Functional nav highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a');
  document.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 80) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  });

  // Card hover effect
  document.querySelectorAll('.card').forEach(c => {
    c.addEventListener('mouseenter', () => c.classList.add('hovered'));
    c.addEventListener('mouseleave', () => c.classList.remove('hovered'));
  });
});

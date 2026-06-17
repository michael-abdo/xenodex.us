// Universal Header Component for Xenodex
// Logo + persistent academic top-navigation. Injected into every page.

(function() {
  // Determine the correct path prefix based on current location
  function getPathPrefix() {
    const path = window.location.pathname;

    // Root or index.html
    if (path === '/' || path === '/index.html' || path.endsWith('/xenodex/') || path.endsWith('/xenodex/index.html')) {
      return '';
    }

    // Two levels deep
    if (path.includes('/pages/templates/') || path.includes('/components/sections/')) {
      return '../../';
    }

    // One level deep (pages/, papers/, components/)
    if (path.includes('/pages/') || path.includes('/papers/') || path.includes('/components/')) {
      return '../';
    }

    return '';
  }

  const pathPrefix = getPathPrefix();
  const path = window.location.pathname;

  // Mark the current section's nav link active
  function activeIf(slug) {
    return path.includes(slug) ? ' class="active"' : '';
  }

  const navItems = [
    { label: 'Research',     href: pathPrefix + 'pages/research.html',     slug: 'research.html' },
    { label: 'Publications', href: pathPrefix + 'pages/publications.html', slug: 'publications' },
    { label: 'Methods',      href: pathPrefix + 'pages/methods.html',      slug: 'methods.html' },
    { label: 'About',        href: pathPrefix + 'pages/about.html',        slug: 'about.html' }
  ];

  const navLinks = navItems
    .map(item => `<li><a href="${item.href}"${activeIf(item.slug)}>${item.label}</a></li>`)
    .join('');

  const headerHTML = `
    <header>
      <div class="container academic-bar">
        <a href="${pathPrefix}index.html" class="logo" style="text-decoration: none;">
          <img src="${pathPrefix}images/logo_white.png" alt="Xenodex Logo">
          <span class="logo-text">XENODEX</span>
        </a>
        <nav class="site-nav">
          <ul>${navLinks}</ul>
        </nav>
      </div>
    </header>
  `;

  document.write(headerHTML);
})();

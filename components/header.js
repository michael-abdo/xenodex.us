// Universal Header Component for Xenodex
// This file contains the header HTML and injects it into any page that includes it

// Execute immediately when script loads (not waiting for DOMContentLoaded)
(function() {
  // Determine the correct path prefix based on current location
  function getPathPrefix() {
    const path = window.location.pathname;
    
    // If we're in the root or index.html
    if (path === '/' || path === '/index.html' || path.endsWith('/xenodex/') || path.endsWith('/xenodex/index.html')) {
      return '';
    }
    
    // If we're in pages/templates/ or components/sections/ directory (two levels deep)
    if (path.includes('/pages/templates/') || path.includes('/components/sections/')) {
      return '../../';
    }
    
    // If we're in the pages or components directory (one level deep)
    if (path.includes('/pages/') || path.includes('/components/')) {
      return '../';
    }
    
    // Default to current directory
    return '';
  }
  
  const pathPrefix = getPathPrefix();
  
  // Define the universal header HTML
  const headerHTML = `
    <header>
      <div class="container" style="justify-content: flex-start !important; padding-left: 20px !important; margin-left: 0 !important;">
        <a href="${pathPrefix}index.html" class="logo" style="text-decoration: none; margin-left: 0 !important;">
          <img src="${pathPrefix}images/logo_white.png" alt="Xenodex Logo">
          <span class="logo-text">XENODEX</span>
        </a>
      </div>
    </header>
  `;
  
  // Write the header immediately
  document.write(headerHTML);
})();
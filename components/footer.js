// Universal Footer Component for Xenodex
// This file contains the footer HTML and injects it into any page that includes it

// Execute immediately when script loads (not waiting for DOMContentLoaded)
(function() {
  // Define the universal footer HTML
  const footerHTML = `
    <footer>
      <div class="container">
        <p>&copy; 2026 • XENODEX SCIENCES • Semper Progredi</p>
      </div>
    </footer>
  `;
  
  // Write the footer immediately
  document.write(footerHTML);
})();
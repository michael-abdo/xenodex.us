// Universal Navigation Component for Xenodex
// GoDaddy-optimized: Self-contained with inline CSS for reliable hosting
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
    
    // If we're in the pages directory (one level deep)
    if (path.includes('/pages/')) {
      return '../';
    }
    
    // Default to current directory
    return '';
  }
  
  const pathPrefix = getPathPrefix();
  
  // Navigation CSS (inline for GoDaddy compatibility)
  const navigationCSS = `
    .navigation-interface {
      width: 100%;
      padding: 120px 0 100px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    
    .navigation-interface * {
      box-sizing: border-box;
    }
    
    .navigation-container {
      width: 90%;
      max-width: 1400px;
      text-align: center;
      position: relative;
    }
    
    .navigation-question {
      font-size: 14px;
      font-weight: 300;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #666;
      margin-bottom: 20px;
      opacity: 0;
      animation: navigationFadeIn 0.8s ease-out forwards;
    }
    
    .navigation-choices {
      display: flex;
      justify-content: center;
      gap: 60px;
      opacity: 0;
      animation: navigationFadeIn 0.8s ease-out 0.3s forwards;
      flex-wrap: wrap;
    }
    
    /* Adjust gap based on number of items */
    .navigation-choices[data-count="1"] { gap: 0; }
    .navigation-choices[data-count="2"] { gap: 120px; }
    .navigation-choices[data-count="3"] { gap: 80px; }
    .navigation-choices[data-count="4"] { gap: 60px; }
    .navigation-choices[data-count="5"] { gap: 50px; }
    .navigation-choices[data-count="6"] { gap: 40px; }
    .navigation-choices[data-count="7"] { gap: 35px; }
    .navigation-choices[data-count="8"] { gap: 30px; }
    
    .navigation-choice {
      position: relative;
      cursor: pointer;
      padding: 40px 60px;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Single choice styling */
    .navigation-choices[data-count="1"] .navigation-choice {
      padding: 50px 80px;
    }
    
    /* Adjust padding for many options */
    .navigation-choices[data-count="5"] .navigation-choice,
    .navigation-choices[data-count="6"] .navigation-choice { 
      padding: 40px 40px; 
    }
    .navigation-choices[data-count="7"] .navigation-choice,
    .navigation-choices[data-count="8"] .navigation-choice { 
      padding: 40px 30px; 
    }
    
    .navigation-choice::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      background: linear-gradient(90deg, transparent, #999, transparent);
      transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .navigation-choice:hover::before {
      width: 0;
    }
    
    .navigation-choice-text {
      position: relative;
      white-space: nowrap;
      /* Email-link base styling */
      color: #000;
      text-decoration: none;
      padding-bottom: 5px;
      font-family: 'Cormorant Garamond', 'Georgia', serif;
      font-style: italic;
      letter-spacing: 0.03em;
      transition: color 0.3s ease;
      text-transform: uppercase;
      font-weight: 300;
    }
    
    /* Single option gets larger text */
    .navigation-choices[data-count="1"] .navigation-choice-text {
      font-size: 20px;
    }
    
    /* Default text size for 2-4 options */
    .navigation-choices[data-count="2"] .navigation-choice-text,
    .navigation-choices[data-count="3"] .navigation-choice-text,
    .navigation-choices[data-count="4"] .navigation-choice-text {
      font-size: 18px;
    }
    
    /* Smaller text for many options */
    .navigation-choices[data-count="5"] .navigation-choice-text,
    .navigation-choices[data-count="6"] .navigation-choice-text {
      font-size: 16px;
    }
    .navigation-choices[data-count="7"] .navigation-choice-text,
    .navigation-choices[data-count="8"] .navigation-choice-text {
      font-size: 14px;
    }
    
    /* Email-link underline effect - only on hover */
    .navigation-choice-text::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0;
      background: rgba(0, 0, 0, 0.5);
      transition: all 0.3s ease;
    }
    
    .navigation-choice:hover .navigation-choice-text {
      color: rgba(0, 0, 0, 0.7);
    }
    
    .navigation-choice:hover .navigation-choice-text::after {
      height: 2px;
    }
    
    .navigation-hover-text {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      transition: opacity 0.8s ease;
      /* Email-link styling for hover text */
      font-family: 'Cormorant Garamond', 'Georgia', serif;
      font-style: italic;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      font-weight: 300;
      color: rgba(0, 0, 0, 0.7);
    }
    
    .navigation-choice:hover .navigation-default-text {
      opacity: 0;
    }
    
    .navigation-choice:hover .navigation-hover-text {
      opacity: 1;
    }
    
    .navigation-default-text {
      transition: opacity 0.8s ease;
    }
    
    .navigation-level {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.5s ease;
    }
    
    .navigation-level.active {
      opacity: 1;
      pointer-events: all;
    }
    
    /* Subtle shimmer effect */
    @keyframes navigationShimmer {
      0% { background-position: -1000px 0; }
      100% { background-position: 1000px 0; }
    }
    
    .navigation-choice:hover::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        105deg,
        transparent 40%,
        rgba(255, 255, 255, 0.05) 50%,
        transparent 60%
      );
      animation: navigationShimmer 8s infinite;
      pointer-events: none;
    }
    
    @keyframes navigationFadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .navigation-back {
      display: none;
    }
    
    /* Mobile responsive */
    @media (max-width: 768px) {
      .navigation-interface {
        padding: 100px 0 100px 0;
        text-align: center;
      }
      
      .navigation-choices {
        flex-direction: column;
        gap: 0 !important;
        align-items: center;
      }
      
      .navigation-choice {
        padding: 15px 40px;
        min-width: 200px;
        text-align: center;
      }
      
      .navigation-question {
        font-size: 12px;
        margin-bottom: 20px;
        text-align: center;
      }
      
      .navigation-back {
        display: none;
      }
    }
  `;
  
  // Default configuration
  const defaultConfig = {
    level1: {
      question: "CHOOSE YOUR PATH",
      choices: [
        { 
          defaultText: "CONTINUE", 
          hoverText: "NEXT", 
          destination: pathPrefix + "index.html" 
        }
      ]
    }
  };
  
  // Get configuration from global variable or use default
  const config = window.navigationConfig || defaultConfig;
  
  // BranchInterface class for managing navigation
  class BranchInterface {
    constructor(config, container) {
      this.config = config;
      this.container = container;
      this.currentLevel = null;
      this.levelHistory = [];
      this.pathPrefix = pathPrefix;
      this.init();
    }

    init() {
      this.renderLevel('level1', this.config.level1);
      this.showLevel('level1');
    }

    renderLevel(levelId, levelData, parentId = null) {
      const levelDiv = document.createElement('div');
      levelDiv.className = 'navigation-level';
      levelDiv.id = levelId;

      if (parentId) {
        const backButton = document.createElement('span');
        backButton.className = 'navigation-back';
        backButton.textContent = '← BACK';
        backButton.addEventListener('click', () => this.goBack());
        levelDiv.appendChild(backButton);
      }

      const question = document.createElement('h2');
      question.className = 'navigation-question';
      question.textContent = levelData.question;
      levelDiv.appendChild(question);

      const choicesDiv = document.createElement('div');
      choicesDiv.className = 'navigation-choices';
      choicesDiv.setAttribute('data-count', levelData.choices.length);

      levelData.choices.forEach(choice => {
        const choiceDiv = this.createChoice(choice);
        choicesDiv.appendChild(choiceDiv);
      });

      levelDiv.appendChild(choicesDiv);
      this.container.appendChild(levelDiv);
    }

    createChoice(choiceData) {
      const choiceDiv = document.createElement('div');
      choiceDiv.className = 'navigation-choice';

      const choiceText = document.createElement('div');
      choiceText.className = 'navigation-choice-text email-link';

      const defaultText = document.createElement('span');
      defaultText.className = 'navigation-default-text';
      defaultText.textContent = choiceData.defaultText;

      const hoverText = document.createElement('span');
      hoverText.className = 'navigation-hover-text';
      hoverText.textContent = choiceData.hoverText;

      choiceText.appendChild(defaultText);
      choiceText.appendChild(hoverText);
      choiceDiv.appendChild(choiceText);

      choiceDiv.addEventListener('click', () => {
        if (choiceData.next) {
          this.navigateToLevel(choiceData.next);
        } else if (choiceData.destination) {
          // Handle relative paths
          let destination = choiceData.destination;
          if (!destination.startsWith('http') && !destination.startsWith('/') && !destination.startsWith('#')) {
            // Special handling for pages directory - if we're in pages and destination doesn't include '../'
            // keep links within pages directory
            if (this.pathPrefix === '../' && !destination.includes('../')) {
              // Stay within pages directory - don't prepend pathPrefix
              destination = destination;
            } else {
              destination = this.pathPrefix + destination;
            }
          }
          window.location.href = destination;
        }
      });

      return choiceDiv;
    }

    navigateToLevel(nextLevelId) {
      // Check if level exists in DOM, if not create it
      if (!document.getElementById(nextLevelId)) {
        const nextLevelData = this.config.levels[nextLevelId];
        if (nextLevelData) {
          this.renderLevel(nextLevelId, nextLevelData, this.currentLevel);
        }
      }

      this.hideLevel(this.currentLevel);
      this.levelHistory.push(this.currentLevel);
      
      setTimeout(() => {
        this.showLevel(nextLevelId);
      }, 300);
    }

    showLevel(levelId) {
      const level = document.getElementById(levelId);
      if (level) {
        level.classList.add('active');
        const backButton = level.querySelector('.navigation-back');
        if (backButton) {
          setTimeout(() => backButton.classList.add('show'), 100);
        }
        this.currentLevel = levelId;
      }
    }

    hideLevel(levelId) {
      const level = document.getElementById(levelId);
      if (level) {
        level.classList.remove('active');
        const backButton = level.querySelector('.navigation-back');
        if (backButton) {
          backButton.classList.remove('show');
        }
      }
    }

    goBack() {
      if (this.levelHistory.length > 0) {
        this.hideLevel(this.currentLevel);
        const previousLevel = this.levelHistory.pop();
        setTimeout(() => {
          this.showLevel(previousLevel);
        }, 300);
      }
    }
  }
  
  // Generate the navigation HTML
  const navigationHTML = `
    <div class="navigation-interface">
      <div class="navigation-container" id="navigation-app">
        <!-- Navigation content will be generated by JavaScript -->
      </div>
    </div>
  `;
  
  // Import fonts if not already loaded
  if (!document.querySelector('link[href*="Inter"]')) {
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
  }
  
  if (!document.querySelector('link[href*="Cormorant"]')) {
    const cormorantLink = document.createElement('link');
    cormorantLink.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap';
    cormorantLink.rel = 'stylesheet';
    document.head.appendChild(cormorantLink);
  }
  
  // Inject CSS
  const style = document.createElement('style');
  style.textContent = navigationCSS;
  document.head.appendChild(style);
  
  // Write the navigation HTML immediately
  document.write(navigationHTML);
  
  // Initialize navigation when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      const container = document.getElementById('navigation-app');
      if (container) {
        new BranchInterface(config, container);
      }
    });
  } else {
    // DOM already loaded
    const container = document.getElementById('navigation-app');
    if (container) {
      new BranchInterface(config, container);
    }
  }
  
})();
// Universal Scroll Effects Component for Xenodex
// GoDaddy-optimized: Self-contained with comprehensive effect system
(function() {
  
  // Global flag for effects toggle
  let effectsEnabled = true;
  
  // Section Effects Registry - All supported visual effects
  const SECTION_EFFECTS = {
    'hero': {
      handler: heroEffect,
      variables: ['--scroll-progress', '--reflection-position'],
      description: 'Hero section with shine and reflection effects'
    },
    'gradient-sweep-section': {
      handler: gradientSweepEffect,
      variables: ['--scroll-progress', '--reflection-position'],
      description: 'Horizontal metallic gradient sweep'
    },
    'diagonal-rays-section': {
      handler: diagonalRaysEffect,
      variables: ['--scroll-progress', '--ray-position'],
      description: 'Dynamic diagonal light rays'
    },
    'radial-pulse-section': {
      handler: radialPulseEffect,
      variables: ['--scroll-progress', '--reflection-position'],
      description: 'Concentric metallic ripples'
    },
    'diagonal-flow-section': {
      handler: diagonalFlowEffect,
      variables: ['--scroll-progress', '--reflection-position'],
      description: 'Subtle diagonal gradient movement'
    },
    'gradient-shimmer-section': {
      handler: gradientShimmerEffect,
      variables: ['--scroll-progress', '--reflection-position'],
      description: 'Multi-directional gradient shimmer'
    },
    'vertical-cascade-section': {
      handler: verticalCascadeEffect,
      variables: ['--scroll-progress'],
      description: 'Vertical waterfall effect'
    }
  };
  
  // Core scroll calculation utilities
  function getScrollProgress() {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    return scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
  }
  
  function getSectionMetrics(section) {
    const rect = section.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    
    return {
      rect,
      sectionTop: rect.top,
      sectionCenter: rect.top + (rect.height / 2),
      centeredness: 1 - (2 * Math.abs(0.5 - ((rect.top + rect.height/2) / viewportHeight))),
      sectionYPosition: Math.min(1, Math.max(0, 
        (viewportHeight - rect.top) / (viewportHeight + rect.height)
      )),
      inViewport: rect.top < viewportHeight && rect.bottom > 0
    };
  }
  
  // Individual Effect Handlers
  function heroEffect(section, metrics, globalProgress) {
    // Hero section shine and reflection effects
    const reflectionCycle = Math.sin(globalProgress * Math.PI * 2) * 0.5 + 0.5;
    const shinePosition = Math.abs((reflectionCycle * 100) % 100);
    
    // Set background positions based on scroll position
    section.style.backgroundPosition = effectsEnabled ? 
      `${50 + (metrics.sectionYPosition * 30)}% ${50 + (metrics.sectionYPosition * 15)}%` : 
      '50% 50%';
    
    if (metrics.inViewport) {
      // Calculate shine intensity based on scroll position
      const heroHeight = section.offsetHeight;
      const scrolledPosition = Math.min(1, Math.max(0, window.scrollY / heroHeight));
      const fadeThreshold = 0.7;
      const shineIntensity = scrolledPosition < fadeThreshold ? 
        1 - (scrolledPosition / fadeThreshold) * 0.9 : 0.1;
      
      if (effectsEnabled) {
        section.style.setProperty('--scroll-progress', shineIntensity.toFixed(2));
        section.style.setProperty('--reflection-position', `${shinePosition}%`);
      } else {
        section.style.setProperty('--scroll-progress', '0');
        section.style.setProperty('--reflection-position', '0%');
      }
    } else {
      section.style.setProperty('--scroll-progress', "0.1");
    }
  }
  
  function gradientSweepEffect(section, metrics, globalProgress) {
    // Horizontal metallic gradient sweep
    const gradientShift = metrics.sectionYPosition * 50;
    section.style.backgroundPosition = effectsEnabled ? 
      `${gradientShift}% ${100 - gradientShift}%` : 
      '50% 50%';
    
    const reflectionPosition = (globalProgress * 200).toFixed(0);
    
    if (metrics.inViewport) {
      if (effectsEnabled) {
        section.style.setProperty('--scroll-progress', metrics.centeredness.toFixed(2));
        section.style.setProperty('--reflection-position', `${reflectionPosition}%`);
      } else {
        section.style.setProperty('--scroll-progress', '0');
        section.style.setProperty('--reflection-position', '0%');
      }
    } else {
      section.style.setProperty('--scroll-progress', effectsEnabled ? "0.1" : "0");
    }
  }
  
  function diagonalRaysEffect(section, metrics, globalProgress) {
    // Dynamic diagonal light rays
    const xPos = 50 + (globalProgress * 20 * Math.sin(metrics.sectionYPosition * Math.PI));
    const yPos = 50 + (globalProgress * 20 * Math.cos(metrics.sectionYPosition * Math.PI));
    section.style.backgroundPosition = effectsEnabled ? 
      `${xPos}% ${yPos}%` : 
      '50% 50%';
    
    if (metrics.inViewport) {
      const rayIntensity = metrics.centeredness;
      
      if (effectsEnabled) {
        section.style.setProperty('--scroll-progress', rayIntensity.toFixed(2));
        section.style.setProperty('--ray-position', (globalProgress * 100).toFixed(0) + '%');
      } else {
        section.style.setProperty('--scroll-progress', '0');
        section.style.setProperty('--ray-position', '0%');
      }
    } else {
      section.style.setProperty('--scroll-progress', effectsEnabled ? "0.1" : "0");
    }
  }
  
  function radialPulseEffect(section, metrics, globalProgress) {
    // Concentric metallic ripples
    const pulseShift = metrics.sectionYPosition * 30;
    section.style.backgroundPosition = effectsEnabled ? 
      `${50 + pulseShift}% ${50 + (pulseShift * 0.7)}%` : 
      '50% 50%';
    
    if (metrics.inViewport) {
      const pulseIntensity = metrics.centeredness;
      const reflectionCycle = Math.sin(globalProgress * Math.PI * 3) * 0.5 + 0.5;
      const reflectionPosition = (reflectionCycle * 100).toFixed(0);
      
      if (effectsEnabled) {
        section.style.setProperty('--scroll-progress', pulseIntensity.toFixed(2));
        section.style.setProperty('--reflection-position', `${reflectionPosition}%`);
      } else {
        section.style.setProperty('--scroll-progress', '0');
        section.style.setProperty('--reflection-position', '0%');
      }
    } else {
      section.style.setProperty('--scroll-progress', effectsEnabled ? "0.1" : "0");
    }
  }
  
  function diagonalFlowEffect(section, metrics, globalProgress) {
    // Subtle diagonal gradient movement
    const flowX = 50 + (globalProgress * 15 * Math.sin(metrics.sectionYPosition * Math.PI * 0.7));
    const flowY = 50 + (globalProgress * 10 * Math.cos(metrics.sectionYPosition * Math.PI * 0.5));
    section.style.backgroundPosition = effectsEnabled ? 
      `${flowX}% ${flowY}%` : 
      '50% 50%';
    
    if (metrics.inViewport) {
      const flowIntensity = metrics.centeredness * 0.8;
      const reflectionPosition = ((globalProgress * 150) % 100).toFixed(0);
      
      if (effectsEnabled) {
        section.style.setProperty('--scroll-progress', flowIntensity.toFixed(2));
        section.style.setProperty('--reflection-position', `${reflectionPosition}%`);
      } else {
        section.style.setProperty('--scroll-progress', '0');
        section.style.setProperty('--reflection-position', '0%');
      }
    } else {
      section.style.setProperty('--scroll-progress', effectsEnabled ? "0.1" : "0");
    }
  }
  
  function gradientShimmerEffect(section, metrics, globalProgress) {
    // Multi-directional gradient shimmer
    const shimmerX = 50 + (globalProgress * 25 * Math.sin(metrics.sectionYPosition * Math.PI * 1.3));
    const shimmerY = 50 + (globalProgress * 20 * Math.cos(metrics.sectionYPosition * Math.PI * 0.8));
    section.style.backgroundPosition = effectsEnabled ? 
      `${shimmerX}% ${shimmerY}%` : 
      '50% 50%';
    
    if (metrics.inViewport) {
      const shimmerIntensity = metrics.centeredness * 0.9;
      const reflectionCycle = Math.sin(globalProgress * Math.PI * 4) * 0.5 + 0.5;
      const reflectionPosition = (reflectionCycle * 120).toFixed(0);
      
      if (effectsEnabled) {
        section.style.setProperty('--scroll-progress', shimmerIntensity.toFixed(2));
        section.style.setProperty('--reflection-position', `${reflectionPosition}%`);
      } else {
        section.style.setProperty('--scroll-progress', '0');
        section.style.setProperty('--reflection-position', '0%');
      }
    } else {
      section.style.setProperty('--scroll-progress', effectsEnabled ? "0.1" : "0");
    }
  }
  
  function verticalCascadeEffect(section, metrics, globalProgress) {
    // Vertical waterfall effect
    const cascadeY = 50 + (globalProgress * 40);
    section.style.backgroundPosition = effectsEnabled ? 
      `50% ${cascadeY}%` : 
      '50% 50%';
    
    if (metrics.inViewport) {
      const cascadeIntensity = metrics.centeredness;
      
      if (effectsEnabled) {
        section.style.setProperty('--scroll-progress', cascadeIntensity.toFixed(2));
      } else {
        section.style.setProperty('--scroll-progress', '0');
      }
    } else {
      section.style.setProperty('--scroll-progress', effectsEnabled ? "0.1" : "0");
    }
  }
  
  // Universal scroll handler
  function handleScroll() {
    const globalProgress = getScrollProgress();
    const viewportHeight = window.innerHeight;
    
    // Process all sections on the page
    document.querySelectorAll('section').forEach(section => {
      const metrics = getSectionMetrics(section);
      
      // Determine section type and apply appropriate effect
      for (const [sectionClass, effectConfig] of Object.entries(SECTION_EFFECTS)) {
        if (section.classList.contains(sectionClass)) {
          effectConfig.handler(section, metrics, globalProgress);
          break;
        }
      }
      
      // Universal content reveal animation
      const content = section.querySelector('.section-content');
      if (content) {
        if (metrics.sectionTop < viewportHeight * 0.8) {
          content.classList.add('visible');
          
          // Let CSS handle the full transition effect when visible class is added
          content.style.removeProperty('opacity');
        } else if (!effectsEnabled) {
          content.style.removeProperty('opacity');
        }
      }
    });
    
    // Universal highlight text effects
    document.querySelectorAll('.section-content p.highlight').forEach(element => {
      const rect = element.getBoundingClientRect();
      const section = element.closest('section');
      
      if (!effectsEnabled) {
        element.classList.remove('active-shine');
        return;
      }
      
      if (rect.top < viewportHeight * 0.9 && rect.bottom > viewportHeight * 0.1) {
        const centeredness = 1 - (2 * Math.abs(0.5 - ((rect.top + rect.height/2) / viewportHeight)));
        
        if (centeredness > 0.5) {
          element.classList.add('active-shine');
          
          if (section) {
            const currentProgress = parseFloat(section.style.getPropertyValue('--scroll-progress') || 0);
            section.style.setProperty('--scroll-progress', Math.min(1, currentProgress + 0.3).toFixed(2));
          }
        } else {
          element.classList.remove('active-shine');
        }
      } else {
        element.classList.remove('active-shine');
      }
    });
  }
  
  // Header fade effect - always enabled regardless of effectsEnabled
  function updateHeaderFade() {
    const currentScrollY = window.scrollY;
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');
    
    if (!header || !heroSection) return;
    
    const heroHeight = heroSection.offsetHeight;
    const fadeThreshold = heroHeight * 0.7;
    const fadeProgress = Math.min(1, Math.max(0, currentScrollY / fadeThreshold));
    const eased = 0.5 * (1 - Math.cos(fadeProgress * Math.PI));
    const opacity = Math.max(0, 1 - eased);
    
    header.style.opacity = opacity.toFixed(2);
  }
  
  // Throttled scroll event handling
  let ticking = false;
  let animationId = null;
  
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        handleScroll();
        
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
        
        updateHeaderFade();
        animationId = requestAnimationFrame(updateHeaderFade);
        
        ticking = false;
      });
      ticking = true;
    }
  }
  
  // Initialization function
  function initScrollEffects() {
    // Set default center position for gradient effects
    document.querySelectorAll('section').forEach(section => {
      section.style.setProperty('--mouse-x', '0.5');
      section.style.setProperty('--mouse-y', '0.5');
    });
    
    // Add scroll listeners
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', function() {
      handleScroll();
    });
    
    // Initial call to set up elements
    handleScroll();
  }
  
  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollEffects);
  } else {
    initScrollEffects();
  }
  
  // Export public interface
  window.ScrollEffects = {
    init: initScrollEffects,
    setEffectsEnabled: function(enabled) {
      effectsEnabled = enabled;
      document.body.classList.toggle('effects-disabled', !enabled);
      handleScroll();
    },
    getEffectsEnabled: function() {
      return effectsEnabled;
    },
    getSupportedSections: function() {
      return Object.keys(SECTION_EFFECTS);
    }
  };
  
})();
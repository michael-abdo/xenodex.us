# Xenodex Components System

## Overview
This directory contains all reusable components for the Xenodex website:
- **Header & Footer**: Universal components for consistent site-wide branding
- **Section Templates**: Complete page templates with metallic visual effects  
- **Navigation System**: Dynamic, self-adapting navigation interfaces

## Current Files

### Core Components
- `header.js` - Universal header with logo, 20px left padding, auto path detection
- `footer.js` - Universal footer with copyright and tagline
- `navigation.js` - Dynamic navigation system (1-8 options, auto-adapting)

### Template System
- `page-template.html` - Complete working page with all visual effects and navigation

### Navigation System  
- `navigation/` - Complete navigation system with examples and presets

## Quick Start Guide

### 1. Header Component

**What it does**: Creates consistent header with logo positioned 20px from left edge

**Usage**:
```html
<!-- Root level -->
<script src="components/header.js"></script>

<!-- From /pages/ directory -->
<script src="../components/header.js"></script>

<!-- From /pages/templates/ or /components/sections/ -->
<script src="../../components/header.js"></script>
```

**Features**:
- Auto-detects directory depth and adjusts logo/link paths
- Logo positioned with 20px left padding
- No navigation text (clean minimal design)
- Works on all pages regardless of location

### 2. Footer Component

**What it does**: Creates consistent footer with copyright and tagline

**Usage**:
```html
<!-- Root level -->
<script src="components/footer.js"></script>

<!-- From /pages/ directory -->
<script src="../components/footer.js"></script>

<!-- From /pages/templates/ or /components/sections/ -->
<script src="../../components/footer.js"></script>
```

**Content**: `© 2025 • XENODEX SCIENCES • Semper Progredi`

### 3. Section Templates

**What it does**: Complete working page template with 7 section types and scroll effects

**Main file**: `sections/page-template.html`

**Usage**:
1. Copy `sections/page-template.html` 
2. Replace placeholder text with your content
3. Choose from 7 section types:
   - `hero` - Page intros
   - `gradient-sweep-section` - Stories, timelines
   - `diagonal-rays-section` - Technical content
   - `radial-pulse-section` - Impact, global reach
   - `diagonal-flow-section` - Natural processes
   - `gradient-shimmer-section` - Premium content
   - `vertical-cascade-section` - Call-to-action

**See**: `sections/README.md` for complete documentation

### 4. Navigation System

**What it does**: Dynamic navigation that adapts to 1-8 options with hover effects

**Main file**: `navigation.js`

**Basic Usage**:
```html
<script>
window.navigationConfig = {
    level1: {
        question: "WHERE TO GO?",
        choices: [
            { defaultText: "SCIENCE", hoverText: "EXPLORE", destination: "pages/science.html" },
            { defaultText: "PLAN", hoverText: "BUILD", destination: "pages/plan.html" }
        ]
    }
};
</script>
<script src="components/navigation.js"></script>
```

**Features**:
- Auto-adjusts spacing for 1-8 options
- Hover text effects
- Multi-level navigation support
- Mobile responsive
- Uses email-link styling: Cormorant Garamond italic font with underline hover effects
- CSS classes prefixed with `navigation-` to avoid conflicts

**See**: `navigation/README.md` for complete documentation

### 5. Page Template System

**What it does**: Complete working page template with all 7 section types and scroll effects

**Main file**: `page-template.html`

**Quick Start**:
1. **Copy** `page-template.html` to your desired location
2. **Rename** it (e.g., `about.html`, `contact.html`, etc.)
3. **Replace** placeholder text with your actual content
4. **Upload** to GoDaddy - everything works immediately

**What You Get**:
- ✅ Complete scroll effects JavaScript
- ✅ All 7 section types with metallic styling
- ✅ Header and footer components integrated
- ✅ Navigation component at bottom with multi-level choices
- ✅ Mobile responsive design
- ✅ Google Analytics ready

## Available Section Types

### 1. Hero Section
**Use for:** Page intros, main titles  
**Always use this as your first section**
```html
<section class="hero">
    <div class="container">
        <h1>Your Main Title<br>Second Line Optional</h1>
        <p class="subtitle">Your Subtitle Here</p>
    </div>
</section>
```

### 2. Gradient Sweep Section
**Use for:** Stories, timelines, linear progression  
**Effect:** Horizontal metallic gradient that sweeps across
```html
<section id="story" class="gradient-sweep-section">
    <div class="container">
        <div class="section-content">
            <h2 class="section-header">SECTION TITLE</h2>
            <p class="lead"><span class="intro-blend">Opening phrase.</span> Your subtitle or lead paragraph goes here.</p>
            <p class="content-text">Your main content goes here. This is where you add the body of your section. You can include multiple paragraphs by using &lt;br&gt;&lt;br&gt; between them.</p>
            <p class="highlight">Your closing statement.</p>
        </div>
    </div>
</section>
```

### 3. Diagonal Rays Section
**Use for:** Technical content, methodology, approach  
**Effect:** Dynamic diagonal light beams that shift with scroll
```html
<section id="approach" class="diagonal-rays-section">
    <div class="container">
        <div class="section-content">
            <h2 class="section-header">OUR APPROACH</h2>
            <p class="lead">Revolutionary methods for modern challenges.</p>
            <p class="content-text">Content about your approach...</p>
            <p class="highlight">Innovation at every step.</p>
        </div>
    </div>
</section>
```

### 4. Radial Pulse Section
**Use for:** Impact, global reach, centered concepts  
**Effect:** Concentric ripples emanating from center
```html
<section id="impact" class="radial-pulse-section">
    <div class="container">
        <div class="section-content">
            <h2 class="section-header">GLOBAL IMPACT</h2>
            <p class="lead">Ripples of change spreading worldwide.</p>
            <p class="content-text">Content about your impact...</p>
            <p class="highlight">The future is here.</p>
        </div>
    </div>
</section>
```

### 5. Diagonal Flow Section
**Use for:** Natural progression, organic processes  
**Effect:** Smooth flowing diagonal gradients
```html
<section id="process" class="diagonal-flow-section">
    <div class="container">
        <div class="section-content">
            <h2 class="section-header">PROCESS TITLE</h2>
            <p class="lead">Natural progression introduction.</p>
            <p class="content-text">Process details and flow information...</p>
            <p class="highlight">Seamless evolution.</p>
        </div>
    </div>
</section>
```

### 6. Gradient Shimmer Section
**Use for:** Premium content, innovation, sophistication  
**Effect:** Complex multi-directional gradient shimmer
```html
<section id="innovation" class="gradient-shimmer-section">
    <div class="container">
        <div class="section-content">
            <h2 class="section-header">INNOVATION</h2>
            <p class="lead">Sophisticated technology introduction.</p>
            <p class="content-text">Premium content about innovation...</p>
            <p class="highlight">The cutting edge.</p>
        </div>
    </div>
</section>
```

### 7. Vertical Cascade Section
**Use for:** Call-to-action sections, contact forms, final sections  
**Effect:** Vertical waterfall background effect
```html
<section id="contact" class="vertical-cascade-section">
    <div class="container">
        <div class="section-content">
            <h2 class="section-header">GET STARTED</h2>
            <p class="lead">Ready to begin your journey?</p>
            <p class="content-text">Join us in shaping the future. Our team is ready to help you unlock new possibilities.</p>
            <p class="highlight">Your transformation begins now.</p>
            <div class="section-cta">
                <a href="mailto:contact@example.com" class="email-link">REACH OUT TODAY</a>
            </div>
        </div>
    </div>
</section>
```

## Content Structure Classes

### Required Elements
- `section-header` - Container div with centered text and chrome separator line
- `section-title` - Main section title (3.5rem, Inter 800 weight, uppercase)
- `section-subtitle` - Descriptive text for content-based sections (1.5rem, Inter 400 weight)
- `lead` - All narrative content flows here (Cormorant Garamond, can include `intro-blend`)
- `highlight` - Emphasized closing statement (Inter 800 weight, uppercase)

### Special Elements
- `intro-blend` - Creates larger, italicized introduction phrases (Cormorant Garamond italic)
- `section-cta` - Container for call-to-action buttons/links
- `email-link` - Styled email link with hover effects

## Visual Style Strategy

### Mix and Match
Create visual variety by combining different section types:
```html
<section class="hero">...</section>
<section class="gradient-sweep-section">...</section>     <!-- Story -->
<section class="diagonal-rays-section">...</section>      <!-- Tech -->
<section class="radial-pulse-section">...</section>       <!-- Impact -->
<section class="gradient-shimmer-section">...</section>   <!-- Innovation -->
```

### Section Quick Reference

| Section Class | Best For | Visual Effect |
|--------------|----------|---------------|
| `hero` | Page intros | Static gradient background |
| `gradient-sweep-section` | Stories, timelines | Horizontal light sweep |
| `diagonal-rays-section` | Technical, methodology | Diagonal light beams |
| `radial-pulse-section` | Impact, global concepts | Concentric ripples |
| `diagonal-flow-section` | Processes, natural flow | Smooth diagonal movement |
| `gradient-shimmer-section` | Premium, innovation | Multi-directional shimmer |
| `vertical-cascade-section` | CTAs, contact forms | Vertical waterfall effect |

## Path Handling

All components automatically detect directory depth:

| Directory Level | Path Prefix | Example |
|----------------|-------------|---------|
| Root (`/`) | none | `components/header.js` |
| Pages (`/pages/`) | `../` | `../components/header.js` |
| Deep (`/pages/templates/`, `/components/sections/`) | `../../` | `../../components/header.js` |

## GoDaddy Deployment Ready

All components are optimized for static hosting:
- ✅ Self-contained JavaScript files
- ✅ Inline CSS (no external dependencies)
- ✅ Automatic path detection
- ✅ No build process required
- ✅ Mobile responsive

## Usage Examples

### Complete Page Setup
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Page</title>
    <link rel="stylesheet" href="../styles.css">
</head>
<body>
    <!-- Header -->
    <script src="../components/header.js"></script>
    
    <!-- Your content here -->
    
    <!-- Footer -->
    <script src="../components/footer.js"></script>
</body>
</html>
```

### Navigation Page
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navigation</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <script>
    window.navigationConfig = {
        level1: {
            question: "CHOOSE YOUR PATH",
            choices: [
                { defaultText: "HOME", hoverText: "START", destination: "index.html" },
                { defaultText: "ABOUT", hoverText: "LEARN", destination: "about.html" }
            ]
        }
    };
    </script>
    <script src="components/navigation.js"></script>
</body>
</html>
```

## Maintenance

**To update header**: Edit `header.js` - changes apply to all pages  
**To update footer**: Edit `footer.js` - changes apply to all pages  
**To update navigation**: Edit `navigation.js` - changes apply to all navigation pages  
**To add new section types**: Add CSS to `styles.css` and document in `sections/README.md`

---

# LLM TEMPLATE CREATION GUIDE

## For AI Assistants Creating New Pages

This section provides step-by-step instructions for LLMs (Large Language Models) to create new template pages using the Xenodex component system.

## Quick Template Creation Workflow

### STEP 1: Analyze Requirements
When asked to create a new page, first determine:
- **Page purpose**: What is this page for? (About, Contact, Services, etc.)
- **Content type**: What kind of information will it contain?
- **Navigation needs**: How should users navigate to/from this page?
- **Directory location**: Where should the file be placed? (`/pages/`, root, etc.)

### STEP 2: Choose Your Base Template
Always start with `components/page-template.html` as your foundation:

```bash
# Copy the master template
cp components/page-template.html pages/new-page.html
```

### STEP 3: Update Page Metadata
**Required changes** in the `<head>` section:
```html
<!-- Change these 3 elements -->
<title>New Page Title - Xenodex</title>                    <!-- Page title -->
<link rel="icon" type="image/png" href="../images/logo_white.png">  <!-- Path to favicon -->
<link rel="stylesheet" href="../styles.css">              <!-- Path to CSS -->
```

**Path rules**:
- **Root level** (`/index.html`): Use `images/logo_white.png` and `styles.css`
- **Pages directory** (`/pages/about.html`): Use `../images/logo_white.png` and `../styles.css`
- **Deep directories** (`/pages/templates/page.html`): Use `../../images/logo_white.png` and `../../styles.css`

### STEP 4: Replace Content Sections
The template includes example sections. **Replace ALL placeholder content**:

#### Hero Section (Always first)
```html
<section class="hero">
    <div class="container">
        <h1>Your Page Title<br>Optional Second Line</h1>
        <p class="subtitle">Your page subtitle or tagline</p>
    </div>
</section>
```

#### Content Sections
Choose appropriate section types for your content:

**For storytelling/timeline content:**
```html
<section id="story" class="gradient-sweep-section">
    <div class="container">
        <div class="section-content">
            <h2 class="section-header">YOUR SECTION TITLE</h2>
            <p class="lead"><span class="intro-blend">Opening phrase.</span> Lead paragraph text.</p>
            <p class="content-text">Main content goes here. Use &lt;br&gt;&lt;br&gt; for paragraph breaks.</p>
            <p class="highlight">Closing emphasis statement.</p>
        </div>
    </div>
</section>
```

**For technical/methodology content:**
```html
<section id="approach" class="diagonal-rays-section">
    <!-- Same structure as above -->
</section>
```

### STEP 5: Configure Navigation
**If the page needs navigation choices** at the bottom, update the navigation config:

```html
<script>
window.navigationConfig = {
    level1: {
        question: "WHAT'S NEXT?",
        choices: [
            {
                defaultText: "EXPLORE MORE",
                hoverText: "DISCOVER",
                destination: "../pages/other-page.html"
            },
            {
                defaultText: "GET STARTED",
                hoverText: "BEGIN",
                destination: "../pages/contact.html"
            }
        ]
    }
};
</script>
```

**If no navigation needed**, remove the entire navigation script block (lines containing `window.navigationConfig` and `<script src="navigation.js"></script>`).

### STEP 6: Update Script Paths
**Critical**: Ensure all component scripts have correct paths:

```html
<!-- For pages in /pages/ directory -->
<script src="../components/header.js"></script>    <!-- Header -->
<script src="../components/navigation.js"></script> <!-- Navigation (if used) -->
<script src="../components/footer.js"></script>    <!-- Footer -->

<!-- For root level pages -->
<script src="components/header.js"></script>
<script src="components/navigation.js"></script>
<script src="components/footer.js"></script>
```

## Section Architecture Framework

### **Two Fundamental Section Types**

The Xenodex template system uses **two distinct structural approaches** for different content purposes:

---

### **🎭 TEXT-BASED SECTIONS (Narrative & Story-Driven)**

**Purpose**: Storytelling, timelines, company history, philosophy, methodology explanations

**Typography**: Cormorant Garamond (elegant serif with italics)

**Structure**: Header → Intro-Blend Subheader → Flowing Narrative → Highlight

```html
<section id="story" class="gradient-sweep-section">
    <div class="container">
        <div class="section-content">
            <div class="section-header">
                <h2 class="section-title">OUR JOURNEY</h2>
            </div>
            <p class="lead"><span class="intro-blend">From humble beginnings.</span> A story of innovation that started with a simple observation about genetic analysis. Our founders noticed that traditional genetic analysis was fundamentally flawed. Data was being collected without context, research was proceeding without direction. Resources were draining away while discoveries remained unrealized.<br><br>This revelation sparked a journey to create something entirely new - a systematic approach that would finally unlock the true potential of genetic data.</p>
            <p class="highlight">Today, we're leading the revolution.</p>
        </div>
    </div>
</section>
```

**Key Typography Classes:**
- `section-header`: Container with centered text and chrome separator line
- `section-title`: Large header (3.5rem, Inter 800 weight, uppercase)
- `intro-blend`: Cormorant Garamond italic, 2.1rem, pulls readers into story
- `lead`: Cormorant Garamond regular, 1.5rem, narrative flow (all content flows here)

---

### **🔬 CONTENT-BASED SECTIONS (Scientific & Empirical)**

**Purpose**: Technical specifications, data, features, scientific findings, architecture

**Typography**: Inter (modern sans-serif with bold weights)

**Structure**: Header → Bold Scientific Subheader → Irregular Content → Highlight

**Layout**: Full page width with minimal side padding for maximum content space

```html
<section id="architecture" class="diagonal-rays-section">
    <div class="container">
        <div class="section-content full-width">
            <div class="section-header">
                <h2 class="section-title">THE ARCHITECTURE</h2>
                <p class="section-subtitle">Consistent Stages. Scalable Complexity.</p>
            </div>
            
            <!-- Irregular Content: Images, Data, Interactive Elements -->
            <div class="content-area">
                <img src="../images/methodology-cycle.svg" alt="Analysis Framework" class="content-image">
                <div class="data-points">
                    <div class="metric">
                        <span class="number">99.7%</span>
                        <span class="label">ACCURACY</span>
                    </div>
                    <div class="metric">
                        <span class="number">3.2x</span>
                        <span class="label">FASTER</span>
                    </div>
                </div>
            </div>
            
            <p class="highlight">PRECISION THROUGH METHODOLOGY.</p>
        </div>
    </div>
</section>
```

**Key Typography Classes:**
- `section-header`: Container with centered text and chrome separator line
- `section-title`: Large header (3.5rem, Inter 800 weight, uppercase)
- `section-subtitle`: Descriptive text (1.5rem, Inter 400 weight)
- `highlight`: Inter 800 weight, uppercase, powerful conclusions

---

## **Typography Reference**

### **📖 Narrative Typography (Cormorant Garamond)**
```css
/* Available Classes */
.intro-blend        /* 2.1rem, italic, 600 weight - Story intros */
.lead              /* 1.5rem, regular, 400 weight - Narrative flow */
.email-link        /* 1.6rem, italic - Elegant links */

/* Characteristics */
- Serif typeface for classical readability
- Italic variants for emphasis and elegance  
- Letter-spacing optimized for flow (0.01-0.03em)
- Line heights 1.6-1.8 for comfortable reading
```

### **🔬 Scientific Typography (Inter)**
```css
/* Available Classes */  
.section-title     /* 3.5rem, 800 weight, uppercase - Main headers */
.section-subtitle  /* 1.5rem, 400 weight - Content-based subtitles */
.highlight         /* 2.3rem, 800 weight, uppercase - Key findings */
.subtitle          /* 1.7rem, 600 weight, uppercase - Hero subtitles */

/* Characteristics */
- Sans-serif for modern, clean appearance
- Heavy weights (700-800) for authority
- Uppercase transforms for impact
- Optimized letter-spacing for readability
```

---

## **Section Selection Guide**

### **Choose by Content Purpose:**

| Content Purpose | Section Type | Recommended Class | Typography Focus |
|----------------|-------------|------------------|------------------|
| **NARRATIVE CONTENT** |
| Company story, journey | Text-Based | `gradient-sweep-section` | Cormorant Garamond flow |
| Philosophy, methodology | Text-Based | `diagonal-flow-section` | Story progression |
| Timeline, evolution | Text-Based | `gradient-sweep-section` | Narrative chronology |
| **EMPIRICAL CONTENT** |
| Technical specifications | Content-Based | `diagonal-rays-section` | Inter + data/images |
| Scientific findings | Content-Based | `radial-pulse-section` | Bold statements + metrics |
| Product features | Content-Based | `gradient-shimmer-section` | Strong headers + visuals |
| System architecture | Content-Based | `diagonal-rays-section` | Technical diagrams |
| Performance data | Content-Based | `radial-pulse-section` | Numbers + comparisons |
| **HYBRID CONTENT** |
| Page introductions | Mixed | `hero` | Both fonts available |
| Contact/CTAs | Mixed | `vertical-cascade-section` | Depends on approach |

---

## **Content Templates**

### **Text-Based Section Template**
```html
<section id="narrative-id" class="[visual-effect-class]">
    <div class="container">
        <div class="section-content">
            <div class="section-header">
                <h2 class="section-title">NARRATIVE TITLE</h2>
            </div>
            <p class="lead"><span class="intro-blend">Story hook.</span> Opening that draws readers into the narrative with flowing content in beautiful Cormorant Garamond. Continue with natural progression, storytelling elements, and contextual development that builds toward the conclusion.</p>
            <p class="highlight">Powerful story conclusion.</p>
        </div>
    </div>
</section>
```

### **Content-Based Section Template**  
```html
<section id="empirical-id" class="[visual-effect-class]">
    <div class="container">
        <div class="section-content full-width">
            <div class="section-header">
                <h2 class="section-title">THE ARCHITECTURE</h2>
                <p class="section-subtitle">Bold Scientific Statement. Technical Description.</p>
            </div>
            
            <!-- Irregular Content Area -->
            <div class="content-area">
                <!-- Images, data visualizations, interactive elements -->
                <img src="../images/diagram.svg" alt="Technical Diagram" class="content-image">
                
                <!-- Or data metrics -->
                <div class="metrics-grid">
                    <div class="metric">
                        <span class="number">99.7%</span>
                        <span class="label">ACCURACY</span>
                    </div>
                </div>
                
                <!-- Or feature lists -->
                <ul class="feature-list">
                    <li>Systematic data processing</li>
                    <li>Real-time analysis capabilities</li>
                    <li>Scalable architecture</li>
                </ul>
            </div>
            
            <p class="highlight">AUTHORITATIVE CONCLUSION.</p>
        </div>
    </div>
</section>
```

## **Header Structure Reference**

### **All Sections Use:**
```html
<div class="section-header">
    <h2 class="section-title">MAIN TITLE</h2>
    <!-- For content-based sections only: -->
    <p class="section-subtitle">Descriptive subtitle text</p>
</div>
```

**CSS Classes:**
- `.section-header` - Container with centered text and chrome separator line below
- `.section-title` - Large bold title (3.5rem, Inter 800 weight, uppercase)
- `.section-subtitle` - Descriptive text below title (1.5rem, Inter 400 weight)

**Rules:**
- **Text-based sections**: Use only `section-title` (no subtitle)
- **Content-based sections**: Use both `section-title` and `section-subtitle`
- **Chrome line**: Automatically appears below the header container

## Common LLM Tasks

### Task 1: Create About Page
```html
<!-- File: pages/about.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us - Xenodex</title>
    <link rel="icon" type="image/png" href="../images/logo_white.png">
    <link rel="stylesheet" href="../styles.css">
    <!-- Include the full script section from page-template.html -->
</head>
<body>
    <script src="../components/header.js"></script>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1>About Xenodx<br>Sciences</h1>
            <p class="subtitle">Pioneering the Future of Genetic Analysis</p>
        </div>
    </section>

    <!-- Story Section -->
    <section id="story" class="gradient-sweep-section">
        <div class="container">
            <div class="section-content">
                <h2 class="section-header">OUR STORY</h2>
                <p class="lead"><span class="intro-blend">Founded in innovation.</span> Born from the belief that genetic analysis could be revolutionized.</p>
                <p class="content-text">Our journey began with a simple observation: current genetic analysis methods were fundamentally flawed. We set out to create a systematic approach that would finally unlock the true potential of genetic data.</p>
                <p class="highlight">Today, we're leading the revolution.</p>
            </div>
        </div>
    </section>

    <!-- Mission Section -->
    <section id="mission" class="diagonal-rays-section">
        <div class="container">
            <div class="section-content">
                <h2 class="section-header">OUR MISSION</h2>
                <p class="lead">To transform genetic analysis through systematic innovation.</p>
                <p class="content-text">We believe that the future of genetic research lies not in collecting more data, but in understanding the data we already have. Our mission is to provide the tools and methodologies that make this understanding possible.</p>
                <p class="highlight">Precision through methodology.</p>
            </div>
        </div>
    </section>

    <script src="../components/footer.js"></script>
</body>
</html>
```

### Task 2: Create Contact Page
```html
<!-- File: pages/contact.html -->
<!-- Use vertical-cascade-section for contact forms -->
<section id="contact" class="vertical-cascade-section">
    <div class="container">
        <div class="section-content">
            <h2 class="section-header">GET IN TOUCH</h2>
            <p class="lead">Ready to revolutionize your genetic analysis?</p>
            <p class="content-text">Contact our team to learn more about how Xenodex Sciences can transform your research capabilities. We're here to help you unlock the full potential of your genetic data.</p>
            <p class="highlight">Let's begin the conversation.</p>
            <div class="section-cta">
                <a href="mailto:contact@xenodexsciences.com" class="email-link">REACH OUT TODAY</a>
            </div>
        </div>
    </div>
</section>
```

### Task 3: Create Service Page
```html
<!-- Use gradient-shimmer-section for premium services -->
<section id="services" class="gradient-shimmer-section">
    <div class="container">
        <div class="section-content">
            <h2 class="section-header">OUR SERVICES</h2>
            <p class="lead"><span class="intro-blend">Cutting-edge solutions.</span> Tailored to your genetic analysis needs.</p>
            <p class="content-text">We offer comprehensive genetic analysis services including systematic data interpretation, methodology development, and custom research solutions. Our approach ensures that every analysis is both scientifically rigorous and practically applicable.</p>
            <p class="highlight">Excellence in every analysis.</p>
        </div>
    </div>
</section>
```

## Validation Checklist

Before considering a template complete, verify:

### ✅ File Structure
- [ ] File placed in correct directory (`/pages/` for most content)
- [ ] Filename follows convention (lowercase, hyphens, `.html` extension)
- [ ] File starts with appropriate HTML5 doctype

### ✅ Metadata
- [ ] Page title updated and descriptive
- [ ] Favicon path correct for directory level
- [ ] CSS path correct for directory level
- [ ] All required fonts loaded

### ✅ Content Structure
- [ ] Hero section present and customized
- [ ] All placeholder text replaced with real content
- [ ] Section IDs are unique and descriptive
- [ ] Content follows class structure (section-header, lead, content-text, highlight)

### ✅ Components
- [ ] Header script path correct
- [ ] Footer script path correct  
- [ ] Navigation script path correct (if used)
- [ ] Navigation config updated (if used) or removed (if not needed)

### ✅ Navigation Integration
- [ ] If page should be accessible from other pages, update their navigation configs
- [ ] If page links to other pages, ensure those paths are correct

## Advanced Features

### Multi-Level Navigation
For complex page flows, use multi-level navigation:

```html
<script>
window.navigationConfig = {
    level1: {
        question: "WHAT INTERESTS YOU?",
        choices: [
            {
                defaultText: "LEARN MORE",
                hoverText: "EXPLORE",
                next: "learn-path"
            },
            {
                defaultText: "GET STARTED",
                hoverText: "BEGIN",
                destination: "../pages/contact.html"
            }
        ]
    },
    levels: {
        "learn-path": {
            question: "WHICH ASPECT?",
            choices: [
                {
                    defaultText: "THE METHOD",
                    hoverText: "UNDERSTAND",
                    destination: "../pages/method.html"
                },
                {
                    defaultText: "THE ROADMAP",
                    hoverText: "PLAN",
                    destination: "../pages/roadmap.html"
                }
            ]
        }
    }
};
</script>
```

### Custom Sections
To create custom visual effects, add new CSS classes to `styles.css` following the existing pattern:

```css
.custom-section-name {
    background: /* your gradient here */;
    /* Add scroll-responsive effects */
}
```

## Troubleshooting

### Common Issues:
1. **Broken images/CSS**: Check path prefixes (`../` vs `./` vs none)
2. **Navigation not working**: Verify `window.navigationConfig` is defined before `navigation.js` loads
3. **Scripts not loading**: Ensure component script paths match directory structure
4. **Mobile not responsive**: Confirm viewport meta tag is present
5. **Visual effects not working**: Check that section classes match exactly

### Quick Fixes:
- **Path errors**: Use browser dev tools to see 404 errors, adjust paths accordingly
- **Navigation issues**: Check browser console for JavaScript errors
- **Styling problems**: Verify `styles.css` loads successfully
- **Component problems**: Ensure component scripts load in correct order (header → content → navigation → footer)

## Best Practices for LLMs

1. **Always copy from page-template.html** - Don't create from scratch
2. **Update all paths consistently** - Check every `src=""` and `href=""` attribute  
3. **Replace ALL placeholder content** - Don't leave template text
4. **Choose sections that match content type** - Use the selection guide
5. **Test navigation flows** - Ensure all links point to existing pages
6. **Follow naming conventions** - Lowercase filenames with hyphens
7. **Validate HTML structure** - Maintain proper nesting and closing tags
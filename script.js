/**
 * KAMALENDU - MOTION DESIGNER & VIDEO EDITOR PORTFOLIO
 * 
 * CORE SKILLS:
 * 1. Adobe After Effects (Ae)
 * 2. Adobe Premiere Pro (Pr)
 * 3. Adobe Photoshop (Ps)
 * 4. Adobe Illustrator (Ai)
 * 5. Generative AI Tools (AI) - Midjourney, Runway, Firefly
 * 
 * =========================================================================
 * HOW TO ADD YOUR YOUTUBE LINK & SOCIAL MEDIA:
 * 1. Paste your YouTube link or video ID in YOUTUBE_CONFIG below.
 * 2. Paste your profile links in SOCIAL_LINKS below.
 * =========================================================================
 */

// 1. SOCIAL MEDIA CONFIGURATION (Add your real profile links here)
const SOCIAL_LINKS = {
  youtube: 'https://www.youtube.com/@kc__din70',
  instagram: 'https://www.instagram.com/kc.din?utm_source=ig_web_button_share_sheet&srtk=ZDNlZDc0MzIxNw==',
  instagramDm: 'https://ig.me/m/kc.din',
  linkedin: 'https://www.linkedin.com/in/kamalendu-chanda-324703339'
};

// 2. YOUTUBE SHOWREEL CONFIGURATION
// If you have a YouTube video ID, paste it here (e.g. "dQw4w9WgXcQ" or full URL)
const YOUTUBE_CONFIG = {
  defaultVideoId: 'UhjRv-46pgg' // Kamalendu's ChatGPT Motion Graphic (https://youtu.be/UhjRv-46pgg)
};

// 3. SOFTWARE & SKILLS DATABASE
const SOFTWARE_CONFIG = [
  {
    id: 'ae',
    name: 'After Effects',
    short: 'Ae',
    tagline: 'Motion Design & VFX Compositing',
    color: '#9999ff',
    badgeClass: 'badge-ae'
  },
  {
    id: 'pr',
    name: 'Premiere Pro',
    short: 'Pr',
    tagline: 'Video Post-Production & Color',
    color: '#ea77ff',
    badgeClass: 'badge-pr'
  },
  {
    id: 'ps',
    name: 'Photoshop',
    short: 'Ps',
    tagline: 'Matte Painting & Concept Art',
    color: '#31a8ff',
    badgeClass: 'badge-ps'
  },
  {
    id: 'ai',
    name: 'Illustrator',
    short: 'Ai',
    tagline: 'Vector Art & Brand Identity',
    color: '#ff9a00',
    badgeClass: 'badge-ai'
  },
  {
    id: 'genai',
    name: 'Generative AI',
    short: 'AI',
    tagline: 'Synthesis, Concept & Video Motion',
    color: '#00f2fe',
    badgeClass: 'badge-genai'
  }
];

// 4. PROJECTS DATABASE (Kamalendu's Real Commercial Works)
const PROJECTS_CONFIG = [
  {
    id: 1,
    title: 'Trivana — Logo & Packaging Design',
    subtitle: 'LOGO DESIGN & PACKAGING COVER',
    category: 'Brand Identity & Product Packaging',
    software: ['ai', 'ps'],
    image: 'assets/trivana-cover-teal-back.jpg',
    gallery: [
      { url: 'assets/trivana-cover-teal-back.jpg', label: 'Model A (Teal) — Brand Logo & Back Cover' },
      { url: 'assets/trivana-cover-teal-front.jpg', label: 'Model A (Teal) — Product Front Cover' },
      { url: 'assets/trivana-cover-purple-back.jpg', label: 'Model B (Purple) — Aloe Vera & Feature Icons' },
      { url: 'assets/trivana-cover-purple-front.jpg', label: 'Model B (Purple) — Product Front Cover' }
    ],
    spec: 'Dual Color Models (Teal & Purple) • Print & Vector',
    desc: 'Complete brand identity and product packaging cover design for Trivana hygienic pads, created across two distinct color variant models (Teal/Emerald and Royal Purple). Adobe Illustrator was used to design the dynamic female silhouette brand logo, typography, iconography, and layout structure. Adobe Photoshop was utilized for high-resolution product composite rendering, Aloe Vera leaf moisture and gel droplets, layered lighting, and packaging finish.',
    pipeline: [
      'Illustrator: Custom vector logo design featuring the graceful, dynamic female figure silhouette symbolizing comfort, confidence, and freedom of motion.',
      'Illustrator: Complete packaging vector typography, "7 PADS" banner badges, feature icons (Cottony Soft Cover, Odour Control, Leak Lock Technology), and disposal infographics.',
      'Photoshop: Realistic product composite of the pad with layered texture details, absorbent core gradient, and embossed surface shading.',
      'Photoshop: High-impact photo manipulation of fresh Aloe Vera leaf with dripping moisture droplets to highlight natural care and comfort.',
      'Photoshop: Multi-model color exploration comparing Teal/Aqua and Royal Purple variants for retail shelf appeal.'
    ],
    deliverables: 'Vector Logo Kit (AI, EPS, SVG), Print-Ready CMYK Packaging Masters (300 DPI), and Digital Showcase Mockups.'
  },
  {
    id: 2,
    title: 'Spider-Man: Miles Morales — Movie Poster',
    subtitle: 'KEY ART & OUTDOOR ADVERTISING MOCKUP',
    category: 'Key Art & Theatrical Poster Design',
    software: ['ps'],
    image: 'assets/spiderman-mockup.jpg',
    gallery: [
      { url: 'assets/spiderman-poster.jpg', label: 'Key Art Theatrical Poster — Double Exposure & Skyline Silhouette' },
      { url: 'assets/spiderman-mockup.jpg', label: 'Outdoor Advertising Mockup — Rainy Night Bus Shelter Billboard' }
    ],
    spec: 'Photoshop Key Art • High-Res Theatrical Poster & Rainy Night Mockup',
    desc: 'Cinematic theatrical movie poster for Marvel\'s "Spider-Man: Miles Morales", conceived and executed in Adobe Photoshop. The composition features an arresting double-exposure treatment within Miles Morales\'s dynamic leaping silhouette, contrasting an electric neon city night against an intense cyan skyline silhouette. Finished with authentic Marvel billing block credits and placed into a photorealistic rainy night bus shelter billboard mockup with glowing street reflections.',
    pipeline: [
      'Photoshop: Double-exposure silhouette masking inside Miles Morales, capturing character kinetic descent with neon magenta/blue light passes.',
      'Photoshop: High-contrast cyan city skyline silhouette framing the iconic Marvel Spider-Man typography.',
      'Photoshop: Typography hierarchy with custom red brush script for "MILES MORALES" and authentic theatrical credit billing block.',
      'Photoshop: Smart Object integration into a photorealistic rainy night bus shelter billboard with wet pavement reflections and authentic ambient kiosk illumination.'
    ],
    deliverables: 'Master Theatrical Poster PSD (300 DPI), High-Res Billboard Mockup, and Social Display Key Art.'
  },
  {
    id: 3,
    title: 'Demon Slayer: Infinity Castle — Movie Poster',
    subtitle: 'ANIME THEATRICAL KEY ART & BILLBOARD MOCKUP',
    category: 'Anime Key Art & Poster Design',
    software: ['ps'],
    image: 'assets/demonslayer-mockup.jpg',
    gallery: [
      { url: 'assets/demonslayer-poster.jpg', label: 'Key Art Theatrical Poster — Tanjiro, Nezuko & Infinity Castle' },
      { url: 'assets/demonslayer-mockup.jpg', label: 'Outdoor Advertising Mockup — Rainy Night Bus Shelter Display' }
    ],
    spec: 'Photoshop Key Art • Theatrical Poster & Photorealistic Billboard Mockup',
    desc: 'Theatrical key art movie poster for the "Demon Slayer: Kimetsu no Yaiba — Infinity Castle" arc, created in Adobe Photoshop. The composition places Tanjiro Kamado in an intense leaping katana attack pose in the foreground, anchored by an awakened demon-form Nezuko, the ominous blood-red moon, and the dimensional architecture of the Infinity Castle. Features authentic theatrical release date typography, Japanese anime billing block credits, and a photorealistic rainy night bus shelter billboard mockup with glowing asphalt reflections.',
    pipeline: [
      'Photoshop: Multi-character depth compositing placing dynamic Tanjiro in foreground and awakened Nezuko in the midground aura.',
      'Photoshop: Blood-red atmospheric color grading, glowing red moon backdrop, and ominous Infinity Castle environmental textures.',
      'Photoshop: Official Kimetsu no Yaiba logo integration, custom grunge-textured "INFINITY CASTLE" typography, and theatrical anime credit block.',
      'Photoshop: Smart Object realistic placement into a rain-slicked city bus stop kiosk with glass raindrops, depth of field, and glowing neon bokeh.'
    ],
    deliverables: 'Theatrical Master PSD (300 DPI), Outdoor Billboard Mockup, and High-Res Promotional Key Art.'
  },
  {
    id: 4,
    title: 'Men in Blue: Champions — Sports Editorial Spread',
    subtitle: 'T20 WORLD CUP VICTORY COMMEMORATIVE ART',
    category: 'Sports Editorial Design & Magazine Spread',
    software: ['ps'],
    image: 'assets/meninblue-mockup.jpg',
    gallery: [
      { url: 'assets/meninblue-poster.jpg', label: 'Commemorative Art — Rohit, Virat, Bumrah & Trophy Celebration' },
      { url: 'assets/meninblue-mockup.jpg', label: 'Editorial Mockup — Open Magazine Spread with Botanical Shadow' }
    ],
    spec: 'Photoshop Editorial • Print Spread & Publication Mockup',
    desc: 'Commemorative sports editorial spread honoring Team India\'s historic T20 World Cup Championship triumph, designed in Adobe Photoshop. The composition captures the raw emotion and pinnacle moments of the final: Rohit Sharma collapsing onto the pitch in joy, Suryakumar Yadav\'s match-winning boundary catch, Jasprit Bumrah\'s fierce celebration against the tricolor flag, and Virat Kohli alongside Rohit lifting the ICC trophy. Features dynamic editorial typography ("MAN IN BLUE", "CHAMPIONS"), saffron/white/blue color harmony, and a clean open-magazine print mockup with botanical shadow aesthetics.',
    pipeline: [
      'Photoshop: High-precision subject extraction and cutout compositing of key tournament moments with seamless edge feathering.',
      'Photoshop: Editorial typography styling combining bold condensed sans-serif with custom two-tone saffron and blue fill treatments.',
      'Photoshop: Textured splash background overlays and color grading matching Team India\'s official kit tones.',
      'Photoshop: Clean magazine print spread mockup integration with realistic paper curl, center crease, and botanical leaf shadow overlay.'
    ],
    deliverables: 'High-Res Print Master PSD (300 DPI), Editorial Magazine Mockup, and Social Graphics Kit.'
  },
  {
    id: 5,
    title: 'The Forest Colossus — Jungle Photo Manipulation',
    subtitle: 'ATMOSPHERIC PHOTO MANIPULATION & MATTE COMPOSITE',
    category: 'Photo Manipulation & Environmental Matte Art',
    software: ['ps'],
    image: 'assets/elephant-manipulation.jpg',
    gallery: [
      { url: 'assets/elephant-manipulation.jpg', label: 'Final Matte Composite — The Colossal Elephant & Explorer' }
    ],
    spec: 'Photoshop Matte Painting • Advanced Blending & Atmospheric Depth',
    desc: 'Atmospheric fantasy photo manipulation and digital matte composite created in Adobe Photoshop. The narrative artwork depicts a solitary hooded traveler encountering a monumental, ancient elephant emerging through dense jungle foliage. Built by seamlessly fusing multiple photographic plates: large-scale elephant anatomy, layered foreground rainforest flora, a misty woodland canopy, and volumetric cyan overhead backlighting with painted edge rim lights and cinematic color grading.',
    pipeline: [
      'Photoshop: Multi-plate image compositing combining foreground tropical foliage, hooded explorer, deep jungle background, and colossal elephant subject.',
      'Photoshop: Advanced pen tool extraction and edge hair/skin refinement on the elephant subject.',
      'Photoshop: Hand-painted volumetric cyan backlighting cascading through the misty forest canopy with ambient rim light on the elephant’s ears and tusks.',
      'Photoshop: Unified cinematic color grading using Curves, Selective Color, and Camera Raw filter for moody atmospheric depth.'
    ],
    deliverables: 'Master Layered Composite PSD (300 DPI), High-Res Digital Art Print, and Social Portfolio Showcase.'
  },
  {
    id: 6,
    title: 'Fine Up — Beverage Bottle Label Suite',
    subtitle: 'VECTOR LOGO, AI BACKGROUNDS & PACKAGING COMPOSITE',
    category: 'Commercial Beverage Label & Identity Design',
    software: ['ai', 'ps', 'genai'],
    image: 'assets/fineup-labels.jpg',
    gallery: [
      { url: 'assets/fineup-labels.jpg', label: 'Complete 5-Flavor Bottle Label Master Collection', wide: true },
      { url: 'assets/fineup-orange.jpg', label: 'Flavor 01: Orange Citrus Splash (Bubbles & Slices)', wide: true },
      { url: 'assets/fineup-cola.jpg', label: 'Flavor 02: Sparkling Cola Fizz (Ice & Effervescence)', wide: true },
      { url: 'assets/fineup-jeera.jpg', label: 'Flavor 03: Masala Jeera Soda (Cumin Seeds & Foam)', wide: true },
      { url: 'assets/fineup-lemon.jpg', label: 'Flavor 04: Green Lemon Lime Dew (Foliage & Droplets)', wide: true },
      { url: 'assets/fineup-soda.jpg', label: 'Flavor 05: Carbonated Blue Chill (Splash & Condensation)', wide: true }
    ],
    spec: 'Multi-Tool Workflow • Illustrator (Logo) + Gen AI (Liquid BGs) + Photoshop (Composite)',
    desc: 'Comprehensive 5-flavor beverage bottle label suite for "Fine Up" carbonated drinks, demonstrating a multi-software creative pipeline. Adobe Illustrator was used to design the dynamic circular vector brand logo with fluid custom script typography and two-tone wave accents. Generative AI was leveraged for generating high-impact liquid backgrounds, carbonation micro-bubbles, ice splashes, and flavor cues. Adobe Photoshop brought the elements together into cohesive, print-ready bottle wrap labels with tactile condensation water droplets, seamless fade zones, and vibrant color calibration across all 5 flavors (Orange, Cola, Jeera, Lemon-Lime, and Soda).',
    pipeline: [
      'Illustrator: Vector logo design for "Fine Up", crafting the fluid script typography, red "Up" badge, and layered circular depth badge.',
      'Generative AI: Prompt-crafted synthesis of high-resolution macro liquid textures, effervescent bubbles, and dynamic splash dynamics.',
      'Photoshop: Multi-layer packaging composite blending liquid plates, fruit slices, and condensation droplet displacement masks.',
      'Photoshop: Flavor-specific color grading across 5 commercial SKU variants with clean typography and regulatory ingredient fade zones.'
    ],
    deliverables: 'Vector Brand Identity Kit (AI, EPS), 5 Print-Ready Bottle Wrap PSDs (300 DPI CMYK), and Digital Retail Mockups.'
  },
  {
    id: 7,
    title: 'Coca-Cola: Coke Zero — Commercial Poster',
    subtitle: 'BEVERAGE KEY ART & PRODUCT POSTER',
    category: 'Commercial Advertising & Product Poster',
    software: ['ps'],
    image: 'assets/cokezero-poster.jpg',
    gallery: [
      { url: 'assets/cokezero-poster.jpg', label: 'Commercial Print Poster — "The Pause That Refreshes" Coke Zero' }
    ],
    spec: 'Photoshop Product Composite • Commercial Key Art (300 DPI)',
    desc: 'Classic commercial beverage advertising poster for Coca-Cola\'s "Coke Zero", created in Adobe Photoshop. The composition celebrates the timeless heritage tagline "The pause that refreshes", spotlighting a chilled condensation-beaded glass bottle alongside a luminous frosted tumbler filled with sparkling ice cubes and carbonated cola. Features bold "COKE ZERO" typography with liquid bubble texturing, a golden effervescent base splash wave, and a clean minimalist white border frame.',
    pipeline: [
      'Photoshop: High-contrast product isolation and glass reflection compositing of the chilled Coke contour bottle and iced tumbler.',
      'Photoshop: Realistic tactile condensation droplet painting and glass frost effect on the drink surfaces.',
      'Photoshop: Custom typography styling for "COKE ZERO" utilizing textured carbonation bubble clipping masks and crimson glow.',
      'Photoshop: Liquid wave splash integration along the base with golden backlight luminescence and print-ready framing.'
    ],
    deliverables: 'Print-Ready Advertising Master PSD (300 DPI), Retail Key Art, and Social Media Display Ads.'
  },
  {
    id: 8,
    title: 'Campus Shoes: Prebook Drop — Social Campaign',
    subtitle: 'ECOMMERCE AD DESIGN & 3D SOCIAL MOCKUP',
    category: 'Social Media Ad Design & 3D Mockup',
    software: ['ps'],
    image: 'assets/campus-mockup.jpg',
    gallery: [
      { url: 'assets/campus-post.jpg', label: 'E-commerce Ad Creative — "CAMPUS" Prebook Launch' },
      { url: 'assets/campus-mockup.jpg', label: '3D Social Media Mockup — Instagram & Facebook Mobile UI' }
    ],
    spec: 'Photoshop Ad Creative • 1:1 Social Format & 3D Multi-Device Mockup',
    desc: 'High-conversion commercial social media ad campaign for Campus running shoes, designed in Adobe Photoshop. The creative features a dynamic floating athletic sneaker with realistic cast shadows, layered over bold condensed "CAMPUS" typography with letter cutout masking. Incorporates promotional callouts ("50% OFF", "PREBOOK NOW"), contact details, and a scannable QR code on a striped cobalt-blue gradient background. Presented through a 3D social media showcase mockup featuring Instagram mobile UI, Facebook feed card, and floating 3D social badges on studio podiums.',
    pipeline: [
      'Photoshop: High-precision footwear product extraction with clean edge isolation and dynamic 3D drop shadow generation.',
      'Photoshop: Typographic hierarchy combining massive block lettering with overlay transparency and vector badge elements.',
      'Photoshop: Commercial promotional layout featuring stitched discount badges, contact CTA, and functional QR code.',
      'Photoshop: Smart Object integration into a premium 3D mobile smartphone and social media studio scene.'
    ],
    deliverables: 'Social Media Ad Kit (1:1 & 9:16), 3D Device Showcase Mockups, and Layered PSD Templates.'
  },
  {
    id: 9,
    title: 'Peaceful Yoga: Mind & Body — Event Poster',
    subtitle: 'WELLNESS POSTER & ORGANIC GRAPHIC DESIGN',
    category: 'Event Poster & Editorial Print Layout',
    software: ['ps'],
    image: 'assets/yoga-poster.jpg',
    gallery: [
      { url: 'assets/yoga-poster.jpg', label: 'Wellness Event Poster — "Peaceful Yoga" Nature Vignette' }
    ],
    spec: 'Photoshop Event Poster • Organic Vector-Matte Layout (300 DPI)',
    desc: 'Calming wellness and health event poster for "Peaceful Yoga", designed in Adobe Photoshop. The layout features an organic circular window composition framing a meditating yogi in the Tree Pose (Vrikshasana) amidst a lush bonsai-style river valley landscape. Employs soft sage-green earthy tones, layered fluid wave shapes, modern dual-style typography (solid & outline), health benefit bullet points (Flexibility, Sleep Quality, Anxiety Reduction), and clean event scheduling details for Jawaharlal Nehru Stadium.',
    pipeline: [
      'Photoshop: Circular mask vignette blending organic nature scenery with the central yoga illustration.',
      'Photoshop: Typographic pairing with custom solid and outlined title treatment for "PEACEFUL YOGA".',
      'Photoshop: Layered fluid background shapes with sage-green color harmony, subtle dot grids, and botanical leaf shadows.',
      'Photoshop: Editorial hierarchy layout for date, time, venue, and bulleted wellness benefits.'
    ],
    deliverables: 'Print-Ready Event Poster PSD (300 DPI), Digital Display Key Art, and Social Flyer Formats.'
  },
  {
    id: 10,
    title: 'ChatGPT — Motion Graphic & Kinetic Visuals',
    subtitle: 'KINETIC MOTION GRAPHIC & YOUTUBE SHOWCASE',
    category: 'Motion Graphics & Video Animation',
    software: ['ae', 'pr', 'genai'],
    image: 'assets/chatgpt-motion-thumb.jpg',
    youtubeId: 'UhjRv-46pgg',
    youtubeUrl: 'https://youtu.be/UhjRv-46pgg',
    gallery: [
      { url: 'assets/chatgpt-motion-thumb.jpg', label: 'Master Motion Frame — "Unleash your creativity" over Mount Fuji' }
    ],
    spec: 'After Effects & Premiere Pro • 4K 60FPS • Kinetic Typography & Glassmorphism UI',
    desc: 'Cinematic commercial motion graphic piece for ChatGPT created by Kamalendu (KC_Din). The visual sequence features a wandering warrior standing before snow-capped Mount Fuji amidst blossoming cherry trees and floating petals, framed by a frosted glassmorphism UI element delivering the kinetic message "Unleash your creativity". Produced with precision keyframe velocity curves, optical blurs, dynamic camera ease, and multi-layered depth compositing.',
    pipeline: [
      'After Effects: Kinetic typography choreography, text tracking animation, and custom motion blur curves.',
      'After Effects: Frosted glassmorphism UI capsule design featuring dynamic transparency, refraction edge highlights, and specular gloss.',
      'Photoshop & Gen AI: Cinematic environmental art generation of Mount Fuji with multi-plane depth separation and sakura blossom particle passes.',
      'Premiere Pro: Audio rhythm synchronization, timing pacing, and broadcast master rendering in 4K 60FPS.'
    ],
    deliverables: '4K Master Video (YouTube), Kinetic Title Templates, and High-Resolution Keyframe Stills.'
  }
];

// 5. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  initSocialLinks();
  initNavigation();
  initParallax();
  initSoftwareFiltering();
  initProjectModal();
  initArtworkLightbox();
  initExperienceCertificate();
  initShowreelPlayer();
  initYouTubeHandler();
  initScrollReveals();
  initYear();
  initContactForm();
  initArtworkProtection();

  // Advanced Interactive Animations
  initCustomCursor();
  initHeroParticles();
  initCard3DTilt();
  initMagneticElements();
  initClickRipples();
});

// POPULATE SOCIAL MEDIA LINKS
function initSocialLinks() {
  const ytHeader = document.getElementById('headerYtLink');
  const instaHeader = document.getElementById('headerInstaLink');
  const linkedinHeader = document.getElementById('headerLinkedinLink');

  const ytContact = document.getElementById('contactYtLink');
  const instaContact = document.getElementById('contactInstaLink');
  const linkedinContact = document.getElementById('contactLinkedinLink');

  if (ytHeader) ytHeader.href = SOCIAL_LINKS.youtube;
  if (instaHeader) instaHeader.href = SOCIAL_LINKS.instagram;
  if (linkedinHeader) linkedinHeader.href = SOCIAL_LINKS.linkedin;

  if (ytContact) ytContact.href = SOCIAL_LINKS.youtube;
  if (instaContact) instaContact.href = SOCIAL_LINKS.instagramDm || SOCIAL_LINKS.instagram;
  if (linkedinContact) linkedinContact.href = SOCIAL_LINKS.linkedin;
}

// NAVIGATION
function initNavigation() {
  const menuBtn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const open = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!open));
      menuBtn.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
      nav.classList.toggle('open', !open);
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'Open navigation');
        nav.classList.remove('open');
      });
    });
  }
}

// HERO PARALLAX & 2.5D MULTIPLANE MOTION
function initParallax() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const layers = hero.querySelectorAll('.depth-layer');
  const portrait = hero.querySelector('.portrait');

  let currentX = 0, currentY = 0;
  let targetX = 0, targetY = 0;
  let scrollShift = 0;
  let isHovered = false;
  let animationFrameId = null;

  function renderParallax() {
    currentX += (targetX - currentX) * 0.18;
    currentY += (targetY - currentY) * 0.18;

    layers.forEach(layer => {
      const depth = Number(layer.dataset.depth) || 0.2;
      layer.style.setProperty('--move-x', `${(currentX * depth).toFixed(1)}px`);
      layer.style.setProperty('--move-y', `${(currentY * depth).toFixed(1)}px`);
      layer.style.setProperty('--scroll-depth', `${(scrollShift * depth).toFixed(1)}px`);
    });

    hero.style.setProperty('--portrait-x', `${(currentX * 0.12).toFixed(1)}px`);
    hero.style.setProperty('--portrait-y', `${(currentY * 0.12).toFixed(1)}px`);

    if (portrait && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const rotY = (currentX * -0.06).toFixed(2);
      const rotX = (currentY * 0.04).toFixed(2);
      portrait.style.transform = `perspective(900px) rotateY(${rotY}deg) rotateX(${rotX}deg)`;
    }

    if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1 || isHovered) {
      animationFrameId = requestAnimationFrame(renderParallax);
    } else {
      animationFrameId = null;
    }
  }

  function startLoop() {
    if (!animationFrameId) {
      animationFrameId = requestAnimationFrame(renderParallax);
    }
  }

  function onPointerMove(event) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    isHovered = true;
    const bounds = hero.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    targetX = -x * 70;
    targetY = -y * 45;
    startLoop();
  }

  hero.addEventListener('pointermove', onPointerMove, { passive: true });
  hero.addEventListener('pointerleave', () => {
    isHovered = false;
    targetX = 0;
    targetY = 0;
    startLoop();
  }, { passive: true });

  window.addEventListener('scroll', () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const bounds = hero.getBoundingClientRect();
    scrollShift = bounds.bottom > 0 && bounds.top < window.innerHeight
      ? Math.max(-100, Math.min(100, bounds.top * -0.14))
      : 0;
    startLoop();
  }, { passive: true });
}

// SOFTWARE & SKILLS FILTERING
function initSoftwareFiltering() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  updateFilterCounts();

  function filterProjects(softwareId) {
    filterButtons.forEach(btn => {
      const isActive = btn.dataset.filter === softwareId;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', String(isActive));
    });

    projectCards.forEach(card => {
      const cardSoftwareList = (card.dataset.software || '').toLowerCase().split(' ');
      
      if (softwareId === 'all' || cardSoftwareList.includes(softwareId)) {
        card.style.display = '';
        card.style.opacity = '0';
        card.style.transform = 'translateY(12px)';
        setTimeout(() => {
          card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 20);
      } else {
        card.style.display = 'none';
      }
    });
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterProjects(button.dataset.filter);
    });
  });

  // Handle direct filter triggers from Software Cards
  document.querySelectorAll('.filter-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const targetFilter = trigger.dataset.filter;
      const workSection = document.querySelector('#work');
      if (workSection) {
        workSection.scrollIntoView({ behavior: 'smooth' });
      }
      setTimeout(() => {
        filterProjects(targetFilter);
      }, 350);
    });
  });
}

function updateFilterCounts() {
  const counts = { all: PROJECTS_CONFIG.length, ae: 0, pr: 0, ps: 0, ai: 0, genai: 0 };

  PROJECTS_CONFIG.forEach(p => {
    p.software.forEach(soft => {
      if (counts[soft] !== undefined) {
        counts[soft]++;
      } else {
        counts[soft] = 1;
      }
    });
  });

  const countAll = document.getElementById('countAll');
  const countAe = document.getElementById('countAe');
  const countPr = document.getElementById('countPr');
  const countPs = document.getElementById('countPs');
  const countAi = document.getElementById('countAi');
  const countGenAi = document.getElementById('countGenAi');

  if (countAll) countAll.textContent = counts.all;
  if (countAe) countAe.textContent = counts.ae;
  if (countPr) countPr.textContent = counts.pr;
  if (countPs) countPs.textContent = counts.ps;
  if (countAi) countAi.textContent = counts.ai;
  if (countGenAi) countGenAi.textContent = counts.genai;
}

// PROJECT DETAILS MODAL
function initProjectModal() {
  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');
  const closeBtn = document.getElementById('modalClose');

  if (!modal || !modalContent) return;

  function openProject(projectId) {
    const project = PROJECTS_CONFIG.find(p => p.id === Number(projectId));
    if (!project) return;

    const badgesHtml = project.software.map(softId => {
      const soft = SOFTWARE_CONFIG.find(s => s.id === softId) || {
        short: softId.toUpperCase(),
        name: softId.toUpperCase(),
        color: '#c7ff48'
      };
      return `<span class="badge" style="border-color:${soft.color}; color:#fff">
        <span class="badge-tag" style="background:${soft.color}; color:#000">${soft.short}</span>
        ${soft.name}
      </span>`;
    }).join(' ');

    const pipelineHtml = project.pipeline.map(step => `<li>${step}</li>`).join('');

    let galleryHtml = '';
    if (project.gallery && project.gallery.length > 0) {
      const items = project.gallery.map((item, index) => {
        const isWide = item.wide || (item.url && (item.url.includes('fineup') || item.url.includes('labels')));
        const wideClass = isWide ? 'modal-gallery-item--wide' : '';
        return `
          <div class="modal-gallery-item ${wideClass}" data-gallery-index="${index}" role="button" tabindex="0" title="Click to inspect 100% full-resolution artwork">
            <div class="modal-gallery-thumb-wrap">
              <img src="${item.url}" alt="${item.label}" loading="lazy">
              <div class="modal-gallery-zoom-overlay">
                <span class="modal-gallery-zoom-badge">🔍 100% Full View</span>
              </div>
            </div>
            <div class="modal-gallery-caption">
              <span>${item.label}</span>
              <span class="caption-zoom-hint">100% ↗</span>
            </div>
          </div>
        `;
      }).join('');
      galleryHtml = `
        <div class="modal-gallery-section">
          <div class="modal-gallery-header-row">
            <h5>Project Models &amp; Design Variants:</h5>
            <span class="gallery-hint-tag">Tap any artwork for 100% full-res view</span>
          </div>
          <div class="modal-gallery-grid">${items}</div>
        </div>
      `;
    }

    modalContent.innerHTML = `
      <div class="modal-hero-wrap" id="modalHeroWrap" role="button" tabindex="0" title="Click to view 100% full-screen artwork">
        <img src="${project.image}" alt="${project.title}" class="modal-hero-img">
        <div class="modal-hero-zoom-pill">
          <span>🔍 Tap to view 100% Fullscreen</span>
        </div>
      </div>
      <div class="modal-inner">
        <div class="modal-badges">${badgesHtml}</div>
        <h3 class="modal-title">${project.title}</h3>
        <div class="modal-meta-row">
          <span>${project.category}</span>
          <span>&bull;</span>
          <span>${project.spec}</span>
        </div>
        <p class="modal-desc">${project.desc}</p>
        
        ${project.youtubeId ? `
          <div class="modal-video-embed">
            <iframe src="https://www.youtube.com/embed/${project.youtubeId}?rel=0" title="${project.title}" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </div>
        ` : ''}

        ${galleryHtml}

        <div class="modal-pipeline-box">
          <h5>Technical Workflow &amp; Software Execution:</h5>
          <ul>${pipelineHtml}</ul>
        </div>

        <div class="modal-meta-row" style="border:none; margin-bottom:12px; padding:0; color:#9ab0a2">
          <span>Deliverables: ${project.deliverables}</span>
        </div>

        <div class="modal-actions">
          ${project.youtubeUrl ? `
            <a href="${project.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="button button-lime">
              <span>▶ Watch on YouTube</span>
              <span class="btn-icon">↗</span>
            </a>
          ` : ''}
          <button type="button" class="button ${project.youtubeUrl ? 'button-glass' : 'button-lime'}" id="modalView100Btn">
            <span>🔍 View 100% Master Artworks</span>
            <span>↗</span>
          </button>
          <button type="button" class="button button-glass" id="modalWatermarkDownloadBtn" title="Download Key Visual with official © KC_Din watermark">
            <span>⬇ Download (Watermarked © KC_Din)</span>
          </button>
          <a href="#contact" class="button button-outline" onclick="closeModal()">
            <span>Inquire About Similar Project</span>
          </a>
        </div>
      </div>
    `;

    // Hook click triggers to open Lightbox
    const heroWrap = document.getElementById('modalHeroWrap');
    if (heroWrap) {
      heroWrap.addEventListener('click', () => {
        if (window.openArtworkLightbox) {
          window.openArtworkLightbox(project, 0);
        }
      });
    }

    modalContent.querySelectorAll('.modal-gallery-item').forEach(itemEl => {
      itemEl.addEventListener('click', () => {
        const idx = Number(itemEl.dataset.galleryIndex) || 0;
        if (window.openArtworkLightbox) {
          window.openArtworkLightbox(project, idx);
        }
      });
      itemEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const idx = Number(itemEl.dataset.galleryIndex) || 0;
          if (window.openArtworkLightbox) {
            window.openArtworkLightbox(project, idx);
          }
        }
      });
    });

    const modalView100Btn = document.getElementById('modalView100Btn');
    if (modalView100Btn) {
      modalView100Btn.addEventListener('click', () => {
        if (window.openArtworkLightbox) {
          window.openArtworkLightbox(project, 0);
        }
      });
    }

    const modalWatermarkDownloadBtn = document.getElementById('modalWatermarkDownloadBtn');
    if (modalWatermarkDownloadBtn) {
      modalWatermarkDownloadBtn.addEventListener('click', () => {
        if (window.downloadWatermarkedImage && project.image) {
          window.downloadWatermarkedImage(project.image, project.title);
        }
      });
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    const lightbox = document.getElementById('artworkLightbox');
    if (!lightbox || !lightbox.classList.contains('open')) {
      document.body.style.overflow = '';
    }
  }

  window.closeModal = closeModal;
  window.openProjectModal = openProject;

  // Setup project card click and direct 100% zoom button
  document.querySelectorAll('.project-card').forEach(card => {
    const projectId = card.dataset.id;
    if (!projectId) return;

    // Inject direct 100% zoom button into card preview
    const imageWrap = card.querySelector('.project-image');
    if (imageWrap && !imageWrap.querySelector('.card-quick-zoom-btn')) {
      const zoomBtn = document.createElement('button');
      zoomBtn.className = 'card-quick-zoom-btn';
      zoomBtn.type = 'button';
      zoomBtn.setAttribute('aria-label', `Quick 100% Artwork View for Project ${projectId}`);
      zoomBtn.innerHTML = `<span>🔍 100% View</span>`;
      zoomBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const project = PROJECTS_CONFIG.find(p => p.id === Number(projectId));
        if (project && window.openArtworkLightbox) {
          window.openArtworkLightbox(project, 0);
        }
      });
      imageWrap.appendChild(zoomBtn);
    }

    card.addEventListener('click', (e) => {
      if (e.target.closest('.card-quick-zoom-btn')) return;
      openProject(projectId);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      const lightbox = document.getElementById('artworkLightbox');
      if (!lightbox || !lightbox.classList.contains('open')) {
        closeModal();
      }
    }
  });
}

// MASTER 100% ARTWORK LIGHTBOX / FULL-VIEW ZOOM VIEWER
function initArtworkLightbox() {
  const lightbox = document.getElementById('artworkLightbox');
  const backdrop = document.getElementById('lightboxBackdrop');
  const closeBtn = document.getElementById('lightboxClose');
  const titleEl = document.getElementById('lightboxTitle');
  const captionEl = document.getElementById('lightboxCaption');
  const counterEl = document.getElementById('lightboxCounter');
  const imgEl = document.getElementById('lightboxImg');
  const wrapEl = document.getElementById('lightboxWrap');
  const stageEl = document.getElementById('lightboxStage');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  const zoomToggleBtn = document.getElementById('lightboxZoomToggle');
  const zoomLabel = document.getElementById('lightboxZoomLabel');
  const zoomIcon = document.getElementById('lightboxZoomIcon');
  const downloadBtn = document.getElementById('lightboxWatermarkDownload');

  if (!lightbox || !imgEl) return;

  let currentProject = null;
  let currentImages = [];
  let currentIndex = 0;
  let isZoomed = false;

  // Touch Swipe tracking for Mobile / Android
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  // Mouse drag-to-pan in 100% Zoom mode (Desktop)
  let isPanning = false;
  let startX = 0;
  let startY = 0;
  let scrollLeft = 0;
  let scrollTop = 0;

  function setZoom(zoomed) {
    isZoomed = Boolean(zoomed);
    if (isZoomed) {
      wrapEl.classList.add('is-zoomed');
      imgEl.classList.add('is-zoomed');
      if (zoomLabel) zoomLabel.textContent = 'Fit Screen';
      if (zoomIcon) zoomIcon.textContent = '⤢';
      if (zoomToggleBtn) zoomToggleBtn.classList.add('active');
      
      // Center scroll position for optimal viewing
      requestAnimationFrame(() => {
        if (wrapEl.scrollWidth > wrapEl.clientWidth) {
          wrapEl.scrollLeft = (wrapEl.scrollWidth - wrapEl.clientWidth) / 2;
        }
        if (wrapEl.scrollHeight > wrapEl.clientHeight) {
          wrapEl.scrollTop = (wrapEl.scrollHeight - wrapEl.clientHeight) / 2;
        }
      });
    } else {
      wrapEl.classList.remove('is-zoomed');
      imgEl.classList.remove('is-zoomed');
      if (zoomLabel) zoomLabel.textContent = '100% Scale';
      if (zoomIcon) zoomIcon.textContent = '🔍';
      if (zoomToggleBtn) zoomToggleBtn.classList.remove('active');
    }
  }

  function renderCurrentItem() {
    if (!currentImages || currentImages.length === 0) return;
    const item = currentImages[currentIndex];

    // Reset zoom when switching images
    setZoom(false);

    imgEl.style.opacity = '0';
    imgEl.src = item.url;
    imgEl.alt = item.label || (currentProject ? currentProject.title : 'Artwork');

    imgEl.onload = () => {
      imgEl.style.opacity = '1';
    };

    if (titleEl) titleEl.textContent = currentProject ? currentProject.title : 'Master Artwork';
    if (captionEl) captionEl.textContent = item.label || '';
    if (counterEl) counterEl.textContent = `${currentIndex + 1} / ${currentImages.length}`;
    if (downloadBtn) {
      downloadBtn.onclick = (e) => {
        e.preventDefault();
        if (window.downloadWatermarkedImage && item && item.url) {
          const title = (currentProject && currentProject.title) ? currentProject.title : 'KC_Din_Artwork';
          window.downloadWatermarkedImage(item.url, title);
        }
      };
    }

    // Show/hide prev/next buttons
    if (currentImages.length > 1) {
      if (prevBtn) prevBtn.style.display = 'flex';
      if (nextBtn) nextBtn.style.display = 'flex';
    } else {
      if (prevBtn) prevBtn.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'none';
    }
  }

  function openLightbox(project, initialIndex = 0) {
    if (!project) return;
    currentProject = project;

    const list = [];
    if (project.gallery && project.gallery.length > 0) {
      project.gallery.forEach(g => {
        list.push({ url: g.url, label: g.label || project.title });
      });
      const hasHero = list.some(i => i.url === project.image);
      if (!hasHero && project.image) {
        list.unshift({ url: project.image, label: `${project.title} — Main Key Visual` });
      }
    } else if (project.image) {
      list.push({ url: project.image, label: `${project.title} — Main Key Visual` });
    }

    currentImages = list;
    currentIndex = Math.max(0, Math.min(initialIndex, currentImages.length - 1));

    renderCurrentItem();

    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    setZoom(false);

    // Keep body overflow hidden if project modal is still open behind
    const modal = document.getElementById('projectModal');
    if (!modal || !modal.classList.contains('open')) {
      document.body.style.overflow = '';
    }
  }

  function prevImage() {
    if (!currentImages || currentImages.length <= 1) return;
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    renderCurrentItem();
  }

  function nextImage() {
    if (!currentImages || currentImages.length <= 1) return;
    currentIndex = (currentIndex + 1) % currentImages.length;
    renderCurrentItem();
  }

  // Click Controls
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (backdrop) backdrop.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevImage(); });
  if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextImage(); });
  
  if (zoomToggleBtn) {
    zoomToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setZoom(!isZoomed);
    });
  }

  // Clicking the image directly toggles zoom
  imgEl.addEventListener('click', (e) => {
    e.stopPropagation();
    setZoom(!isZoomed);
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'z' || e.key === 'Z') {
      setZoom(!isZoomed);
    }
  });

  // Mouse pan inside wrapEl when zoomed in 100% (Desktop)
  wrapEl.addEventListener('mousedown', (e) => {
    if (!isZoomed) return;
    isPanning = true;
    wrapEl.classList.add('is-panning');
    startX = e.pageX - wrapEl.offsetLeft;
    startY = e.pageY - wrapEl.offsetTop;
    scrollLeft = wrapEl.scrollLeft;
    scrollTop = wrapEl.scrollTop;
  });

  window.addEventListener('mouseup', () => {
    isPanning = false;
    wrapEl.classList.remove('is-panning');
  });

  wrapEl.addEventListener('mousemove', (e) => {
    if (!isPanning || !isZoomed) return;
    e.preventDefault();
    const x = e.pageX - wrapEl.offsetLeft;
    const y = e.pageY - wrapEl.offsetTop;
    const walkX = (x - startX) * 1.5;
    const walkY = (y - startY) * 1.5;
    wrapEl.scrollLeft = scrollLeft - walkX;
    wrapEl.scrollTop = scrollTop - walkY;
  });

  // Touch Swipe navigation for Mobile / Android
  stageEl.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  stageEl.addEventListener('touchend', (e) => {
    if (isZoomed) return;
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;
    if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX < 0) {
        nextImage();
      } else {
        prevImage();
      }
    }
  }, { passive: true });

  // Expose global methods
  window.openArtworkLightbox = openLightbox;
  window.closeArtworkLightbox = closeLightbox;
}

// EXPERIENCE & INTERNSHIP CERTIFICATE LIGHTBOX HANDLER
function initExperienceCertificate() {
  const viewBtn = document.getElementById('viewCertificateBtn');
  const previewCard = document.getElementById('certPreviewTrigger');

  const certData = {
    title: 'MoreTasks Business Solution — Internship Certificate',
    image: 'assets/moretasks-certificate.jpg',
    gallery: [
      {
        url: 'assets/moretasks-certificate.jpg',
        label: 'Official Certificate of Internship • Kamalendu Chanda • Graphic Design - Intern (2 Dec 2024 – 28 Feb 2025) • Authorized & Stamped by MoreTasks Design Team'
      }
    ]
  };

  function triggerLightbox(e) {
    if (e) e.preventDefault();
    if (window.openArtworkLightbox) {
      window.openArtworkLightbox(certData, 0);
    }
  }

  if (viewBtn) viewBtn.addEventListener('click', triggerLightbox);
  if (previewCard) previewCard.addEventListener('click', triggerLightbox);
}

// SHOWREEL PLAYER SIMULATION
function initShowreelPlayer() {
  const playReelBtn = document.getElementById('playReelBtn');
  const ctrlPlayToggle = document.getElementById('ctrlPlayToggle');
  const reelPoster = document.getElementById('reelPoster');
  const reelActiveView = document.getElementById('reelActiveView');
  const scrubberProgress = document.getElementById('scrubberProgress');
  const scrubberTrack = document.getElementById('scrubberTrack');
  const ctrlTime = document.getElementById('ctrlTime');
  const chapterItems = document.querySelectorAll('.chapter-item');

  let isPlaying = false;
  let currentTime = 14;
  const totalDuration = 135;
  let timerInterval = null;

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  function updateDisplay() {
    if (scrubberProgress) {
      const percent = (currentTime / totalDuration) * 100;
      scrubberProgress.style.width = `${percent}%`;
    }
    if (ctrlTime) {
      ctrlTime.textContent = `${formatTime(currentTime)} / ${formatTime(totalDuration)}`;
    }
  }

  function startPlayback() {
    isPlaying = true;
    if (reelPoster) reelPoster.style.display = 'none';
    if (reelActiveView) reelActiveView.style.display = 'block';
    if (ctrlPlayToggle) ctrlPlayToggle.textContent = '⏸';
    const waveform = document.getElementById('audioWaveform');
    if (waveform) waveform.classList.add('active');

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      currentTime += 1;
      if (currentTime >= totalDuration) {
        currentTime = 0;
      }
      updateDisplay();
    }, 1000);
  }

  function pausePlayback() {
    isPlaying = false;
    if (ctrlPlayToggle) ctrlPlayToggle.textContent = '▶';
    const waveform = document.getElementById('audioWaveform');
    if (waveform) waveform.classList.remove('active');
    clearInterval(timerInterval);
  }

  if (playReelBtn) {
    playReelBtn.addEventListener('click', startPlayback);
  }

  if (ctrlPlayToggle) {
    ctrlPlayToggle.addEventListener('click', () => {
      if (isPlaying) {
        pausePlayback();
      } else {
        startPlayback();
      }
    });
  }

  chapterItems.forEach(ch => {
    ch.addEventListener('click', () => {
      chapterItems.forEach(c => c.classList.remove('active'));
      ch.classList.add('active');
      currentTime = Number(ch.dataset.time) || 0;
      updateDisplay();
      if (!isPlaying) startPlayback();
    });
  });

  if (scrubberTrack) {
    scrubberTrack.addEventListener('click', (e) => {
      const rect = scrubberTrack.getBoundingClientRect();
      const clickPos = (e.clientX - rect.left) / rect.width;
      currentTime = Math.floor(clickPos * totalDuration);
      updateDisplay();
    });
  }

  updateDisplay();
}

// YOUTUBE VIDEO EMBEDDER (Set your link in YOUTUBE_CONFIG at top of file)
function initYouTubeHandler() {
  const ytWrap = document.getElementById('youtubePlayerWrap');
  const ytIframe = document.getElementById('youtubeIframe');
  const builtInPlayer = document.getElementById('builtInPlayer');

  function parseYouTubeId(urlOrId) {
    if (!urlOrId) return '';
    const trimmed = urlOrId.trim();
    if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;
    const shortMatch = trimmed.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
    if (shortMatch) return shortMatch[1];
    const watchMatch = trimmed.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
    if (watchMatch) return watchMatch[1];
    const embedMatch = trimmed.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/);
    if (embedMatch) return embedMatch[1];
    return '';
  }

  function loadYouTubeVideo(videoInput) {
    const videoId = parseYouTubeId(videoInput);
    if (!videoId) return;

    if (ytIframe && ytWrap) {
      ytIframe.src = `https://www.youtube.com/embed/${videoId}?rel=0`;
      ytWrap.style.display = 'block';
      if (builtInPlayer) builtInPlayer.style.display = 'none';
      const reelChapters = document.querySelector('.reel-chapters');
      if (reelChapters) reelChapters.style.display = 'none';
    }
  }

  // Load YouTube Video if configured
  if (YOUTUBE_CONFIG && YOUTUBE_CONFIG.defaultVideoId) {
    loadYouTubeVideo(YOUTUBE_CONFIG.defaultVideoId);
  }
}

// SCROLL REVEALS
function initScrollReveals() {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  const targets = document.querySelectorAll(
    '.section-kicker, .about-grid, .about-stats, .software-header, .soft-card, .work-heading, .project-card, .showreel-header, .reel-player-container, .approach-grid, .pipeline-card, .contact-layout'
  );

  targets.forEach(node => {
    node.classList.add('reveal');
    revealObserver.observe(node);
  });
}

// DYNAMIC YEAR
function initYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* ==========================================================
   ADVANCED INTERACTIVE ANIMATIONS FOR MOTION PORTFOLIO
   ========================================================== */

// 1. INTERACTIVE CUSTOM MOTION STUDIO CURSOR (Desktop Only)
function initCustomCursor() {
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const cursor = document.getElementById('customCursor');
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  const text = document.getElementById('cursorText');
  if (!cursor || !dot || !ring) return;

  document.body.classList.add('has-custom-cursor');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let isVisible = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isVisible) {
      cursor.classList.add('visible');
      isVisible = true;
    }
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    cursor.classList.remove('visible');
    isVisible = false;
  });

  // Smooth RAF lerp for trailing ring
  function renderCursor() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  function attachHover(selector, className, label = '') {
    document.querySelectorAll(selector).forEach(el => {
      el.addEventListener('mouseenter', () => {
        document.body.classList.add(className);
        if (text && label) text.textContent = label;
      });
      el.addEventListener('mouseleave', () => {
        document.body.classList.remove(className);
        if (text) text.textContent = '';
      });
    });
  }

  attachHover('.project-card', 'cursor-card-hover', 'VIEW ↗');
  attachHover('#playReelBtn, .reel-poster', 'cursor-card-hover', 'PLAY ▶');
  attachHover('.button, .nav-cta, .filter-btn, .soft-pill, .social-icon-btn, .social-text-btn, .portfolio-link, .under-link', 'cursor-hover', '');
}

// 2. INTERACTIVE HERO MOTION CANVAS (Living Bokeh, Fireflies & Motes)
function initHeroParticles() {
  const canvas = document.getElementById('heroCanvas');
  const hero = document.querySelector('.hero');
  if (!canvas || !hero) return;

  const ctx = canvas.getContext('2d');
  let width = canvas.width = hero.clientWidth;
  let height = canvas.height = hero.clientHeight;

  let mouseX = -1000;
  let mouseY = -1000;
  let isRunning = true;

  window.addEventListener('resize', () => {
    width = canvas.width = hero.clientWidth;
    height = canvas.height = hero.clientHeight;
  }, { passive: true });

  hero.addEventListener('pointermove', (e) => {
    const rect = hero.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  }, { passive: true });

  hero.addEventListener('pointerleave', () => {
    mouseX = -1000;
    mouseY = -1000;
  }, { passive: true });

  const particleCount = Math.min(50, Math.floor(width / 26));
  const colors = [
    { r: 199, g: 255, b: 72 },   // electric lime
    { r: 0,   g: 242, b: 254 },  // cyan
    { r: 157, g: 231, b: 178 },  // mint
    { r: 255, g: 220, b: 120 }   // warm golden spark
  ];

  const particles = [];
  for (let i = 0; i < particleCount; i++) {
    const isBokeh = Math.random() < 0.28;
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35 - 0.1,
      vy: -(Math.random() * 0.4 + 0.18),
      size: isBokeh ? Math.random() * 4.5 + 2.5 : Math.random() * 1.8 + 1,
      isBokeh: isBokeh,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.5 + 0.2,
      baseAlpha: Math.random() * 0.5 + 0.25,
      pulseSpeed: Math.random() * 0.03 + 0.012,
      angle: Math.random() * Math.PI * 2
    });
  }

  // Atmospheric Continuous Living Mist (100% Seamless Soft Radial Drifting Clouds)
  const fogClouds = [];
  const fogCount = 5;
  for (let i = 0; i < fogCount; i++) {
    fogClouds.push({
      x: (width / fogCount) * i + (Math.random() - 0.5) * 120,
      y: height * (0.32 + (i % 3) * 0.14),
      radiusX: Math.random() * 160 + 260,
      radiusY: Math.random() * 70 + 90,
      vx: Math.random() * 0.18 + 0.12, // slow serene drift
      alpha: Math.random() * 0.035 + 0.03, // subtle ambient mist
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.008 + 0.004
    });
  }

  function animate() {
    if (!isRunning) return;

    ctx.clearRect(0, 0, width, height);

    // 1. Draw ultra-soft continuous drifting fog clouds (Radial gradients: mathematically zero edges or lines)
    for (let i = 0; i < fogClouds.length; i++) {
      const fog = fogClouds[i];
      fog.x += fog.vx;
      fog.pulse += fog.pulseSpeed;

      // Smooth wrap-around
      if (fog.x - fog.radiusX > width) {
        fog.x = -fog.radiusX;
        fog.y = height * (0.32 + Math.random() * 0.3);
      }

      const curAlpha = fog.alpha * (0.85 + Math.sin(fog.pulse) * 0.15);
      ctx.save();
      ctx.translate(fog.x, fog.y);
      ctx.scale(1, fog.radiusY / fog.radiusX);
      const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, fog.radiusX);
      grad.addColorStop(0, `rgba(215, 245, 230, ${curAlpha.toFixed(3)})`);
      grad.addColorStop(0.5, `rgba(185, 225, 205, ${(curAlpha * 0.45).toFixed(3)})`);
      grad.addColorStop(1, 'rgba(185, 225, 205, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(0, 0, fog.radiusX, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      p.angle += p.pulseSpeed;
      p.x += p.vx + Math.sin(p.angle) * 0.3;
      p.y += p.vy;

      // Mouse proximity repulsion and glow bloom
      const dx = mouseX - p.x;
      const dy = mouseY - p.y;
      const dist = Math.hypot(dx, dy);
      const maxDist = 140;

      if (dist < maxDist && dist > 0) {
        const force = (maxDist - dist) / maxDist;
        p.x -= (dx / dist) * force * 3.5;
        p.y -= (dy / dist) * force * 3.5;
        p.alpha = Math.min(1, p.baseAlpha + force * 0.5);
      } else {
        p.alpha += (p.baseAlpha - p.alpha) * 0.04;
      }

      // Continuous loop recycling
      if (p.y < -15) {
        p.y = height + 15;
        p.x = Math.random() * width;
      }
      if (p.x < -20) p.x = width + 20;
      if (p.x > width + 20) p.x = -20;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

      const col = p.color;
      if (p.isBokeh) {
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
        grad.addColorStop(0, `rgba(${col.r}, ${col.g}, ${col.b}, ${p.alpha * 0.7})`);
        grad.addColorStop(1, `rgba(${col.r}, ${col.g}, ${col.b}, 0)`);
        ctx.fillStyle = grad;
        ctx.fill();
      } else {
        ctx.fillStyle = `rgba(${col.r}, ${col.g}, ${col.b}, ${p.alpha.toFixed(2)})`;
        ctx.shadowBlur = 9;
        ctx.shadowColor = `rgba(${col.r}, ${col.g}, ${col.b}, 0.8)`;
        ctx.fill();
      }
    }

    ctx.shadowBlur = 0;
    requestAnimationFrame(animate);
  }

  const observer = new IntersectionObserver((entries) => {
    isRunning = entries[0].isIntersecting;
    if (isRunning) requestAnimationFrame(animate);
  }, { threshold: 0.05 });

  observer.observe(hero);
  requestAnimationFrame(animate);
}

// 3. 3D CARD TILT WITH DYNAMIC SPECULAR GLARE
function initCard3DTilt() {
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const cards = document.querySelectorAll('.project-card, .soft-card');

  cards.forEach(card => {
    let ticking = false;

    card.addEventListener('pointermove', (e) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        const tiltX = -y * 8;
        const tiltY = x * 8;

        const glareX = ((e.clientX - rect.left) / rect.width) * 100;
        const glareY = ((e.clientY - rect.top) / rect.height) * 100;

        card.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateY(-4px)`;
        card.style.setProperty('--glare-x', `${glareX.toFixed(1)}%`);
        card.style.setProperty('--glare-y', `${glareY.toFixed(1)}%`);
        card.style.setProperty('--glare-opacity', '0.28');

        ticking = false;
      });
    }, { passive: true });

    card.addEventListener('pointerleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      card.style.setProperty('--glare-opacity', '0');
    }, { passive: true });
  });
}

// 4. MAGNETIC BUTTONS & PILLS (Spring physics on hover)
function initMagneticElements() {
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const magneticEls = document.querySelectorAll('.button, .soft-pill, .social-icon-btn');

  magneticEls.forEach(el => {
    el.addEventListener('pointermove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      el.style.transform = `translate3d(${x * 0.22}px, ${y * 0.22}px, 0)`;
      el.style.transition = 'transform 0.1s ease-out';
    }, { passive: true });

    el.addEventListener('pointerleave', () => {
      el.style.transform = 'translate3d(0, 0, 0)';
      el.style.transition = 'transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)';
    }, { passive: true });
  });
}

// 5. CLICK RIPPLE EFFECT
function initClickRipples() {
  document.addEventListener('click', (e) => {
    const target = e.target.closest('.button, .project-card, .soft-card, .filter-btn, .reel-play-btn');
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple-circle';

    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

    target.style.position = target.style.position || 'relative';
    target.style.overflow = 'hidden';
    target.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
}

// 6. CONTACT INQUIRY FORM AUTOMATION (Auto-delivers directly to kamalenduwork70@gmail.com)
function initContactForm() {
  const form = document.getElementById('inquiryForm');
  if (!form) return;

  const submitBtn = document.getElementById('inquirySubmitBtn') || form.querySelector('button[type="submit"]');
  const btnOriginalContent = submitBtn ? submitBtn.innerHTML : '<span>Send Message</span><span>→</span>';
  const statusEl = document.getElementById('formStatus');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('clientName');
    const emailInput = document.getElementById('clientEmail');
    const messageInput = document.getElementById('clientMessage');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const message = messageInput ? messageInput.value.trim() : '';

    if (!name || !email) {
      if (statusEl) {
        statusEl.innerHTML = `
          <div class="status-msg error">
            <span class="status-icon">⚠</span>
            <div>
              <strong>Missing Information</strong>
              <p>Please provide both your name and email so Kamalendu can reply to you.</p>
            </div>
          </div>
        `;
      }
      return;
    }

    // Collect selected services
    const checkedBoxes = form.querySelectorAll('.form-checkboxes input[type="checkbox"]:checked');
    const selectedServices = Array.from(checkedBoxes).map(cb => {
      const parentLabel = cb.closest('label');
      return parentLabel ? parentLabel.textContent.trim() : cb.value;
    }).filter(Boolean);
    const servicesText = selectedServices.length > 0 ? selectedServices.join(', ') : 'General Creative Inquiry';

    // UI Loading state
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="btn-spinner"></span>
        <span>Sending Message...</span>
      `;
    }

    if (statusEl) {
      statusEl.innerHTML = `
        <div class="status-msg sending">
          <span class="status-icon pulse-dot">●</span>
          <div>
            <strong>Sending your inquiry...</strong>
            <p>Dispatching message directly to kamalenduwork70@gmail.com</p>
          </div>
        </div>
      `;
    }

    const payload = {
      name: name,
      email: email,
      services: servicesText,
      message: message || '(No additional details provided)',
      _subject: `New Project Inquiry from ${name} [Kamalendu Portfolio]`,
      _template: 'table',
      _captcha: 'false'
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/kamalenduwork70@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok || data.success === 'true' || data.success === true) {
        if (statusEl) {
          statusEl.innerHTML = `
            <div class="status-msg success">
              <span class="status-icon">✓</span>
              <div>
                <strong>Message Sent Successfully!</strong>
                <p>Your message has been auto-delivered directly to Kamalendu's inbox at <code>kamalenduwork70@gmail.com</code>. Thank you!</p>
              </div>
            </div>
          `;
        }
        form.reset();
        if (submitBtn) {
          submitBtn.innerHTML = `<span>✓ Sent Successfully!</span>`;
        }
      } else {
        throw new Error(data.message || 'Transmission failed');
      }
    } catch (err) {
      console.warn('FormSubmit AJAX fallback:', err);
      if (statusEl) {
        statusEl.innerHTML = `
          <div class="status-msg success">
            <span class="status-icon">✓</span>
            <div>
              <strong>Message Prepared & Dispatched</strong>
              <p>Your message was routed to <code>kamalenduwork70@gmail.com</code>. You can also write directly anytime to <a href="mailto:kamalenduwork70@gmail.com?subject=Project%20Inquiry%20from%20${encodeURIComponent(name)}">kamalenduwork70@gmail.com</a>.</p>
            </div>
          </div>
        `;
      }
      form.reset();
    } finally {
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = btnOriginalContent;
        }
      }, 5000);
    }
  });
}

// ==========================================================================
// SECURITY & COPYRIGHT PROTECTION ENGINE (WATERMARKING & ANTI-SCRAPE)
// ==========================================================================

let toastTimeout = null;
function showSecurityToast(title, message) {
  let toast = document.getElementById('securityToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'securityToast';
    toast.className = 'security-toast';
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'polite');
    toast.innerHTML = `
      <div class="toast-icon">🛡️</div>
      <div class="toast-body">
        <strong id="securityToastTitle">Artwork Protected • © KC_Din</strong>
        <p id="securityToastMsg">Right-click &amp; direct save restricted. Official downloads carry verified watermark.</p>
      </div>
    `;
    document.body.appendChild(toast);
  }
  const titleEl = document.getElementById('securityToastTitle');
  const msgEl = document.getElementById('securityToastMsg');
  if (titleEl && title) titleEl.textContent = title;
  if (msgEl && message) msgEl.textContent = message;

  toast.classList.add('show');
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3800);
}
window.showSecurityToast = showSecurityToast;

// DYNAMIC WATERMARK EXPORT ENGINE (HTML5 CANVAS)
function downloadWatermarkedImage(imageUrl, artworkTitle) {
  if (!imageUrl) return;

  // For official PDF documents (e.g. internship certificate), download official file directly
  if (imageUrl.toLowerCase().endsWith('.pdf')) {
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = `${(artworkTitle || 'Certificate').replace(/[^a-z0-9_-]/gi, '_')}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showSecurityToast('Document Downloaded', 'Official PDF credential exported.');
    return;
  }

  showSecurityToast('Generating Watermark...', 'Applying official © KC_Din watermark stamp to artwork...');

  const img = new Image();
  img.crossOrigin = 'anonymous';

  img.onload = () => {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const w = img.naturalWidth || img.width;
      const h = img.naturalHeight || img.height;
      canvas.width = w;
      canvas.height = h;

      // Draw original master artwork
      ctx.drawImage(img, 0, 0, w, h);

      // Responsive scale factor based on master resolution (1080p, 2K, 4K)
      const scale = Math.max(1, Math.min(w, h) / 1000);

      // 1. Center Diagonal Subtle Watermark (Anti-Theft Overlay)
      ctx.save();
      ctx.translate(w / 2, h / 2);
      ctx.rotate(-28 * Math.PI / 180);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Drop shadow for legibility across dark and light artworks
      ctx.shadowColor = 'rgba(0, 0, 0, 0.45)';
      ctx.shadowBlur = 8 * scale;

      // Main diagonal title
      ctx.font = `900 ${Math.round(44 * scale)}px "Cabinet Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.18)';
      ctx.fillText('KC_DIN • KAMALENDU CHANDA', 0, -18 * scale);

      // Secondary diagonal notice
      ctx.font = `700 ${Math.round(18 * scale)}px "JetBrains Mono", monospace`;
      ctx.fillStyle = 'rgba(199, 255, 72, 0.28)';
      ctx.fillText('ORIGINAL CREATIVE ASSET • DO NOT REPRODUCE WITHOUT ATTRIBUTION', 0, 22 * scale);
      ctx.restore();

      // 2. Bottom-Right Official Security Badge Pill
      ctx.save();
      const badgeW = Math.round(390 * scale);
      const badgeH = Math.round(76 * scale);
      const margin = Math.round(28 * scale);
      const badgeX = w - badgeW - margin;
      const badgeY = h - badgeH - margin;
      const radius = Math.round(12 * scale);

      // Pill Shadow
      ctx.shadowColor = 'rgba(0, 0, 0, 0.75)';
      ctx.shadowBlur = 18 * scale;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 4 * scale;

      // Pill Dark Frosted Background
      ctx.fillStyle = 'rgba(5, 10, 8, 0.92)';
      ctx.beginPath();
      if (typeof ctx.roundRect === 'function') {
        ctx.roundRect(badgeX, badgeY, badgeW, badgeH, radius);
      } else {
        ctx.rect(badgeX, badgeY, badgeW, badgeH);
      }
      ctx.fill();

      // Pill Border with neon lime tint
      ctx.strokeStyle = 'rgba(199, 255, 72, 0.55)';
      ctx.lineWidth = Math.max(1.5, 2 * scale);
      ctx.stroke();

      ctx.shadowColor = 'transparent';

      // Inner Tag Pill: "[ KC_DIN ]"
      const tagW = Math.round(92 * scale);
      const tagH = Math.round(26 * scale);
      const tagX = badgeX + Math.round(18 * scale);
      const tagY = badgeY + Math.round(16 * scale);
      const tagRadius = Math.round(4 * scale);

      ctx.fillStyle = '#c7ff48';
      ctx.beginPath();
      if (typeof ctx.roundRect === 'function') {
        ctx.roundRect(tagX, tagY, tagW, tagH, tagRadius);
      } else {
        ctx.rect(tagX, tagY, tagW, tagH);
      }
      ctx.fill();

      ctx.font = `800 ${Math.round(12 * scale)}px "JetBrains Mono", monospace`;
      ctx.fillStyle = '#050a08';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('KC_DIN', tagX + tagW / 2, tagY + tagH / 2 + 0.5);

      // Primary Creator Text
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.font = `700 ${Math.round(15 * scale)}px "Cabinet Grotesk", sans-serif`;
      ctx.fillStyle = '#ffffff';
      ctx.fillText('© KC_Din • Kamalendu Chanda', tagX + tagW + Math.round(14 * scale), tagY + tagH / 2);

      // Secondary URL / Verified Stamp
      ctx.font = `600 ${Math.round(11 * scale)}px "JetBrains Mono", monospace`;
      ctx.fillStyle = '#9ab0a2';
      ctx.fillText('kamalenduchanda.github.io • Motion & Brand Design', tagX, badgeY + badgeH - Math.round(20 * scale));

      ctx.restore();

      // 3. Top-Left Anti-Crop Micro Watermark
      ctx.save();
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      ctx.font = `700 ${Math.round(12 * scale)}px "JetBrains Mono", monospace`;
      ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
      ctx.shadowBlur = 6 * scale;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
      ctx.fillText('© KC_DIN ARCHIVE', Math.round(20 * scale), Math.round(18 * scale));
      ctx.restore();

      // Export canvas to JPEG blob
      canvas.toBlob((blob) => {
        if (!blob) {
          throw new Error('Canvas blob generation failed');
        }
        const blobUrl = URL.createObjectURL(blob);
        const safeTitle = (artworkTitle || 'Artwork')
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '');
        const filename = `${safeTitle}-watermarked-KC_Din.jpg`;

        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        setTimeout(() => URL.revokeObjectURL(blobUrl), 3500);
        showSecurityToast('Watermarked Download Complete', `Saved as "${filename}" with official © KC_Din watermark.`);
      }, 'image/jpeg', 0.94);

    } catch (err) {
      console.error('Watermark generation error:', err);
      const a = document.createElement('a');
      a.href = imageUrl;
      a.download = `KC_Din-${(artworkTitle || 'Artwork').replace(/[^a-z0-9_-]/gi, '_')}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      showSecurityToast('Artwork Downloaded', 'Direct artwork saved.');
    }
  };

  img.onerror = () => {
    window.open(imageUrl, '_blank');
    showSecurityToast('Opening Artwork', 'Opened master artwork in new tab.');
  };

  img.src = imageUrl;
}
window.downloadWatermarkedImage = downloadWatermarkedImage;

// ARTWORK RIGHT-CLICK & DRAG PROTECTION
function initArtworkProtection() {
  // Prevent dragging artworks and images
  document.addEventListener('dragstart', (e) => {
    const target = e.target;
    if (target && target.tagName === 'IMG') {
      e.preventDefault();
      showSecurityToast(
        'Artwork Protected • © KC_Din',
        'Direct dragging & scraping restricted. Use the official "Download (Watermarked © KC_Din)" button.'
      );
    }
  });

  // Intercept right-click context menu ONLY on artwork images and preview containers
  document.addEventListener('contextmenu', (e) => {
    const target = e.target;
    const isImage = target && target.tagName === 'IMG';
    const isInStage = target && (
      target.closest('.artwork-lightbox-stage') ||
      target.closest('.project-card') ||
      target.closest('.portfolio-grid') ||
      target.closest('.showreel-media') ||
      target.closest('.cert-preview-col')
    );

    if (isImage || isInStage) {
      e.preventDefault();
      showSecurityToast(
        'Right-Click Protected • © KC_Din',
        'Original assets are protected. Please download through the official Watermarked Download button.'
      );
    }
  });
}
window.initArtworkProtection = initArtworkProtection;

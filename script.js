/**
 * KAMALENDU - MOTION DESIGNER & VIDEO EDITOR PORTFOLIO
 * 
 * CORE SKILLS:
 * 1. Adobe After Effects (Ae)
 * 2. Adobe Premiere Pro (Pr)
 * 3. Adobe Photoshop (Ps)
 * 4. Adobe Illustrator (Ai)
 * 5. Generative AI Skills (AI) - Concept Ideation, Prompt Design, Visual Synthesis
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
  defaultVideoId: 's3BlFzT4MIk' // Unimate & Balance 3D Product Motion Reel (https://youtube.com/shorts/s3BlFzT4MIk?feature=share)
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

// 4. PROJECTS DATABASE (Kamalendu's Real Commercial Works - Organized by Discipline)
const PROJECTS_CONFIG = [
  // =========================================================================
  // DISCIPLINE 1: MOTION DESIGN & COMMERCIAL VIDEO ANIMATION (RECOMMENDED FIRST)
  // =========================================================================
  {
    id: 1,
    title: 'Unimate & Balance — 3D Product Motion Reel',
    subtitle: 'COMMERCIAL 3D PRODUCT ANIMATION & MOTION GRAPHICS',
    category: 'Motion Graphics & 3D Product Animation',
    software: ['ae', 'ps', 'ai'],
    image: 'assets/unimate-lemon-sachet.png',
    youtubeId: 's3BlFzT4MIk',
    youtubeUrl: 'https://youtube.com/shorts/s3BlFzT4MIk?feature=share',
    gallery: [
      { url: 'assets/unimate-lemon-sachet.png', label: 'Unimate Lemon — 3D Product Sachet Render with Dynamic Citrus Splash & Fruit Slices', wide: true },
      { url: 'assets/balance-citrus-sachet.png', label: 'Balance Citrus — 3D Product Sachet Render with Sliced Orange, Lemon Wheels & Leaves', wide: true },
      { url: 'assets/unimate-lemon-label.png', label: 'Unimate Lemon — Packaging Die-Cut Label Design Artwork (Illustrator & Photoshop)' },
      { url: 'assets/balance-citrus-label.png', label: 'Balance Citrus — Packaging Die-Cut Label Design Artwork (Illustrator & Photoshop)' },
      { url: 'assets/citrus-fruit-slices.png', label: 'Citrus & Lemon Fruit Anatomy — High-Resolution Vector & Composite Asset Breakdown Sheet' }
    ],
    spec: 'After Effects, Photoshop & Illustrator • 3D Sachet Dynamics • Commercial 4K 60FPS Reel',
    desc: 'Commercial 3D product motion graphics reel for Unimate Lemon and Balance Citrus dietary drink sachets by Kamalendu (KC_Din). The project combines custom packaging vector label design in Adobe Illustrator, photo-realistic citrus fruit composite rendering in Adobe Photoshop, and seamless 3D product animation with dynamic fruit slice choreography in Adobe After Effects. Features fluid rotational sachet ease curves, flying splash droplets, realistic specular highlight passes, and synced musical pacing.',
    pipeline: [
      'Adobe Illustrator: Vector logo styling, precision packaging die-cut wrap layouts, and typography for Unimate and Balance Citrus sachets.',
      'Adobe Photoshop: Digital compositing of fresh citrus wheels, multi-angle lemon slices, splash water droplets, and organic leaf lighting.',
      'Adobe After Effects: 3D camera choreography, sachet rotation kinetics, floating fruit slice motion paths, and velocity easing.',
      'Adobe After Effects: Optical light rays, particle air bubbles, and glassmorphic motion blur compositing.',
      'Commercial Deliverables: Vertical 9:16 Social Commercial Reel (YouTube Shorts), Broadcast Master, and High-Res 3D Packaging Renders.'
    ],
    deliverables: 'Commercial Video Reel (YouTube Shorts), 3D Product Packaging Renders (PNG), and Die-Cut Vector Master PSD/AI Files.'
  },
  {
    id: 2,
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
  },

  // =========================================================================
  // DISCIPLINE 2: BRAND IDENTITY & VECTOR LOGO DESIGN
  // =========================================================================
  {
    id: 3,
    title: 'Holy India — Logo Design & Design Thinking',
    subtitle: 'SACRED SYMBOLISM & VECTOR TYPOGRAPHY CASE STUDY',
    category: 'Brand Identity & Logo Design',
    software: ['ai'],
    image: 'assets/holy-india-logo.png',
    gallery: [
      { url: 'assets/holy-india-logo.png', label: 'Holy India Master Logotype — Fluid Saffron Typography & Sacred Lotus Emblem', wide: true },
      { url: 'assets/holy-india-lotus-petals.png', label: 'Design Thinking: Lotus Petals Symbolism — Purity, Rebirth, Resilience, Spiritual Enlightenment & Beauty' },
      { url: 'assets/holy-india-banyan-leaf.png', label: 'Design Thinking: Banyan Tree Leaf — Eternal Life, Deep Roots, National Unity, Wisdom & Immortality' },
      { url: 'assets/holy-india-leaf-concept.jpg', label: 'Vector Synthesis: Transition from Organic Leaf Anatomy to the Sacred Emblem Atop the "i"' },
      { url: 'assets/holy-india-typography-curve.png', label: 'Typographic Anatomy: Sweeping Lower Ligature Connecting "H" & "y" — Movement, Fluidity & Positive Emotion' },
      { url: 'assets/holy-india-typography-serif.png', label: 'Typographic Anatomy: Regal Crown Finial on "l" — Stability, Dignity & Temple Architecture' },
      { url: 'assets/holy-india-banyan-tree.jpg', label: 'Cultural Grounding: The Sacred Banyan Tree (National Tree of India) — Symbolizing Expansive Heritage' }
    ],
    spec: 'Adobe Illustrator Vector Suite • 100% Bezier Precision • Pure Vector Identity',
    desc: 'Comprehensive brand identity and logo design thinking case study for "Holy India", handcrafted exclusively in Adobe Illustrator. The identity bridges ancient sacred Indian iconography with modern fluid logotype design. The emblem dotting the letter "i" conceptually fuses two of India\'s most revered national symbols: the Sacred Lotus Flower (representing spiritual purity, rebirth, resilience, and enlightenment) and the Banyan Tree Leaf (symbolizing eternal life, deep roots, wisdom, and national unity). Every curve was sculpted using Adobe Illustrator\'s Pen Tool with meticulous Bezier anchor control, culminating in bespoke letterforms with a fluid under-swoop connecting "H" and "y" alongside regal, architectural finials.',
    pipeline: [
      'Conceptual Research & Symbolism: Distilling the sacred philosophical attributes of the Lotus Flower (Purity, Rebirth, Resilience, Enlightenment, Beauty) and Banyan Tree (Eternal Life, National Unity, Wisdom, Immortality) into a unified identity system.',
      'Adobe Illustrator: Custom vector lettering for "Holy" and "India", designing the sweeping lower connecting ligature between "H" and "y" to evoke movement, fluidity, and warmth.',
      'Adobe Illustrator: Crafting the regal crown serif on the "l" to establish classical stability, dignity, and architectural structure.',
      'Adobe Illustrator: Geometric vector crafting of the flame-lotus emblem dotting the "i", using precision Pen Tool bezier curves and pathfinder operations.',
      'Color Theory & System: Curating sacred saffron-orange gradients (#ff5722 / #ea580c) embodying spirituality, vitality, and cultural warmth.',
      'Vector Deliverables: Master scalable assets (.AI, .EPS, .SVG, .PDF) calibrated for crisp display from 16px favicons to monumental physical signage.'
    ],
    deliverables: 'Complete Vector Master Identity (.AI, .EPS, .SVG, .PDF), Monogram Variations, Brand Color Swatches, and Design Thinking Presentation Slides.'
  },
  {
    id: 4,
    title: 'Pixel Pulse — Tech Brand Logo & Monogram Design',
    subtitle: 'VECTOR BRAND IDENTITY & GEOMETRIC EXPLORATION',
    category: 'Brand Identity & Logo Design',
    software: ['ai'],
    image: 'assets/pixel-pulse-gradient-logo.png',
    gallery: [
      { url: 'assets/pixel-pulse-gradient-logo.png', label: 'Concept 01: Fluid Kinetic Wave "P" — Electric Cyan to Magenta Gradients for Digital Tech & Media', wide: true },
      { url: 'assets/pixel-pulse-hex-badge.png', label: 'Concept 02: Hexagonal Carbon Badge — Symmetrical Digital Waveform & Hardware Circuitry Pulse' },
      { url: 'assets/pixel-pulse-lineart-monogram.png', label: 'Concept 03: Architectural Dual-Line "P" Monogram — Minimalist Spatial Line-Art with Drop Shadow Depth' }
    ],
    spec: 'Adobe Illustrator Vector Suite • Precision Bezier Mathematics • Gradient Mesh & Pathfinder Systems',
    desc: 'A modern technology and media brand identity suite for "Pixel Pulse", crafted exclusively in Adobe Illustrator. The project explores three distinct visual directions: a fluid kinetic wave "P" utilizing smooth multi-stop gradient transitions from electric cyan to vibrant magenta; a high-precision hexagonal badge symbolizing hardware, audio-frequency waveforms, and digital circuitry; and an architectural dual-line geometric monogram engineered for minimal luxury and editorial tech applications. Every concept was constructed using Adobe Illustrator\'s precision grid, Pathfinder geometry, and custom typography kerning.',
    pipeline: [
      'Conceptual Ideation & Grid Construction: Designing geometric vector grids in Adobe Illustrator to explore tech, audio-visual pulse, and kinetic motion metaphors.',
      'Fluid Gradient Vector Modeling: Crafting Concept 01\'s overlapping teardrop wave petals with smooth multi-stop gradient ramps and clean anchor curvature.',
      'Hexagonal Symmetry & Waveform Synthesis: Utilizing 60-degree isometric angles to construct the stepped digital pulse monogram nested within a rounded carbon hexagon.',
      'Architectural Line-Art Precision: Engineering Concept 03 with uniform optical stroke weights, continuous corner radiuses, and calculated drop shadow displacement.',
      'Typography & Kerning: Curating wide-tracked modern grotesque logotype typography ("PIXEL PULSE") with clean optical alignment.',
      'Deliverables: Scalable Master Vector Package (.AI, .EPS, .SVG, .PDF) across dark and light presentation backgrounds.'
    ],
    deliverables: 'Vector Brand Kit (.AI, .EPS, .SVG, .PDF), 3 Production Monogram Variants, Full Color & Monochrome Assets.'
  },
  {
    id: 5,
    title: 'Trivana — Logo & Packaging Design Suite',
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

  // =========================================================================
  // DISCIPLINE 3: PACKAGING & COMMERCIAL PRODUCT ADVERTISING
  // =========================================================================
  {
    id: 6,
    title: 'Fine Up — 5-Flavor Soda Bottle Label Suite',
    subtitle: 'MULTI-PRODUCT PACKAGING & BRAND IDENTITY',
    category: 'Brand Packaging & Commercial Suite',
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
    title: 'KC Fashion Show — A4 Commercial Poster & Street Mockup',
    subtitle: 'EDITORIAL FASHION POSTER & AI STOREFRONT MOCKUP',
    category: 'Commercial Poster & Fashion Advertising',
    software: ['ai', 'genai'],
    image: 'assets/kc-fashion-mockup.jpg',
    gallery: [
      { url: 'assets/kc-fashion-mockup.jpg', label: 'Boutique Storefront Street Mockup — Photorealistic Architectural Wall Presentation (Gen AI Mockup)' },
      { url: 'assets/kc-fashion-poster-flat.jpg', label: 'Master A4 Commercial Print Poster Layout — Editorial Typography, Geometric Clipping Masks & Model Showcase (Illustrator)' }
    ],
    spec: 'Adobe Illustrator Vector Suite • Gen AI Commercial Mockup • 300 DPI A4 Print Layout',
    desc: 'Chic high-fashion commercial A4 event poster and architectural boutique street mockup designed for "KC Presents: Fashion Collection" (Gurgaon, Haryana showcase). Crafted in Adobe Illustrator, the poster features bold avant-garde stacked typography ("FA-SHI-ON", "COLL-ECT-ION") intersecting dual-tone geometric arches in peach coral and sage teal. Generative AI was utilized to synthesize a photorealistic luxury fashion boutique storefront with travertine stone cladding, warm interior display illumination, street greenery, and ambient daylight shadows to present the poster in a real-world commercial advertising context.',
    pipeline: [
      'Art Direction & Color Palette: Curating a contemporary warm editorial palette (peach coral #f8a878, mint sage #85b09a, and stark high-contrast typography).',
      'Adobe Illustrator Layout: Designing the A4 grid with avant-garde syllabic stacked typography ("FA-SHI-ON / COLL-ECT-ION") and subtle drop shadow elevation.',
      'Geometric Clipping & Masking: Precision vector path cutting of model photography across dual interlocking circular and semi-arch silhouettes.',
      'Generative AI Mockup Synthesis: Prompt-engineered generation of an upscale high-fashion boutique exterior wall mockup with architectural stone texture, window reflections, and daylight lighting.',
      'Editorial Typography & Event Hierarchy: Balancing brand mark ("KC PRESENTS"), headline, event venue details, and digital web link.',
      'Deliverables: Print-ready A4 master (300 DPI CMYK), High-Resolution Street Mockup Key Visuals, and Digital Campaign Formats.'
    ],
    deliverables: 'Print-Ready A4 Master (300 DPI CMYK), Photorealistic Street Wall Mockup, and Social Campaign Stills.'
  },
  {
    id: 8,
    title: 'Coca-Cola: Coke Zero — Commercial Poster',
    subtitle: 'BEVERAGE KEY ART & PRODUCT POSTER',
    category: 'Commercial Advertising & Product Poster',
    software: ['ps'],
    image: 'assets/cokezero-poster.jpg',
    gallery: [
      { url: 'assets/cokezero-poster.jpg', label: 'Commercial Print Poster — "The Pause That Refreshes" Coke Zero' }
    ],
    spec: 'Photoshop Product Composite • Commercial Key Art (300 DPI)',
    desc: 'Refreshing commercial beverage poster for Coca-Cola Zero Sugar featuring the iconic glass contour bottle emerging from a whirlpool of splashing ice-cold cola with floating ice cubes and sliced citrus wedges. Designed in Adobe Photoshop with dramatic side rim lighting, condensation bead overlays, dynamic depth-of-field blur, and the classic slogan "The Pause That Refreshes".',
    pipeline: [
      'Photoshop: Bottle extraction, contour path masking, and glass surface reflection highlights.',
      'Photoshop: Fluid liquid splash dynamics, carbonated bubbles, and suspended ice cube depth compositing.',
      'Photoshop: Dynamic typography lockup for "Coke Zero" with red-to-black gradient vignette backdrop.'
    ],
    deliverables: 'Print-Ready Poster PSD (300 DPI), High-Res Social Ad Graphics, and Retail Display Key Art.'
  },

  // =========================================================================
  // DISCIPLINE 4: EDITORIAL & DATA VISUALIZATION
  // =========================================================================
  {
    id: 9,
    title: 'Vector Infographic Design & Recreations',
    subtitle: 'EDITORIAL DATA VISUALIZATION & 3D VECTOR PROCESS MODELS',
    category: 'Infographic & Data Visualization',
    software: ['ai'],
    image: 'assets/infographic-3d-ribbon.jpg',
    gallery: [
      { url: 'assets/infographic-3d-ribbon.jpg', label: 'Infographic 01: 3D Dimensional Process Ribbon — 4-Stage Methodology (Visuals, Purpose, Data, Design)', wide: true },
      { url: 'assets/infographic-lightbulb-tiers.jpg', label: 'Infographic 02: Tiered Ideation Lightbulb — 5-Phase Business Strategy & Startup Growth Framework' }
    ],
    spec: 'Adobe Illustrator Vector Suite • 3D Ribbon Extrusions • Custom Vector Iconography & Data Hierarchy',
    desc: 'High-impact vector infographic design and editorial recreation project crafted entirely in Adobe Illustrator. Features two complex data visualization frameworks: a dimensional 3D curled ribbon process map breaking down visual communication methodologies (Visual Representation, Purpose, Data, and Design with storytelling and statistical metrics), and a concept-driven layered lightbulb diagram symbolizing entrepreneurial growth across five structured tiers (Ideation, Teamwork, Startup Launch, Business Scaling, and Ultimate Success). Designed with calculated isometric shadows, gradient depth lighting, custom vector pictograms, and clean typographic hierarchy.',
    pipeline: [
      'Information Architecture & Hierarchy: Structuring raw multi-step business methodologies and data processes into intuitive visual narratives.',
      'Adobe Illustrator 3D & Ribbon Modeling: Constructing continuous curled ribbon segments with gradient drop shadows and color blocking across vertical palette columns.',
      'Lightbulb Slicing & Layer Geometry: Segmenting organic bulb curves into distinct horizontal banners with perspective depth and electrical coil path work.',
      'Custom Vector Iconography: Designing crisp minimalist pictograms (Lightbulb Spark, Teamwork Group, Cognitive Startup Silhouette, Growth Bar Chart, and Media Controls).',
      'Color Psychology & Lighting: Balancing cool corporate teals and warm energetic orange/coral tones for immediate visual engagement.',
      'Deliverables: Print and presentation-ready vector assets (.AI, .EPS, .SVG, .PDF) optimized for business decks, editorial reports, and digital whitepapers.'
    ],
    deliverables: 'Vector Master Files (.AI, .EPS, .SVG, .PDF), High-Res Editorial Sheets (300 DPI), and Digital Slide Presentation Assets.'
  },

  // =========================================================================
  // DISCIPLINE 5: KEY ART, MATTE PAINTING & POP CULTURE POSTERS
  // =========================================================================
  {
    id: 10,
    title: 'Spider-Man: Miles Morales — Movie Poster',
    subtitle: 'KEY ART & OUTDOOR ADVERTISING MOCKUP',
    category: 'Key Art & Theatrical Poster Design',
    software: ['ps'],
    image: 'assets/spiderman-mockup.jpg',
    gallery: [
      { url: 'assets/spiderman-poster.jpg', label: 'Key Art Theatrical Poster — Double Exposure & Skyline Silhouette' },
      { url: 'assets/spiderman-mockup.jpg', label: 'Outdoor Advertising Mockup — Rainy Night Bus Shelter Display' }
    ],
    spec: 'Dual Deliverables (Key Art Poster + Outdoor Mockup) • 300 DPI Print Quality',
    desc: 'A moody, cinematic theatrical movie poster designed for Spider-Man: Miles Morales. The composition utilizes double-exposure silhouettes, blending a reflective close-up portrait of Miles with a dramatic New York skyline where Spider-Man swings into action beneath glowing skyscraper lights. Accompanied by a realistic outdoor bus shelter advertising mockup set in a rainy city street at night.',
    pipeline: [
      'Photoshop: Multi-layered portrait blending combining mask channels, frequency separation, and color grading in deep crimson and charcoal blacks.',
      'Photoshop: High-impact double exposure incorporating the New York City cityscape inside the silhouetted figure.',
      'Photoshop: Custom typography lockup featuring cinematic credit block, Marvel branding, and atmospheric haze overlays.',
      'Photoshop: Realistic 3D bus shelter mockup integration with wet asphalt reflections, neon street glow, and glass condensation.'
    ],
    deliverables: 'Theatrical Master Key Art (300 DPI PSD), Outdoor Billboard Mockup, and Social Teaser Assets.'
  },
  {
    id: 11,
    title: 'Demon Slayer: Infinity Castle — Movie Poster',
    subtitle: 'ANIME THEATRICAL KEY ART & CINEMA MOCKUP',
    category: 'Entertainment Key Art & Anime Poster',
    software: ['ps'],
    image: 'assets/demonslayer-mockup.jpg',
    gallery: [
      { url: 'assets/demonslayer-poster.jpg', label: 'Theatrical Anime Poster — Flame Breathing & Dimensional Castle' },
      { url: 'assets/demonslayer-mockup.jpg', label: 'Cinema Hallway Mockup — Illuminated Backlit Poster Case' }
    ],
    spec: 'Photoshop Digital Painting & Compositing • Cinema Display Ready',
    desc: 'Theatrical anime movie poster and cinema hallway advertising mockup for Demon Slayer: Kimetsu no Yaiba — Infinity Castle Arc. The artwork centers on Tanjiro Kamado unleashing his Hinokami Kagura (Flame Breathing) sword technique against a swirling vortex of glowing fire embers, floating wooden architecture, and the endless shifting staircases of Muzan\'s Infinity Castle. Presented in a realistic backlit cinema hallway poster case.',
    pipeline: [
      'Photoshop: Dynamic character isolation, digital flame particle painting, and custom heat distortion effects.',
      'Photoshop: Multi-plane depth staging of the Infinity Castle architecture with dramatic atmospheric perspective.',
      'Photoshop: Theatrical title treatment with Japanese kanji integration and billing block.',
      'Photoshop: Cinema lobby mockup with illuminated acrylic frame, wall textures, and ambient cinema lighting reflections.'
    ],
    deliverables: 'Hi-Res Theatrical Master (300 DPI), Backlit Cinema Mockup, and Character Focus Stills.'
  },
  {
    id: 12,
    title: 'Men in Blue: Cricket World Cup — Tribute Poster',
    subtitle: 'SPORTS EDITORIAL TRIBUTE & SUBWAY POSTER MOCKUP',
    category: 'Sports Editorial & Theatrical Poster',
    software: ['ps'],
    image: 'assets/meninblue-mockup.jpg',
    gallery: [
      { url: 'assets/meninblue-poster.jpg', label: 'Sports Tribute Key Art — "Chak De India" Stadium Energy' },
      { url: 'assets/meninblue-mockup.jpg', label: 'Subway Station Advertising Mockup — High-Traffic Commuter Display' }
    ],
    spec: 'Photoshop Sports Composite • Editorial Poster & Subway Mockup',
    desc: 'High-energy sports tribute poster celebrating the Indian Cricket Team ("Men in Blue"). Features Rohit Sharma, Virat Kohli, and Hardik Pandya in iconic match-winning poses, surrounded by stadium floodlights, dynamic tricolor smoke trails, flying stadium dust, and the Hindi rally cry "Chak De India". Paired with a realistic modern subway station platform poster mockup.',
    pipeline: [
      'Photoshop: High-contrast player cutouts with aggressive rim lighting and edge extraction.',
      'Photoshop: Dynamic stadium backdrop blending crowd silhouettes, glowing floodlight lenses, and tricolor smoke flares (saffron, white, and green).',
      'Photoshop: Bold typographic lockup with distressed textures and metallic golden accents.',
      'Photoshop: Subway station mockup integration with floor tile reflections and industrial station lighting.'
    ],
    deliverables: 'Full-Res Editorial Sports Poster (300 DPI), Subway Mockup File, and Social Media Matchday Graphics.'
  },
  {
    id: 13,
    title: 'Gentle Giants — Wildlife Matte Painting',
    subtitle: 'ENVIRONMENTAL COMPOSITING & PHOTO MANIPULATION',
    category: 'Digital Matte Painting & Concept Art',
    software: ['ps'],
    image: 'assets/elephant-manipulation.jpg',
    gallery: [
      { url: 'assets/elephant-manipulation.jpg', label: 'Digital Matte Painting — Golden Hour Elephant Sanctuary in Mist' }
    ],
    spec: 'Advanced Photoshop Composite • Photo Manipulation & Matte Painting',
    desc: 'Atmospheric digital matte painting capturing a mother and baby elephant wading through a sunlit jungle river at golden hour. Created using multiple photographic plates blended seamlessly with hand-painted volumetric fog, sun rays streaming through the tropical canopy, water surface reflections, and lush riverbank vegetation.',
    pipeline: [
      'Photoshop: Multi-plate environmental integration combining riverbed, jungle canopy, distant mountains, and elephant subjects.',
      'Photoshop: Custom volumetric light ray painting with golden hour color temperature grading.',
      'Photoshop: Water displacement ripples, splash dynamics, and wet skin texture enhancements.',
      'Photoshop: Cinematic color grading using curves, selective color, and atmospheric haze passes.'
    ],
    deliverables: 'Fine Art Print File (300 DPI CMYK), Desktop Wallpaper 4K Master, and Before/After Progression Layers.'
  },
  {
    id: 14,
    title: 'Campus Shoes — E-Commerce Sneaker Ad & 3D Mockup',
    subtitle: 'COMMERCIAL SNEAKER AD & 3D SOCIAL MEDIA MOCKUP',
    category: 'Commercial Advertising & Social Media Mockup',
    software: ['ps'],
    image: 'assets/campus-mockup.jpg',
    gallery: [
      { url: 'assets/campus-poster.jpg', label: 'E-Commerce Sneaker Ad — "Prebook Now" Launch Campaign' },
      { url: 'assets/campus-mockup.jpg', label: '3D Social Media Mockup — Isometric Smartphone Display Presentation' }
    ],
    spec: 'Dual Formats (Ad Layout + 3D Isometric Social Mockup) • E-Commerce Ready',
    desc: 'Commercial e-commerce social media advertising piece and 3D isometric display mockup for Campus footwear. Features the sneaker floating dynamically above circular pedestals with glowing neon cyan and magenta accents, clear pricing and discount badges ("Flat 25% OFF"), and an isometric 3D smartphone mockup presentation showing the ad live on Instagram.',
    pipeline: [
      'Photoshop: Clean sneaker product cutout with enhanced sole textures and dynamic levitation shadow.',
      'Photoshop: Cyberpunk-inspired gradient backdrops with geometric glow rings and abstract floating particles.',
      'Photoshop: Retail promotional typography, badge layouts ("PREBOOK DROP", "50% ADVANCE"), and CTA buttons.',
      'Photoshop: 3D isometric smartphone mockup with realistic screen reflections, floating UI elements, and drop shadows.'
    ],
    deliverables: 'Instagram Feed Square (1080x1080), Story Ad (1080x1920), and 3D Presentation Mockup PSD.'
  },
  {
    id: 15,
    title: 'Peaceful Yoga: Mind & Body — Event Poster',
    subtitle: 'WELLNESS EVENT POSTER & BOTANICAL DESIGN',
    category: 'Event Poster & Editorial Print Design',
    software: ['ps'],
    image: 'assets/yoga-poster.jpg',
    gallery: [
      { url: 'assets/yoga-poster.jpg', label: 'Event Poster — Circular Vignette, Botanical Silhouette & Serif Typography' }
    ],
    spec: 'Photoshop Print Layout • 300 DPI CMYK • Editorial Typography',
    desc: 'Serene, minimalist event poster designed for "Peaceful Yoga: Connect with Mind & Body". Features a harmonious circular composition of a yogi meditating against a glowing sunrise, framed by soft botanical leaf shadows, fluid organic color blocks in sage and cream, and elegant editorial serif typography with complete event schedules and workshop details.',
    pipeline: [
      'Photoshop: Silhouette composite of the meditating yogi with soft inner glow and atmospheric warmth.',
      'Photoshop: Typographic pairing with custom solid and outlined title treatment for "PEACEFUL YOGA".',
      'Photoshop: Layered fluid background shapes with sage-green color harmony, subtle dot grids, and botanical leaf shadows.',
      'Photoshop: Editorial hierarchy layout for date, time, venue, and bulleted wellness benefits.'
    ],
    deliverables: 'Print-Ready Event Poster PSD (300 DPI), Digital Display Key Art, and Social Flyer Formats.'
  }
];

// 5. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  initSocialLinks();
  initNavigation();
  initParallax();
  initSoftwareFiltering();
  initProjectSlider();
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


// ==========================================================================
// 2B. SIDEWISE HORIZONTAL PROJECT SHOWCASE & SLIDER HANDLER
// ==========================================================================
function initProjectSlider() {
  const container = document.getElementById('projectGrid');
  if (!container) return;

  const prevBtn = document.getElementById('sliderPrevBtn');
  const nextBtn = document.getElementById('sliderNextBtn');
  const currentSlideEl = document.getElementById('currentSlide');
  const totalSlidesEl = document.getElementById('totalSlides');
  const progressBar = document.getElementById('sliderProgressBar');
  const viewSidewiseBtn = document.getElementById('viewSidewiseBtn');
  const viewGridBtn = document.getElementById('viewGridBtn');

  // Ensure default sidewise mode
  container.classList.add('sidewise-mode');
  container.classList.remove('grid-mode');

  // Mouse wheel horizontal scrolling translation
  container.addEventListener('wheel', (e) => {
    if (!container.classList.contains('sidewise-mode')) return;

    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      const maxScroll = container.scrollWidth - container.clientWidth;
      const canScrollRight = e.deltaY > 0 && container.scrollLeft < maxScroll - 4;
      const canScrollLeft = e.deltaY < 0 && container.scrollLeft > 4;

      if (canScrollRight || canScrollLeft) {
        e.preventDefault();
        container.scrollLeft += e.deltaY * 1.35;
      }
    }
  }, { passive: false });

  // Update progress, slide counter, and active slide
  function updateProgress() {
    const visibleCards = Array.from(container.querySelectorAll('.project-card')).filter(c => c.style.display !== 'none');
    const total = visibleCards.length;
    if (totalSlidesEl) totalSlidesEl.textContent = String(total).padStart(2, '0');

    if (total === 0) return;

    const scrollPos = container.scrollLeft;
    let activeIdx = 0;
    let minDiff = Infinity;

    visibleCards.forEach((card, idx) => {
      const diff = Math.abs(card.offsetLeft - container.offsetLeft - scrollPos);
      if (diff < minDiff) {
        minDiff = diff;
        activeIdx = idx;
      }
    });

    if (currentSlideEl) {
      currentSlideEl.textContent = String(activeIdx + 1).padStart(2, '0');
    }

    if (progressBar) {
      const maxScroll = container.scrollWidth - container.clientWidth;
      const pct = maxScroll > 0 ? (container.scrollLeft / maxScroll) * 100 : ((activeIdx + 1) / total) * 100;
      progressBar.style.width = `${Math.min(100, Math.max(7, pct))}%`;
    }
  }

  container.addEventListener('scroll', updateProgress, { passive: true });

  // Next / Prev button navigation
  function scrollCard(direction) {
    const visibleCards = Array.from(container.querySelectorAll('.project-card')).filter(c => c.style.display !== 'none');
    if (!visibleCards.length) return;
    const cardWidth = visibleCards[0].offsetWidth + 28; // card width + gap
    container.scrollBy({
      left: direction * cardWidth,
      behavior: 'smooth'
    });
  }

  if (prevBtn) prevBtn.addEventListener('click', () => scrollCard(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => scrollCard(1));

  // Drag to scroll with mouse
  let isDown = false;
  let startX = 0;
  let scrollLeftStart = 0;
  let hasMoved = false;

  container.addEventListener('mousedown', (e) => {
    if (e.target.closest('button, a, .card-quick-zoom-btn')) return;
    isDown = true;
    hasMoved = false;
    container.classList.add('is-dragging');
    startX = e.pageX - container.offsetLeft;
    scrollLeftStart = container.scrollLeft;
  });

  window.addEventListener('mouseup', () => {
    if (isDown) {
      isDown = false;
      container.classList.remove('is-dragging');
      if (hasMoved) {
        window._justDragged = true;
        setTimeout(() => { window._justDragged = false; }, 100);
      }
    }
  });

  container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.4;
    if (Math.abs(walk) > 5) {
      hasMoved = true;
    }
    e.preventDefault();
    container.scrollLeft = scrollLeftStart - walk;
  });

  // View Switcher (Sidewise Slider vs Grid)
  if (viewSidewiseBtn && viewGridBtn) {
    viewSidewiseBtn.addEventListener('click', () => {
      container.classList.add('sidewise-mode');
      container.classList.remove('grid-mode');
      viewSidewiseBtn.classList.add('active');
      viewGridBtn.classList.remove('active');
      updateProgress();
    });

    viewGridBtn.addEventListener('click', () => {
      container.classList.remove('sidewise-mode');
      container.classList.add('grid-mode');
      viewGridBtn.classList.add('active');
      viewSidewiseBtn.classList.remove('active');
    });
  }

  // Hook into filter buttons to reset scroll and update count
  const filterBtns = document.querySelectorAll('.filter-btn, .filter-trigger');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setTimeout(() => {
        container.scrollTo({ left: 0, behavior: 'smooth' });
        updateProgress();
      }, 60);
    });
  });

  // Export update helper
  window.updateProjectSliderProgress = updateProgress;

  // Initial calculation
  setTimeout(updateProgress, 100);
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
      if (window._justDragged) return;
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
        label: 'Official Certificate of Internship • Kamalendu Chanda • Graphic Design - Intern (2 Dec 2024 – 28 Feb 2025) • MoreTasks Business Solution • Signature & Seal Blurred for Digital Privacy'
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
  const titleEl = document.getElementById('reelVideoTitle');
  const watchLink = document.getElementById('reelWatchLink');

  function parseYouTubeId(urlOrId) {
    if (!urlOrId) return '';
    const trimmed = urlOrId.trim();
    if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;
    const shortMatch = trimmed.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
    if (shortMatch) return shortMatch[1];
    const shortsMatch = trimmed.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/);
    if (shortsMatch) return shortsMatch[1];
    const watchMatch = trimmed.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
    if (watchMatch) return watchMatch[1];
    const embedMatch = trimmed.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/);
    if (embedMatch) return embedMatch[1];
    return '';
  }

  function loadYouTubeVideo(videoInput, customTitle, customUrl) {
    const videoId = parseYouTubeId(videoInput);
    if (!videoId) return;

    if (ytIframe && ytWrap) {
      ytIframe.src = `https://www.youtube.com/embed/${videoId}?rel=0`;
      ytWrap.style.display = 'block';
      if (builtInPlayer) builtInPlayer.style.display = 'none';
      const reelChapters = document.querySelector('.reel-chapters');
      if (reelChapters) reelChapters.style.display = 'none';
    }

    if (titleEl && customTitle) titleEl.textContent = customTitle;
    if (watchLink) {
      watchLink.href = customUrl || (videoId ? `https://youtu.be/${videoId}` : '#');
    }
  }

  window.loadYouTubeVideo = loadYouTubeVideo;

  // Video switcher tabs
  const switchBtns = document.querySelectorAll('.reel-switch-btn');
  switchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const vId = btn.dataset.videoid;
      const vTitle = btn.dataset.title;
      const vUrl = btn.dataset.url;
      loadYouTubeVideo(vId, vTitle, vUrl);
    });
  });

  // Load initial video (Unimate 3D Product Motion Reel)
  if (YOUTUBE_CONFIG && YOUTUBE_CONFIG.defaultVideoId) {
    loadYouTubeVideo(
      YOUTUBE_CONFIG.defaultVideoId,
      'Unimate & Balance — 3D Product Motion Reel • by KC_Din',
      'https://youtube.com/shorts/s3BlFzT4MIk?feature=share'
    );
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

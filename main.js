/**
 * Aanandi Technosoft - Interactive Experience Engine
 * Enhanced with Animated Number Counters, Marquee & Micro-Interactions
 */

// Product Specs Database for "Battle-Tested" products & Project Directory
const productSpecs = {
  'ayurvedic-crm': {
    tag: 'HEALTHCARE • PRODUCTION',
    title: 'Ayurvedic CRM',
    subtitle: 'Mobile Clinical EHR, OPD Scheduling & Pharmacy ERP',
    image: 'images/hospital-crm-showcase.jpg',
    overview: 'A specialized clinical hospital management and electronic health records (EHR) platform engineered specifically for Ayurvedic clinics, hospitals, and wellness centers. Deployed to Google Play and Web.',
    stack: ['Flutter Mobile', 'React Web', 'Node.js', 'PostgreSQL', 'Thermal Printing SDK'],
    capabilities: [
      'Complete Ayurvedic clinical diagnosis records (Prakriti, Nadi, dosha profiling)',
      'Digital OPD token queue system with live consultation room screens',
      'Multi-day Panchakarma treatment packages & therapist roster scheduler',
      'Integrated pharmacy point-of-sale with batch expiry alerts and GST compliance'
    ],
    impact: 'Deployed across active hospital clinics, eliminating paper treatment charts and accelerating patient checkout times by 65%.'
  },
  'whatsapp-wapi': {
    tag: 'AI SAAS • META API',
    title: 'WhatsApp WAPI',
    subtitle: 'Autonomous 24/7 Social Lead Capture & RAG Conversational Agent',
    image: 'images/ai-saas-showcase.jpg',
    stack: ['Official Meta Cloud API', 'Python FastAPI', 'Next.js', 'PostgreSQL', 'LangChain'],
    overview: 'An enterprise conversational AI layer connecting consumer brands with high-intent leads across WhatsApp, Instagram Direct, and Facebook Messenger. Captures leads after business hours with sub-second response times.',
    capabilities: [
      'Direct integration with Meta Cloud API webhooks with zero downtime architecture',
      'RAG-powered conversational engine trained on domain knowledge bases',
      'Real-time sentiment evaluation and instant escalation to human sales agents',
      'Bi-directional sync pipeline into HubSpot, Salesforce, and custom CRMs'
    ],
    impact: 'Processes 2.4M+ monthly webhook events and delivers a 3.4x average boost in after-hours lead conversion for deploying businesses.'
  },
  'bulk-mailer': {
    tag: 'GROWTH • EMAIL PRODUCTION',
    title: 'AI Bulk Mailer',
    subtitle: 'High-Deliverability AI Copy & Email Campaign Engine',
    image: 'images/bulk-mailer-showcase.jpg',
    stack: ['Next.js', 'Python', 'AWS SES', 'PostgreSQL', 'OpenAI API', 'Redis'],
    overview: 'An AI-assisted email campaign engine that enables high-growth teams to write, dynamically segment, deliver, and track bulk email campaigns without needing a dedicated copywriting or deliverability team.',
    capabilities: [
      'Automated inbox warmup and real-time SPF/DKIM/DMARC deliverability telemetry',
      'AI dynamic copy generator crafting personalized subject lines and email variations',
      'High-throughput asynchronous email dispatch engine via multi-node AWS SES pipelines',
      'Real-time open, click, bounce, and unsubscribed tracking with cohort segmentation'
    ],
    impact: 'Maintains 98.4%+ inbox delivery rates and saves 15+ hours weekly per campaign cycle.'
  },
  'tiffin-saas': {
    tag: 'F&B • MULTI-TENANT',
    title: 'Tiffin SaaS',
    subtitle: 'Cloud-Kitchen & Subscription Meal Dispatch Platform',
    image: 'images/tiffin-saas-showcase.jpg',
    stack: ['Flutter Android & iOS', 'React Admin', 'Node.js', 'PostgreSQL', 'Socket.io'],
    overview: 'A multi-tenant operational SaaS engine designed for meal-prep subscriptions, tiffin services, and cloud kitchens: managing dynamic daily menus, dietary subscriptions, driver routes, and operator consoles.',
    capabilities: [
      'Customer mobile app for pausing, resuming, and customizing daily meal box plans',
      'Automated courier route optimization algorithm for batch morning and evening drop-offs',
      'Live kitchen production boards calculating batch ingredient requirements per service',
      'Automated recurring billing, UPI mandates, and subscription renewal alerts'
    ],
    impact: 'Scaled to 3,400+ active meal subscribers with zero missed delivery windows and 99.9% uptime.'
  },
  'first-key-title': {
    tag: '🇺🇸 USA • TITLE & ESCROW',
    title: 'First Key Title',
    subtitle: 'Multi-Module Client Portal & Automated Order Workflow System',
    image: 'images/title-crm-showcase.jpg',
    stack: ['React', 'Node.js', 'Laravel', 'MySQL', 'AWS S3', 'DocuSign API'],
    overview: 'An enterprise-grade title and escrow operations system engineered for a leading US title agency. Automates order intake, title search pipelines, escrow milestone tracking, and secure document exchange.',
    capabilities: [
      'Multi-party access portal for lenders, brokers, buyers, and settlement agents',
      'Automated title commitment generation and document verification workflows',
      'Role-based milestone approval tracking with audit trail compliance',
      'Secure encrypted closing document repositories and automated closing alerts'
    ],
    impact: 'Reduced title file turnaround times by 40% while handling hundreds of active US real estate transactions monthly.'
  },
  'spring-titles': {
    tag: '🇺🇸 USA • REAL ESTATE PORTAL',
    title: 'Spring Titles',
    subtitle: 'Digital Title Intake, Multi-Step Document Pipelines & Staff Console',
    image: 'images/title-crm-showcase.jpg',
    stack: ['React', 'Laravel', 'Tailwind CSS', 'MySQL', 'REST APIs'],
    overview: 'A high-throughput digital title portal designed to streamline complex real estate transactions across multiple US counties with automated fee calculators and legal document generation.',
    capabilities: [
      'County-specific closing cost and title insurance rate calculators',
      'Multi-stage document intake pipelines with automated OCR and data extraction',
      'Real-time closing schedule calendar with notary dispatch coordination',
      'Dedicated client communication hub with automated SMS & email milestone pings'
    ],
    impact: 'Eliminated manual email follow-ups and processed thousands of title commitments with zero document loss.'
  },
  'title-order-crm': {
    tag: '🇺🇸 USA • ESCROW OPS',
    title: 'Title Order Management CRM',
    subtitle: 'Specialized Enterprise Operations CRM for US Title & Escrow Teams',
    image: 'images/title-crm-showcase.jpg',
    stack: ['React', 'Node.js', 'Laravel', 'MySQL', 'WebSockets'],
    overview: 'A robust internal operations CRM engineered specifically for US title officers and escrow officers to manage order assignment, task checklists, title policy generation, and underwriter compliance.',
    capabilities: [
      'Smart workload-based automated order routing to title examination staff',
      'Comprehensive checklist engine enforcing county recording and municipal search prerequisites',
      'Integration with underwriter APIs for rapid policy issuing and rate verification',
      'Executive dashboard delivering live analytics on file velocity, revenue, and bottlenecks'
    ],
    impact: 'Increased team order processing capacity by 2.2x without adding back-office headcount.'
  },
  'draftcore': {
    tag: '🌍 GLOBAL • SAAS SHELL',
    title: 'Draftcore',
    subtitle: 'Modular SaaS Application Shell & Document Pipeline Engine',
    image: 'images/title-crm-showcase.jpg',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
    overview: 'A high-performance modular SaaS platform foundation built for enterprise document assembly, multi-tenant team billing, and secure legal contracts.',
    capabilities: [
      'Pre-built multi-tenant workspace isolation with role-based access control (RBAC)',
      'Dynamic legal document template engine with live token replacement',
      'Stripe customer portal integration for seat-based and volume-tiered billing',
      'Comprehensive audit logging and team activity telemetry'
    ],
    impact: 'Accelerated time-to-market by 70% for enterprise client contract solutions.'
  },
  'vshopp': {
    tag: '🇮🇳 INDIA • 1.2L+ DOWNLOADS',
    title: 'VShopp Marketplace',
    subtitle: 'Scalable Hyperlocal Multi-Vendor E-Commerce Mobile App',
    image: 'images/vshopp-showcase.jpg',
    icon: 'images/vshopp-playstore-icon.png',
    playstoreUrl: 'https://play.google.com/store/apps/details?id=com.aanandits.vshoppapp',
    rating: '4.4 ★ on Google Play',
    screenshots: [
      'images/vshopp-playstore-screen1.jpg',
      'images/vshopp-playstore-screen2.jpg',
      'images/vshopp-playstore-screen3.jpg',
      'images/vshopp-playstore-screen4.jpg'
    ],
    stack: ['Flutter Mobile', 'Laravel Backend', 'MySQL', 'Google Maps API', 'Firebase Push'],
    overview: 'A comprehensive consumer and merchant hyperlocal commerce mobile ecosystem with over 120,000 active app downloads across Google Play. Powers on-demand local retail shopping, fast deliveries, and multi-vendor store operations.',
    capabilities: [
      'Consumer app with live GPS radius store discovery, flash discounts, and instant cart',
      'Merchant partner app for catalog edits, live inventory adjustments, and order alerts',
      'Delivery partner application with dynamic routing and live turn-by-turn navigation',
      'High-concurrency backend handling seasonal shopping spikes with sub-second API latency'
    ],
    impact: 'Surpassed 120,000+ app downloads on Google Play with a 4.4-star user rating, processing thousands of daily hyperlocal orders.'
  },
  'easyhrx': {
    tag: '🌍 GLOBAL • HR TECH SAAS',
    title: 'EasyHRX',
    subtitle: 'AI-Assisted Human Resources & Mobile Workforce Platform',
    image: 'images/easyhrx-showcase.jpg',
    icon: 'images/easyhrx-playstore-icon.png',
    playstoreUrl: 'https://play.google.com/store/apps/details?id=com.app.easyhrxai',
    rating: '5.0 ★ on Google Play',
    screenshots: [
      'images/easyhrx-playstore-screen1.jpg',
      'images/easyhrx-playstore-screen2.jpg',
      'images/easyhrx-playstore-screen3.jpg',
      'images/easyhrx-playstore-screen4.jpg'
    ],
    stack: ['Next.js', 'Python FastAPI', 'PostgreSQL', 'OpenAI API', 'Mobile Native'],
    overview: 'An intelligent HR SaaS and mobile workforce platform engineered to automate recruitment workflows, attendance tracking with GPS/face-scan, applicant scoring, and automated payroll slips.',
    capabilities: [
      'Mobile attendance with GPS geofencing, selfie check-ins, and shift scheduling',
      'AI resume parsing engine matching candidate qualifications against job requirement matrices',
      'Automated candidate interview scheduling and interactive assessment pipelines',
      'Employee self-service portal for instant leave requests, document vaults, and payroll slips'
    ],
    impact: 'Live on Google Play with a 5.0-star rating, saving HR and operations teams 60% of manual administration time.'
  },
  'dr-jaswant-cancer-care': {
    tag: '🇮🇳 INDIA • SPECIALIST HEALTHCARE',
    title: 'Dr Jaswant Cancer Care',
    subtitle: 'Specialist Oncology Clinical Portal & Encrypted Patient Records',
    image: 'images/hospital-crm-showcase.jpg',
    stack: ['React Web', 'Node.js', 'PostgreSQL', 'Encrypted Cloud Storage', 'Razorpay'],
    overview: 'A digital clinical oncology platform engineered for cancer care specialists to manage confidential patient medical histories, diagnostic imaging reports, treatment regimens, and direct appointment bookings.',
    capabilities: [
      'Strictly HIPAA/DISHA compliant encrypted patient document storage and chemotherapy logs',
      'Direct consultation appointment booking system with automated appointment reminders',
      'Doctor clinical timeline interface showing disease progression and lab test trends',
      'Educational patient portal explaining cancer therapies, nutrition, and home care'
    ],
    impact: 'Modernized the clinic’s patient intake, ensuring zero misplaced diagnostic files and seamless continuity of care.'
  },
  'shravana-rogyam-hospital': {
    tag: '🇮🇳 INDIA • HOSPITAL & PHARMACY',
    title: 'Shravana Rogyam Hospital',
    subtitle: 'Multi-Department Hospital Management & Pharmacy ERP System',
    image: 'images/hospital-crm-showcase.jpg',
    stack: ['React', 'Node.js', 'MySQL', 'Thermal POS SDK', 'REST APIs'],
    overview: 'A comprehensive hospital operations and electronic health records system managing outpatient departments (OPD), inpatient bed allocations (IPD), pathology investigations, and in-house pharmacy dispensing.',
    capabilities: [
      'Centralized OPD token generation and multi-counter queue management',
      'Inpatient bed management with real-time room status, discharge summaries, and nursing notes',
      'High-speed pharmacy point-of-sale integrated with hospital inventory and drug batch tracking',
      'Comprehensive financial reporting covering doctor revenues, procedure costs, and billing'
    ],
    impact: 'Unified 4 disparate clinical departments onto a single platform, eliminating dual data entry.'
  },
  'dermaliza': {
    tag: '🇮🇳 INDIA • DERMATOLOGY',
    title: 'Dermaliza Clinic',
    subtitle: 'Aesthetic Dermatology Brand & Treatment Booking Platform',
    image: 'images/hospital-crm-showcase.jpg',
    stack: ['React', 'PHP Laravel', 'MySQL', 'Tailwind CSS'],
    overview: 'A luxury aesthetic dermatology and skincare clinic platform offering interactive treatment discovery, dermatologist appointment scheduling, and post-procedure care guidance.',
    capabilities: [
      'Visual procedure catalog with before-and-after case galleries and skin concern filters',
      'Direct appointment reservation with dermatologist availability sync',
      'Custom skincare consultation intake forms and medical questionnaire capture',
      'Automated SMS & WhatsApp appointment confirmations and preparation guidelines'
    ],
    impact: 'Boosted online appointment bookings by 85% and elevated the clinic’s digital brand prestige.'
  },
  'wedding-book': {
    tag: '🇮🇳 INDIA • EVENT & AI',
    title: 'Wedding Book',
    subtitle: 'AI Face-Match Photo Distribution & Event Photography CRM',
    image: 'images/weddingbook-showcase.jpg',
    stack: ['Flutter Mobile', 'Python AI', 'OpenCV', 'AWS S3', 'Node.js'],
    overview: 'An AI-powered wedding photography platform that revolutionizes how event photos are delivered to thousands of wedding guests using facial recognition search.',
    capabilities: [
      'Instant AI face-matching: guests take a quick selfie and immediately receive every photo they appear in',
      'High-resolution client gallery proofing with watermarking and instant download locks',
      'Photographer studio CRM for managing bookings, contract agreements, and invoice milestones',
      'Private branded event portals with guest social sharing and print order requests'
    ],
    impact: 'Eliminated manual sorting through 5,000+ event photos, delighting couples and guests with instant photo discovery.'
  },
  'tourbix': {
    tag: '🇮🇳 INDIA • TRAVEL TECH',
    title: 'Tourbix Platform',
    subtitle: 'Multi-Module Travel Booking & Tour Package Platform',
    image: 'images/weddingbook-showcase.jpg',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Stripe / Razorpay', 'Tailwind CSS'],
    overview: 'A scalable travel and holiday package booking engine enabling travel operators to curate multi-day itineraries, manage flight/hotel components, and accept online bookings.',
    capabilities: [
      'Interactive day-by-day itinerary builder with map routes and activity highlights',
      'Automated quotation engine generating branded PDF travel itineraries for clients',
      'Integrated payment gateway supporting advance deposits and scheduled milestone payments',
      'Agent management portal with commission tracking and booking vouchers'
    ],
    impact: 'Transformed traditional offline travel bookings into a seamless, high-converting digital checkout.'
  },
  'bachfun': {
    tag: '🇮🇳 INDIA • COMMERCE APP',
    title: 'Bachfun Kids Marketplace',
    subtitle: 'Curated Kids Products & Multi-Vendor Mobile Marketplace',
    image: 'images/vshopp-showcase.jpg',
    stack: ['Flutter Mobile', 'Node.js', 'MongoDB', 'Razorpay SDK', 'AWS S3'],
    overview: 'A specialized marketplace application tailored for children’s apparel, toys, and educational essentials, featuring curated vendor storefronts and intuitive mobile navigation.',
    capabilities: [
      'Age-appropriate search filters and curated gift guides for parents',
      'Vendor store console for uploading product variants, stock levels, and dispatch tracking',
      'Seamless multi-item cart with unified checkout across different vendor orders',
      'In-app push notifications for order status updates, restock alerts, and seasonal sales'
    ],
    impact: 'Delivered an engaging mobile shopping experience with high repeat purchase rates.'
  },
  'prime-laundry': {
    tag: '🇮🇳 INDIA • ON-DEMAND',
    title: 'Prime Laundry',
    subtitle: 'On-Demand Pickup & Delivery Garment Care Platform',
    image: 'images/bulk-mailer-showcase.jpg',
    stack: ['React Native Mobile', 'React Web', 'Node.js', 'Laravel', 'PostgreSQL'],
    overview: 'An on-demand laundry and dry cleaning operations platform connecting customers with doorstep garment pickup, specialized fabric processing, and scheduled delivery.',
    capabilities: [
      'Flexible pickup & delivery scheduling with live driver proximity alerts',
      'Itemized cloth intake check-in with digital garment tagging and stain notes',
      'Dynamic weight-based and piece-rate automated pricing calculations',
      'Delivery driver route optimization ensuring timely urban drop-offs'
    ],
    impact: 'Streamlined laundry intake and driver scheduling, handling hundreds of weekly residential pickups.'
  },
  'bhilai-tiffins': {
    tag: '🇮🇳 INDIA • SUBSCRIPTION F&B',
    title: 'Bhilai Tiffins & Barsana',
    subtitle: 'Daily Meal Subscription, Kitchen Operations & Route Logistics',
    image: 'images/tiffin-saas-showcase.jpg',
    stack: ['Flutter Mobile', 'Node.js', 'MySQL', 'UPI AutoPay', 'SMS Gateway'],
    overview: 'A localized subscription meal delivery ecosystem serving working professionals and students with home-cooked meal subscriptions and morning/evening delivery logistics.',
    capabilities: [
      'Customer meal subscription portal with 1-click meal pause, resume, and meal customization',
      'Batch kitchen dispatch lists generated automatically for morning and evening kitchen shifts',
      'Courier delivery route sheets organized by neighborhood clusters to minimize delivery times',
      'Automated weekly and monthly UPI subscription renewals with instant payment receipts'
    ],
    impact: 'Powers daily meals for 1,500+ active subscribers with automated kitchen logistics.'
  },
  'barsana-kitchen': {
    tag: '🇮🇳 INDIA • FOOD BRAND',
    title: 'Barsana Kitchen',
    subtitle: 'Direct-to-Consumer Food Brand & Scheduled Online Ordering',
    image: 'images/tiffin-saas-showcase.jpg',
    stack: ['React', 'WooCommerce API', 'MySQL', 'Tailwind CSS'],
    overview: 'A branded digital ordering experience for a premier food brand, allowing customers to explore daily culinary specials, place advance orders, and arrange catering.',
    capabilities: [
      'High-speed digital menu with dietary tags (Pure Veg, Jain, Low-Spice)',
      'Scheduled advance ordering engine for bulk party orders and family gatherings',
      'Direct WhatsApp order confirmation and real-time kitchen preparation status',
      'Integrated delivery partner coordination for fast urban deliveries'
    ],
    impact: 'Doubled online order volume and established a distinct digital brand presence.'
  },
  'drv-assistants': {
    tag: '🇮🇳 INDIA • FLEET LOGISTICS',
    title: 'DRV Assistants',
    subtitle: 'Field Team Driver Assistant & Logistics Operations Platform',
    image: 'images/tiffin-saas-showcase.jpg',
    stack: ['Flutter Mobile', 'Node.js', 'Firebase', 'GPS Telemetry Engine'],
    overview: 'A dedicated logistics coordination and driver assistant mobile platform engineered to manage field service drivers, assigned stops, real-time vehicle telemetry, and proof-of-delivery capture.',
    capabilities: [
      'Turn-by-turn route dispatch with optimized stop sequencing to minimize fuel consumption',
      'Digital proof of delivery with customer e-signatures and photo verification',
      'Offline-first mobile mode ensuring field updates sync automatically once connectivity returns',
      'Central dispatcher console providing live vehicle GPS tracking and ETA predictions'
    ],
    impact: 'Increased driver on-time delivery rates to 97% across regional logistics routes.'
  },
  'hamar-dukan': {
    tag: '🇮🇳 INDIA • RETAIL E-COMMERCE',
    title: 'Hamar Dukan',
    subtitle: 'Multi-Category Regional Online Storefront & Quick Cart',
    image: 'images/vshopp-showcase.jpg',
    stack: ['React', 'Laravel', 'MySQL', 'Razorpay Payment Gateway'],
    overview: 'An accessible regional e-commerce storefront tailored for local retailers to bring their complete product catalog online with lightweight mobile checkout.',
    capabilities: [
      'Ultra-fast search and product filtering by category, price, and in-stock status',
      'Lightweight checkout optimized for 3G/4G connections without cart abandonment',
      'Merchant order management panel with instant printing of shipping labels',
      'WhatsApp integration allowing customers to ask product questions with one tap'
    ],
    impact: 'Helped regional retailers expand beyond foot traffic to thousands of digital customers.'
  },
  'zensewa': {
    tag: '🌍 GLOBAL • ON-DEMAND SERVICES',
    title: 'Zensewa Platform',
    subtitle: 'On-Demand Service Matching & Technician Dispatch Architecture',
    image: 'images/ai-saas-showcase.jpg',
    stack: ['React Web', 'Node.js', 'Socket.io', 'MongoDB', 'GeoJSON'],
    overview: 'A full-stack on-demand home and facility service dispatch application matching customer repair and maintenance requests with certified local technicians.',
    capabilities: [
      'Real-time proximity matching connecting customers with nearest available service providers',
      'In-app quoting, scope confirmation, and escrow-style milestone payments',
      'Technician job schedule calendar with navigation routes and job checklists',
      'Dual rating and review verification system guaranteeing quality service standards'
    ],
    impact: 'Engineered as a robust on-demand reference architecture for high-concurrency dispatch.'
  }
};


document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lenis Smooth Scrolling
  let lenis = null;
  try {
    if (typeof Lenis !== 'undefined') {
      lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: false
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
      }
    }
  } catch (err) {
    console.warn('Lenis scroll skipped:', err);
  }

  // 2. GSAP Fade-in Reveals on Scroll
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.utils.toArray('.reveal-fade').forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 22 },
        {
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none'
          },
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: 'power2.out'
        }
      );
    });

    // 3. Animated Number Counter for Stats Strip (Fires immediately on Page Load)
    function startCounters() {
      const statYears = document.getElementById('stat-years');
      const statDownloads = document.getElementById('stat-downloads');
      const statRevenue = document.getElementById('stat-revenue');
      const statIp = document.getElementById('stat-ip');

      if (statYears && statDownloads && statRevenue && statIp && typeof gsap !== 'undefined') {
        // Years Counter (0 -> 12+)
        const yearsObj = { val: 0 };
        gsap.to(yearsObj, {
          val: 12,
          duration: 1.8,
          ease: 'power3.out',
          onUpdate: () => { statYears.innerHTML = Math.floor(yearsObj.val) + '<span class="text-[#FFD500] font-normal">+</span>'; }
        });

        // Downloads Counter (0 -> 3M+)
        const downObj = { val: 0 };
        gsap.to(downObj, {
          val: 3,
          duration: 2.0,
          ease: 'power3.out',
          onUpdate: () => { statDownloads.innerHTML = Math.floor(downObj.val) + '<span class="text-[#FFD500] font-normal">M+</span>'; }
        });

        // Revenue Counter (0 -> $1B+)
        const revObj = { val: 0 };
        gsap.to(revObj, {
          val: 1,
          duration: 1.6,
          ease: 'power3.out',
          onUpdate: () => { statRevenue.innerHTML = '<span class="text-[#FFD500] font-normal">$</span>' + Math.floor(revObj.val) + '<span class="text-[#FFD500] font-normal">B+</span>'; }
        });

        // IP Ownership Counter (0 -> 100%)
        const ipObj = { val: 0 };
        gsap.to(ipObj, {
          val: 100,
          duration: 2.2,
          ease: 'power3.out',
          onUpdate: () => { statIp.innerHTML = Math.floor(ipObj.val) + '<span class="text-[#FFD500] font-normal">%</span>'; }
        });
      }
    }

    // Trigger on page load with slight delay for smooth visual appearance
    setTimeout(startCounters, 250);
  }

  // 4. Product Spec Modal Handling
  const modal = document.getElementById('specModal');
  const modalBackdrop = document.getElementById('specBackdrop');
  const modalCloseBtn = document.getElementById('specCloseBtn');
  const specTriggers = document.querySelectorAll('.product-spec-trigger');

  function openSpecModal(productId) {
    const data = productSpecs[productId];
    if (!data || !modal) return;

    document.getElementById('specTag').textContent = data.tag;
    document.getElementById('specTitle').textContent = data.title;
    document.getElementById('specSubtitle').textContent = data.subtitle;
    document.getElementById('specImage').src = data.image;
    document.getElementById('specOverview').textContent = data.overview;
    document.getElementById('specImpact').textContent = data.impact;

    const stackContainer = document.getElementById('specStack');
    stackContainer.innerHTML = '';
    data.stack.forEach((tech) => {
      const pill = document.createElement('span');
      pill.className = 'px-3 py-1 rounded-full text-xs font-mono bg-white/[0.06] border border-white/10 text-zinc-300';
      pill.textContent = tech;
      stackContainer.appendChild(pill);
    });

    const capContainer = document.getElementById('specCapabilities');
    capContainer.innerHTML = '';
    data.capabilities.forEach((cap) => {
      const li = document.createElement('li');
      li.className = 'flex items-start gap-2 text-sm text-zinc-300';
      li.innerHTML = `<span class="text-zinc-400 mt-1">✦</span><span>${cap}</span>`;
      capContainer.appendChild(li);
    });

    // Play Store Button Handling
    const playstoreBtn = document.getElementById('specPlaystoreLink');
    if (playstoreBtn) {
      if (data.playstoreUrl) {
        playstoreBtn.href = data.playstoreUrl;
        playstoreBtn.classList.remove('hidden');
        playstoreBtn.classList.add('inline-flex');
      } else {
        playstoreBtn.classList.add('hidden');
        playstoreBtn.classList.remove('inline-flex');
      }
    }

    // Mobile App Screenshots Rail
    const screensContainer = document.getElementById('specScreenshotsContainer');
    const screensRail = document.getElementById('specScreenshotsRail');
    if (screensContainer && screensRail) {
      if (data.screenshots && data.screenshots.length > 0) {
        screensRail.innerHTML = '';
        data.screenshots.forEach((src) => {
          const img = document.createElement('img');
          img.src = src;
          img.alt = data.title + ' Screenshot';
          img.className = 'h-52 w-auto aspect-[9/16] object-cover rounded-xl border border-white/10 shadow-lg shrink-0 hover:scale-105 transition-transform duration-300';
          screensRail.appendChild(img);
        });
        screensContainer.classList.remove('hidden');
      } else {
        screensContainer.classList.add('hidden');
      }
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    if (lenis) lenis.stop();

    if (typeof gsap !== 'undefined') {
      gsap.fromTo(modalBackdrop, { opacity: 0 }, { opacity: 1, duration: 0.25 });
      gsap.fromTo('#specContainer',
        { opacity: 0, y: 25, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power3.out' }
      );
    }
  }

  function closeSpecModal() {
    if (!modal) return;
    if (typeof gsap !== 'undefined') {
      gsap.to('#specContainer', {
        opacity: 0,
        y: 15,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          modal.classList.add('hidden');
          document.body.style.overflow = '';
          if (lenis) lenis.start();
        }
      });
      gsap.to(modalBackdrop, { opacity: 0, duration: 0.2 });
    } else {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
      if (lenis) lenis.start();
    }
  }

  // Event Delegation for All Product Spec Triggers (Hero Cards + Directory Cards)
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.product-spec-trigger');
    if (trigger) {
      e.preventDefault();
      const id = trigger.getAttribute('data-product');
      if (id) openSpecModal(id);
    }
  });

  // Category Filter Tab Switching for Project Archive
  const filterTabs = document.querySelectorAll('.archive-filter-btn');
  const directoryCards = document.querySelectorAll('.project-directory-card');

  if (filterTabs.length > 0 && directoryCards.length > 0) {
    filterTabs.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        // Update active tab button style
        filterTabs.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter directory cards smoothly
        directoryCards.forEach((card) => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.classList.remove('card-hidden');
            if (typeof gsap !== 'undefined') {
              gsap.fromTo(card,
                { opacity: 0, y: 12 },
                { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
              );
            }
          } else {
            card.classList.add('card-hidden');
          }
        });
      });
    });
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeSpecModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeSpecModal);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeSpecModal();
    }
  });

  // 5. Mobile Navigation Drawer Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    document.querySelectorAll('.mobile-nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Smooth anchor scrolling
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        if (lenis) {
          lenis.scrollTo(target, { offset: -70, duration: 1.15 });
        } else {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // 6. Interactive Cursor-Reactive Grid Spotlight & Dynamic Hue Shift
  const interactiveGrid = document.querySelector('.grid-interactive-reactive');
  const ambientAura = document.querySelector('.grid-ambient-aura');

  if (interactiveGrid || ambientAura) {
    let mouseX = -500;
    let mouseY = -500;
    let currentX = -500;
    let currentY = -500;
    let isInside = false;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isInside) {
        isInside = true;
        if (interactiveGrid) interactiveGrid.style.opacity = '1';
        if (ambientAura) ambientAura.style.opacity = '1';
      }
    });

    document.addEventListener('mouseleave', () => {
      isInside = false;
      if (interactiveGrid) interactiveGrid.style.opacity = '0';
      if (ambientAura) ambientAura.style.opacity = '0';
    });

    // Smooth lerp animation loop for 60fps buttery tracking
    function animateCursorGrid() {
      if (isInside) {
        currentX += (mouseX - currentX) * 0.18;
        currentY += (mouseY - currentY) * 0.18;

        document.documentElement.style.setProperty('--cursor-x', `${currentX}px`);
        document.documentElement.style.setProperty('--cursor-y', `${currentY}px`);

        // Compute dynamic color shifting:
        // Maps X position to a spectrum (from amber-gold 40° through cyan-blue 200° and emerald 150°)
        const xRatio = Math.max(0, Math.min(1, currentX / window.innerWidth));
        const yRatio = Math.max(0, Math.min(1, currentY / window.innerHeight));
        const hue = Math.floor(40 + xRatio * 160 + yRatio * 40);

        const glowColor = `hsla(${hue}, 92%, 64%, 0.45)`;
        const auraColor = `hsla(${hue}, 88%, 62%, 0.08)`;

        document.documentElement.style.setProperty('--grid-glow-color', glowColor);
        document.documentElement.style.setProperty('--aura-color', auraColor);
      }
      requestAnimationFrame(animateCursorGrid);
    }
    requestAnimationFrame(animateCursorGrid);
  }
});


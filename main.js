/**
 * Aanandi Technosoft - Interactive Experience Engine
 * Enhanced with Animated Number Counters, Marquee & Micro-Interactions
 */

// Product Specs Database for "Battle-Tested" products
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
    impact: 'Scaled to 3,400+ active meal subscribers with zero missed delivery slots and 99.9% uptime.'
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

  specTriggers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-product');
      openSpecModal(id);
    });
  });

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
});


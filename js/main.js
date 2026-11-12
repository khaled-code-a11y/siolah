/**
 * السيولة الفورية - Al-Soyoula Al-Fawriya
 * JavaScript Functionality
 * Pure Vanilla JS - Blazing Fast & No Dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     1. FAQ Accordion Controller (Exactly 4 Questions)
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    const answerCollapse = item.querySelector('.faq-answer-collapse');

    if (questionBtn && answerCollapse) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherBtn = otherItem.querySelector('.faq-question-btn');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
            const otherCollapse = otherItem.querySelector('.faq-answer-collapse');
            if (otherCollapse) otherCollapse.style.maxHeight = null;
          }
        });

        // Toggle current item
        if (isActive) {
          item.classList.remove('active');
          questionBtn.setAttribute('aria-expanded', 'false');
          answerCollapse.style.maxHeight = null;
        } else {
          item.classList.add('active');
          questionBtn.setAttribute('aria-expanded', 'true');
          answerCollapse.style.maxHeight = answerCollapse.scrollHeight + 'px';
        }
      });
    }
  });

  // Open first FAQ item by default
  if (faqItems.length > 0) {
    const firstItem = faqItems[0];
    const firstBtn = firstItem.querySelector('.faq-question-btn');
    const firstCollapse = firstItem.querySelector('.faq-answer-collapse');
    firstItem.classList.add('active');
    if (firstBtn) firstBtn.setAttribute('aria-expanded', 'true');
    if (firstCollapse) {
      firstCollapse.style.maxHeight = firstCollapse.scrollHeight + 'px';
    }
  }

  /* ==========================================================================
     2. Navbar & Mobile Menu Drawer
     ========================================================================== */
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const siteHeader = document.querySelector('.site-header');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileNavDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileNavDrawer.classList.toggle('open');
      const isExpanded = mobileNavDrawer.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!mobileNavDrawer.contains(e.target) && !mobileToggle.contains(e.target) && mobileNavDrawer.classList.contains('open')) {
        mobileNavDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ==========================================================================
     3. Header Elevation on Scroll
     ========================================================================== */
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }
  }, { passive: true });

  /* ==========================================================================
     4. Scroll Reveal Animations (Intersection Observer)
     ========================================================================== */
  const animatedElements = document.querySelectorAll('.fade-up-element');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
  } else {
    animatedElements.forEach(el => el.classList.add('in-view'));
  }

  /* ==========================================================================
     5. UTM Parameter Tracking for WhatsApp Links
     ========================================================================== */
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source');
    const utmCampaign = urlParams.get('utm_campaign');

    if (utmSource || utmCampaign) {
      const waLinks = document.querySelectorAll('a[href^="https://wa.me/"]');
      waLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.includes('utm_ref=')) {
          const separator = href.includes('?') ? '&' : '?';
          link.setAttribute('href', `${href}${separator}utm_ref=${encodeURIComponent(utmSource || 'direct')}`);
        }
      });
    }
  } catch (err) {
    console.warn('UTM parser notice:', err);
  }
});

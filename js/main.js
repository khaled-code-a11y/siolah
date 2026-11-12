/**
 * السيولة الفورية - Al-Soyoula Al-Fawriya
 * JavaScript Functionality & Calculator Controller
 * Pure Vanilla JS - Blazing Fast & No Dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  // Constants
  const WHATSAPP_PHONE = '966598438224';

  /* ==========================================================================
     1. Calculator Controller
     ========================================================================== */
  const providerTabs = document.querySelectorAll('.toggle-provider-btn');
  const amountSlider = document.getElementById('amountSlider');
  const dynamicAmountDisplay = document.getElementById('dynamicAmount');
  const breakdownAmount = document.getElementById('breakdownAmount');
  const breakdownInstallments = document.getElementById('breakdownInstallments');
  const breakdownMonthly = document.getElementById('breakdownMonthly');
  const calcSubmitBtn = document.getElementById('calcSubmitBtn');
  const presetChips = document.querySelectorAll('.preset-chip-btn');

  let currentProvider = 'tabby'; // 'tabby' or 'tamara'
  let currentAmount = 5000;

  const providerConfig = {
    tabby: {
      name: 'تابي (Tabby)',
      installments: 4,
      installmentText: '4 أقساط شهرية (بدون فوائد)',
      min: 500,
      max: 15000,
      step: 500,
      default: 5000
    },
    tamara: {
      name: 'تمارا (Tamara)',
      installments: 4,
      installmentText: '4 دفعات شهرية ميسرة',
      min: 500,
      max: 30000,
      step: 500,
      default: 7000
    }
  };

  function updateSliderBackground(slider) {
    if (!slider) return;
    const min = parseFloat(slider.min) || 500;
    const max = parseFloat(slider.max) || 30000;
    const val = parseFloat(slider.value) || 5000;
    const percentage = ((val - min) / (max - min)) * 100;
    slider.style.background = `linear-gradient(to left, #00E599 0%, #00E599 ${percentage}%, rgba(255, 255, 255, 0.1) ${percentage}%, rgba(255, 255, 255, 0.1) 100%)`;
  }

  function calculateAndRender() {
    const config = providerConfig[currentProvider];
    const amount = parseInt(currentAmount, 10);
    const installments = config.installments;
    const monthlyApprox = Math.round(amount / installments);

    // Format numbers in Arabic locale
    const formattedAmount = amount.toLocaleString('ar-SA');
    const formattedMonthly = monthlyApprox.toLocaleString('ar-SA');

    if (dynamicAmountDisplay) dynamicAmountDisplay.textContent = formattedAmount;
    if (breakdownAmount) breakdownAmount.textContent = `${formattedAmount} ر.س`;
    if (breakdownInstallments) breakdownInstallments.textContent = config.installmentText;
    if (breakdownMonthly) breakdownMonthly.textContent = `${formattedMonthly} ر.س`;

    // Update CTA button text & WhatsApp link
    if (calcSubmitBtn) {
      const btnTextSpan = calcSubmitBtn.querySelector('.calc-btn-text');
      if (btnTextSpan) {
        btnTextSpan.textContent = `طلب سيولة (${formattedAmount} ريال) عبر واتساب`;
      }

      const waMessage = `السلام عليكم، أرغب في الحصول على سيولة عبر خدمة ${config.name} بمبلغ ${amount} ريال سعودي (بدون توثيق مصدر الدخل). أرجو تزويدي بالتفاصيل وخطوات التحويل.`;
      calcSubmitBtn.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(waMessage)}`;
    }

    // Highlight active preset chip if matches
    presetChips.forEach(chip => {
      const chipVal = parseInt(chip.getAttribute('data-value'), 10);
      if (chipVal === amount) {
        chip.classList.add('active');
      } else {
        chip.classList.remove('active');
      }
    });

    if (amountSlider) {
      amountSlider.value = amount;
      updateSliderBackground(amountSlider);
    }
  }

  // Handle Provider Switch
  providerTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const provider = btn.getAttribute('data-provider');
      if (provider === currentProvider) return;

      currentProvider = provider;

      providerTabs.forEach(b => {
        b.classList.remove('active', 'tabby-active', 'tamara-active');
      });

      if (currentProvider === 'tabby') {
        btn.classList.add('active', 'tabby-active');
        if (amountSlider) {
          amountSlider.max = providerConfig.tabby.max;
          if (currentAmount > providerConfig.tabby.max) {
            currentAmount = providerConfig.tabby.max;
          }
        }
      } else {
        btn.classList.add('active', 'tamara-active');
        if (amountSlider) {
          amountSlider.max = providerConfig.tamara.max;
        }
      }

      calculateAndRender();
    });
  });

  // Handle Slider Change
  if (amountSlider) {
    amountSlider.addEventListener('input', (e) => {
      currentAmount = parseInt(e.target.value, 10);
      calculateAndRender();
    });
  }

  // Handle Preset Chips
  presetChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const val = parseInt(chip.getAttribute('data-value'), 10);
      const config = providerConfig[currentProvider];
      if (val <= config.max) {
        currentAmount = val;
        calculateAndRender();
      } else {
        // Switch to Tamara if value is beyond Tabby limit
        currentProvider = 'tamara';
        providerTabs.forEach(b => {
          b.classList.remove('active', 'tabby-active', 'tamara-active');
          if (b.getAttribute('data-provider') === 'tamara') {
            b.classList.add('active', 'tamara-active');
          }
        });
        if (amountSlider) amountSlider.max = providerConfig.tamara.max;
        currentAmount = val;
        calculateAndRender();
      }
    });
  });

  // Initial Calculation
  calculateAndRender();

  /* ==========================================================================
     2. FAQ Accordion Controller
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
            const otherCollapse = otherItem.querySelector('.faq-answer-collapse');
            if (otherCollapse) otherCollapse.style.maxHeight = null;
          }
        });

        // Toggle current item
        if (isActive) {
          item.classList.remove('active');
          answerCollapse.style.maxHeight = null;
        } else {
          item.classList.add('active');
          answerCollapse.style.maxHeight = answerCollapse.scrollHeight + 'px';
        }
      });
    }
  });

  // Open the first FAQ item by default
  if (faqItems.length > 0) {
    const firstItem = faqItems[0];
    const firstCollapse = firstItem.querySelector('.faq-answer-collapse');
    firstItem.classList.add('active');
    if (firstCollapse) {
      firstCollapse.style.maxHeight = firstCollapse.scrollHeight + 'px';
    }
  }

  /* ==========================================================================
     3. Navbar & Mobile Menu Drawer
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

    // Close mobile menu if clicked outside
    document.addEventListener('click', (e) => {
      if (!mobileNavDrawer.contains(e.target) && !mobileToggle.contains(e.target) && mobileNavDrawer.classList.contains('open')) {
        mobileNavDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ==========================================================================
     4. Sticky Header on Scroll
     ========================================================================== */
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }
  }, { passive: true });

  /* ==========================================================================
     5. Scroll Reveal Animations (Intersection Observer)
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
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
  } else {
    // Fallback if IntersectionObserver is not supported
    animatedElements.forEach(el => el.classList.add('in-view'));
  }

  /* ==========================================================================
     6. UTM Parameter Handling for WhatsApp links
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

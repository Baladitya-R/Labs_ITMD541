// Baladitya Retta
// ITMD 541-01 Graduate Student

(function () {
    // Task 1: Update the main heading inside the hero section
    const mainTitle = document.querySelector('h1');
    if (mainTitle) {
      mainTitle.textContent = 'Uplift Your Brand with Stellar Marketing';
    }
  
    // Task 2: Modify the hero subtext with bold/italic formatting (single line)
    setTimeout(() => {
      const candidates = document.querySelectorAll('p, span, div, h2, h3');
      for (const element of candidates) {
        if (
          element.textContent.trim() ===
          'We create innovative marketing strategies to help your business shine.'
        ) {
          element.innerHTML =
            'Utilize cutting-edge strategies from Stellar Marketing to help your business <b><i>thrive</i></b> and <b><i>excel</i></b>.';
          break;
        }
      }
    }, 200);
  
    // Task 3: Apply a new background image to the hero container
    const heroArea = document.querySelector('h1')?.closest('section, div, header');
    if (heroArea) {
      Object.assign(heroArea.style, {
        backgroundImage: 'url("https://picsum.photos/id/683/1280/720")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      });
    }
  
    // Task 4: Set nav bar color to match footer background
    setTimeout(() => {
      const siteFooter = document.querySelector('footer');
      const footerColor = siteFooter ? getComputedStyle(siteFooter).backgroundColor : '#1a1a2e';
      const navStyle = document.createElement('style');
      navStyle.textContent = `
        nav, header {
          background-color: ${footerColor} !important;
        }
      `;
      document.head.appendChild(navStyle);
    }, 100);
  
    // Task 5: Eliminate the "Get Started" anchor button
    const callToAction = Array.from(document.querySelectorAll('a')).find(
      link => link.textContent.trim() === 'Get Started'
    );
    if (callToAction) {
      callToAction.remove();
    }
  
    // Task 6: Center align target section headings
    document.querySelectorAll('section h2').forEach(heading => {
      const lowerText = heading.textContent.trim().toLowerCase();
      if (
        lowerText.includes('our services') ||
        lowerText.includes('specialized marketing solutions') ||
        lowerText.includes('contact us')
      ) {
        heading.style.textAlign = 'center';
      }
    });
  
    // Task 7: Make all icons in the services section green
    const icons = document.querySelectorAll('#services .material-symbols-outlined');
    icons.forEach(icon => {
      icon.style.color = '#47C714';
    });
  
    // Task 8: Replace first service icon with "ads_click"
    const firstServiceIcon = document.querySelector('#services .material-symbols-outlined');
    if (firstServiceIcon) {
      firstServiceIcon.textContent = 'ads_click';
    }
  
    // Task 9: Force 4-tile layout on all screen sizes (no stacking at smaller widths)
    const layoutStyle = document.createElement('style');
    layoutStyle.textContent = `
      #solutions .grid {
        display: grid !important;
        grid-template-columns: repeat(4, 1fr) !important;
        gap: 1rem !important;
      }
      #solutions .grid > * {
        min-width: 0 !important;
      }
      @media (max-width: 767px) {
        #solutions .grid {
          zoom: 0.8;
        }
      }
    `;
    document.head.appendChild(layoutStyle);
  
    // Task 10: Swap out the Musicians image
    const musicTile = Array.from(document.querySelectorAll('#solutions img')).find(img =>
      img.alt.toLowerCase().includes('musicians')
    );
    if (musicTile) {
      musicTile.src = 'https://picsum.photos/id/453/400/300';
    }
  
    // Graduate Requirement: Handle form validation + block default submission
    const contactForm = document.querySelector('form');
    if (contactForm) {
      contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
  
        const userName = contactForm.querySelector('input[name="name"]')?.value.trim();
        const userEmail = contactForm.querySelector('input[name="email"]')?.value.trim();
  
        if (userName && userEmail) {
          alert(`Thank you, ${userName}! We will be in touch with you shortly at ${userEmail}.`);
        } else {
          alert('Please provide a name and email.');
        }
      });
    }
  })();

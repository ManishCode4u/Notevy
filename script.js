// ✅ Tailwind config for CDN (ONLY if you're using <script src="https://cdn.tailwindcss.com"> in HTML head)
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#6C63FF',
        dark: '#121826',
        darker: '#0D1116',
        accent: '#FF6584',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    }
  }
};

// ✅ Include navbar and footer
function includeHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;

      // Navbar ke load hone ke baad scripts init karo
      if (id === "navbar") initNavbarScripts();
    });
}

window.onload = function () {
  includeHTML("navbar", "navbar.html");
  includeHTML("footer", "footer.html");
};

// ✅ Navbar behavior setup
function initNavbarScripts() {
  const menuBtn = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');

  if (menuBtn && menu) {
    menuBtn.addEventListener('click', function () {
      menu.classList.toggle('hidden');
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth',
        });
      }
    });
  });

  // Shadow on scroll
  window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (nav) {
      if (window.scrollY > 10) {
        nav.classList.add('shadow-xl');
      } else {
        nav.classList.remove('shadow-xl');
      }
    }
  });
}


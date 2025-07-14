feather.replace(); // Activa Feather Icons

const toggle = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");
const body = document.body;

// Guardar tema en localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  icon.dataset.feather = "moon";
  feather.replace();
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  icon.dataset.feather = isDark ? "moon" : "sun";
  feather.replace();
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

const botones = document.querySelectorAll('.btn-cat');
const bloques = document.querySelectorAll('.categoria-bloque');

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    // Activar botón
    botones.forEach(b => b.classList.remove('active'));
    boton.classList.add('active');

    // Mostrar bloque correspondiente
    const categoria = boton.getAttribute('data-cat');
    bloques.forEach(b => {
      b.classList.remove('visible');
      if (b.getAttribute('data-cat') === categoria) {
        b.classList.add('visible');
      }
    });
  });
});

const header = document.querySelector('.main-header')
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

const navbarNav = document.querySelector(".navbar-nav");
const menu = document.querySelector("#menu");

menu.addEventListener("click", () => {
  navbarNav.classList.toggle("active");

  // Cek apakah navbarNav memiliki kelas active
  if (navbarNav.classList.contains("active")) {
    // Jika ya, ganti ikon menjadi "X"
    menu.innerHTML = '<i class="bi bi-x"></i>';
  } else {
    // Jika tidak, ganti ikon menjadi "list"
    menu.innerHTML = '<i class="bi bi-list"></i>';
  }
});

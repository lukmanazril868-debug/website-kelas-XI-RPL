const buttons = document.querySelectorAll(".nav-btn");
const pages = document.querySelectorAll(".page");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    // aktifkan tombol
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // tampilkan page
    const page = btn.dataset.page;
    pages.forEach(p => p.classList.remove("active"));
    document.getElementById(page).classList.add("active");
  });
});

const buttons = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // clear active button
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // show page
    const pageName = btn.dataset.page;
    pages.forEach(p => {
      p.classList.remove("active");
      if (p.id === pageName) p.classList.add("active");
    });
  });
});

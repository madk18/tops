let btns = document.querySelectorAll(".btn-toggle");
let wraps = document.querySelectorAll(".wrap");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    wraps[i].classList.toggle("active");
  });
}

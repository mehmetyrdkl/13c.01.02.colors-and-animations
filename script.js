import { inView, animate, scroll } from "https://cdn.skypack.dev/motion";

// document.querySelectorAll("section > article").forEach((item) => {
//   scroll(animate(item, { opacity: [0, 1, 1, 0] }), {
//     target: item,
//     offset: ["start end", "end end", "start start", "end start"],
//   });
// });

inView("section", ({ target }) => {
  animate(
    target.querySelector(".fade"),
    { opacity: 1, x: [-70, -50, 0] },
    { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
  );
});

const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", function () {
  toggle.classList.toggle("toggled");
  document.body.classList.toggle("dark-mode");
});

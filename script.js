import { inView, animate, scroll } from "https://cdn.skypack.dev/motion";

document.querySelectorAll("section > article").forEach((item) => {
  scroll(animate(item, { opacity: [0, 1, 1, 0] }), {
    target: item,
    offset: ["start end", "end end", "start start", "end start"],
  });
});

const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", function () {
  toggle.classList.toggle("toggled");
});

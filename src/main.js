import sunImgUrl from "./media/sun.jpg";
import anime from "animejs";

const imgEl = document.querySelector("img");
imgEl.src = sunImgUrl;

anime({
  targets: imgEl,
  rotate: 540,
});

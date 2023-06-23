"use strict";
import C from "./Carousel-v3.js";

C.style();
const carousel = new C(["./images/sea.jpg", "./images/lava.jpg"]);
document.body.append(carousel.carousel);
carousel.init();
const carousel2 = new C(["./images/pizza.jpg", "./images/space.jpg"]);
document.body.append(carousel2.carousel);
carousel2.init();
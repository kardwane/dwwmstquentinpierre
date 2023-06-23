"use strict";
import C from "./Carousel-v2.js";
const carousel = C.create(["./images/sea.jpg", "./images/lava.jpg"]);
document.body.append(carousel);
C.init(true);
// const carousel2 = C.create(["./images/pizza.jpg", "./images/space.jpg"]);
// document.body.append(carousel2);
// C.init(true);
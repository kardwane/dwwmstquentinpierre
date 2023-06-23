"use strict";
const Carousel = {
	btns: [],
	dots: [],
	items: [],
	create: function(imgs){
		// Crée mon carousel.
		const container = document.createElement("div");
		container.classList.add("carousel-container");
		const dots = document.createElement("div");
		dots.classList.add("dots");
		imgs.forEach((img, i)=>{
			const div = document.createElement("div");
			div.classList.add("items", "fade");
			const image = document.createElement("img");
			image.src = img;
			div.append(image);
			const dot = document.createElement("span");
			dot.classList.add("dot");
			dot.dataset.id = i;
			dots.append(dot);
			container.append(div);
			this.dots.push(dot);
			this.items.push(div);
		})
		container.append(dots);
		const next = document.createElement("a");
		next.classList.add("next");
		next.innerHTML = "&#10095;";
		this.btns.push(next);
		const prev = document.createElement("a");
		prev.classList.add("prev");
		prev.innerHTML = "&#10094;";
		this.btns.push(prev);
		container.append(next, prev);
		return container;
	},
	showItems: function(n){
		// Affiche un élément de mon carousel et cache les autres.
		this.index = n> this.items.length -1 ? 0: n<0? this.items.length-1: n;
		this.items.forEach((item, i)=>{
			item.style.display = "none";
			this.dots[i].classList.remove("active");
		})
		this.items[this.index].style.display = "block";
		this.dots[this.index].classList.add("active");
	},
	currentItem: function(e){
		// Affiche l'image qui correspond au point.
		let n = parseInt(e.target.dataset.id);
		this.showItems(n);
	},
	changeItem: function(e){
		if(e.target.classList.contains("next")){
			this.showItems(++this.index);
		}else{
			this.showItems(--this.index);
		}
	},
	init: function(style = false){
		// Affiche la première image et ajoute les écouteurs d'évènment.
		this.showItems(0);
		this.dots.forEach(dot=>dot.addEventListener("pointerdown", this.currentItem.bind(this)));
		this.btns.forEach(btn=>btn.addEventListener("pointerdown", this.changeItem.bind(this)));
		if(style){
			this.style();
		}
	},
	style: function(){
		const style = document.createElement("style");
		style.textContent = 
`.carousel-container {
	width: 60vw;
	aspect-ratio: 16/9;
	position: relative;
	margin: auto;
}

.carousel-container img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.carousel-container .items {
	width: 100%;
	height: 100%;
	display: none;
}
/* Next & previous buttons */
.carousel-container .prev,
.carousel-container .next {
	cursor: pointer;
	position: absolute;
	top: 50%;
	width: auto;
	margin-top: -22px;
	padding: 16px;
	color: white;
	font-weight: bold;
	font-size: 18px;
	transition: 0.6s ease;
	border-radius: 0 3px 3px 0;
	user-select: none;
}
.carousel-container .next {
	right: 0;
	border-radius: 3px 0 0 3px;
}
.carousel-container .prev:hover,
.carousel-container .next:hover {
	background-color: rgba(0, 0, 0, 0.8);
}
.carousel-container .dots{
	text-align: center;
}
.carousel-container .dot {
	cursor: pointer;
	height: 15px;
	width: 15px;
	margin: 0 2px;
	background-color: #bbb;
	border-radius: 50%;
	display: inline-block;
	transition: background-color 0.6s ease;
}

.carousel-container .active,
.carousel-container .dot:hover {
	background-color: #717171;
}`;
		document.head.append(style);
	}
}
export default Carousel;
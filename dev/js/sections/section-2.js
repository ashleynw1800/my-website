import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section2TL=gsap.timeline();
section2TL.from (".container1 img", {duration: 2, alpha: 0, x:-10, stagger: 0.8}) 
				.from (".container2 img", {duration: 2, alpha: 0, x:-10, stagger: 0.8})
				.from (".container3 img", {duration: 2, alpha: 0, x:-10, stagger: 0.8})



export function section2Animation (){
	ScrollTrigger.create({
		markers: true,
		animation: section2TL,
		toggleActions: "restart none reverse none",
		scrub: 1,
		trigger: "#section-2",
		start: "top, 50%",
		end: "bottom, 30%"
	});

}

const section22TL=gsap.timeline();
section22TL.from (".container4 img", {duration: 2, alpha: 0, x:-10, stagger: 0.8})
				.from (".container5 img", {duration: 2, alpha: 0, x:-10, stagger: 0.8})
				.from (".container6 img", {duration: 2, alpha: 0, x:-10, stagger: 0.8});


export function section22Animation (){
	ScrollTrigger.create({
		markers: true,
		animation: section22TL,
		toggleActions: "restart none reverse none",
		scrub: 1,
		trigger: ".container4",
		start: "top, 50%",
		end: "bottom, 30%"
	});

}

const section23TL=gsap.timeline();
section23TL.from (".container7 img", {duration: 2, alpha: 0, x:-10, stagger: 0.8})
				.from (".container8 img", {duration: 2, alpha: 0, x:-10, stagger: 0.8})
				.from (".container9 img", {duration: 2, alpha: 0, x:-10, stagger: 0.8});


export function section23Animation (){
	ScrollTrigger.create({
		markers: true,
		animation: section23TL,
		toggleActions: "restart none reverse none",
		scrub: 1,
		trigger: ".container7",
		start: "top, 50%",
		end: "bottom, 30%"
	});

}

const section24TL=gsap.timeline();
section24TL.from (".container10 img", {duration: 2, alpha: 0, x:-10, stagger: 0.8})
				.from (".container11 img", {duration: 2, alpha: 0, x:-10, stagger: 0.8})
				.from (".container12 img", {duration: 2, alpha: 0, x:-10, stagger: 0.8});


export function section24Animation (){
	ScrollTrigger.create({
		markers: true,
		animation: section24TL,
		toggleActions: "restart none reverse none",
		scrub: 1,
		trigger: ".container10",
		start: "top, 50%",
		end: "bottom, 30%"
	});

}
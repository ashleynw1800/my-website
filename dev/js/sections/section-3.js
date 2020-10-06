import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section3TL=gsap.timeline();
section3TL.from ("#section-3 >.contact", {duration: 5, alpha: 0, y:300, ease: "elastic"}) 
			.from (".imgcontainer img", {duration: 4, alpha: 0, x:-200})



export function section3Animation (){
	ScrollTrigger.create({
		markers: true,
		animation: section3TL,
		toggleActions: "restart none reverse none",
		scrub: 1,
		trigger: "#section-3",
		start: "top, 50%",
		end: "bottom, 50%"
	});

}



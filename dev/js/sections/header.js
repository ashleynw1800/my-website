import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.set("header", {transformOrigin: "top"});

const headerTL=gsap.timeline();
headerTL.to ("#header", {scale:0.6}) 



export function headerAnimation (){
	ScrollTrigger.create({
		//markers: true,
		animation: headerTL,
		toggleActions: "restart none reverse none",
		scrub: 1,
		trigger: "#section-2",
		start: "top, 70%",
		end: "bottom, 0%"
	});

}
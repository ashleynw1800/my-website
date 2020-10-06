import {gsap} from "gsap";

export function section1Animation (){
	gsap.from ("#section-1 >.hello", {duration: 2, alpha: 0, x:-300}) ;
	}

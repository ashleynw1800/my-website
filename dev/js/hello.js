import {gsap} from "gsap";
import {moveSpeed} from './speed.js';

export function helloAnimation(){
	var tl= gsap.timeline();
    tl.to(".hello", {duration: moveSpeed, 
                    color:"#ff8b74",
                    x: 20,
                    borderRadius: "100px", 
                    delay: -3})
	return tl; 
}
import {gsap} from "gsap";
import {moveSpeed} from './speed.js';

export function happyAnimation(){
	var tl= gsap.timeline();
    tl.to("#happy-container", {duration: moveSpeed, 
                                x:20,
                                rotation: 360,
                                borderRadius: "100px"})
	return tl; 
}

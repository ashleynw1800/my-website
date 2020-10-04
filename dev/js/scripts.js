import {gsap} from "gsap";
import {helloAnimation} from './hello.js';
import {happyAnimation} from './happy.js';


var mainTL = gsap.timeline();

mainTL.add (helloAnimation())
	.add (happyAnimation());

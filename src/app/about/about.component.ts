import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit, Input, HostListener, ElementRef , Inject} from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss','./aboutMobile.scss'],
	  animations: [
	  trigger('changeDivSize', [
	    state('initial', style({
	      color: 'white',    
	      background: 'none',
	      textShadow: 'none'
	    })),
	    state('final', style({
	      color: '#f4f4f4',
	      background: 'none',
		  textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
	    })),
	    transition('initial=>final', animate('1000ms 100ms ease-in-out',

 

	    keyframes([
              style({ background: "white", top: '0px', }),
              style({ background: "#fdfdfdde", top: '0px', }),
              style({ textShadow: 'rgb(255, 255, 255) -1px -1px 0px, rgb(255, 255, 255) 1px -1px 0px, rgb(255, 255, 255) -1px 1px 0px, rgb(255, 255, 255) 1px 1px 0px' }),
              style({ textShadow: 'rgb(21, 181, 208) -1px -1px 0px, rgb(21, 181, 208) 1px -1px 0px, rgb(21, 181, 208) -1px 1px 0px, rgb(21, 181, 208) 1px 1px 0px' })
        	])

        )),
        transition('initial3=>final', animate('700ms 100ms ease-in-out',
	    	keyframes([
              style({ background: "white", top: '-12px', color: "white" }),
              style({ background: "#1e5799", top: '5px', }),
              style({ background: 'radial-gradient(ellipse at center, #1e5799 0%,#207cca 0%,#2989d8 7%,#7db9e8 100%)', top: '0px', })
        	])

        	)),
	    transition('final=>initial', animate('600ms ease-in-out'))
	  ]),
	]


})
export class AboutComponent implements OnInit {

	currentState1 = 'initial';
	
	listWebbies = {
			currentState2a: 'initial',
			currentState2b: 'initial',
			currentState2c: 'initial',
			currentState2d: 'initial',
	}
	
	arrowHide=true;
	
	currentState3 = 'initial3';

		@HostListener('window:scroll', ['$event'])
		changeState() {
				const componentPosition = this.el.nativeElement.offsetTop;
			    const scrollPosition = this.window.pageYOffset + 0;
			    const scrollPosition2a = this.window.pageYOffset - 300;
			    const scrollPosition2b = this.window.pageYOffset - 400;
				const scrollPosition2c = this.window.pageYOffset - 500;
				const scrollPosition2d = this.window.pageYOffset - 600;

			    const scrollPosition3 = this.window.pageYOffset - 800;

		    	if (scrollPosition >= componentPosition) { this.currentState1 = 'final'; }  
		    	
		    	if (scrollPosition2a >= componentPosition) { this.listWebbies.currentState2a = 'final'; this.arrowHide=false;} 
		    	if (scrollPosition2b >= componentPosition) { this.listWebbies.currentState2b = 'final'; }
		    	if (scrollPosition2c >= componentPosition) { this.listWebbies.currentState2c = 'final'; } 
		    	if (scrollPosition2d >= componentPosition) { this.listWebbies.currentState2d = 'final'; }

		    	if (scrollPosition3 >= componentPosition) { this.currentState3 = 'final'; }  

	}

	constructor(@Inject(WINDOW) private window: Window, public el: ElementRef, private animateScrollService: NgAnimateScrollService){}
	ngOnInit(){}

	objDate = Date.now(); 
}

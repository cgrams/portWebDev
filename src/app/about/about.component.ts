import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
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
	      
	      background: 'radial-gradient(ellipse at center, #1e5799 0%,#207cca 0%,#2989d8 50%,#7db9e8 100%)',
		  textShadow: '-1px -1px 0 #0c0c0c, 1px -1px 0 #0c0c0c, -1px 1px 0 #0c0c0c, 1px 1px 0 #0c0c0c'
	    })),
	    transition('initial=>final', animate('400ms 100ms ease-in-out',

	    keyframes([
              style({ background: "white", top: '-12px', }),
              style({ background: "gray", top: '5px', }),
              style({ background: 'radial-gradient(ellipse at center, #1e5799 0%,#207cca 0%,#2989d8 7%,#7db9e8 100%)', top: '0px', })
        	])

        )),
        transition('initial3=>final', animate('700ms 100ms ease-in-out',
	    	keyframes([
              style({ background: "white", top: '-12px', color: "white" }),
              style({ background: "#1e5799", top: '5px', }),
              style({ background: 'radial-gradient(ellipse at center, #1e5799 0%,#207cca 0%,#2989d8 7%,#7db9e8 100%)', top: '0px', })
        	])

        	)),
	    transition('final=>initial', animate('300ms ease-in-out'))
	  ]),
	]


})
export class AboutComponent implements OnInit {

	currentState1 = 'initial';
	
	currentState2a = 'initial';
	currentState2b = 'initial';
	currentState2c = 'initial';
	currentState2d = 'initial';
	
	currentState3 = 'initial3';

		@HostListener('window:scroll', ['$event'])
		changeState() {
				const componentPosition = this.el.nativeElement.offsetTop;
			    const scrollPosition = window.pageYOffset + 200;
			    const scrollPosition2a = window.pageYOffset + 0;
			    const scrollPosition2b = window.pageYOffset + -30;
				const scrollPosition2c = window.pageYOffset + -60;
				const scrollPosition2d = window.pageYOffset - 80;

			    const scrollPosition3 = window.pageYOffset - 110;

		    	if (scrollPosition >= componentPosition) { this.currentState1 = 'final'; }  
		    	
		    	if (scrollPosition2a >= componentPosition) { this.currentState2a = 'final'; }  
		    	if (scrollPosition2b >= componentPosition) { this.currentState2b = 'final'; }  
		    	if (scrollPosition2c >= componentPosition) { this.currentState2c = 'final'; }  
		    	if (scrollPosition2d >= componentPosition) { this.currentState2d = 'final'; }  

		    	if (scrollPosition3 >= componentPosition) { this.currentState3 = 'final'; }  

	}

	constructor(public el: ElementRef, private animateScrollService: NgAnimateScrollService){}
	ngOnInit(){}

	objDate = Date.now(); 
}

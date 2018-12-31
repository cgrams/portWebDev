import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
	  animations: [
	  trigger('changeDivSize', [
	    state('initial', style({
	      color: 'white',
	      background: 'white',
	      textShadow: '0px 0px 0 #0c0c0c, 0px 0px 0 #0c0c0c, 0px 0px 0 #0c0c0c, 0px 0px 0 #0c0c0c'
	    })),
	    state('final', style({
	      color: '#f4f4f4',
	      background: '#62b8f7',
		  textShadow: '-1px -1px 0 #0c0c0c, 1px -1px 0 #0c0c0c, -1px 1px 0 #0c0c0c, 1px 1px 0 #0c0c0c'
	    })),
	    transition('initial=>final', animate('400ms')),
	    transition('final=>initial', animate('300ms'))
	  ]),
	]


})
export class AboutComponent implements OnInit {

	currentState1 = 'initial';
	currentState2 = 'initial';
	currentState3 = 'initial';

		@HostListener('window:scroll', ['$event'])
		changeState() {
				const componentPosition = this.el.nativeElement.offsetTop;
			    const scrollPosition = window.pageYOffset + 400;
			    const scrollPosition2 = window.pageYOffset + 100;
			    const scrollPosition3 = window.pageYOffset - 0;

		    	if (scrollPosition >= componentPosition) { this.currentState1 = 'final'; } else { this.currentState1 = 'initial';}
		    	if (scrollPosition2 >= componentPosition) { this.currentState2 = 'final'; } else { this.currentState2 = 'initial';}
		    	if (scrollPosition3 >= componentPosition) { this.currentState3 = 'final'; } else { this.currentState3 = 'initial';}

 
	}

	constructor(public el: ElementRef, private animateScrollService: NgAnimateScrollService){}
	ngOnInit(){}

}

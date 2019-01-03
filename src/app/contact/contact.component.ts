import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';

import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
  trigger('changeDivSize', [
    state('initial', style({
      opacity: "0",

    })),
    state('final', style({
      opacity: "1",
    })),
    transition('initial=>final', animate('300ms 50ms')),
    transition('final=>initial', animate('300ms 50ms'))
  	]),
	]


})
export class ContactComponent implements OnInit {
 
 constructor(public el: ElementRef, private animateScrollService: NgAnimateScrollService){}

currentState = 'initial';
testb = "";

@HostListener('window:scroll', ['$event'])
		changeState() {
				const componentPosition = this.el.nativeElement.offsetTop;
			    const scrollPosition3 = window.pageYOffset + 100;
		    	if (scrollPosition3 >= componentPosition) { this.currentState  = 'final'; this.testb = "admin@portwebsolutions.com.au";} else { this.currentState  = 'initial'; this.testb = "admin@portwebsolotions.com.au";}
			}

 


  ngOnInit() {}

}

import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';

import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', 'contactMobile.scss'],
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
  trigger('changeThinkingColors', [
    state('proThinking', style({
      transform: 'rotate(180deg)'
    })),
    state('antiThinking', style({
      transform: 'rotate(0deg)'
    })),
    transition('proThinking=>antiThinking', animate('3000ms ease',)),
    transition('antiThinking=>proThinking', animate('3000ms ease'))
    ]), 
  ]


})
export class ContactComponent implements OnInit {
 
  constructor(public el: ElementRef, private animateScrollService: NgAnimateScrollService){}
  currentState = 'initial';
  startThinking = "proThinking";
  hiddenMail = "";

  @HostListener('window:scroll', ['$event'])
		changeState() {
			const componentPosition = this.el.nativeElement.offsetTop;
			const scrollPosition3 = window.pageYOffset + 100;
		  if (scrollPosition3 >= componentPosition) { this.currentState  = 'final'; this.hiddenMail = "admin@portwebsolutions.com.au";} else { this.currentState  = 'initial'; this.hiddenMail = "admin@portwebsolotions.com.au";}
      
      const thinkingPosition = this.el.nativeElement.offsetTop;
      const scrollPositionText = window.pageYOffset + 400;
      if (scrollPositionText >= thinkingPosition) { this.startThinking  = 'antiThinking'}
     }
 
  ngOnInit() {}

}

import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit, Input, HostListener, ElementRef , Inject} from '@angular/core';

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
    transition('proThinking=>antiThinking', animate('5000ms ease',)),
    transition('antiThinking=>proThinking', animate('5000ms ease'))
    ]),
  trigger('contactBackgroundTrigger', [
    state('proBackgroundContact', style({
          backgroundSize: "90%",
          backgroundPosition: 'bottom right'
    })),
    state('antBackgroundContact', style({
         backgroundSize: "180%",
         backgroundPosition: 'bottom left'
    })),
    transition('proBackgroundContact=>antBackgroundContact', animate('35500ms',)),
    transition('antBackgroundContact=>proBackgroundContact', animate('1500ms ease'))
    ]), 

  ]


})
export class ContactComponent implements OnInit {
 
  constructor(@Inject(WINDOW) private window: Window, public el: ElementRef, private animateScrollService: NgAnimateScrollService){}
  currentState = 'initial';
  startThinking = "proThinking";
  startBackground = "proBackgroundContact";
  hiddenMail = "";
  phoneString = "";
  emStyled = "&#x1D544;";
  @HostListener('window:scroll', ['$event'])
		changeState() {
			const componentPosition = this.el.nativeElement.offsetTop;
			const scrollPosition3 = this.window.pageYOffset + 100;
		  if (scrollPosition3 >= componentPosition) {this.currentState  = 'final'; this.hiddenMail = "admin@portwebsolutions.com.au";} else { this.hiddenMail = "admin@portwebsolotions.com.au";}
      
      const thinkingPosition = this.el.nativeElement.offsetTop;
      const scrollPositionText = this.window.pageYOffset + 400;
      if (scrollPositionText >= thinkingPosition) { this.startThinking  = 'antiThinking'} 

      const backgroundPosition = this.el.nativeElement.offsetTop;
      const scrollPositionBackground = this.window.pageYOffset;      
      if (scrollPositionBackground >= backgroundPosition) { this.startBackground  = 'antBackgroundContact', this.phoneString = "animated shake"; } else { this.startBackground  = 'proBackgroundContact';  this.phoneString = "";}
     }
 
  ngOnInit() {}

}

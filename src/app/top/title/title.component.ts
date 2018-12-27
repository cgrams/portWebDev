import { Component, OnInit, Input, HostListener, ElementRef   } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  
  animations: [
    trigger('linkToAnimationText', [
      state('proPopUp', style({
        textShadow: '-1px -1px 0 #0528d0, 1px -1px 0 #0528d0, -1px 1px 0 #0528d0, 1px 1px 0 #0528d0, 10px 10px 10px #0073c9, 1px 2px 1px #0073c9, 1px 3px 1px #0073c9, 1px 4px 1px #0073c9, 1px 5px 1px #0073c9, 1px 6px 1px #0073c9, 1px 7px 1px #0073c9, 1px 8px 1px #0073c9, 1px 9px 1px #0073c9, 1px 10px 1px #0073c9, 1px 18px 6px rgba(0,0,0,0.4), 1px 22px 10px rgba(0,0,0,0.2), 1px 25px 35px rgba(0,0,0,0.2), 1px 30px 60px rgba(0,0,0,0.4)',
        height: '200px',
        opacity: 1
      })),
      state('antiPopUp', style({
        height: '100px',
        opacity: 1
      })),
      transition('*=> proPopUp', animate('300ms ease' )),
      transition('*=> antiPopUp', animate(300)),
    ]),
  trigger('arrowTrigger', [
      state('proPopUp', style({
        paddingTop: '50px',
        opacity: 1
      })),
      state('antiPopUp', style({
        paddingTop: '10px',
        opacity: 1
      })),
      transition('*=> proPopUp', animate('2000ms ease-in' )),
      transition('*=> antiPopUp', animate('3000ms ease')),
    ]),

    trigger('linkToAnimationHand', [
      state('proHand', style({ opacity: 1, top: '-190px' }) ),
      state('antiHand', style({ opacity: .0 }) ),
      transition('*=> proHand', 
          animate('2300ms ease',
            keyframes([
              style({ opacity: .5, top: '-120px', }),
              style({ opacity: .9, top: '-230px', }),
              style({ opacity: .99, top: '-190px', })
        ]))),
      transition('*=> antiHand', animate(3000)),
      transition('*=> proHand', animate(300)),      
    ]),



  ]

})
export class TitleComponent implements OnInit {
  stateHand = 'proHand'
  constructor(private animateScrollService: NgAnimateScrollService, public el: ElementRef) { }

@HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop + 20
      const scrollPosition = window.pageYOffset

      if (scrollPosition >= componentPosition) {
        this.stateHand = 'antiHand';
        console.log('should be blue2222');
      } else {
        this.stateHand = 'proHand';
        console.log('should be red4444');
      }

    }

  ngOnInit() {}

  navigateToAboutArrow(duration?:number) { this.animateScrollService.scrollToElement('about', duration) };

	@Input() topLevelTextController;
  @Input() topLevelHandController;

}
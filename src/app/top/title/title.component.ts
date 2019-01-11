import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit, Input, HostListener, ElementRef   , Inject} from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss', './title.mobile.scss'],
  
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
        marginTop: '50px',
        position: 'relative'
      })),
      state('antiPopUp', style({
        marginTop: '10px',
        position: 'relative'
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
              style({ opacity: .99, top: '-180px', }),              
              style({ opacity: .99, top: '-190px', })
        ]))),
      transition('*=> antiHand', animate('1000ms ease-in-out')),
      transition('*=> proHand', animate('1000ms ease-in-out')),      
    ]),



  ]

})
export class TitleComponent implements OnInit {
  stateHand = 'proHand'
  constructor(@Inject(WINDOW) private window: Window, private animateScrollService: NgAnimateScrollService, public el: ElementRef) { }

@HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop + 20
      const scrollPosition = this.window.pageYOffset

      if (scrollPosition >= componentPosition) {
        this.stateHand = 'antiHand';
      } else {
        this.stateHand = 'proHand';
      }

    }

  ngOnInit() {}

  navigateToAboutArrow(duration?:number) { this.animateScrollService.scrollToElement('about', duration) };

	@Input() topLevelTextController;
  @Input() topLevelHandController;

}

import { Component, OnInit, HostListener, ElementRef} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss', './servicesMobile.scss'],
   animations: [
    trigger('changeStar', [
      state('initialStar', style({
         transform: 'rotate(0deg)',
         opacity: '1'
 
      })),
      state('final', style({
          transform: 'rotate(180deg)',
          opacity: '0'         
      })),
      transition('initialStar=>final', animate('300ms')),
      transition('final=>initialStar', animate('300ms'))
    ])]
})
export class ServicesComponent implements OnInit {

	rotationAnimation: string = "anti-fadeInUp";
	
	public waves(){ this.rotationAnimation= "fadeInUp"; }
	
	constructor(public el: ElementRef){ }
	currentStarState = 'initialStar';
  currentStarState2 = 'initialStar';
  currentStarState3 = 'initialStar';
  currentStarState4 = 'initialStar';
  

@HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition1 = window.pageYOffset + 40
      const scrollPosition2 = window.pageYOffset - 0
      const scrollPosition3 = window.pageYOffset - 40
      const scrollPosition4 = window.pageYOffset - 80

      if (scrollPosition1 >= componentPosition) { this.currentStarState = 'initialStar'} else { this.currentStarState = 'final'}
      if (scrollPosition2 >= componentPosition) { this.currentStarState2 = 'initialStar'} else { this.currentStarState2 = 'final'}
      if (scrollPosition3 >= componentPosition) { this.currentStarState3 = 'initialStar'} else { this.currentStarState3 = 'final'}
      if (scrollPosition4 >= componentPosition) { this.currentStarState4 = 'initialStar'} else { this.currentStarState4 = 'final'}
    }




	ngOnInit() {}


}
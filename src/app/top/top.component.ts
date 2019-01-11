import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit, Input, HostListener, ElementRef , Inject} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss', './top.mobile.scss']
})
export class TopComponent implements OnInit {

	constructor(@Inject(WINDOW) private window: Window, public el: ElementRef, private animateScrollService: NgAnimateScrollService) { }

	navigateToWork(duration?:number) { this.animateScrollService.scrollToElement('work', duration) };
	navigateToServices(duration?:number){this.animateScrollService.scrollToElement('services', duration) };
	navigateToAbout(duration?:number){this.animateScrollService.scrollToElement('about', duration) };
	navigateToContact(duration?:number){this.animateScrollService.scrollToElement('contact', duration) };

	textChangeVariable = 'antiPopUp';
	handChangeVariable = 'proHand';

	show: boolean = true;

	@HostListener('window:scroll', ['$event'])
	    checkScroll() {
		    const componentPosition = this.el.nativeElement.offsetTop;
		    const scrollPosition = this.window.pageYOffset -10;
	    	if (scrollPosition >= componentPosition) {
	     		this.textChangeVariable = 'proPopUp';
	    	} else {
	        	this.textChangeVariable = 'antiPopUp';
	      }
    }
  
	ngOnInit() {}

	@Input() topLevelHandController;
	@Input() topLevelHoverController;
}

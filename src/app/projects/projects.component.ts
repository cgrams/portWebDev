import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit, Input, HostListener, ElementRef , Inject} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { NgAnimateScrollService } from 'ng-animate-scroll';

import * as lozad from 'lozad';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss', './projectsMobile.scss'],

	animations: [
	  trigger('picProjectIn', [
	    state('initial', style({
			top: '0px',
			opacity: 0
	    })),
	    state('final', style({
	      top: '-10%',
	      opacity: 1
	    })),
		state('initial1', style({
			top: '0px',
			position: 'relative',
			opacity: 0
	    })),
	    state('final1', style({
	    	top: '20%',
	    	position: 'relative',
	    	opacity: 1
	    })),
		state('initial2', style({
			top: '0px',
			position: 'relative',
			opacity: 0
	    })),
	    state('final2', style({
	    	top: '40%',
	    	position: 'relative',
	    	opacity: 1
	    })),
		state('initial3', style({
			top: '0px',
			position: 'relative',
			opacity: 0
	    })),
	    state('final3', style({
	    	top: '60%',
	    	position: 'relative',
	    	opacity: 1
	    })),	
		state('initial4', style({
			top: '0px',
			position: 'relative',
			opacity: 0
	    })),
	    state('final4', style({
	    	top: '80%',
	    	position: 'relative',
	    	opacity: 1
	    })),		        	    	    
	    transition('initial=>final', animate('1000ms')),
	    transition('final=>initial', animate('1000ms')),

	    transition('initial1=>final1', animate('1000ms 500ms ease-in-out')),
	    transition('final1=>initial1', animate('1000ms 500ms ease-in-out')),

	    transition('initial2=>final2', animate('1500ms 500ms ease-in-out')),
	    transition('final2=>initial2', animate('1500ms 500ms ease-in-out')),

	    transition('initial3=>final3', animate('2000ms 500ms ease-in-out')),
	    transition('final3=>initial3', animate('2000ms 500ms ease-in-out')),

	    transition('initial4=>final4', animate('2500ms 500ms ease-in-out')),
	    transition('final4=>initial4', animate('2500ms 500ms ease-in-out'))		     
	  ]),
	]



})
export class ProjectsComponent implements OnInit {

	constructor(@Inject(WINDOW) private window: Window, public el: ElementRef, private animateScrollService: NgAnimateScrollService){}

		picState = 'initial';
		picState1 = 'initial1';
		picState2 = 'initial2';
		picState3 = 'initial3';
		picState4 = 'initial4';

		@HostListener('window:scroll', ['$event'])
		changeState() {
				const componentPosition = this.el.nativeElement.offsetTop;
			    const scrollPosition3 = this.window.pageYOffset - 430;
		    	if (scrollPosition3 >= componentPosition) { this.picState  = 'final'; }  
			    if (scrollPosition3 >= componentPosition) { this.picState1  = 'final1'; }  
		    	if (scrollPosition3 >= componentPosition) { this.picState2  = 'final2'; }  
		    	if (scrollPosition3 >= componentPosition) { this.picState3  = 'final3'; }
		    	if (scrollPosition3 >= componentPosition) { this.picState4  = 'final4'; } 		    		
			}

	projectSkillsList: any[] = [
	    {
	      "ability": "UI/UX,"
	    },
	    {
	      "ability": "Web Design,"
	    },
	    {
	      "ability": "Mobile Design,"
	    },
	    {
	      "ability": "Web Development,"
	    },
	    {
	      "ability": "Mobile App,"
	    },
	    {
	      "ability": "eCommerce,"
	    },
	    {
	      "ability": "Digital Marketing,"
	    },
	    {
	      "ability": "Startups."
	    }
	  ];
 

  ngOnInit() {
	lozad('.lozad', {
		    load: function(el) {
		        el.src = el.dataset.src;
		        el.onload = function() {
		            el.classList.add('fade')
		        }
		    }
		}).observe()
		}

  }

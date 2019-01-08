import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
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
	      top: '-20px',
	      opacity: 1
	    })),
		state('initial2', style({
			top: '0px',
			position: 'relative',
			opacity: 0
	    })),
	    state('final2', style({
	    	top: '+20px',
	    	position: 'relative',
	    	opacity: 1
	    })),	    
	    transition('initial=>final', animate('1000ms')),
	    transition('final=>initial', animate('1000ms')),
	    transition('initial2=>final2', animate('1000ms 500ms ease-in-out')),
	    transition('final2=>initial2', animate('1000ms 500ms ease-in-out'))	    
	  ]),
	]



})
export class ProjectsComponent implements OnInit {

	constructor(public el: ElementRef, private animateScrollService: NgAnimateScrollService){}

		picState = 'initial';
		picState1 = 'initial2';

		@HostListener('window:scroll', ['$event'])
		changeState() {
				const componentPosition = this.el.nativeElement.offsetTop;
			    const scrollPosition3 = window.pageYOffset + 100;
			    if (scrollPosition3 >= componentPosition) { this.picState1  = 'final2'; } else { this.picState1  = 'initial2'; }
		    	if (scrollPosition3 >= componentPosition) { this.picState  = 'final'; } else { this.picState  = 'initial';}
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

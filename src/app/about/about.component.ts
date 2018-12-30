import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	constructor(public el: ElementRef, private animateScrollService: NgAnimateScrollService){}
	ngOnInit(){}

}

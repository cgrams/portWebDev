import { Component, HostListener, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import * as lozad from 'lozad';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./cssTopLevel/top.component.scss', './cssTopLevel/top.phone.scss', './cssTopLevel/top.tablet.scss'],
	animations: [
	  trigger('changeMobileQuote', [
	    state('proMobileQuoteSate', style({
			fontSize: '1.3em'
	    })),
	    state('anitMobileQuoteSate', style({
	    	fontSize: '1em'
	    })),
	    transition('proMobileQuoteSate => anitMobileQuoteSate', animate('250ms ease-in-out')),
	    transition('anitMobileQuoteSate => proMobileQuoteSate', animate('250ms ease-in-out'))
	  ]),
	]

})
export class AppComponent implements OnInit  {
	reason = '';
	quoteState = 'proQuote';

	currentState = 'initial';
	changeState() {
	  this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
	}
	topHandStateVariable = 'proHandstate';
	moveHand(state: any) { this.topHandStateVariable = state; }

	topQuoteStateVariable = 'proQuotestate';
	moveQuote(state: any) { this.topQuoteStateVariable = state; }

	quoteMobileState = 'proMobileQuoteSate'

	constructor(public el: ElementRef){}
	@HostListener('window:scroll', ['$event'])
	changeQuoteCSS(){
		const componentPosition = this.el.nativeElement.offsetTop;
		const scrollPositionMobileQuote = window.pageYOffset - 100;
		if (scrollPositionMobileQuote >= componentPosition) { this.quoteMobileState = 'anitMobileQuoteSate';} else { this.quoteMobileState = 'proMobileQuoteSate';}
	}

	ngOnInit(){
		console.info('%c If you\'re reading this then I\'d love to work with you.', 'font-family:  arial; background: #43b7ff; color: black; font-size: 22pt');
		console.info('%c Send me a text at 0452 241 945', 'font-family: arial; background: #43b7ff; color: black; font-size: 20pt');
		lozad('.lozad', {
	    	load: function(el) {
	        el.src = el.dataset.src;
	        el.onload = function() { el.classList.add('fade') }
	    	}
		}).observe()
	}
  
}

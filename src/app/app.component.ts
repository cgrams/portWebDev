import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import * as lozad from 'lozad';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss', './app.mobile.scss']
})
export class AppComponent implements OnInit  {
	title = 'app';
 

  reason = '';

  


	topHandStateVariable = 'proHandstate';
	moveHand(state: any) { this.topHandStateVariable = state; }

	topQuoteStateVariable = 'proQuotestate';
	moveQuote(state: any) { this.topQuoteStateVariable = state; }

constructor() { }
 
quoteState = 'proQuote';
 testQuote(state){
 	this.quoteState = state
 	alert(state);
 };
ngOnInit(){
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

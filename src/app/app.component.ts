import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import * as lozad from 'lozad';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss', './app.mobile.scss']
})
export class AppComponent implements OnInit  {
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
	console.info('%c If you\'re reading this than I\'d love to work with you.', 'font-family:  arial; background: #43b7ff; color: black; font-size: 22pt');
	console.info('%c Send me a text at 0452 241 945', 'font-family: arial; background: #43b7ff; color: black; font-size: 20pt');

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

import { Component, OnInit, Input, HostListener, ElementRef  } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],

  animations: [
  	trigger('changeQuoteState', [
  		state('proQuotestate',

        style({ marginTop: '10vh'})

      ),
  		state('antiQuotestate', style({
  			marginTop: '3vh' 
    		})),
    		transition('* => antiQuotestate', animate('1000ms 300ms')),
    		transition('* => proQuotestate', animate('1000ms 300ms')),  		 		
    		])
  ]
})
export class QuoteComponent implements OnInit {

	stateQuote = 'proQuotestate'
	constructor(public el: ElementRef) { }

@HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop + 20
      const scrollPosition = window.pageYOffset
      if (scrollPosition >= componentPosition) { this.stateQuote = 'antiQuotestate'; } 
        else { this.stateQuote = 'proQuotestate'; }

    }

  ngOnInit() {}

  @Input() passInQuote;

}

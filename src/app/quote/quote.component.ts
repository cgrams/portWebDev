import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit, Input, HostListener, ElementRef  , Inject} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss', './quoteMobile.scss'],

  animations: [
  	trigger('changeQuoteState', [
  		state('proQuotestate',
        style({top: '60px'})
      ),
  		state('antiQuotestate', 
        style({ top: '30px'})
        ),
    		transition('* => antiQuotestate', animate('500ms 300ms')),
    		transition('* => proQuotestate', animate('500ms 300ms')),  		 		
    		])
  ]
})
export class QuoteComponent implements OnInit {

	stateQuote = 'proQuotestate'
	constructor(@Inject(WINDOW) private window: Window, public el: ElementRef) { }

@HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop + 20
      const scrollPosition = this.window.pageYOffset
      if (scrollPosition >= componentPosition) { this.stateQuote = 'antiQuotestate'; } 
        else { this.stateQuote = 'proQuotestate'; }

    }

  ngOnInit() {}

  @Input() passInQuote;

}

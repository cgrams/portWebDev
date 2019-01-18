import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss', './servicesMobile.scss']
})
export class ServicesComponent implements OnInit {

	rotationAnimation: string = "anti-fadeInUp";
	
	public waves(){ this.rotationAnimation= "fadeInUp"; }
	
	constructor() { }
		

move: any[] = [
    {
      "name": 'Total Makeover:',
      "serviceExplaination": ' Rebuild website in latest technology '
    },
    {
      "name": 'Partial Makeover: ',
      "serviceExplaination": ' New landing page with old website framework'
    },
    {
      "name": 'Small Changes:',
      "serviceExplaination": ' Make minor adjustments for your old website'
    },
    {
      "name": 'Search Engine Optimisation',
      "serviceExplaination:": ' Push you website higher on Google'
    }
  ];


	ngOnInit() {}


}

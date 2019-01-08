import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

	rotationAnimation: string = "anti-fadeInUp";
	
	public waves(){ this.rotationAnimation= "fadeInUp"; }
	
	constructor() { }
		



move: any[] = [
    {
      "name": 'Total Makeover: Rebuild website in latest technology '
    },
    {
      "name": 'Partial Makeover: Build new landing page and keep old website framework'
    },
    {
      "name": 'Small Changes: Make minor adjustments for your old website'
    },
    {
      "name": 'Search Engine Optimisation'
    }
  ];


	ngOnInit() {}


}

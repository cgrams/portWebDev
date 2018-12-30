import { Component, OnInit } from '@angular/core';

import * as lozad from 'lozad';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

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

}

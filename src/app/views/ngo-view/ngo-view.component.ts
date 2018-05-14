import { Component, Input, OnInit } from '@angular/core';
import { Ngo } from '../../objects/ngo';

@Component({
  selector: 'app-ngo-view',
  templateUrl: './ngo-view.component.html',
  styleUrls: ['./ngo-view.component.scss']
})
export class NgoViewComponent implements OnInit {

  @Input() ngo: Ngo;

  constructor() {
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { town } from '../town';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {
  
  town: town = {id: 1, name: "belfort", temperature: 0, icon: "rain"};

  constructor() { }

  ngOnInit() {
  }

}

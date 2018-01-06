import { Component } from '@angular/core';
import {Cours} from './cours';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  connected:boolean=false;
  course:Cours = null;



}

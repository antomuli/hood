import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hoods:string[];

  constructor(){
    this.hoods = ['M-Town', 'Choclate city', 'K-west']
  } 
}
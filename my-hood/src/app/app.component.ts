import { Component } from '@angular/core';
import { Hood } from './hood';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hoods:Hood[] = [
    new Hood(1, 'M-Town', 'fuck'),
    new Hood(2,'Choclate City','Gadamnit'),
    new Hood(3,'K-West','Asap'),
    new Hood(4,'Pork City','TGIF'),
    new Hood(5,'1960','LOL'),
    new Hood(6,'Kasabuni','HAHAH'),
  ];
  
}
import { Component, OnInit } from '@angular/core';
import { Hood } from '../hood';

@Component({
  selector: 'app-hood',
  templateUrl: './hood.component.html',
  styleUrls: ['./hood.component.css']
})
export class HoodComponent implements OnInit {

  hoods:Hood[] = [
    
    new Hood(1, 'M-Town', 'fuck'),
    new Hood(2,'Choclate City','Gadamnit'),
    new Hood(3,'K-West','Asap'),
    new Hood(4,'Pork City','TGIF'),
    new Hood(5,'1960','LOL'),
    new Hood(6,'Kasabuni','HAHAH'),
  ];
  toggleDetails(index){
    this.hoods[index].showLocation = !this.hoods[index].showLocation;
  }
  completeHood(isComplete, index){
    if (isComplete) {
      this.hoods.splice(index,1);
    }
  }
  
  constructor() { }

  ngOnInit() {
  }

}

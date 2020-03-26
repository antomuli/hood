import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hood } from '../hood';

@Component({
  selector: 'app-hood-detail',
  templateUrl: './hood-detail.component.html',
  styleUrls: ['./hood-detail.component.css']
})
export class HoodDetailComponent implements OnInit {

  @Input() hood: Hood;
  @Output() isComplete = new EventEmitter<boolean>();

  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
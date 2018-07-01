import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit {

  //variable value to be sent to child using property binding [child property]=parentProperty
  parentProperty:string;
  counter=0;
  constructor() { }

  ngOnInit() {
    this.parentProperty = 'Parent Value to be passed to child'
  }
  onValueChanged(count:any){
    this.counter = count;
  }

}

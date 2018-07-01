import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './child-to-parent.component.html',
  styleUrls: ['./child-to-parent.component.css']
})
export class ChildToParentComponent implements OnInit {

  @Output()
  valueChanged = new EventEmitter();

  count = 0;
  constructor() { }

  ngOnInit() {
    
  }
  onButtonClick(){
    this.count++;
    this.valueChanged.emit(this.count);
    console.log("Counter value in child :"+this.count);
  }

}

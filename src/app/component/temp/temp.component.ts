import { Component, OnInit, Input ,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {
  @Input() text!: string;
  @Input() color!:string;
  @Output() btnClick:EventEmitter<any> = new EventEmitter();
  

  constructor() { 
  }

  

  ngOnInit(): void {
  }
  handleClick(){
    console.log("Clicked");
    this.btnClick.emit();
  }

}

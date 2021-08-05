import { Component, OnInit } from '@angular/core';
import {Item} from '../Item';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
items:Item[]=[];

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe((items)=>this.items=items)
    
  }
  onClick(item:Item){
    console.log(item);
    this.itemService.onClick(item).subscribe(()=>this.items=this.items.filter(t =>t.id !== item.id));
  
  }
  onCart(item:Item){
    item.reminder = !item.reminder;
    this.itemService.onCart(item).subscribe();
    console.log(item.reminder);
  }
  // addItem(item:Item){
  //   this.itemService.addItem(item).subscribe((item)=>(this.items.push(item)));
  // }
}

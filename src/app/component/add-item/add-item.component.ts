import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  items:Item[]=[];

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
  }

  addItem(item:Item){
    this.itemService.addItem(item).subscribe((item)=>(this.items.push(item)));
  }
}

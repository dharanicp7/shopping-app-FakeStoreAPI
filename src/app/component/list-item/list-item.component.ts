import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Item } from '../Item';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-item', 
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  showAddItem! :boolean;
  subscription:Subscription;
  @Output() onAddItem: EventEmitter<Item> = new EventEmitter();
  id!:number;
  title!: string;
  price!: number;
  image!: string;
  category!: string;
  description!: string;
  reminder!: boolean;

  constructor(private uiService:UiService) {     
    this.subscription=this.uiService.onToggle().subscribe(value => this.showAddItem=value);
  }

  ngOnInit(): void {
  }

  toggleAddItem(){
    this.uiService.toggleAddItem();
  }


onSubmit(){
  if(!this.title){
    alert('Please insert title')
  }

  const newItem = {
    id : this.id,
    title : this.title,
    price : this.price,
    image : this.image,
    category : this.category,
    description : this.description,
    reminder : this.reminder
  }

this.onAddItem.emit(newItem);

  this.id;
  this.title="";
  this.price;
  this.image="";
  this.category="";
  this.description="";
  this.reminder=false;

}
}

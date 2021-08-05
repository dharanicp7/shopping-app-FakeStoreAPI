import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Item } from '../component/Item';
// import { ITEMS } from '../component/mock.-item';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {
private apiUrl = 'https://fakestoreapi.com/products';
  constructor(private http:HttpClient) { }
  getItems() : Observable <Item[]> {
return this.http.get<Item[]>(this.apiUrl);
  } 
  onClick(item:Item): Observable<Item> {
    const url = `${this.apiUrl}/${item.id}`;
    return this.http.delete<Item>(url)
  }
  onCart(item:Item): Observable<Item> {
    const url = `${this.apiUrl}/${item.id}`;
    return this.http.put<Item>(url,item,httpOptions); 
  }
  addItem(item:Item){
    // const url = `${this.apiUrl}/${item.id}`;
    return this.http.post<Item>(this.apiUrl,item);
  }
}

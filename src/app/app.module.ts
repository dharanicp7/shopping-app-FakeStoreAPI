import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TempComponent } from './component/temp/temp.component';
import { TemplateComponent } from './component/temp/template.component';
import { ListComponent } from './component/list/list.component';
import { ListItemComponent } from './component/list-item/list-item.component';
import { AddItemComponent } from './component/add-item/add-item.component';

const appRoutes:Routes=[
  {path:'admin',component:AddItemComponent},
  {path:'',component:ListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TempComponent,
    TemplateComponent,
    ListComponent,
    ListItemComponent,
    AddItemComponent
  ],
  imports: [  
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

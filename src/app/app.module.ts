import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //<--NgModules lives here

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ 
	  BrowserModule, 
	  FormsModule //<-- HF import the FormModule before binding with [(ngmodel)]
   ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

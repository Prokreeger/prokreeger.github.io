import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFirstComp1Component } from './my-first-comp1/my-first-comp1.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComp1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { AppComponent } from './app.component';


// import {
//   MatCheckboxModule,
//   MatButtonModule,
//   MatSlideToggleModule,
//   MatInputModule
// } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgxHmCarouselModule,

    // MatCheckboxModule,
    // MatButtonModule,
    // MatSlideToggleModule,

  ],
  declarations: [
    AppComponent, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

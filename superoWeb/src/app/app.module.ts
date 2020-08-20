
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { LeftnavBarComponent } from './leftnav-bar/leftnav-bar.component';
import { TopnavBarComponent } from './topnav-bar/topnav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftnavBarComponent,
    TopnavBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

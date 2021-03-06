import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TnavbarComponent } from './tnavbar/tnavbar.component';
import { LeftnavComponent } from './leftnav/leftnav.component';

@NgModule({
  declarations: [
    AppComponent,
    TnavbarComponent,
    LeftnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

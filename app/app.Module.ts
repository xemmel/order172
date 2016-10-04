import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './appComponent';
import { HomeComponent }      from './Pages/HomeComponent';
import { AboutComponent }      from './Pages/AboutComponent';
import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, HomeComponent, AboutComponent  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatIconModule } from '@angular/material/icon';
import { NeonDirective } from './neon.directive';


@NgModule({
  imports:      [ BrowserModule, FormsModule,MatIconModule ],
  declarations: [ AppComponent, HelloComponent,NeonDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

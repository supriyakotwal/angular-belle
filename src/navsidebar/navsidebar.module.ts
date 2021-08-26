import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavSidebarComponent } from './navsidebar.component';

@NgModule({
  declarations: [
    NavSidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [NavSidebarComponent]
})
export class NavSidebarModule { }

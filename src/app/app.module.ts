import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormControl, FormsModule } from '@angular/forms';
import { PacketComponent } from './packet/packet.component';
import { ServerElementComponent } from './server-element/server-element.component'

@NgModule({
  declarations: [
    AppComponent,
    PacketComponent,
    ServerElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

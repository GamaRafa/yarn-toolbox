import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageTitleService } from './core/services/page-title.service';
import { DataService } from './core/services/data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxProgressBarModule } from 'igniteui-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    BrowserAnimationsModule, 
    IgxProgressBarModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, PageTitleService, DataService],
  bootstrap: [AppComponent],
})
export class AppModule {
}

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
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { YarnStashService } from './features/yarn-stash/services/yarn-stash.service';
import { Storage } from '@ionic/storage-angular';
import { ProjectCounterService } from './core/services/project-counter.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    BrowserAnimationsModule, 
    IgxProgressBarModule,
    NgxDatatableModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    PageTitleService, 
    DataService, 
    YarnStashService,
    ProjectCounterService, 
    Storage],
  bootstrap: [AppComponent],
})
export class AppModule {
}

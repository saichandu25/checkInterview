import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { DummyComponent } from './dummy/dummy.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    DeliveryListComponent,
    AppHomeComponent,
    TopNavComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

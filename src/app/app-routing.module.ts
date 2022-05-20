import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';

const routes: Routes = [
  { path: 'Delivery', component: DeliveryListComponent },
  { path: '**', component: DeliveryListComponent }, 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

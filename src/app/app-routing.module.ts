import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { DummyComponent } from './dummy/dummy.component';

const routes: Routes = [
  { path: 'Delivery', component: DeliveryListComponent },
  { path: 'toyFactory', component: DummyComponent }, 
  { path: 'Legal', component: DummyComponent }, 
  { path: 'disconnect', component: DummyComponent }, 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

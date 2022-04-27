import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShippingCreateComponent } from './components/shipping-create/shipping-create.component';
import { ShippingEditComponent } from './components/shipping-edit/shipping-edit.component';
import { ShippingDeleteComponent } from './components/shipping-delete/shipping-delete.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-shipping' },
  { path: 'create-shipping', component: ShippingCreateComponent },
  { path: 'edit-shipping/:id', component: ShippingEditComponent },
  { path: 'shipping-delete', component: ShippingDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

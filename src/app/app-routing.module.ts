import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarclientesComponent } from './agregarclientes/agregarclientes.component';
import { HomeComponent } from './home/home.component';
import { ListadeclientesComponent } from './listadeclientes/listadeclientes.component';

const routes: Routes = [
  {
  path: '', component:HomeComponent},
  {
    path:'listadeclientes', component: ListadeclientesComponent
  },
  {
    path:'add-cliente/:clienteID', component: AgregarclientesComponent
  },
  {
    path:'add-cliente', component: AgregarclientesComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

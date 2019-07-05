import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { CrearComponent } from './crear/crear.component';
import { DetallesComponent } from './detalles/detalles.component';


const routes: Routes = [
    {path: '', redirectTo: 'listado', pathMatch: 'full'},
    {path: 'listado', component: ListadoComponent},
    {path: 'crear', component: CrearComponent},
    {path: 'detalles', component: DetallesComponent},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntradasRoutingModule { }

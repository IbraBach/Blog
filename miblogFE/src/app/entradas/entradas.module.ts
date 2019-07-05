import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntradasRoutingModule } from './entradas-routing.module';
import { CrearComponent } from './crear/crear.component';
import { DetallesComponent } from './detalles/detalles.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [
    CrearComponent,
    DetallesComponent,
    ListadoComponent],
  imports: [
    CommonModule,
    EntradasRoutingModule
  ]
})
export class EntradasModule { }

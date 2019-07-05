import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListadoComponent } from './entradas/listado/listado.component';
import { CrearComponent } from './entradas/crear/crear.component';
import { DetallesComponent } from './entradas/detalles/detalles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntradasModule } from './entradas/entradas.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NotFoundComponent,
    ListadoComponent,
    CrearComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EntradasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

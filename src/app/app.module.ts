import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomesComponent } from './homes/homes.component';
import { RouterModule,Routes } from '@angular/router';
import { ServiciosComponent } from './servicios/servicios.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { GaleriaDeImagenesComponent } from './galeria-de-imagenes/galeria-de-imagenes.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes =[
  
  {path: '', redirectTo:'/homes', pathMatch:'full'},
  {path: 'homes', component:HomesComponent},
  {path: 'servicios', component:ServiciosComponent},
  {path: 'quienes_somos', component:QuienesSomosComponent},
  {path: 'galeria_de_imagenes',component:GaleriaDeImagenesComponent },
  {path: 'quienes_somos', component:QuienesSomosComponent},

]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomesComponent,
    ServiciosComponent,
    QuienesSomosComponent,
    GaleriaDeImagenesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

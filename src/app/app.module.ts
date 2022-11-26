import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HacerComponent } from './pages/hacer/hacer.component';
import { TipoComponent } from './pages/tipo/tipo.component';
import { NuevoComponent } from './pages/nuevo/nuevo.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { Historico1Component } from './pages/historico1/historico1.component';
import { Historico2Component } from './pages/historico2/historico2.component';
import { Consulta2Component } from './pages/consulta2/consulta2.component';
import { NotificacionesComponent } from './pages/notificaciones/notificaciones.component';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './pages/registro/registro.component';
import { OlvidarComponent } from './pages/olvidar/olvidar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HacerComponent,
    TipoComponent,
    NuevoComponent,
    ConsultaComponent,
    Historico1Component,
    Historico2Component,
    Consulta2Component,
    NotificacionesComponent,
    RegistroComponent,
    OlvidarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

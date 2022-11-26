import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HacerComponent } from './pages/hacer/hacer.component';
import { TipoComponent } from './pages/tipo/tipo.component';
import { NuevoComponent } from './pages/nuevo/nuevo.component';
import { Consulta2Component } from './pages/consulta2/consulta2.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { Historico1Component } from './pages/historico1/historico1.component';
import { NotificacionesComponent } from './pages/notificaciones/notificaciones.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { OlvidarComponent } from './pages/olvidar/olvidar.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Hacer', component: HacerComponent },
  { path: 'Tipo', component: TipoComponent },
  { path: 'Nuevo', component: NuevoComponent },
  { path: 'Consultas', component: ConsultaComponent },
  { path: 'Consultas2', component: Consulta2Component },
  { path: 'Historico', component: Historico1Component },
  { path: 'Historico2', component: Historico1Component },
  { path: 'Registro', component: RegistroComponent },
  { path: 'Olvidar', component: OlvidarComponent },
  { path: 'Notificaciones', component: NotificacionesComponent },
  { path: '**', redirectTo:'Home' ,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

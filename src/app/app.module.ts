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
import { AngularFireModule } from '@angular/fire/compat';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment.prod';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

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
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),    
    provideFirebaseApp(()=> initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(()=>getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

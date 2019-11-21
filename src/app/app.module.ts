import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotonSeleccionadoDirective } from './directivas/boton-seleccionado-directive';
import { LoginComponent } from './componentes/login/login.component';
import { MailvisibleComponent } from './componentes/mailvisible/mailvisible.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AltaMateriaComponent } from './componentes/alta-materia/alta-materia.component';
import { ListadoUsuariosComponent } from './componentes/listado-usuarios/listado-usuarios.component';
import { ListadoMateriasComponent } from './componentes/listado-materias/listado-materias.component';
import { InscripcionAMateriaComponent } from './componentes/inscripcion-amateria/inscripcion-amateria.component';
import { MateriasAlumnoComponent } from './componentes/materias-alumno/materias-alumno.component';
import { MateriasACargoComponent } from './componentes/materias-acargo/materias-acargo.component';
import { AlumnosPorMateriaComponent } from './componentes/alumnos-por-materia/alumnos-por-materia.component';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { Error404Component } from './componentes/error404/error404.component';
import { CuposFilasDirective } from './directivas/cupos-filas.directive';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { FilterComponent } from './componentes/filter/filter.component';


import { MatTableDataSource, MatDialog, MatTableModule } from '@angular/material';
import { MateriaComponent } from './componentes/materia/materia.component';
import { MateriaCreacionComponent } from './componentes/materia-creacion/materia-creacion.component';
import { ModalInscriptosComponent } from './componentes/modal-inscriptos/modal-inscriptos.component';
import { PieComponent } from './componentes/pie/pie.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { MaterialModule } from './material/material';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    CabeceraComponent,
    PieComponent,
    LoginComponent,
    InicioComponent,
    Error404Component,
    RegistroComponent,
    ChatComponent,
    MateriaCreacionComponent,
    MateriaComponent,
    FilterComponent,  
    ModalInscriptosComponent,
    BotonSeleccionadoDirective,
    LoginComponent,
    MailvisibleComponent,
    RegistroComponent,
    AltaMateriaComponent,
    ListadoUsuariosComponent,
    ListadoMateriasComponent,
    InscripcionAMateriaComponent,
    MateriasAlumnoComponent,
    MateriasACargoComponent,
    AlumnosPorMateriaComponent,
    InicioComponent,
    PrincipalComponent,
    Error404Component,   
    CuposFilasDirective,
    CabeceraComponent,
    FilterComponent,
    MateriaComponent,
    MateriaCreacionComponent,
    ModalInscriptosComponent,
    PieComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule ,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,                              
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    MaterialModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot({
      position: ['top', 'right'],
      timeOut: 4000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true
    }),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  exports: [
    MaterialModule,
    SimpleNotificationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalInscriptosComponent
  ]
})
export class AppModule { }

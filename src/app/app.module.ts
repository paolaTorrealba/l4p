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

@NgModule({
  declarations: [
    AppComponent,
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
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,                              
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

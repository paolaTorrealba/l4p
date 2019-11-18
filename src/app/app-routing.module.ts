import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { MateriasACargoComponent } from './componentes/materias-acargo/materias-acargo.component';
import { AlumnosPorMateriaComponent } from './componentes/alumnos-por-materia/alumnos-por-materia.component';
import { InscripcionAMateriaComponent } from './componentes/inscripcion-amateria/inscripcion-amateria.component';
import { MateriasAlumnoComponent } from './componentes/materias-alumno/materias-alumno.component';
import { CanActivateService } from './servicios/can-activate.service';
import { AltaMateriaComponent } from './componentes/alta-materia/alta-materia.component';
import { ListadoUsuariosComponent } from './componentes/listado-usuarios/listado-usuarios.component';
import { ListadoMateriasComponent } from './componentes/listado-materias/listado-materias.component';
import { PrincipalComponent } from './componentes/principal/principal.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrarse', component: RegistroComponent, canActivate: [CanActivateService] },
  { path: 'principal', component: PrincipalComponent, canActivate: [CanActivateService] },
  
  { path: 'altaMateria', component: AltaMateriaComponent, canActivate: [CanActivateService] },
  { path: 'listadoUsuarios', component: ListadoUsuariosComponent, canActivate: [CanActivateService] },
  { path: 'listadoMaterias', component: ListadoMateriasComponent, canActivate: [CanActivateService] },
  
  { path: 'inscripcionAMateria', component: InscripcionAMateriaComponent, canActivate: [CanActivateService] },
  { path: 'materiasAlumno', component: MateriasAlumnoComponent, canActivate: [CanActivateService] },
  
  { path: 'materiasACargo', component: MateriasACargoComponent, canActivate: [CanActivateService] },
  { path: 'alumnosPorMateria', component: AlumnosPorMateriaComponent, canActivate: [CanActivateService] },

  


  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

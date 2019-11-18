import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UsuarioService } from './usuario.service';
import { Perfil } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class CanActivateService {

  constructor(private usuarioService: UsuarioService,
    private router: Router) {
 }

  canActivate(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    console.log("entre al canActivate", url)

    let logeado: boolean = this.usuarioService.isUserLoggedIn();

    if (url == '/loguearse' || url == '/registrarse') {
      if (!logeado)
        return true;
      else
        return false;
    }

    if (logeado) {

      console.log("esta logueado", logeado)

      if (url == '/principal') {       
          return true;       
      }
      // administrador
      if (url == '/altaMateria') {
        if (this.usuarioService.usuario.perfil != Perfil.administrador) {
          return true;
        }
      }

      if (url == '/listadoMaterias') {
        if (this.usuarioService.usuario.perfil == Perfil.administrador) {
          return true;
        }
      }

      if (url == '/listadoUsuarios') {
        if (this.usuarioService.usuario.perfil == Perfil.administrador) {
          return true;
        }
      }
      // alumno
      if (url == '/inscripcionAMateria') {
        if (this.usuarioService.usuario.perfil != Perfil.alumno) {
          return true;
        }
      }

      if (url == '/materiasAlumno') {
        if (this.usuarioService.usuario.perfil == Perfil.alumno) {
          return true;
        }
      }
      // profesor
      if (url == '/materiasACargo') {
        if (this.usuarioService.usuario.perfil == Perfil.profesor) {
          return true;
        }
      }

      if (url == '/alumnosPorMateria') {
        if (this.usuarioService.usuario.perfil == Perfil.profesor) {
          return true;
        }
      }

      
    }

    this.router.navigate([this.usuarioService.getInicioUrl()]);
    return false;
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UsuarioService } from './usuario.service';
import { Perfil } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class CanActivateService {
public perfil:string;
  constructor(private usuarioService: UsuarioService,
    private router: Router) {
      this.perfil=localStorage.getItem("perfilParcial")
      console.log("perfil" ,this.perfil)
      console.log("entre al canActivate", this.perfil)
 }

  canActivate(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    console.log("entre al canActivate", url)

    let logeado: boolean = this.usuarioService.isUserLoggedIn();

    if (url == '/login' || url == '/registro') {
      if (logeado){
        console.log("true");
        return true;
      }
      else{
        console.log("false");
        return false;
      }
       
       
    }

    if (logeado) {

      console.log("esta logueado", logeado)
      // console.log("usuario:",this.usuarioService.usuario)
      this.perfil=localStorage.getItem("perfilParcial")
      console.log("perfil:", this.perfil);
      if (url == '/principal') {       
          return true;       
      }
      // administrador
      if (url == '/altaMateria') {
        if (this.perfil == Perfil.administrador) {
          return true;
        }
      }

      if (url == '/listadoMaterias') {
        if (this.perfil  == Perfil.administrador) {
          return true;
        }
      }

      if (url == '/listadoUsuarios') {
        if (this.perfil  == Perfil.administrador) {
          return true;
        }
      }
      // alumno
      if (url == '/inscripcionAMateria') {
        console.log("perfil:", this.perfil);
        if (this.perfil  == Perfil.alumno) {
          return true;
        }
      }

      if (url == '/materiasAlumno') {
        if (this.perfil == Perfil.alumno) {
          return true;
        }
      }
      // profesor
      if (url == '/materiasACargo') {
        if (this.perfil == Perfil.profesor) {
          return true;
        }
      }

      if (url == '/alumnosPorMateria') {
        if (this.perfil == Perfil.profesor) {
          return true;
        }
      }

      
    }

    this.router.navigate([this.usuarioService.getInicioUrl()]);
    return false;
  }
}

import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { AuthService } from './auth.service';
import { UsuarioInterface, Perfil } from '../clases/usuario';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, take } from 'rxjs/operators';
import { ApiDataService } from './api-data.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  usuario: UsuarioInterface;
  estaLogeado: boolean;
  private loginUrl: string = '/loguearse';
  private incioUrl: string = '';

  public usuarioActivo:string;

  constructor(private afsAuth: AngularFireAuth, 
              private db: AngularFirestore, 
              private router: Router, 
              private apiData: ApiDataService) {
                this.limpiarUsuario();
              }

  isUserLoggedIn(): boolean {
    this.usuarioActivo=localStorage.getItem("perfilParcial");
    if (this.usuarioActivo!=''){
      this.estaLogeado=true;
    }
    return this.estaLogeado;
  }
  
  getLoginUrl(): string {
    return this.loginUrl;
  }
  getInicioUrl(): string {
    return this.incioUrl;
  }



RegistrarUsuario(usuario: UsuarioInterface) {
  return new Promise(() => {
      this.afsAuth.auth.createUserWithEmailAndPassword(usuario.email,
         usuario.password)
          .then(
              (userData) => {
                  return userData.user.updateProfile({
                      displayName: usuario.nombre                      
                  });
              },
              (err) => {
                  console.log(err);  
                  this.limpiarUsuario();               
                  console.log("Error al registrarse", "Sucedió un error al registrarse, intente nuevamente.");
              }
          )
          .then(
              () => {
                  this.EstaLogeado().pipe(take(1)).subscribe(
                      (userData) => {
                          if (userData) {
                              usuario.password = '';             
                              usuario.id = userData.uid;                
                              usuario.email = userData.email;                            
                              usuario.nombre = userData.displayName;
                              usuario.perfil = usuario.perfil;
                              usuario.activo = true;
                              console.log("Registro exitoso");
                              this.router.navigate(['']);
                              this.db.collection('usuarios').doc(userData.uid).set(usuario).then(() => {
                                  this.DesloguearUsuario();
                              });
                          }
                          else {
                            this.limpiarUsuario();
                          
                          }
                      },
                      (err) => {
                          console.log(err);
                          this.usuario = this.limpiarUsuario();
                          console.log("Error inesperado", "Sucedió un error inesperado.");
                      });
              });
  });
}

//  ============ LOGIN ===========
loguearUsuario(email: string, password: string) {
  return new Promise(() => {
      this.afsAuth.auth.signInWithEmailAndPassword(email, password)
          .then(
              (userData) => {
                  if (userData) {
                      console.log("traeruno", userData)
                      this.apiData.TraerUno(userData.user.uid, 'usuarios').pipe(take(1)).subscribe(userx => {
                              console.log("traeruno", userx)      
                              this.usuario.id = userx.Uid;
                              this.usuario.email = userx.Email;                           
                              this.usuario.nombre = userx.Nombre;
                              this.usuario.perfil = userx.Perfil;
                              this.router.navigate(['']);                          
                      });
                  }
                  else {
                      this.usuario = this.limpiarUsuario();
                  }
              },
              (err) => {
                  console.log(err);
                  this.usuario = this.limpiarUsuario();
                  console.log("Error al loguearse", "La cuenta es inexistente.");
              });
  });
}

EstaLogeado() {
  return this.afsAuth.authState.pipe(map(auth => auth));
}

DesloguearUsuario() {
  this.usuario = this.limpiarUsuario();
  this.afsAuth.auth.signOut();
}

limpiarUsuario() {
  return {
      id: '',
      nombre: '',
      email: '',
      password: '',
      activo: false,
      perfil: Perfil.alumno
  }
}

}

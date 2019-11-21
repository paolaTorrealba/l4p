// import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { UsuarioService } from 'src/app/servicios/Usuario.service';
// import { Routes, RouterModule  } from '@angular/router';
// import { Subscription } from 'rxjs';
// import { AuthProviderService } from 'src/app/providers/auth-provider.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/Usuario.service';
import { NotificationsService } from 'angular2-notifications';
import { AuthProviderService } from 'src/app/providers/auth-provider.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  emailModel: string;
  passwordModel: string;
  public usuarios:Array<any> = [];

  constructor(private usuarioService: UsuarioService, 
    private router: Router, 
    private auth: AuthProviderService,
    private ns: NotificationsService) {
    this.emailModel = "";
    this.passwordModel = "";
    localStorage.setItem("usuarioParcial",'');
    localStorage.setItem("perfilParcial",'');
  }

  ngOnInit() { }

  Logearse() {
    console.log("usuario que ingres: ",this.emailModel);  
    // this.usuarioService.LogearUsuario(this.emailModel, this.passwordModel);
    if (! this.auth.login(this.emailModel,this.passwordModel )){
      console.log("Error al loguearse")    
    } 
    else{
      console.log("se logueo",this.emailModel )
      this.obtenerUsuarios();
      localStorage.setItem("usuarioParcial",this.emailModel)      
      this.router.navigate(['/principal']);
    } 
  }
  
  obtenerUsuarios(){
    this.auth.getLista('usuarios').subscribe(lista => {
      this.usuarios=lista;
      for (let i=0; i<=this.usuarios.length-1; i++) {
        if (this.usuarios[i].email==this.emailModel){
          console.log("seteo este perfil",this.usuarios[i].perfil)
          localStorage.setItem("perfilParcial",this.usuarios[i].perfil)
        }
      }  
   
      console.log("usuarios: ",this.usuarios); 
    });
    console.log("usuarios: ",this.usuarios)
   }
  ingresoAdministrador(){
  this.emailModel="administrador@administrador.com";
  this.passwordModel="123456";
  localStorage.setItem("perfilParcial","administrador")

}
ingresoProfesor(){
  this.emailModel="profesor@profesor.com";
  this.passwordModel="123456";
  localStorage.setItem("perfilParcial","profesor")
}

ingresoAlumno(){
  this.emailModel="alumno@alumno.com";
  this.passwordModel="123456";
  localStorage.setItem("perfilParcial","alumno")

}  
}


//   tipoUser:string;
//   user= { email : '', password : ''};
//   mensaje:string;
//   semuestra:boolean; 
//   logueado:boolean

//   respuestaAuth: boolean;
//   repetidor:any;

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private auth: AuthProviderService
//     ) { 
      
//       const session = sessionStorage.getItem('user');
//       if(session==null) {
//          this.logueado=false;
//       }
//       else{
//          this.logueado=true;  
//       } 
//   }

//   ngOnInit() { }

//   // loguearse() {
//     // this.usuarioService.loguearUsuario(this.emailModel, this.passwordModel);
//   // }

//   loguearse() {  
//     console.log("usuario que ingres: ",this.user.email);  
//     if (! this.auth.login(this.user.email,this.user.password )){
//       console.log("Error al loguearse")
     
  
//     } 
//     else{
//       console.log("se logueo",this.user.email )
//       localStorage.setItem("usuarioComanda",this.user.email)
//       this.router.navigate(['/principal']);
//     } 
// }

// ingresoAdministrador(){
//   this.user.email="administrador@administrador.com";
//   this.user.password="123456";
//   localStorage.setItem("perfilParcial","administrador")

// }
// ingresoProfesor(){
//   this.user.email="profesor@profesor.com";
//   this.user.password="123456";
//   localStorage.setItem("perfilParcial","profesor")

// }
// ingresoAlumno(){
//   this.user.email="alumno@alumno.com";
//   this.user.password="123456";
//   localStorage.setItem("perfilParcial","alumno")

// }






// }

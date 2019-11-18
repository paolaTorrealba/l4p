import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/Usuario.service';
import { Routes, RouterModule  } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthProviderService } from 'src/app/providers/auth-provider.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  tipoUser:string;
  user= { email : '', password : ''};
  mensaje:string;
  semuestra:boolean; 
  logueado:boolean

  respuestaAuth: boolean;
  repetidor:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthProviderService
    ) { 
      
      const session = sessionStorage.getItem('user');
      if(session==null) {
         this.logueado=false;
      }
      else{
         this.logueado=true;  
      } 
  }

  ngOnInit() { }

  // loguearse() {
    // this.usuarioService.loguearUsuario(this.emailModel, this.passwordModel);
  // }

  loguearse() {  
    console.log("usuario que ingres: ",this.user.email);  
    if (! this.auth.login(this.user.email,this.user.password )){
      console.log("Error al loguearse")
     
  
    } 
    else{
      console.log("se logueo",this.user.email )
      localStorage.setItem("usuarioComanda",this.user.email)
      this.router.navigate(['/principal']);
    } 
}

ingresoAdministrador(){
  this.user.email="administrador@administrador.com";
  this.user.password="123456";
  localStorage.setItem("perfilParcial","administrador")

}
ingresoProfesor(){
  this.user.email="profesor@profesor.com";
  this.user.password="123456";
  localStorage.setItem("perfilParcial","profesor")

}
ingresoAlumno(){
  this.user.email="alumno@alumno.com";
  this.user.password="123456";
  localStorage.setItem("perfilParcial","alumno")

}






}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthProviderService } from 'src/app/providers/auth-provider.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  acciones: Array<any> = [];
  public email;
  public usuario;
  public usuarios;
  public perfil;
  constructor( private router: Router,    
    private auth: AuthProviderService) {
      this.obtenerUsuario();

      this.email=localStorage.getItem("usuarioParcial");  
      console.log("email del localstorage", this.email);
      this.auth.getLista('usuarios').subscribe(lista => {
        this.usuarios=lista;   
        console.log("usuarios: ", this.usuarios)  
        for(let i=0;i<this.usuarios.length;i++){
          if(this.usuarios[i].correo == this.email) {
               this.usuario=this.usuarios[i];
               console.log("el usuario:",this.usuario);
          }
        }
      });
      
      this.mostrarMenu();
  }
 
  obtenerUsuario(){
    console.log("obtengo los usuarios")
    this.email=localStorage.getItem("usuarioParcial");  
    console.log("email del localstorage", this.email);
    this.auth.getLista('usuarios').subscribe(lista => {
      this.usuarios=lista;   
      console.log("usuarios: ", this.usuarios)  
      for(let i=0;i<this.usuarios.length;i++){
        if(this.usuarios[i].correo == this.email) {
             this.usuario=this.usuarios[i];
             localStorage.setItem("perfilParcial", this.usuario.perfil);
             localStorage.setItem("usuarioParcial", this.usuario.email);
             console.log("el usuario: ",this.usuario);
        }
      }

    });
  }

  mostrarMenu(){
    this.perfil= localStorage.getItem("perfilParcial")
    console.log("el perfil: ",this.perfil);
    console.log("Muestro el menu para este usuario: ",this.usuario);
    switch(this.perfil) {
      case "administrador":
        this.acciones = [ 
          { accion: "altaMateria", img: "nuevo-empleado.jpg", ruta: "altaMateria" },
          { accion: "listadoUsuarios", img: "nuevo-empleado.jpg", ruta: "listadoUsuarios" },
          { accion: "listadoMaterias", img: "encuesta.jpg", ruta: "listadoMaterias" },
          
        ];
        break;
      case "alumno":
        this.acciones = [
                  
          { accion: "inscripcionAMateria", img: "pedido.jpg", ruta: "inscripcionAMateria"},
          { accion: "materiasAlumno", img: "pedido.png", ruta: "materiasAlumno" },          
        ];
        break;
      case "profesor": 
        this.acciones = [
          { accion: "materiasACargo", img: "bandeja.png", ruta: "materiasACargo" },
          { accion: "alumnosPorMateria", img: "producto.png", ruta: "alumnosPorMateria"},
          
        ];        
      break;
      
       
      }
  }
  ionViewDidLoad() {
  }

  logout(){
    console.log("falta hacer el logout");
    
  }

   cerrarSersion(){
    this.auth.logOut();

    localStorage.setItem("usuarioParcial","");
    localStorage.setItem("perfilParcial","");
    this.router.navigate(['/login']);
  }
  

  openComponent(item) {   
    this.router.navigate(['/'+item.ruta]);
    // this.navCtrl.setRoot(item.ruta);
  }

  ngOnInit() {}

  openPage(item) {
    
    console.log("openpage + item",item);
    this.router.navigate(['/'+item]);
  }

}


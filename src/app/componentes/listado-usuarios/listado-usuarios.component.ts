import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthProviderService } from 'src/app/providers/auth-provider.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {
  public usuarios:Array<any> = [];
  
  constructor( private router: Router,    
    private auth: AuthProviderService) {
      this.obtenerUsuarios();
      
    }

    obtenerUsuarios(){
      this.auth.getLista('usuarios').subscribe(lista => {
        this.usuarios=lista;   
     
        console.log("usuarios: ",this.usuarios); 
      });
      console.log("usuarios: ",this.usuarios)
     }

  ngOnInit() {
  }

}

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthProviderService } from 'src/app/providers/auth-provider.service';
import { Component, OnInit, Input } from '@angular/core';
import { ApiDataService } from 'src/app/servicios/api-data.service';
import { UsuarioInterface } from 'src/app/clases/Usuario';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { AuthProviderService } from 'src/app/providers/auth-provider.service';


@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.scss']
})
export class ListadoUsuariosComponent implements OnInit {

  // private displayedColumns: string[] = ['imágen', 'Nombre', 'Email', 'Perfil'];
  // private usuarios: UsuarioInterface[];
  public usuarios:Array<any> = [];
  private dataSource;
  
  // constructor(private dataApi: ApiDataService) { }
  constructor( private router: Router,    
      private auth: AuthProviderService) {
        this.obtenerUsuarios();
        
      }

  ngOnInit() {
    
    // this.dataApi.TraerTodos('usuarios')
    //   .subscribe(users => {
    //     this.usuarios = users;
    //     this.dataSource = new MatTableDataSource(this.usuarios);
    //     this.dataSource.filterPredicate = function (data, filter: string): boolean {
    //       return data.Perfil.toLowerCase().includes(filter);
    //     };
    //   });
  }
  obtenerUsuarios(){
        this.auth.getLista('usuarios').subscribe(lista => {
          this.usuarios=lista;   
       
          console.log("usuarios: ",this.usuarios); 
        });
        console.log("usuarios: ",this.usuarios)
       }




  // activarDesactivar(uid: string) {
  //   let usuario = this.usuarios.filter(x => x.Uid == uid)[0];
  //   if (usuario) {
  //     usuario.Activo = usuario.Activo ? false : true;
  //     this.dataApi.ModificarUno(usuario, 'usuarios');
  //     this.usuarios.find(x => x.Uid == uid).Activo = usuario.Activo;
  //   }
  // }

  aplicarFiltros(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}




  // Paola=================
  // public usuarios:Array<any> = [];
  
  // constructor( private router: Router,    
  //   private auth: AuthProviderService) {
  //     this.obtenerUsuarios();
      
  //   }

  //   obtenerUsuarios(){
  //     this.auth.getLista('usuarios').subscribe(lista => {
  //       this.usuarios=lista;   
     
  //       console.log("usuarios: ",this.usuarios); 
  //     });
  //     console.log("usuarios: ",this.usuarios)
  //    }

  // ngOnInit() {
  // }

// }

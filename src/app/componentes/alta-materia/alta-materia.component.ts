import { Component, OnInit } from '@angular/core';
import { AuthProviderService } from 'src/app/providers/auth-provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-materia',
  templateUrl: './alta-materia.component.html',
  styleUrls: ['./alta-materia.component.css']
})
export class AltaMateriaComponent implements OnInit {
  public usuarios:Array<any> = [];
  public materias:Array<any> = [];

  public nombreModel:string;
  public cuposModel:string;
  public cuatrimestreModel:string;
  public profesorModel:string;

  public nombreProfesor:string;

  
  constructor( private router: Router,    
    private auth: AuthProviderService) {
      this.obtenerUsuarios();
      this.obtenerMaterias();
    }

  ngOnInit() {
  }

  obtenerUsuarios(){
    this.auth.getLista('usuarios').subscribe(lista => {
      this.usuarios=lista;   
   
      console.log("usuarios: ",this.usuarios); 
    });
    console.log("usuarios: ",this.usuarios)
   }

   confirmar(){
    this.obtenerMaterias();
    console.log("cantidad materias: ",  this.materias.length)
    let data = {
      nombre:this.nombreModel,
      cupos:this.cuposModel,
      cuatrimestre:this.cuatrimestreModel,
      profesor:this.nombreProfesor,
      numero: this.materias.length + 1,
  
    }
    console.log("materia a guardar: ", data)
    this.auth.guardarMateria(data).then(res =>{     
    }).catch(error => {
      console.log(error,"error al guardar la materia"); 
  });
    
   }

   seleccionarProfesor(item){
     console.log("selecciono el profesor:",item)
     this.nombreProfesor=item.nombre;
   }

   
   obtenerMaterias(){
    this.auth.getListaMaterias("materias").subscribe(lista => {
      this.materias=lista; 
    });
    console.log("materias: ",this.materias)
   }
}

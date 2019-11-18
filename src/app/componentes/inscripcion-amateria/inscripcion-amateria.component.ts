import { Component, OnInit } from '@angular/core';
import { AuthProviderService } from 'src/app/providers/auth-provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscripcion-amateria',
  templateUrl: './inscripcion-amateria.component.html',
  styleUrls: ['./inscripcion-amateria.component.css']
})
export class InscripcionAMateriaComponent implements OnInit {
  public materias:Array<any> = [];
  public perfil:string;

  constructor( private router: Router,    
    private auth: AuthProviderService) {
      this.obtenerMaterias();
      this.perfil=localStorage.getItem("perfilParcial");
      
    }

    obtenerMaterias(){
      this.auth.getLista('materias').subscribe(lista => {
        this.materias=lista;   
     
        console.log("materias: ",this.materias); 
      });
      console.log("materias: ",this.materias)
     }

  ngOnInit() {
  }

  seleccionarMateria(item){
    let data = {
      nombreMateria:item.nombre,
      nombreProfesor: item.profesor,
      nombreAlumno:"elalumno",
      correoAlumno:"el correo del alumnos",
    }
    this.auth.guardarInscripcion(data).then(res =>{     
    }).catch(error => {
      console.log(error,"error al guardar la inscripcion"); 
    });
  }
}

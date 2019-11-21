import { Component, OnInit } from '@angular/core';
import { AuthProviderService } from 'src/app/providers/auth-provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscripcion-amateria',
  templateUrl: './inscripcion-amateria.component.html',
  styleUrls: ['./inscripcion-amateria.component.scss']
})
export class InscripcionAMateriaComponent implements OnInit {
  public materias:Array<any> = [];
  public inscripciones:Array<any> = [];
  public emailAlumno:string;
  public emailProfesor:string;
  public nombreAlumno:string;
  public listaAlumnos:Array<any> = [];

  public usuarios:Array<any> = [];
  public alumnos:Array<any> = [];
  public datosAlumno = { nombreAlumno : '', emailAlumno : ''};
  public nombreModel:string;
  public cuposModel:string;
  public cuatrimestreModel:string;
  public profesorModel:string;

  public nombreProfesor:string;
  public inscripcionAModificar:any;
  private hayIncriptos:boolean;
 

  constructor( private router: Router,    
    private auth: AuthProviderService) {
      this.obtenerMaterias();
      this.obtenerUsuarios();
      this.obtenerInscriciones();
      this.hayIncriptos=false;
      this.emailAlumno=localStorage.getItem("usuarioParcial");
      
    }

    obtenerUsuarios(){
      this.auth.getLista('usuarios').subscribe(lista => {
        this.usuarios=lista;   
        for (let i=0; i<=this.usuarios.length-1;i++){
          if (this.usuarios[i].email==this.emailAlumno){
            this.nombreAlumno=this.usuarios[i].nombre;
          }
        }
        console.log("usuarios: ",this.usuarios); 
      });
      console.log("usuarios: ",this.usuarios)
     }
  
    obtenerMaterias(){
      this.auth.getLista('materias').subscribe(lista => {
        this.materias=lista;   
      
     
        console.log("materias: ",this.materias); 
      });
      console.log("materias: ",this.materias)
     }

     obtenerInscriciones(){
      this.auth.getLista('inscripciones').subscribe(lista => {
        this.inscripciones=lista; 
      
     
        console.log("inscripciones: ",this.inscripciones); 
      });
      console.log("inscripciones: ",this.inscripciones)
     }

  ngOnInit() {
  }

  seleccionarMateria(item){
    this.hayIncriptos=false;
    this.datosAlumno={
      nombreAlumno:this.nombreAlumno,
      emailAlumno:this.emailAlumno,
    }
  
    for (let i=0; i<=this.inscripciones.length-1;i++){
      // si ya ha inscriptos en la materia, los agrego
      if (this.inscripciones[i].nombreMateria==item.nombre){
        this.inscripcionAModificar=this.inscripciones[i];
        console.log( "la inscripcion:",this.inscripcionAModificar)
        this.hayIncriptos=true;
      }
    }
    if (this.hayIncriptos){
      
      this.inscripcionAModificar.alumnos.push(this.datosAlumno);
      console.log( "la inscripcion:",this.inscripcionAModificar)
      console.log("inscripcion seleccionada",this.inscripcionAModificar)
      this.auth.updateInscripcion(this.inscripcionAModificar).then(res =>{     
      }).catch(error => {
        console.log(error,"error al guardar la inscripcion"); 
      });
    }
    else{
     
      this.listaAlumnos.push(this.datosAlumno);
      let data = {
        nombreMateria:item.nombre,
        nombreProfesor: item.profesor,
        emailProfesor: item.profesorEmail,      
        alumnos:this.listaAlumnos
      }
      console.log("inscripcion ",data)
      this.auth.guardarInscripcion(data).then(res =>{     
      }).catch(error => {
        console.log(error,"error al guardar la inscripcion"); 
      });
    }  

   
   
  }
}

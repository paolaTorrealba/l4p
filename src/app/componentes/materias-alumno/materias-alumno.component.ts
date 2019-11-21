import { Component, OnInit } from '@angular/core';
import { AuthProviderService } from 'src/app/providers/auth-provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materias-alumno',
  templateUrl: './materias-alumno.component.html',
  styleUrls: ['./materias-alumno.component.scss']
})
export class MateriasAlumnoComponent implements OnInit {
  public emailAlumno:string;
  public inscripciones:Array<any> = [];
  
  constructor( private router: Router,    
    private auth: AuthProviderService) {
      this.obtenerMaterias();
      this.emailAlumno=localStorage.getItem("usuarioParcial")
      
    }

    obtenerMaterias(){
      this.auth.getLista('inscripciones').subscribe(lista => {
        this.inscripciones=lista;   
     
        console.log("inscripciones: ",this.inscripciones); 
      });
      console.log("inscripciones: ",this.inscripciones)
     }

  ngOnInit() {
  }

}

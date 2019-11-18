import { Component, OnInit } from '@angular/core';
import { AuthProviderService } from 'src/app/providers/auth-provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materias-alumno',
  templateUrl: './materias-alumno.component.html',
  styleUrls: ['./materias-alumno.component.css']
})
export class MateriasAlumnoComponent implements OnInit {
  
  public inscripciones:Array<any> = [];
  
  constructor( private router: Router,    
    private auth: AuthProviderService) {
      this.obtenerMaterias();
      
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

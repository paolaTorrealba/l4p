import { Component, OnInit } from '@angular/core';
import { AuthProviderService } from 'src/app/providers/auth-provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materias-acargo',
  templateUrl: './materias-acargo.component.html',
  styleUrls: ['./materias-acargo.component.scss']
})
export class MateriasACargoComponent implements OnInit {
  public materias:Array<any> = [];
  public profesorEmail:string;
  constructor( private router: Router,    
    private auth: AuthProviderService) {
      this.profesorEmail=localStorage.getItem("usuarioParcial")
      this.obtenerMaterias();

      
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

}

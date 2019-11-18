import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthProviderService } from 'src/app/providers/auth-provider.service';

@Component({
  selector: 'app-listado-materias',
  templateUrl: './listado-materias.component.html',
  styleUrls: ['./listado-materias.component.css']
})
export class ListadoMateriasComponent implements OnInit {
  public materias:Array<any> = [];
  
  constructor( private router: Router,    
    private auth: AuthProviderService) {
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

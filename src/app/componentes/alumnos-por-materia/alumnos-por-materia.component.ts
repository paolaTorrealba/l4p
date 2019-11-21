import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthProviderService } from 'src/app/providers/auth-provider.service';
// --- agrego 
import { ApiDataService } from 'src/app/servicios/api-data.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { map } from 'rxjs/operators';
import { MateriaInterface } from 'src/app/clases/Materia';
import { UsuarioService } from 'src/app/servicios/Usuario.service';
import { Perfil } from 'src/app/clases/Usuario';


@Component({
  selector: 'app-alumnos-por-materia',
  templateUrl: './alumnos-por-materia.component.html',
  styleUrls: ['./alumnos-por-materia.component.scss']
})
export class AlumnosPorMateriaComponent implements OnInit {

  

  // private materias: MateriaInterface[];
  public materias:Array<any> = [];  
  public inscripciones:Array<any> = []; 
  private dataSource = new MatTableDataSource(this.materias);
  private noData = this.dataSource.connect().pipe(map((data: any[]) => data.length === 0));

  private perfil:string;


  constructor(private dataApi: ApiDataService,
    private router: Router,    
      private auth: AuthProviderService,
      private us: UsuarioService,
      public dialog: MatDialog) {
      this.perfil= localStorage.getItem("perfilParcial")
      this.obtenerMaterias(); 
      this.obtenerInscripciones();     
  }

  obtenerMaterias(){
    this.auth.getLista('materias').subscribe(lista => {
      this.materias=lista;        
      console.log("materias: ",this.materias); 
    });
    console.log("materias: ",this.materias)
   }

   obtenerInscripciones(){
    this.auth.getLista('inscripciones').subscribe(lista => {
      this.inscripciones=lista;        
      console.log("inscripciones: ",this.inscripciones); 
    });
    console.log("inscripciones: ",this.inscripciones)
   }

ngOnInit() {
this.obtenerMaterias(); 
}
}

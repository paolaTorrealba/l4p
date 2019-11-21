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
import { ModalInscriptosComponent } from '../modal-inscriptos/modal-inscriptos.component';

@Component({
  selector: 'app-listado-materias',
  templateUrl: './listado-materias.component.html',
  styleUrls: ['./listado-materias.component.scss']
})
export class ListadoMateriasComponent implements OnInit {
  private columsAdministrador: string[] = ['NombreMateria', 'Cuatrimestre', 'Cupos', 'NombreProfesor'];
  private columsProfesor: string[] = ['NombreMateria', 'Cuatrimestre', 'Cupos', 'Alumnos'];
  private columsAlumno: string[] = ['NombreMateria', 'Cuatrimestre', 'Cupos', 'NombreProfesor'];

  public materias:Array<any> = [];  
  private dataSource = new MatTableDataSource(this.materias);
  private noData = this.dataSource.connect().pipe(map((data: any[]) => data.length === 0));

  private perfil


  constructor(private dataApi: ApiDataService,
    private router: Router,    
      private auth: AuthProviderService,
      private us: UsuarioService,
      public dialog: MatDialog) {
      this.perfil= localStorage.getItem("perfilParcial")
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
    this.obtenerMaterias(); 

  }
}
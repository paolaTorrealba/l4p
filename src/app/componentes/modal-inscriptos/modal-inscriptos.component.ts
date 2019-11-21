import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ListadoMateriasComponent } from '../listado-materias/listado-materias.component';
import { MateriaInterface } from 'src/app/clases/Materia';

@Component({
  selector: 'app-modal-inscriptos',
  templateUrl: './modal-inscriptos.component.html',
  styleUrls: ['./modal-inscriptos.component.scss']
})
export class ModalInscriptosComponent  {

  private materia: MateriaInterface;

  constructor(public dialogRef: MatDialogRef<ListadoMateriasComponent>,
    @Inject(MAT_DIALOG_DATA) public _materia: MateriaInterface) {
    this.materia = _materia["materia"];
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  private objetosCollection: AngularFirestoreCollection<any>;
  private objetos: Observable<any[]>;
  private objetoDoc: AngularFirestoreDocument<any>;
  private objeto: Observable<any>;
  public selectedObjeto: any = {
      id: null
  };

  constructor(private afs: AngularFirestore) { }
  
  TraerTodos(dataNombre: string) {
      this.objetosCollection = this.afs.collection<any>(dataNombre);
      return this.objetos = this.objetosCollection.snapshotChanges()
          .pipe(map(changes => {
              return changes.map(action => {
                  const data = action.payload.doc.data() as any;
                  data.id = action.payload.doc.id;
                  return data;
              });
          }));
  }

  TraerUno(id: string, dataNombre: string) {
      this.objetoDoc = this.afs.doc<any>(`${dataNombre}/${id}`);
      return this.objeto = this.objetoDoc.snapshotChanges().pipe(map(action => {
          if (action.payload.exists === false) {
              return null;
          } else {
              const data = action.payload.data() as any;
              data.id = action.payload.id;
              return data;
          }
      }));
  }

  AgregarUno(objeto: any, dataNombre: string): void {
      this.afs.collection(dataNombre).add(objeto);
      // .doc().set(objeto);
  }

  ModificarUno(objeto: any, dataNombre: string): void {
      let id = objeto.id;
      this.objetoDoc = this.afs.doc<any>(`${dataNombre}/${id}`);
      this.objetoDoc.update(objeto);
  }

  BorrarUno(id: string, dataNombre: string): void {
      this.objetoDoc = this.afs.doc<any>(`${dataNombre}/${id}`);
      this.objetoDoc.delete();
  }
}

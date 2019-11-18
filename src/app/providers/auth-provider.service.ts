import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";

export enum Perfil {
  alumno = 'alumno',
  profesor = 'profesor',
  administrador = 'administrador'
}

export interface usuario {
  id: string;
  nombre: string;
  email: string;
  password: string;  
  perfil?: Perfil;
  activo?: boolean;
}

export interface materia {
  id: string;
  nombre: string;
  cuatrimestre: string;
  cupo: string;  
  profesor: string;
 
}

@Injectable({
  providedIn: 'root'
})
export class AuthProviderService {

  perfil: Perfil;
  constructor(private auth: AngularFireAuth,
    private db: AngularFirestore,
    private http: HttpClient) {

  }


  
  //-----USUARIOS-----
  login(email: string, pass: string) {
    return this.auth.auth.signInWithEmailAndPassword(email, pass);
  }
  getUsuarios() {
    return this.db.collection('usuarios').snapshotChanges().pipe(map(rooms => {
      return rooms.map(a => {
        const data = a.payload.doc.data() as usuario;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
  }

  getLista(tipo: string) {
    return this.db.collection(tipo).snapshotChanges().pipe(map(rooms => {
      return rooms.map(a => {
        const data = a.payload.doc.data() as usuario;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
  }


  getListaMaterias(tipo: string) {
    return this.db.collection(tipo).snapshotChanges().pipe(map(rooms => {
      return rooms.map(a => {
        const data = a.payload.doc.data() as materia;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
  }


  updateUsuario(data) {
    return this.db.collection('usuarios').doc(data.id).update(data);
  }
  logOut() {
    this.auth.auth.signOut();
  }
  guardarUsuario(data) {
    return this.db.collection('usuarios').add(data);
  }

  guardarMateria(data) {
    return this.db.collection('materias').add(data);
  }
}

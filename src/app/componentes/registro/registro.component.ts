import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { UsuarioService } from 'src/app/servicios/Usuario.service';
import { finalize } from 'rxjs/operators';
import { Observable, empty } from 'rxjs';
import { Perfil, UsuarioInterface } from 'src/app/clases/Usuario';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  perfil;
  imgName: string;
  nombreModel: string;
  emailModel: string;
  passwordModel: string;
  usuario: UsuarioInterface;
  captchaVerificado: boolean;
  accepted: boolean;
  porcentajeUpload: Observable<number>;
  urlImagen: Observable<string>;
  noCargando = true;

  constructor(private usuarioService: UsuarioService,
    private storage: AngularFireStorage,
     private elRef: ElementRef) {
      this.usuario = this.usuarioService.limpiarUsuario();
     }

  ngOnInit() {
  }


  registrarse() {
    this.usuario.perfil = Perfil[(<HTMLInputElement>document.getElementById("perfil")).value];

    this.usuario.email = this.emailModel;
    this.usuario.nombre = this.nombreModel;
    this.usuario.password = this.passwordModel;

    this.usuarioService.RegistrarUsuario(this.usuario);
  }
  changePerfil(perfil) {
    this.perfil = perfil;
  }
}

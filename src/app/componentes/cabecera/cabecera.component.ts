import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/Usuario.service';
import { ApiDataService } from 'src/app/servicios/api-data.service';
import { take } from 'rxjs/operators';
import { Perfil } from 'src/app/clases/Usuario';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  public estaLogeado: boolean;
  administrador = false;
  profesor = false;
  alumno = false;
  public usuario:string;

  constructor(private usuarioService: UsuarioService,
     private dataApi: ApiDataService) {
       this.usuario=localStorage.getItem("usuarioParcial")
      }

  ngOnInit() {
    this.TraerUsuarioActual();
  }

  TraerUsuarioActual() {
    this.usuarioService.EstaLogeado().subscribe(user => {
      if (user) {
        console.log("traer uno", user)
        this.dataApi.TraerUno(user.uid, 'usuarios').pipe(take(1)).subscribe(userx => {
          this.usuarioService.usuario = userx;
          console.log("traer uno", this.usuarioService.usuario)

          switch (this.usuarioService.usuario.perfil) {
            case Perfil.administrador:
              this.administrador = true;
              this.alumno = false;
              this.profesor = false;
              break;
            case Perfil.alumno:
              this.alumno = true;
              this.administrador = false;
              this.profesor = false;
              break;
            case Perfil.profesor:
              this.profesor = true;
              this.administrador = false;
              this.alumno = false;
              break;
          }

        });
        this.estaLogeado = true;
      }
      else {
        this.estaLogeado = false;
      }
    });

  }

  Deslogearse() {
    // this.usuarioService.DeslogearUsuario();
  }
}

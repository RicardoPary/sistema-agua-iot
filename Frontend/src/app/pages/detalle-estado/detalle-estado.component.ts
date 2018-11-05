import {Component, OnInit} from '@angular/core';
import {EstadosService} from '../../shared/services/estados.service';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-detalle-estado',
  templateUrl: './detalle-estado.component.html',
  styleUrls: ['./detalle-estado.component.scss']
})
export class DetalleEstadoComponent implements OnInit {

  public id: any;

  estados: any = [];
  verde: any;
  amarillo: any;
  rojo: any;
  grupo: any;
  ideditado: any;
  grupoeditado: any;


  rojoeditado: any;
  amarilloeditado: any;
  verdeeditado


  constructor(private detalles: EstadosService, private route: ActivatedRoute, private router: Router) {


  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.id = queryParams['id'];
      }
    );
    this.detalles.getGrupo(this.id).subscribe(estados => {
      this.estados = estados;
    });


  }

  updateEstado2(value: any) {


  }

  deleteEstado(estado: any) {

  }

  addEstado(event) {
  }

  updateEstado() {
  }
}

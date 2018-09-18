import {Component, OnInit} from '@angular/core';
import {EstadosService} from '../../services/estados.service';
import {Estado} from '../../models/estado';

@Component({
  selector: 'app-semaphore-group',
  templateUrl: './semaphore-group.component.html',
  styleUrls: ['./semaphore-group.component.scss']
})
export class SemaphoreGroupComponent implements OnInit {

  estados: any = [];
  estado: boolean;
  public nuevo: Estado;

  rojo: number;
  amarillo: number;
  verde: number;
  grupo: number;

  ideditado: any;
  rojoeditado: number;
  amarilloeditado: number;
  verdeeditado: number;
  grupoeditado: number;


  constructor(private postEstados: EstadosService) {
    this.estado = false;
    this.nuevo = {rojo: 1, amarillo: 2, verde: 3, grupo: 4};
  }

  ngOnInit() {

    this.postEstados.getAllGrupos().subscribe(estados => {
      this.estados = estados;
    });
  }

  addEstado(event) {
    event.preventDefault();
    var newEstado = {
      rojo: this.rojo,
      amarillo: this.amarillo,
      verde: this.verde,
      grupo: this.grupo
    };
    this.postEstados.addEstado(newEstado)
      .subscribe(estado => {
        this.estados.push(estado);
      });
    this.estado = false;
  }

  deleteEstado(id) {
    var estado = this.estados;
    this.postEstados.deleteEstado(id).subscribe(data => {
      if (data.body.n == 1) {
        for (var i = 0; i < estado.length; i++) {
          if (estado[i]._id == id) {
            estado.splice(i, 1);
          }
        }
      }
    });
  }


  updateEstado2(estado) {
    this.ideditado = estado._id;
    this.rojoeditado = estado.rojo;
    this.amarilloeditado = estado.amarillo;
    this.verdeeditado = estado.verde;
    this.grupoeditado = estado.grupo;
  }

  updateEstado() {
    var _estado = {
      _id: this.ideditado,
      rojo: this.rojoeditado,
      amarillo: this.amarilloeditado,
      verde: this.verdeeditado,
      grupo: this.grupoeditado
    };
    this.postEstados.updateEstado(_estado).subscribe(data => {
    });

    for (var i = 0; i < this.estados.length; i++) {
      if (this.estados[i]._id == this.ideditado) {
        this.estados[i]._id = this.ideditado;
        this.estados[i].rojo = this.rojoeditado;
        this.estados[i].amarillo = this.amarilloeditado;
        this.estados[i].verde = this.verdeeditado;
        this.estados[i].grupo = this.grupoeditado;
      }
    }

  }


}

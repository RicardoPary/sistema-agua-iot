import { Component, OnInit } from '@angular/core';
import {Semaphore} from '../../shared/models/semaphore';
import {EstadosService} from '../../shared/services/estados.service';

@Component({
  selector: 'app-norma-min',
  templateUrl: './norma-min.component.html',
  styleUrls: ['./norma-min.component.scss']
})
export class NormaMinComponent implements OnInit {

  semaforos: any[];
  id: any;
  id2: any;
  semaforo: Semaphore = new Semaphore();
  flujos: any = [];
  flujos2: any = [];

  constructor(private servicioSemaphore: EstadosService) {
  }

  ngOnInit() {
    this.cargar();
    this.id = setInterval(() => {
      this.cargar();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }


  cargar(): void {
    this.servicioSemaphore.getAllEstados().subscribe(semaforos => {
      this.semaforos = semaforos.body;
    });

    this.servicioSemaphore.getAllFlujos().subscribe(flujos => {
      this.flujos = flujos;
    });


  }


  addSemaforo(event) {
    event.preventDefault();
    this.servicioSemaphore.addEstado(this.semaforo)
      .subscribe(semaforo => {
        this.semaforos.push(semaforo);
      });
    this.reset();
  }


  /*deleteSemaforo(id) {
    var estado = this.semaforos;
    this.servicioSemaphore.deleteEstado(id).subscribe(data => {
      if (data.n == 1) {
        for (var i = 0; i < estado.length; i++) {
          if (estado[i]._id == id) {
            estado.splice(i, 1);
          }
        }
      }
    });
  }*/


  updateEstado2(estado) {
    this.semaforo = estado;
  }

  updateEstado() {
    this.servicioSemaphore.updateEstado(this.semaforo).subscribe(data => {
    });
    for (var i = 0; i < this.semaforos.length; i++) {
      if (this.semaforos[i]._id == this.semaforo._id) {
        this.semaforos[i] = this.semaforo;
      }
    }

    this.reset();
  }


  reset(): void {
    this.semaforo._id = 0;
    this.semaforo.rojo = 0;
    this.semaforo.amarillo = 0;
    this.semaforo.verde = 0;
    this.semaforo.grupo = 0;
    this.semaforo.flujo = 0;
    this.semaforo.latitud = 0;
    this.semaforo.longitud = 0;
  }

  getFlujos(): void {
    this.servicioSemaphore.getAllFlujos().subscribe(estados => {
      this.flujos = estados;

      for (var i = 0; i < this.semaforos.length; i++) {
        for (var j = 0; j < this.flujos.length; j++) {
          if (this.semaforos[i].flujo == this.flujos[j]._id.flujo &&
            this.semaforos[i].grupo == this.flujos[j]._id.grupo
          ) {
            this.semaforos[i].cantidad = this.flujos[j].numero;
          }
        }

      }

    });
  }


  getFlujos2(grupo, flujo): any {
    //var cantidad=parseInt(""+Math.random()*(10-1)+1);
    var cantidad = 0;
    for (var i = 0; i < this.flujos.length; i++) {
      if (this.flujos[i]._id.flujo == flujo &&
        this.flujos[i]._id.grupo == grupo
      ) {
        cantidad = this.flujos[i].cantidad;
      }
      /*else{
          cantidad=parseInt(""+Math.random()*(10-1)+1);
      }*/
    }
    return cantidad;
  }


  getFlujos3(grupo, flujo): any {
    //var cantidad=parseInt(""+Math.random()*(10-1)+1);
    var prioridad = 0;
    for (var i = 0; i < this.flujos.length; i++) {
      if (this.flujos[i]._id.flujo == flujo &&
        this.flujos[i]._id.grupo == grupo
      ) {
        prioridad = this.flujos[i].prioridad;
      }
      /*else{
          cantidad=parseInt(""+Math.random()*(10-1)+1);
      }*/
    }
    return prioridad;
  }


  getFlujos4(grupo, flujo): any {
    //var cantidad=parseInt(""+Math.random()*(10-1)+1);
    var cantidad = 0;
    for (var i = 0; i < this.flujos.length; i++) {
      if (this.flujos[i]._id.flujo == flujo &&
        this.flujos[i]._id.grupo == grupo
      ) {
        cantidad = this.flujos[i].cantidad;
      }
      /*else{
          cantidad=parseInt(""+Math.random()*(10-1)+1);
      }*/
    }
    return cantidad;
  }

}





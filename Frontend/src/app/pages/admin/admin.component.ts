import {Component, OnInit} from '@angular/core';
import {AutosService} from '../../shared/services/autos.service';
import {SensorService} from '../../shared/services/sensor.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  registro_flujo: any;
  registro_flujo_bus: any;
  registro_flujo_minibus: any;
  registro_flujo_pesado: any;
  registro_flujo_policia: any;
  registro_flujo_particular: any;
  registro_flujo_ambulancia: any;
  registro_infracciones: any;
  promedio_sensores: any = [];

  id1: any;
  id2: any;
  id3: any;
  id4: any;
  id5: any;
  id6: any;
  id7: any;
  id8: any;
  id9: any;

  avgConductividad: any;
  avgPH: any;
  avgTemperatura: any;
  avgTurbidez: any;

  currentConductividad: any;
  currentPH: any;
  currentTemperatura: any;
  currentTurbidez: any;

  avgDates: any;
  currentDates: any;

  constructor(private flujo: AutosService,
              private sensor: SensorService,
              private sensorService: SensorService) {
  }

  ngOnInit() {

    this.avgDates = setInterval(() => {
      this.sensorService.getAllSensoresAVG().subscribe(
        res => {
          this.avgConductividad = res.body[0].conductividad;
          this.avgPH = res.body[0].ph;
          this.avgTemperatura = res.body[0].temperatura;
          this.avgTurbidez = res.body[0].turbidez;
        }
      );
    }, 2000);

    this.currentDates = setInterval(() => {
      this.sensorService.getAllSensoresCurrent().subscribe(
        res => {
          this.currentConductividad = res.body[0].conductividad;
          this.currentPH = res.body[0].ph;
          this.currentTemperatura = res.body[0].temperatura;
          this.currentTurbidez = res.body[0].turbidez;
        }
      );
    }, 2000);


    /*this.getFlujosRegistro();
    this.getFlujosRegistroBus();
    this.getFlujosRegistroMinibus();
    this.getFlujosRegistroPolicia();
    this.getFlujosRegistroPesado();
    this.getFlujosRegistroParticular();
    this.getFlujosRegistroAmbulancia();
    this.getRegistroInfracciones();
    this.getPromedio();
*/
    /*this.id1 = setInterval(() => {
      this.getFlujosRegistro();
    }, 5000);*/
    /*this.id2 = setInterval(() => {
      this.getFlujosRegistroBus();
    }, 5000);
    this.id3 = setInterval(() => {
      this.getFlujosRegistroMinibus();
    }, 5000);
    this.id4 = setInterval(() => {
      this.getFlujosRegistroPolicia();
    }, 5000);
    this.id5 = setInterval(() => {
      this.getFlujosRegistroPesado();
    }, 5000);
    this.id6 = setInterval(() => {
      this.getFlujosRegistroParticular();
    }, 5000);
    this.id7 = setInterval(() => {
      this.getFlujosRegistroAmbulancia();
    }, 5000);
    this.id8 = setInterval(() => {
      this.getRegistroInfracciones();
    }, 5000);
    this.id9 = setInterval(() => {
      this.getPromedio();
    }, 5000);*/
  }

  ngOnDestroy() {

    clearInterval(this.avgDates);
    clearInterval(this.currentDates);
    /* clearInterval(this.id2);
     clearInterval(this.id3);
     clearInterval(this.id4);
     clearInterval(this.id5);
     clearInterval(this.id6);
     clearInterval(this.id7);
     clearInterval(this.id8);
     clearInterval(this.id9);*/

  }

  getPromedio(): void {
    this.sensor.getPromedio().subscribe(post => {
      this.promedio_sensores = post;
    });
  }

  getFlujosRegistro(): void {
    this.flujo.getFlujoRegistro().subscribe(post => {
      this.registro_flujo = post;
    });
  }

  getFlujosRegistroBus(): void {
    this.flujo.getFlujoRegistroBus().subscribe(post => {
      this.registro_flujo_bus = post;
    });
  }

  getFlujosRegistroMinibus(): void {
    this.flujo.getFlujoRegistroMinibus().subscribe(post => {
      this.registro_flujo_minibus = post;
    });
  }

  getFlujosRegistroPesado(): void {
    this.flujo.getFlujoRegistroPesado().subscribe(post => {
      this.registro_flujo_pesado = post;
    });
  }

  getFlujosRegistroPolicia(): void {
    this.flujo.getFlujoRegistroPolicia().subscribe(post => {
      this.registro_flujo_policia = post;
    });
  }

  getFlujosRegistroParticular(): void {
    this.flujo.getFlujoRegistroParticular().subscribe(post => {
      this.registro_flujo_particular = post;
    });
  }

  getFlujosRegistroAmbulancia(): void {
    this.flujo.getFlujoRegistroAmbulancia().subscribe(post => {
      this.registro_flujo_ambulancia = post;
    });
  }

  getRegistroInfracciones(): void {
    this.flujo.getRegistroInfracciones().subscribe(post => {
      this.registro_infracciones = post;
    });
  }

}




import {Component, OnInit} from '@angular/core';
import {AutosService} from '../../shared/services/autos.service';
import {SensorService} from "../../shared/services/sensor.service";

@Component({
  selector: 'app-datos-turbiedad',
  templateUrl: './datos-turbiedad.component.html',
  styleUrls: ['./datos-turbiedad.component.scss']
})
export class DatosTurbiedadComponent implements OnInit {

  sensores: any;

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

    this.sensorService.getAllSensores().subscribe(
      res => this.sensores = res.body
    );
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
  }

  ngOnDestroy() {
    clearInterval(this.avgDates);
    clearInterval(this.currentDates);
  }
}


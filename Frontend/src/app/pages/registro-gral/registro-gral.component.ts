import {Component, OnInit} from '@angular/core';
import {AutosService} from "../../shared/services/autos.service";
import {SensorService} from "../../shared/services/sensor.service";

@Component({
  selector: 'app-registro-gral',
  templateUrl: './registro-gral.component.html',
  styleUrls: ['./registro-gral.component.scss']
})

export class RegistroGralComponent implements OnInit {

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
  }

  ngOnDestroy() {
    clearInterval(this.avgDates);
    clearInterval(this.currentDates);
  }
}

import {Component, OnInit} from '@angular/core';
import {SensorService} from "../../shared/services/sensor.service";

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss']
})
export class ReporteComponent implements OnInit {

  sensores: any;

  constructor(private sensorService: SensorService) {
  }

  ngOnInit() {
    this.sensorService.getAllSensores().subscribe(
      res => this.sensores = res.body
    );
  }

}

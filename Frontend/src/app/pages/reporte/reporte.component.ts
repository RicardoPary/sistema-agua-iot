import {Component, OnInit} from '@angular/core';
import {SensorService} from "../../shared/services/sensor.service";

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss']
})
export class ReporteComponent implements OnInit {

  sensores: any;
  id: any;

  constructor(private sensorService: SensorService) {
  }

  ngOnInit() {
    this.id = setInterval(() => {
      this.loadChart();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }

  loadChart() {
    this.sensorService.getAllSensores().subscribe(
      res => this.sensores = res.body
    );
  }

}

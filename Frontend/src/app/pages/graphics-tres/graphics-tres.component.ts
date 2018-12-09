import {Component, OnInit} from '@angular/core';
import {SensorService} from "../../shared/services/sensor.service";

@Component({
  selector: 'app-graphics-tres',
  templateUrl: './graphics-tres.component.html',
  styleUrls: ['./graphics-tres.component.scss']
})
export class GraphicsTresComponent implements OnInit {

  data: any = [];
  id: any;

  lineChartData: Array<any> = [];
  lineChartLabels: Array<any> = [];
  lineChartOptions: any = {responsive: true};
  lineChartLegend = true;
  lineChartType = 'line';

  constructor(private sensorService: SensorService) {

  }

  ngOnInit() {
    this.loadChart();
    this.id = setInterval(() => {
      this.loadChart();
    }, 1000);

  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }

  getSensorData(data, type: any): Array<any> {
    let dataAux: Array<any> = new Array();
    for (let i = 0; i < data.length; i++) {
      dataAux[i] = data[i][type];
    }
    return dataAux;
  }

  loadChart() {
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    var auxFirstDay = firstDay.getFullYear() + "-" + ((firstDay.getMonth()) + 1) + "-" + firstDay.getDate();
    var auxLastDay = lastDay.getFullYear() + "-" + ((lastDay.getMonth()) + 1) + "-" + lastDay.getDate();

    this.sensorService.getAllSensoresByDate(auxFirstDay, auxLastDay).subscribe(res => {
      this.lineChartData = [
        {data: [null], label: 'Temperatura'},
        {data: [null], label: 'PH'},
        {data: [null], label: 'Turbidez'},
        {data: [null], label: 'Conductividad'}
      ];
      this.lineChartLabels = this.getSensorData(res.body, 'fecha');
      this.lineChartData[0].data = this.getSensorData(res.body, 'temperatura');
      this.lineChartData[1].data = this.getSensorData(res.body, 'ph');
      this.lineChartData[2].data = this.getSensorData(res.body, 'turbidez');
      this.lineChartData[3].data = this.getSensorData(res.body, 'conductividad');
    });
  }
}

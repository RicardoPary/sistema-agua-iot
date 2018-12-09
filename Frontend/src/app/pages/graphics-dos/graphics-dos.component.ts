import {Component, OnInit} from '@angular/core';
import {SensorService} from "../../shared/services/sensor.service";

@Component({
  selector: 'app-graphics-dos',
  templateUrl: './graphics-dos.component.html',
  styleUrls: ['./graphics-dos.component.scss']
})
export class GraphicsDosComponent implements OnInit {

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
    var firstDay = this.startOfWeek(new Date());
    var lastDay = this.lastOfWeek(new Date());
    var auxFirstDay = this.getDateFilter(firstDay);
    var auxLastDay = this.getDateFilter(lastDay);

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

  startOfWeek(date) {
    var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  }

  lastOfWeek(date) {
    var diff = date.getDate() + (date.getDay() === 0 ? 0 : 7 - date.getDay());
    return new Date(date.setDate(diff));
  }

  getDateFilter(date: any) {
    const month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    const year = date.getFullYear();
    return year + '-' + month + '-' + day;
  }
}

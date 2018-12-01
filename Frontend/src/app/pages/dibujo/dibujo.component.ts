import {Component, OnInit} from '@angular/core';
import {SensorService} from '../../shared/services/sensor.service';

@Component({
  selector: 'app-dibujo',
  template: `
    <div style="flex: 0 0 95%;max-width:95%;">
      <div style="display: block;" *ngIf="lineChartData.length > 0">
        <canvas baseChart width="418" height="209"
                [datasets]="lineChartData"
                [labels]="lineChartLabels"
                [options]="lineChartOptions"
                [legend]="lineChartLegend"
                [chartType]="lineChartType"></canvas>
      </div>
    </div>
  `,
  styleUrls: ['./dibujo.component.scss']
})
export class DibujoComponent implements OnInit {

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
    this.sensorService.getAllSensores().subscribe(res => {
      this.lineChartData = [
        {data: [null], label: 'Temperatura'},
        {data: [null], label: 'PH'},
        {data: [null], label: 'Turbidez'},
        {data: [null], label: 'Conductividad'}
      ];
      this.lineChartLabels = this.getSensorData(res.body, 'hora');
      this.lineChartData[0].data = this.getSensorData(res.body, 'temperatura');
      this.lineChartData[1].data = this.getSensorData(res.body, 'ph');
      this.lineChartData[2].data = this.getSensorData(res.body, 'turbidez');
      this.lineChartData[3].data = this.getSensorData(res.body, 'conductividad');
    });
  }
}

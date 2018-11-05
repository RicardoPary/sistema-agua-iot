import { Component, OnInit } from '@angular/core';
import { SensorService } from '../../shared/services/sensor.service';

@Component({
  selector: 'app-dibujo5',
  templateUrl: './dibujo5.component.html',
  styleUrls: ['./dibujo5.component.scss']
})
export class Dibujo5Component implements OnInit {

  estados: any = [];
  id:any;

  constructor(private postEstados: SensorService) { }

  ngOnInit(){
      this.randomize();
      this.id=setInterval(()=>{this.randomize();},1000);
  }

  ngOnDestroy(){
      if(this.id){
        clearInterval(this.id);
      }
  }


      public humo():Array<any> {
  let cadena:Array<any>=new Array();
  let j:number=0;
      for (let i of this.estados) {
        cadena[j]=i.humo;
        j=j+1;
        }
  return cadena;
}


  public sonido():Array<any> {
  let cadena:Array<any>=new Array();
  let j:number=0;
      for (let i of this.estados) {
        cadena[j]=i.sonido;
        j=j+1;
        }
  return cadena;
  }


  public hora():Array<any> {
  let cadena:Array<any>=new Array();
  let j:number=0;
      for (let i of this.estados) {
        cadena[j]=i.hora;
        j=j+1;
        }
  return cadena;
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Humo'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Sonido'}
  ];

  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(83, 200, 175, 1)',
      borderColor: '#53C8AF',
      pointBackgroundColor: '#53C8AF',
      pointBorderColor: '#53C8AF',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(56, 124, 138, 1)',
      borderColor: '#387C8A',
      pointBackgroundColor: '#387C8A',
      pointBorderColor: '#387C8A',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public randomize():void {

    this.postEstados.getAllSensores().subscribe(estados => {
      this.estados = estados;
  	  });
    // Only Change 3 values
    let clone:any[] = [
    {data: this.humo(), label: 'Humo'},
    {data: this.sonido(), label: 'Sonido'}
    ];

    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
}

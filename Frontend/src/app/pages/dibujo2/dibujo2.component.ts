import { Component, OnInit } from '@angular/core';
import { SensorService } from '../../shared/services/sensor.service';

@Component({
  selector: 'app-dibujo2',
  templateUrl: './dibujo2.component.html',
  styleUrls: ['./dibujo2.component.scss']
})
export class Dibujo2Component implements OnInit {

  estados: any = [];ç
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
  
  
  public temperatura():Array<any> {
  let cadena:Array<any>=new Array();
  let j:number=0;    
      for (let i of this.estados) {
        cadena[j]=i.temperatura;
        j=j+1;
        }  
  return cadena;  
}


  public humedad():Array<any> {
  let cadena:Array<any>=new Array();
  let j:number=0;    
      for (let i of this.estados) {
        cadena[j]=i.humedad;
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

  public lineChartData:Array<any> = [
    {data: [1,23,5,6,8,9,0,5,3,3,5,6,125,3,3,5,6,12], label: 'Temperatura'},
    {data: [1,23,5,6,8,9,0,5,3,3,5,6,125,3,3,5,6,12], label: 'Humedad'}
   ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(83, 200, 175, 0.4)',
      borderColor: '#53C8AF',
      pointBackgroundColor: '#53C8AF',
      pointBorderColor: '#53C8AF',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(56, 124, 138, 0.4)',
      borderColor: '#387C8A',
      pointBackgroundColor: '#387C8A',
      pointBorderColor: '#387C8A',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  public randomize():void {

  this.postEstados.getAllSensores().subscribe(estados => {
      this.estados = estados;
  	  }); 

  let _lineChartLabels:Array<any> = this.hora();

  let _lineChartData:Array<any> = [
    {data: this.temperatura(), label: 'Temperatura'},
    {data: this.humedad(), label: 'Humedad'}

  ];
  this.lineChartData=_lineChartData;
  this.lineChartLabels=_lineChartLabels;
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}

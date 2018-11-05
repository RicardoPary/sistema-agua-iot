import { Component, OnInit } from '@angular/core';
import { SensorService } from '../../shared/services/sensor.service';

@Component({
  selector: 'app-dibujo3',
  templateUrl: './dibujo3.component.html',
  styleUrls: ['./dibujo3.component.scss']
})
export class Dibujo3Component implements OnInit {

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

  public lineChartData:Array<any> = [
    {data: [1,23,5,6,8,9,0,5,3,3,5,6,12], label: 'Sonido'}
   ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
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
    {data: this.sonido(), label: 'Sonido'}

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

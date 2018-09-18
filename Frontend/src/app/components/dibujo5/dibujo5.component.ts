import { Component, OnInit } from '@angular/core';
import { SensoresService } from '../../services/sensores.service';

@Component({
  selector: 'app-dibujo5',
  templateUrl: './dibujo5.component.html',
  styleUrls: ['./dibujo5.component.scss']
})
export class Dibujo5Component implements OnInit {
estados: any = [];
id:any;

  constructor(private postEstados: SensoresService) { }

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
  let cadena: Array<any>=new Array();
  let j: number=0;    
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

  public radarChartLabels:string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
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
  public radarChartData:any = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'Humo'},
    {data: [28, 48, 40, 19, 96, 27, 100], label: 'Sonido'}
  ];
  public radarChartType:string = 'radar';

  public randomize():void
  {
    this.postEstados.getAllSensores().subscribe(estados => {
      this.estados = estados;
  	  });

    let _radarChartData:any = [
    {data: this.humo(), label: 'Humo'},
    {data: this.sonido(), label: 'Sonido'}    
  ];

      let _radarChartLabels:string[] =this.hora() ;

      this.radarChartData=_radarChartData;
      this.radarChartLabels=_radarChartLabels;
  }
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}

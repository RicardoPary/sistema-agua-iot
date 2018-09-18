import { Component, OnInit } from '@angular/core';

export interface Marker {
  nombre?:string;
  lati:number;
  longi:number;
  arrastrable:boolean;
}

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  title: string = 'Congestion Vehicular';
  lat: number = -16.5135966;
  lng: number = -68.1661939;
  zoom: number = 13;

  markers:Marker[]=[
      {
        nombre:'santa rosa',
        lati: 4.869262,
        longi:-75.623928,
        arrastrable:true
      },
      {
        nombre:'Dosquebradas',
        lati: 4.831826,
        longi:-75.633928,
        arrastrable:true
      },
      {
        nombre:'pereira',
        lati: 4.808718,
        longi:-75.690601,
        arrastrable:false
      }
  ];

    constructor() { }

    ngOnInit() {
    }

    marcadorCliqueado(marcador:Marker,index:number){
      console.log("Marcador Cliqueado: "+marcador.nombre+" en el index: "+index);
    }

    mapCliqueado($event:any){
      console.log("Mapa Cliqueado");
      var nuevoMarcador={
        nombre:'Sin titulo',
        lati:$event.coords.lat,
        longi:$event.coords.lng,
        arrastrable:false
      }
      this.markers.push(nuevoMarcador);
    }


    posicionFinalMarcador(marcador:any,$event:any){
      console.log("Posicion final: ",marcador,$event);

      var actualizarMarcador={
        nombre:marcador.nombre,
        lati:parseFloat(marcador.lat),
        longi:parseFloat(marcador.lng),
        arrastrable:false
      }
      var nuevaLati=$event.coords.lat;
      var nuevaLongi=$event.coords.lng;
    }
}

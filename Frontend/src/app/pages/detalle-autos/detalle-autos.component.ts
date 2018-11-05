import { Component, OnInit } from '@angular/core';
import { EstadosService } from '../../shared/services/estados.service';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detalle-autos',
  templateUrl: './detalle-autos.component.html',
  styleUrls: ['./detalle-autos.component.scss']
})
export class DetalleAutosComponent implements OnInit {

  id:any;

  public grupo:any;
  public flujo:any;

  autos: any = [];

  constructor(private detalles: EstadosService,private route:ActivatedRoute, private router:Router) { 
    
   
  }

  ngOnInit(){
      this.cargar();
      this.id=setInterval(()=>{this.cargar();},1000);
  }

  ngOnDestroy(){
      if(this.id){
        clearInterval(this.id);
      }
  }


  cargar() {
     this.route.queryParams.subscribe(
          (queryParams:any)=>{   
            this.grupo=queryParams['grupo'];
            this.flujo=queryParams['flujo'];  
          }
        );       
  	  this.detalles.getFlujo(this.grupo,this.flujo).subscribe(autos => {
      this.autos = autos;
  	  });
  }

}

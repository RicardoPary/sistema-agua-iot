
import { Component, OnInit } from '@angular/core';
import { AutosService } from '../../shared/services/autos.service';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-graphics-dos',
  templateUrl: './graphics-dos.component.html',
  styleUrls: ['./graphics-dos.component.scss']
})
export class GraphicsDosComponent implements OnInit {

  public id:any;

  estados: any = [];
  constructor(private postEstados: AutosService,private route:ActivatedRoute, private router:Router) {


  }

  ngOnInit() {

   /*   this.route.queryParams.subscribe(
          (queryParams:any)=>{
            this.id=queryParams['id'];
          }
        );
  	  this.postEstados.getAuto(this.id).subscribe(estados => {
      this.estados = estados;
  	  });*/
  }


}




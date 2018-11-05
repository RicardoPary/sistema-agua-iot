import {NgModule} from '@angular/core';
import {PostService} from './../shared/services/post.service';
import {EstadosService} from './../shared/services/estados.service';
import {MysqlService} from './../shared/services/mysql.service';
import {AutosService} from './../shared/services/autos.service';
import {SensorService} from './../shared/services/sensor.service';
import {DatosTempComponent} from './datos-temp/datos-temp.component';
import {DatosPhComponent} from './datos-ph/datos-ph.component';
import {GraphicsComponent} from './graphics/graphics.component';
import {MapsComponent} from './maps/maps.component';
import {DatosConductComponent} from './datos-conduct/datos-conduct.component';
import {RegistroGralComponent} from './registro-gral/registro-gral.component';
import {AlertasComponent} from './alertas/alertas.component';
import {DetalleEstadoComponent} from './detalle-estado/detalle-estado.component';
import {DiagramasComponent} from './diagramas/diagramas.component';
import {DibujoComponent} from './dibujo/dibujo.component';
import {Dibujo2Component} from './dibujo2/dibujo2.component';
import {Dibujo3Component} from './dibujo3/dibujo3.component';
import {Dibujo4Component} from './dibujo4/dibujo4.component';
import {Dibujo5Component} from "./dibujo5/dibujo5.component";
import {AdminComponent} from './admin/admin.component';
import {NewArticleComponent} from './new-article/new-article.component';
import {DatosTurbiedadComponent} from './datos-turbiedad/datos-turbiedad.component';
import {DetalleAutosComponent} from './detalle-autos/detalle-autos.component';
import {DatoSalinidadComponent} from './dato-salinidad/dato-salinidad.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ChartsModule} from 'ng2-charts';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NormaMinComponent} from './norma-min/norma-min.component';
import {DatoSdtComponent} from './dato-sdt/dato-sdt.component';
import {GraphicsDosComponent} from './graphics-dos/graphics-dos.component';
import {PagesComponent} from "./pages.component";
import {ReporteComponent} from './reporte/reporte.component';
import {GraphicsTresComponent} from './graphics-tres/graphics-tres.component';
import {ReportePrincipalComponent} from './reporte-principal/reporte-principal.component';
import {FiguraComponent} from './figura/figura.component';
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      {path: '', redirectTo: 'admin', pathMatch: 'full'},
      {path: 'dibujos', component: DiagramasComponent},
      {path: 'detalle', component: DetalleEstadoComponent},
      {path: 'detalleflujo', component: DetalleAutosComponent},
      {path: 'new-article', component: NewArticleComponent},
      {path: 'grafico1', component: GraphicsComponent},
      {path: 'grafico2', component: GraphicsDosComponent},
      {path: 'grafico3', component: GraphicsTresComponent},
      {path: 'alertas', component: AlertasComponent},
      {path: 'admin', component: AdminComponent},
      {path: 'registrogrl', component: RegistroGralComponent},
      {path: 'datostemp', component: DatosTempComponent},
      {path: 'datosdt', component: DatoSdtComponent},
      {path: 'datosconduct', component: DatosConductComponent},
      {path: 'datosph', component: DatosPhComponent},
      {path: 'datosalinidad', component: DatoSalinidadComponent},
      {path: 'datosturbiedad', component: DatosTurbiedadComponent},
      {path: 'normamin', component: NormaMinComponent},
      {path: 'mapas', component: MapsComponent},
      {path: 'reporte', component: ReporteComponent},
      {path: 'reporte-principal', component: ReportePrincipalComponent},
      {path: 'admin', component: AdminComponent}
    ]
  }
];

@NgModule({
  declarations: [
    DatosTempComponent,
    DatosPhComponent,
    GraphicsComponent,
    MapsComponent,
    DatosConductComponent,
    RegistroGralComponent,
    AlertasComponent,
    DetalleEstadoComponent,
    DiagramasComponent,
    DibujoComponent,
    Dibujo2Component,
    Dibujo3Component,
    Dibujo4Component,
    Dibujo5Component,
    AdminComponent,
    DetalleAutosComponent,
    DatoSalinidadComponent,
    DatosTurbiedadComponent,
    NewArticleComponent,
    NormaMinComponent,
    DatoSdtComponent,
    GraphicsDosComponent,
    GraphicsTresComponent,
    PagesComponent,
    ReporteComponent,
    ReportePrincipalComponent,
    FiguraComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
    ChartsModule,
    NgbModule.forRoot(),
    Angular2FontawesomeModule
  ],
  providers: [
    PostService,
    EstadosService,
    MysqlService,
    AutosService,
    SensorService
  ]
})
export class PagesModule {
}

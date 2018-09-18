import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {PostService} from './services/post.service';
import {EstadosService} from './services/estados.service';
import {MysqlService} from './services/mysql.service';
import {AutosService} from './services/autos.service';
import {SensoresService} from './services/sensores.service';
import {CarRegisterComponent} from './components/car-register/car-register.component';
import {FlowRegisterComponent} from './components/flow-register/flow-register.component';
import {GraphicsComponent} from './components/graphics/graphics.component';
import {MapsComponent} from './components/maps/maps.component';
import {SemaphoreGroupComponent} from './components/semaphore-group/semaphore-group.component';
import {SemaphoreTimeComponent} from './components/semaphore-time/semaphore-time.component';
import {SensorRegisterComponent} from './components/sensor-register/sensor-register.component';
import {DetalleEstadoComponent} from './components/detalle-estado/detalle-estado.component';
import {DiagramasComponent} from './components/diagramas/diagramas.component';
import {DibujoComponent} from './components/dibujo/dibujo.component';
import {Dibujo2Component} from './components/dibujo2/dibujo2.component';
import {Dibujo3Component} from './components/dibujo3/dibujo3.component';
import {Dibujo4Component} from './components/dibujo4/dibujo4.component';
import {AdminComponent} from './components/admin/admin.component';
import {NewArticleComponent} from './components/new-article/new-article.component';
import {MultasRegistroComponent} from './components/multas-registro/multas-registro.component';
import {DetalleAutosComponent} from './components/detalle-autos/detalle-autos.component';
import {Dibujo5Component} from './components/dibujo5/dibujo5.component';
import {FlujoRegistroComponent} from './components/flujo-registro/flujo-registro.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {routing} from './routes';
import {ChartsModule} from 'ng2-charts';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CarRegisterComponent,
    FlowRegisterComponent,
    GraphicsComponent,
    MapsComponent,
    SemaphoreGroupComponent,
    SemaphoreTimeComponent,
    SensorRegisterComponent,
    DetalleEstadoComponent,
    DiagramasComponent,
    DibujoComponent,
    Dibujo2Component,
    Dibujo3Component,
    Dibujo4Component,
    Dibujo5Component,
    AdminComponent,
    DetalleAutosComponent,
    FlujoRegistroComponent,
    MultasRegistroComponent,
    NewArticleComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    FormsModule,
    HttpClientModule,
    routing,
    ChartsModule,
    NgbModule.forRoot(),
    Angular2FontawesomeModule
  ],
  providers: [
    PostService,
    EstadosService,
    MysqlService,
    AutosService,
    SensoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

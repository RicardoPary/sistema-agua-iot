import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { CarRegisterComponent } from './components/car-register/car-register.component';
import { FlowRegisterComponent } from './components/flow-register/flow-register.component';
import { GraphicsComponent } from './components/graphics/graphics.component';
import { MapsComponent } from './components/maps/maps.component';
import { SemaphoreGroupComponent } from './components/semaphore-group/semaphore-group.component';
import { SemaphoreTimeComponent } from './components/semaphore-time/semaphore-time.component';
import { SensorRegisterComponent } from './components/sensor-register/sensor-register.component';

import { DiagramasComponent } from './components/diagramas/diagramas.component';
import { DetalleEstadoComponent } from './components/detalle-estado/detalle-estado.component';

import { DetalleAutosComponent } from './components/detalle-autos/detalle-autos.component';
import { DibujoComponent } from './components/dibujo/dibujo.component';
import { Dibujo2Component } from './components/dibujo2/dibujo2.component';
import { Dibujo3Component } from './components/dibujo3/dibujo3.component';
import { Dibujo4Component } from './components/dibujo4/dibujo4.component';
import { Dibujo5Component } from './components/dibujo5/dibujo5.component';

import { AdminComponent } from './components/admin/admin.component';
import { NewArticleComponent } from './components/new-article/new-article.component';

import { FlujoRegistroComponent } from './components/flujo-registro/flujo-registro.component';
import { MultasRegistroComponent } from './components/multas-registro/multas-registro.component';


const rutas: Routes = [
    {path:'tareas',component: SemaphoreTimeComponent},    
    {path:'contactos',component: CarRegisterComponent},
    {path:'dibujos',component: DiagramasComponent},
    {path:'detalle',component: DetalleEstadoComponent},
    {path:'detalleflujo',component: DetalleAutosComponent},
    {path:'contaminacion',component: SensorRegisterComponent},
    {path:'admin',component: AdminComponent},
    {path:'autos',component: GraphicsComponent},
    {path:'maps',component: MapsComponent},
    {path:'semaforos',component: SemaphoreGroupComponent},
    {path:'flujos',component: FlowRegisterComponent},
    {path:'flujohistorial',component: FlujoRegistroComponent},
    {path:'multashistorial',component: MultasRegistroComponent},
    {path:'new-article',component: NewArticleComponent},
    {path:'', redirectTo:'/admin',pathMatch:'full'},
                      ];
export const routing: ModuleWithProviders = RouterModule.forRoot(rutas);
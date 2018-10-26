import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { DatosTempComponent} from './components/datos-temp/datos-temp.component';
import { DatosPhComponent } from './components/datos-ph/datos-ph.component';
import { GraphicsComponent } from './components/graphics/graphics.component';
import { MapsComponent } from './components/maps/maps.component';
import { DatosConductComponent } from './components/datos-conduct/datos-conduct.component';
import { RegistroGralComponent } from './components/registro-gral/registro-gral.component';
import {AlertasComponent} from './components/alertas/alertas.component';

import { DiagramasComponent } from './components/diagramas/diagramas.component';
import { DetalleEstadoComponent } from './components/detalle-estado/detalle-estado.component';

import { DetalleAutosComponent } from './components/detalle-autos/detalle-autos.component';
import { DibujoComponent } from './components/dibujo/dibujo.component';
import { Dibujo2Component } from './components/dibujo2/dibujo2.component';
import { Dibujo3Component } from './components/dibujo3/dibujo3.component';
import { Dibujo4Component } from './components/dibujo4/dibujo4.component';

import { AdminComponent } from './components/admin/admin.component';
import { NewArticleComponent } from './components/new-article/new-article.component';

import { DatoSalinidadComponent } from './components/dato-salinidad/dato-salinidad.component';
import { DatosTurbiedadComponent } from './components/datos-turbiedad/datos-turbiedad.component';
import {NormaMinComponent} from './components/norma-min/norma-min.component';
import {DatoSdtComponent} from './components/dato-sdt/dato-sdt.component';
import {GraphicsDosComponent} from './components/graphics-dos/graphics-dos.component';
import {LoginComponent} from "./components/login/login.component";
import {CompoComponent} from "./components/compo.component";
import {ReporteComponent} from "./components/reporte/reporte.component";
import {GraphicsTresComponent} from "./components/graphics-tres/graphics-tres.component";
import {ReportePrincipalComponent} from "./components/reporte-principal/reporte-principal.component";

const rutas: Routes = [
    {path: 'dibujos', component: DiagramasComponent},
    {path: 'detalle', component: DetalleEstadoComponent},
    {path: 'detalleflujo', component: DetalleAutosComponent},
    {path: 'new-article', component: NewArticleComponent     },
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
    {path: 'login', component: LoginComponent},
    {path: 'reporte', component: ReporteComponent},
    {path: 'reporte-principal', component: ReportePrincipalComponent},
    {path: '', redirectTo: '/admin', pathMatch: 'full'},
    {path: 'compo', component: CompoComponent,
      children: [
        {path: '', redirectTo: 'admin', pathMatch: 'full' }
      ]
    }
                      ];
export const routing: ModuleWithProviders = RouterModule.forRoot(rutas);

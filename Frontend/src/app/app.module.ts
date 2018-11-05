import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ChartsModule} from 'ng2-charts';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren: './core/components/login/login.module#LoginModule'},
  {path: 'pages', loadChildren: './pages/pages.module#PagesModule'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {useHash: true}),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    FormsModule,
    HttpClientModule,
    ChartsModule,
    NgbModule.forRoot(),
    Angular2FontawesomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

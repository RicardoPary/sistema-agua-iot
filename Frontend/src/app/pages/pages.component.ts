import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pages',
  template: `
    <div class="container-fluid display-table">
      <div class="row display-table-row">

        <!--side menu-->
        <div class="col-md-2 col-sm-1 hidden-xs-down display-table-cell valign-top" id="side-menu"
             style="width: 300px;">
          <img src="../assets/logo.png" alt="" style="margin: 60px 30px 30px 30px">
          <ul class="nav flex-column">
            <li class="link active">
              <a [routerLinkActive]="['active']"
                 [routerLink]="'admin'">
                <i class="fa fa-windows" aria-hidden="true"></i>
                <span class="hidden-sm-down hidden-xs-down">Inicio</span>
              </a>
            </li>
            <li class="link">
              <a href="#collapse-comments5" data-toggle="collapse" aria-controls="collapse-comments5">
                <i class="fa fa-area-chart" aria-hidden="true"></i>
                <span class="hidden-sm-down hidden-xs-down">Reporte</span>
                <span class="badge badge-danger pull-right hidden-sm-down hidden-xs-down">10</span>
              </a>
              <ul class="collapse collapseable" id="collapse-comments5">
                <li><a [routerLinkActive]="['active']"
                       [routerLink]="'reporte-principal'">Reporte por grafico</a></li>
                <li><a [routerLinkActive]="['active']"
                       [routerLink]="'reporte'">Reporte por datos</a></li>
              </ul>
            </li>

            <li class="link">
              <a href="#collapse-comments" data-toggle="collapse" aria-controls="collapse-comments">
                <i class="fa fa-database" aria-hidden="true"></i>
                <span class="hidden-sm-down hidden-xs-down">Registro</span>
                <span class="badge badge-danger pull-right hidden-sm-down hidden-xs-down">20</span>
              </a>
              <ul class="collapse collapseable" id="collapse-comments">
                <li><a [routerLinkActive]="['active']" [routerLink]="'registrogrl'">Registro General</a></li>
                <li><a [routerLinkActive]="['active']" [routerLink]="'datostemp'">Datos de temperatura</a></li>
                <li><a [routerLinkActive]="['active']" [routerLink]="'datosph'">Datos de pH</a></li>
                <li><a [routerLinkActive]="['active']" [routerLink]="'datosconduct'">Datos de Conductividad</a></li>
                <li><a [routerLinkActive]="['active']" [routerLink]="'datosdt'">Datos de Sólidos Disueltos Totales</a>
                </li>
                <li><a [routerLinkActive]="['active']" [routerLink]="'datosturbiedad'">Datos de Turbiedad</a></li>
              </ul>
            </li>

            <li class="link">
              <a href="#collapse-comments2" data-toggle="collapse" aria-controls="collapse-comments2">
                <i class="fa fa-area-chart" aria-hidden="true"></i>
                <span class="hidden-sm-down hidden-xs-down">Estádistica</span>
              </a>
              <ul class="collapse collapseable" id="collapse-comments2">
                <li><a [routerLinkActive]="['active']" [routerLink]="'grafico1'">Datos actuales</a></li>
                <li><a [routerLinkActive]="['active']" [routerLink]="'grafico2'">Datos semanal</a></li>
                <li><a [routerLinkActive]="['active']" [routerLink]="'grafico3'">Datos mensual</a></li>
              </ul>
            </li>

            <li class="link">
              <a href="#collapse-comments3" data-toggle="collapse" aria-controls="collapse-comments3">
                <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                <span class="hidden-sm-down hidden-xs-down">Alerta</span>
                <span class="badge badge-warning pull-right hidden-sm-down hidden-xs-down">2</span>
              </a>
              <ul class="collapse collapseable" id="collapse-comments3">
                <li><a [routerLinkActive]="['active']" [routerLink]="'alertas'">Parámetros en alerta</a></li>
              </ul>
            </li>

            <li class="link">
              <a href="#collapse-comments4" data-toggle="collapse" aria-controls="collapse-comments4">
                <i class="fa fa-book" aria-hidden="true"></i>
                <span class="hidden-sm-down hidden-xs-down">Norma Boliviana 512</span>
              </a>
              <ul class="collapse collapseable" id="collapse-comments4">
                <li><a [routerLinkActive]="['active']" [routerLink]="'normamin'">Parámetros de control</a></li>
              </ul>
            </li>

            <li class="link settings-btn">
              <a href="#collapse-contaminations" data-toggle="collapse" aria-controls="collapse-contaminations">
                <i class="fa fa-question-circle" aria-hidden="true"></i>
                <span class="hidden-sm-down hidden-xs-down">Ayuda</span>
              </a>
              <ul class="collapse collapseable" id="collapse-contaminations">
                <li><a [routerLinkActive]="['active']" [routerLink]="'contaminacion'">OMS</a></li>
              </ul>
            </li>


          </ul>
        </div>

        <!--main content area-->
        <div class="col-md-10 col-sm-11 display-table-cell valign-top box">
          <header id="nav-header" class="clearfix" class="row">

            <div class="col-md-5">
              <h2 class="hidden-sm-down hidden-xs-down" style="margin-top: 8px">SISTEMA DE MONITOREO</h2>
            </div>
            <div class="col-md-3">
              <input class="form-control hidden-sm-down hidden-xs-down" type="search" placeholder="Buscar..."
                     style="margin-top: 10px">
            </div>
            <div class="col-md-1">
              <i class="fa fa-search" style="margin-top: 20px" aria-hidden="true"></i>
            </div>
            <div class="col-md-3">
              <ul class="pull-right">
                <li class="fixed-width">
                  <a href="">
                    <i class="fa fa-bell" aria-hidden="true"></i>
                    <span class="badge badge-pill badge-warning pull-right">20</span>
                  </a>
                </li>

                <li class="fixed-width">
                  <a href="">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <span class="badge badge-pill badge-danger pull-right">20</span>
                  </a>
                </li>

                <li>
                  <a href="javascript()" class="logout" (click)="logout()">
                    <i class="fa fa-sign-out" aria-hidden="true"></i>
                    log out
                  </a>
                </li>

              </ul>
            </div>

          </header>

          <div id="content">
            <router-outlet></router-outlet>
          </div>


          <div class="row">
            <footer id="admin-footer" class="clearfix">
              <div class="pull-left"><b>Copyright </b>&copy; 2018</div>
              <div class="pull-right">admin system</div>
            </footer>
          </div>

        </div>

      </div>
    </div>


  `,
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['login']);
  }

}

import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-compo',
  template: `
    <div class="container-fluid display-table">
  <div class="row display-table-row">

    <!--side menu-->
    <div class="col-md-2 col-sm-1 hidden-xs-down display-table-cell valign-top" id="side-menu" style="width: 300px;">
      <img src="../assets/logo.png" alt="" style="margin: 60px 30px 30px 30px">
      <ul class="nav flex-column">

        <li class="link active">
          <a routerLink="/admin">
            <i class="fa fa-windows" aria-hidden="true"></i>
            <span class="hidden-sm-down hidden-xs-down">Inicio</span>
          </a>
        </li>

        <li class="link">
          <a href="#collapse-comments" data-toggle="collapse" aria-controls="collapse-comments">
            <i class="fa fa-database" aria-hidden="true"></i>
            <span class="hidden-sm-down hidden-xs-down">Registro</span>
            <span class="badge badge-danger pull-right hidden-sm-down hidden-xs-down">20</span>
          </a>
          <ul class="collapse collapseable" id="collapse-comments">
            <li><a routerLink="/registrogrl">Registro General</a></li>
            <li><a routerLink="/datostemp">Datos de temperatura</a></li>
            <li><a routerLink="/datosph">Datos de pH</a></li>
            <li><a routerLink="/datosconduct">Datos de Conductividad</a></li>
            <li><a routerLink="/datosdt">Datos de Sólidos Disueltos Totales</a></li>
            <li><a routerLink="/datosalinidad">Datos de Salinidad</a></li>
            <li><a routerLink="/datosturbiedad">Datos de Turbiedad</a></li>
          </ul>
        </li>

        <li class="link">
          <a href="#collapse-comments2" data-toggle="collapse" aria-controls="collapse-comments2">
            <i class="fa fa-area-chart" aria-hidden="true"></i>
            <span class="hidden-sm-down hidden-xs-down">Estádistica</span>
            <span class="badge badge-danger pull-right hidden-sm-down hidden-xs-down">20</span>
          </a>
          <ul class="collapse collapseable" id="collapse-comments2">
            <li><a routerLink="/grafico1">Datos actuales</a></li>
            <li><a routerLink="/grafico2">Datos mensual</a></li>
          </ul>
        </li>

        <li class="link">
          <a href="#collapse-comments22" data-toggle="collapse" aria-controls="collapse-comments22">
            <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
            <span class="hidden-sm-down hidden-xs-down">Alerta</span>
            <span class="badge badge-warning pull-right hidden-sm-down hidden-xs-down">20</span>
          </a>
          <ul class="collapse collapseable" id="collapse-comments22">
            <li><a routerLink="/alertas">Parámetros en alerta</a></li>
          </ul>
        </li>

        <li class="link">
          <a href="#collapse-comments222" data-toggle="collapse" aria-controls="collapse-comments222">
            <i class="fa fa-book" aria-hidden="true"></i>
            <span class="hidden-sm-down hidden-xs-down">Norma Boliviana 512</span>
            <span class="badge badge-danger pull-right hidden-sm-down hidden-xs-down">20</span>
          </a>
          <ul class="collapse collapseable" id="collapse-comments222">
            <li><a routerLink="/normamin">Parámetros de control</a></li>
          </ul>
        </li>

        <li class="link settings-btn">
          <a href="#collapse-contaminations" data-toggle="collapse" aria-controls="collapse-contaminations">
            <i class="fa fa-question-circle" aria-hidden="true"></i>
            <span class="hidden-sm-down hidden-xs-down">Ayuda</span>
            <span class="badge badge-danger pull-right hidden-sm-down hidden-xs-down">20</span>
          </a>
          <ul class="collapse collapseable" id="collapse-contaminations">
            <li><a routerLink="/contaminacion">OMS</a></li>
          </ul>

        </li>


      </ul>
    </div>

    <!--main content area-->
    <div class="col-md-10 col-sm-11 display-table-cell valign-top box" >
      <header id="nav-header" class="clearfix" class="row">

        <div class="col-md-5">
          <h2 class="hidden-sm-down hidden-xs-down" style="margin-top: 8px">SISTEMA DE MONITOREO</h2> 
        </div>
        <div class="col-md-3">
          <input class="form-control hidden-sm-down hidden-xs-down" type="search" placeholder="Buscar..." style="margin-top: 10px">
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
              <a href="javascript()" class="logout">
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


      <div class="row" >
        <footer id="admin-footer" class="clearfix">
          <div class="pull-left"><b>Copyright </b>&copy; 2018</div>
          <div class="pull-right">admin system</div>
        </footer>
      </div>

    </div>

  </div>
</div>

  `,
  styleUrls: ['./compo.component.scss']
})
export class CompoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

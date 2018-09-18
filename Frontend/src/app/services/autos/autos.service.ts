import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AutosService {
  id: any;

  constructor(private http: HttpClient) {
  }

  getFlujoHistorial(): Observable<HttpResponse<any>> {
    return this.http.get('http://localhost:3000/api/flujohistorial', {observe: 'response'});
  }


  getMultasHistorial(): Observable<HttpResponse<any>> {
    return this.http.get('http://localhost:3000/api/multashistorial', {observe: 'response'});
  }

  getAllRegistros(): Observable<HttpResponse<any>> {
    return this.http.get('http://localhost:3000/api/mysql', {observe: 'response'});
  }


  getAuto(id) {

  }

  getFlujoRegistro(): Observable<HttpResponse<any>> {
    return this.http.get('http://localhost:3000/api/flujo_registro', {observe: 'response'});
  }

  getFlujoRegistroBus(): Observable<HttpResponse<any>> {
    return this.http.get('http://localhost:3000/api/flujo_registro/bus', {observe: 'response'});
  }

  getFlujoRegistroMinibus(): Observable<HttpResponse<any>> {
    return this.http.get('http://localhost:3000/api/flujo_registro/minibus', {observe: 'response'});
  }

  getFlujoRegistroPesado(): Observable<HttpResponse<any>> {
    return this.http.get('http://localhost:3000/api/flujo_registro/pesado', {observe: 'response'});
  }

  getFlujoRegistroPolicia() {
    return this.http.get('http://localhost:3000/api/flujo_registro/policia', {observe: 'response'});
  }

  getFlujoRegistroParticular(): Observable<HttpResponse<any>> {
    return this.http.get('http://localhost:3000/api/flujo_registro/particular', {observe: 'response'});
  }

  getFlujoRegistroAmbulancia(): Observable<HttpResponse<any>> {
    return this.http.get('http://localhost:3000/api/flujo_registro/ambulancia', {observe: 'response'});
  }

  getRegistroInfracciones(): Observable<HttpResponse<any>> {
    return this.http.get('http://localhost:3000/api/flujo_registro/infracciones', {observe: 'response'});
  }


  addAutos(newTask): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/autos', JSON.stringify(newTask), {observe: 'response', headers: headers});
  }

  deleteAutos(id): Observable<HttpResponse<any>> {
    return this.http.delete('/api/autos/' + id, {observe: 'response'});
  }

  updateAutos(task): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put('/api/autos/' + task._id, JSON.stringify(task), {observe: 'response', headers: headers});
  }
}

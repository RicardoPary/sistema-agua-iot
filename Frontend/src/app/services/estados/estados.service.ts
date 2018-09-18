import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

@Injectable()
export class EstadosService {

  prueba: any;

  constructor(private http: HttpClient) {
  }


  getAllEstados(): Observable<HttpResponse<any>> {
    return this.http.get('http://localhost:3000/api/estados', {observe: 'response'});
  }

  getAllFlujos(): Observable<HttpResponse<any>> {
    return this.http.get('http://localhost:3000/api/flujos', {observe: 'response'});
  }


  /*  getAllFlujos():Observable<Flujo[]>{
      return this.http.get('api/flujos').map(
        (res) => {
          let body = res.json();
          return body;
          }
        )
    }
  */


  getAllGrupos(): Observable<HttpResponse<any>> {
    return this.http.get('http://localhost:3000/api/grupos', {observe: 'response'});
  }

  getGrupo(id): Observable<HttpResponse<any>> {
    return this.http.get('http://localhost:3000/api/grupos/' + id, {observe: 'response'});
  }

  getFlujo(grupo, flujo): Observable<HttpResponse<any>> {
    return this.http.get('http://localhost:3000/api/flujo/' + grupo + '/' + flujo, {observe: 'response'});
  }


  getFlujoUnico(grupo, flujo): Observable<HttpResponse<any>> {
    return this.http.get('http://localhost:3000/api/flujounico/' + grupo + '/' + flujo, {observe: 'response'});
  }


  addEstado(newTask): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('localhost:3000/api/estados', JSON.stringify(newTask), {observe: 'response', headers: headers});
  }

  getEstado(id): Observable<HttpResponse<any>> {
    return this.http.get('http://localhost:3000/api/estado/' + id, {observe: 'response'});
  }

  deleteEstado(id): Observable<HttpResponse<any>> {
    return this.http.delete('/api/task/' + id, {observe: 'response'});
  }

  updateEstado(task): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put('/api/task/' + task._id, JSON.stringify(task), {observe: 'response', headers: headers});
  }
}

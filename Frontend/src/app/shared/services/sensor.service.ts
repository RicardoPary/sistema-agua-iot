import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable()
export class SensorService {

  private urlResource = environment.endPoint + 'sensor';

  constructor(private http: HttpClient) {
  }

  getAllSensores(): Observable<HttpResponse<any>> {
    return this.http.get(`${this.urlResource}`, {observe: 'response'});
  }

  getAllSensoresAVG(): Observable<HttpResponse<any>> {
    return this.http.get(`${this.urlResource}/avg`, {observe: 'response'});
  }

  getAllSensoresByDate(fromDate, toDate): Observable<HttpResponse<any>> {
    return this.http.get(`${this.urlResource}/${fromDate}/${toDate}`, {observe: 'response'});
  }

  getAllSensoresCurrent(): Observable<HttpResponse<any>> {
    return this.http.get(`${this.urlResource}/current`, {observe: 'response'});
  }

  deleteSensor(id) {
    return this.http.delete('http://localhost:3000/api/sensoresd/' + id).pipe(
      map(res => res)
    );
  }

  getPromedio() {
    return this.http.get('http://localhost:3000/api/sensor/avg/promedio').pipe(
      map(res => res)
    );
  }
}

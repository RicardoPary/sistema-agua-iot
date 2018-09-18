import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class SensoresService {

  constructor(private http: HttpClient) {
  }

  getAllSensores() {
    return this.http.get('http://localhost:3000/api/sensores').pipe(
      map(res => res)
    );
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

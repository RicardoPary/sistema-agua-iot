import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MysqlService {

  constructor(private http: HttpClient) {
  }

  getAllR() {
    return this.http.get('http://192.168.43.138:8080/')
      .pipe(
        map(res => res)
      );
  }

}



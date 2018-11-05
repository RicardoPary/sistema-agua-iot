import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) {
  }

  // Get all posts from the API
  getAllPost() {
    return this.http.get('api/posts').pipe(
      map(res => res)
    );
  }


}

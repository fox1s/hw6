import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private  httpClient: HttpClient) {
  }

  getPostsFromAPI(): Observable<any[]>  {
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getChosenPostFromAPI(id): Observable<any> {
    return this.httpClient.get<any>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}

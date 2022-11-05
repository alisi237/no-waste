import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Item} from '../models/items-model';

@Injectable({
  providedIn: 'root'
})
export class ItemsRestService {

  private static readonly DATABASE_URL = '/api/v1/groceries/routes/grocerieRoutes';

  constructor(private http: HttpClient) {
  }

  addItem(item: Item): Observable<Item> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Item>(ItemsRestService.DATABASE_URL, item, {headers})
    .pipe(catchError(err => {
        console.log('tbd', err);
        return throwError(err);
    }));

  }

  getItems(): Observable<Item[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Item[]>(ItemsRestService.DATABASE_URL, {headers})
      .pipe(catchError(err => {
        console.log('tbd', err);
        return throwError(err);
    }));
  }

  removeItem(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(ItemsRestService.DATABASE_URL + '/' + id, {headers})
      .pipe(catchError(err => {
        console.log('tbd', err);
        return throwError(err);
    }));
  }
}
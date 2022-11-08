import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Item } from '../models/home-tab-model';

@Injectable({
  providedIn: 'root'
})
export class HomeRestService {

  private static readonly DATABASE_URL = 'http://localhost:6000/api/v1/groceries/';

  constructor(private http: HttpClient) {
  }

  addItem(item: Item): Observable<Item> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Item>(HomeRestService.DATABASE_URL, {name: 'dingens', place: 'bummens'}, { headers })
      .pipe(catchError(err => {
        console.log('tbd', err);
        return throwError(err);
      }));

  }

  getItems(): Observable<Item[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Item[]>(HomeRestService.DATABASE_URL, { headers })
      .pipe(catchError(err => {
        console.log('tbd', err);
        return throwError(err);
      }));
  }

  removeItem(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(HomeRestService.DATABASE_URL + '/' + id, { headers })
      .pipe(catchError(err => {
        console.log('tbd', err);
        return throwError(err);
      }));
  }
}
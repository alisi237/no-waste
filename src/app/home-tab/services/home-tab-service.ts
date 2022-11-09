import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Item, ItemStorage } from '../models/home-tab-model';

@Injectable({
  providedIn: 'root'
})
export class HomeRestService {

  private static readonly DATABASE_URL_ITEMS = 'http://localhost:8080/api/v1/groceries/';
  private static readonly DATABASE_URL_STORAGES = 'http://localhost:8080/api/v1/storages/';

  constructor(private http: HttpClient) {
  }

  addItem(item: Item): Observable<Item> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log('addItem was triggered');
    return this.http.post<Item>(HomeRestService.DATABASE_URL_ITEMS, {name: item.name, place: item.storage, bestBefore: item.date, amount: item.amount}, { headers })
      .pipe(catchError(err => {
        console.log('Unexpected error: Could not add item to database.', err);
        return throwError(err);
      }));

  }

  getItems(): Observable<Item[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Item[]>(HomeRestService.DATABASE_URL_ITEMS, { headers })
      .pipe(catchError(err => {
        console.log('Unexpected error: Could not get items from database.', err);
        return throwError(err);
      }));
  }

  removeItem(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(HomeRestService.DATABASE_URL_ITEMS + '/' + id, { headers })
      .pipe(catchError(err => {
        console.log('Unexpected error: Could not remove item from database.', err);
        return throwError(err);
      }));
  }

  addStorage(storage: ItemStorage): Observable<ItemStorage> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log('addStorage was triggered');
    return this.http.post<ItemStorage>(HomeRestService.DATABASE_URL_STORAGES, {name: storage.name}, { headers })
      .pipe(catchError(err => {
        console.log('Unexpected error: Could not add storage to database.', err);
        return throwError(err);
      }));

  }

  getStorage(): Observable<ItemStorage[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<ItemStorage[]>(HomeRestService.DATABASE_URL_STORAGES, { headers })
      .pipe(catchError(err => {
        console.log('Unexpected error: Could not get storage from database.', err);
        return throwError(err);
      }));
  }

  removeStorage(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(HomeRestService.DATABASE_URL_STORAGES + '/' + id, { headers })
      .pipe(catchError(err => {
        console.log('Unexpected error: Could not remove storage from database.', err);
        return throwError(err);
      }));
  }
}
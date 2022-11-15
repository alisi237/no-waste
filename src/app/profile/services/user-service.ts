import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserRestService {

  private static readonly DATABASE_URL_USER = 'http://localhost:8080/api/v1/users/';

  constructor(private http: HttpClient) {
  }

  createUser(user: User): Observable<User> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log('createUser was triggered');
    return this.http.post<User>(UserRestService.DATABASE_URL_USER, {name: user.name, email: user.email, role: user.role, password: user.password}, { headers })
      .pipe(catchError(err => {
        console.log('Unexpected error: Could not add user to database.', err);
        return throwError(err);
      }));
  }

  getAllUsers(): Promise<User[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<User[]>(UserRestService.DATABASE_URL_USER, { headers })
      .pipe(catchError(err => {
        console.log('Unexpected error: Could not get all users from database.', err);
        return throwError(err);
      })).toPromise();
  }

  getUser(id: string): Promise<User> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<User>(UserRestService.DATABASE_URL_USER + '/' + id, { headers })
      .pipe(catchError(err => {
        console.log('Unexpected error: Could not get user with this ID from database.', err);
        return throwError(err);
      })).toPromise();
  }

  updateUser() {
    // to be added?
  }

  removeUser(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(UserRestService.DATABASE_URL_USER + '/' + id, { headers })
      .pipe(catchError(err => {
        console.log('Unexpected error: Could not remove user from database.', err);
        return throwError(err);
      }));
  }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiURL = "http://localhost:8000/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {

    return this.httpClient.get(this.apiURL + '/clientes/')
      .pipe(
        catchError(this.errorHandler)
      )
  }
  create(cliente: Cliente): Observable<any> {
    return this.httpClient.post(this.apiURL + '/clientes/novo/', JSON.stringify(cliente), this.httpOptions)


      .pipe(
        catchError(this.errorHandler)
      )
  }
  /**
  * Write code on Method
  *
  * @return response()
  */
  find(id: number): Observable<any> {

    return this.httpClient.get(this.apiURL + '/clientes/' + id)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  update(id: number, cliente: Cliente): Observable<any> {

    return this.httpClient.put(this.apiURL + '/clientes/update/' + id, JSON.stringify(cliente), this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  delete(id: number) {
    return this.httpClient.delete(this.apiURL + '/clientes/' + id, this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Empresa } from './empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private apiURL = "http://localhost:8000/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {

    return this.httpClient.get(this.apiURL + '/empresas/')
      .pipe(
        catchError(this.errorHandler)
      )
  }
  create(empresa: Empresa): Observable<any> {
    return this.httpClient.post(this.apiURL + '/empresas/novo/', JSON.stringify(empresa), this.httpOptions)


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

    return this.httpClient.get(this.apiURL + '/empresas/' + id)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  update(id: number, empresa: Empresa): Observable<any> {

    return this.httpClient.put(this.apiURL + '/empresas/update/' + id, JSON.stringify(empresa), this.httpOptions)

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
    return this.httpClient.delete(this.apiURL + '/empresas/' + id, this.httpOptions)

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

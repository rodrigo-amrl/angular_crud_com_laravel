import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Funcionario } from './funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private apiURL = "http://localhost:8000/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {

    return this.httpClient.get(this.apiURL + '/funcionarios/')
      .pipe(
        catchError(this.errorHandler)
      )
  }
  create(funcionario: Funcionario): Observable<any> {
    return this.httpClient.post(this.apiURL + '/funcionarios/novo/', JSON.stringify(funcionario), this.httpOptions)


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

    return this.httpClient.get(this.apiURL + '/funcionarios/' + id)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  update(id: number, funcionario: Funcionario): Observable<any> {

    return this.httpClient.put(this.apiURL + '/funcionarios/update/' + id, JSON.stringify(funcionario), this.httpOptions)

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
    return this.httpClient.delete(this.apiURL + '/funcionarios/' + id, this.httpOptions)

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

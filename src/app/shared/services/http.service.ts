import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

   BACKEND_PREFIX = '/backend';

  constructor(
    private http: HttpClient,
  ) {}

  get<T>(path: string, params: HttpParams = new HttpParams(), headers = {}): Observable<T> {
    return this.http.get<T>(
      'http://localhost:8080' + this.BACKEND_PREFIX + path,
      { params, headers }
      );
  }

  put(path: string, body: any): Observable<any> {
    return this.http.put(
      this.BACKEND_PREFIX + path,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  post<T>(path: string, body: any = {}, headers: HttpHeaders = new HttpHeaders()): Observable<T> {
    headers = headers.set('Content-type', 'application/json');

    return this.http.post<T>(
      'http://localhost:8080' + this.BACKEND_PREFIX + path,
      JSON.stringify(body),
      {headers : headers}
    ).pipe(catchError(this.formatErrors));
  }

  patch<T>(path: string, body: any = {}, headers: HttpHeaders = new HttpHeaders()): Observable<T> {
    headers = headers.set('Content-type', 'application/json');

    return this.http.patch<T>(
      'http://localhost:8080' + this.BACKEND_PREFIX + path,
      JSON.stringify(body),
      {headers : headers}
    ).pipe(catchError(this.formatErrors));
  }

  delete(path, headersObj = {}): Observable<any> {
    return this.http.delete(
      'http://localhost:8080' + this.BACKEND_PREFIX + path,
      {headers : headersObj}
    ).pipe(catchError(this.formatErrors));
  }

  private formatErrors(error: any) {
    return  throwError(error.error);
  }
}


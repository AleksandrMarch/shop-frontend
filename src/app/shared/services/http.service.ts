import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

   BACKEND_PREFIX = '/backend';

  constructor(
    private http: HttpClient,
  ) {}

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(this.BACKEND_PREFIX + path, { params });
  }

  put(path: string, body: any): Observable<any> {
    return this.http.put(
      this.BACKEND_PREFIX + path,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: any): Observable<any> {
    return this.http.post(
      this.BACKEND_PREFIX + path,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  delete(path): Observable<any> {
    return this.http.delete(
      this.BACKEND_PREFIX + path
    ).pipe(catchError(this.formatErrors));
  }

  private formatErrors(error: any) {
    return  throwError(error.error);
  }
}


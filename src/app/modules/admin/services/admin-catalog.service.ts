import { Injectable } from '@angular/core';
import {Category} from '../../../core/interfaces';
import {HttpService} from '../../../shared/services/http.service';
import {ENDPOINTS} from '../../../core/endpoints';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminCatalogService {

  constructor(private http: HttpService) { }

  public getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(ENDPOINTS.categories);
  }

}

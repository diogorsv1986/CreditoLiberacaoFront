// credit-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditApiService {
  private apiUrl = 'http://localhost:8080/credit/process'; // Substitua pela URL correta da sua API

  constructor(private http: HttpClient) { }

  processCreditRequest(requestData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, requestData);
  }
}

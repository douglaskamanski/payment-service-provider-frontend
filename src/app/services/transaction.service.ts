import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';
import { ReadTransactionDto } from '../models/ReadTransactionDto';

@Injectable({
  providedIn: 'root'
})

export class TransactionService {
 
  private apiUrl = `${environment.ApiUrl}/Transaction/list-all-transactions`

  constructor(private http: HttpClient) { }

  GetListAllTransactions(): Observable<Response<ReadTransactionDto[]>> {
    return this.http.get<Response<ReadTransactionDto[]>>(this.apiUrl);
  }
}

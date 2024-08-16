import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';
import { CreatePaymentDto } from '../models/CreatePaymentDto';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiUrl = `${environment.ApiUrl}/Payment/payment`

  constructor(private http: HttpClient) { }

  PostCreatePayment(createPaymentDto: CreatePaymentDto) : Observable<Response<CreatePaymentDto>> {
    return this.http.post<Response<CreatePaymentDto>>(`${this.apiUrl}`, createPaymentDto);
  }
}

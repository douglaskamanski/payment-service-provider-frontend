import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';
import { ReadPayableDto } from '../models/ReadPayableDto';
import { ReadTotalValuesPayablesDto } from '../models/ReadTotalValuesPayablesDto';

@Injectable({
  providedIn: 'root'
})
export class PayableService {

  private paidApiUrl = `${environment.ApiUrl}/Payable/list-paid-payables`;
  private waitingFundsApiUrl = `${environment.ApiUrl}/Payable/list-waiting-funds-payables`;
  private totalValuesApiUrl = `${environment.ApiUrl}/Payable/total-values-payables`;

  constructor(private http: HttpClient) { }

  GetListPaidPayables(): Observable<Response<ReadPayableDto[]>> {
    return this.http.get<Response<ReadPayableDto[]>>(this.paidApiUrl);
  }

  GetListWaitingFundsPayables(): Observable<Response<ReadPayableDto[]>> {
    return this.http.get<Response<ReadPayableDto[]>>(this.waitingFundsApiUrl);
  }

  GetTotalValuesPayables(): Observable<Response<ReadTotalValuesPayablesDto>> {
    return this.http.get<Response<ReadTotalValuesPayablesDto>>(this.totalValuesApiUrl);
  }
}

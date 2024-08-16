import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { PayableService } from '../../services/payable.service';
import { ReadPayableDto } from '../../models/ReadPayableDto';

/*Angular material */
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button';

/*Currency format */
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt  from '@angular/common/locales/pt';

registerLocaleData(localePt);

@Component({
  selector: 'app-list-waiting-funds-payables',
  standalone: true,
  imports: [MatTableModule,
            MatCardModule,
            MatButtonModule,
            CurrencyPipe
  ],
  templateUrl: './list-waiting-funds-payables.component.html',
  styleUrl: './list-waiting-funds-payables.component.css',
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }]
})
export class ListWaitingFundsPayablesComponent implements OnInit {

  readPayableDto: ReadPayableDto[] = [];
  columnsTable = ['Data pagamento', 'Valor'];
  
  constructor(private payableService: PayableService, private router: Router) {
  }

  ngOnInit(): void {
    this.payableService.GetListWaitingFundsPayables().subscribe(returnApi => {
      const returnApiData = returnApi.data;

      returnApiData.map((item => {
        item.paymentDate = new Date(item.paymentDate!).toLocaleString('pt-BR');
      }));

      this.readPayableDto = returnApiData;
    })
  }

  backHome() {
    this.router.navigate(['/']);
  }
}

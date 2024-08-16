import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyPipe, DatePipe, NgFor } from '@angular/common';
import { TransactionService } from '../../services/transaction.service';
import { ReadTransactionDto } from '../../models/ReadTransactionDto';

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
  selector: 'app-list-transactions',
  standalone: true,
  imports: [NgFor, 
            DatePipe,
            CurrencyPipe,
            MatTableModule,
            MatCardModule,
            MatButtonModule
  ],
  templateUrl: './list-transactions.component.html',
  styleUrl: './list-transactions.component.css',
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }]
})
export class ListTransactionsComponent implements OnInit {

  readTransactionDto: ReadTransactionDto[] = [];
  columnsTable = ['Data pagamento', 'Valor', 'Descrição', 'Método de pagamento', 'Últimos 4 digítos do cartão', 'Nome cartão', 'Data expiração cartão', 'CVV'];

  constructor(private transactionService: TransactionService, private router: Router) {
  }

  ngOnInit(): void {
    this.transactionService.GetListAllTransactions().subscribe(returnApi => {
      const returnApiData = returnApi.data; 

      returnApiData.map((item) => {
        item.createdDate = new Date(item.createdDate!).toLocaleString('pt-BR');
      });

      this.readTransactionDto = returnApiData;
    });
  }
  
  backHome() {
    this.router.navigate(['/']);
  }
}

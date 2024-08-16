import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { PayableService } from '../../services/payable.service';
import { ReadTotalValuesPayablesDto } from '../../models/ReadTotalValuesPayablesDto';

/*Angular material */
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

/*Currency format */
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt  from '@angular/common/locales/pt';

registerLocaleData(localePt);

@Component({
  selector: 'app-total-values-payables',
  standalone: true,
  imports: [MatCardModule,
            MatButtonModule,
            MatListModule,
            CurrencyPipe
  ],
  templateUrl: './total-values-payables.component.html',
  styleUrl: './total-values-payables.component.css',
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }]
})
export class TotalValuesPayablesComponent implements OnInit {

  readTotalValuesPayablesDto: ReadTotalValuesPayablesDto = {totalValuePaid: 0, totalValueWaitingFunds: 0};

  constructor(private payableService: PayableService, private router: Router) {
  }

  ngOnInit(): void {
    this.payableService.GetTotalValuesPayables().subscribe(returnApi => {
      this.readTotalValuesPayablesDto = returnApi.data;
    })
  }

  backHome() {
    this.router.navigate(['/']);
  }
}

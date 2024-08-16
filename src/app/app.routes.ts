import { Routes } from '@angular/router';
import { ListTransactionsComponent } from './pages/list-transactions/list-transactions.component';
import { HomeComponent } from './pages/home/home.component';
import { CreatePaymentComponent } from './pages/create-payment/create-payment.component';
import { ListPaidPayablesComponent } from './pages/list-paid-payables/list-paid-payables.component';
import { ListWaitingFundsPayablesComponent } from './pages/list-waiting-funds-payables/list-waiting-funds-payables.component';
import { TotalValuesPayablesComponent } from './pages/total-values-payables/total-values-payables.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'create-payment', component: CreatePaymentComponent},
    {path: 'list-transaction', component: ListTransactionsComponent},
    {path: 'list-paid-payables', component: ListPaidPayablesComponent},
    {path: 'list-waiting-funds-payables', component: ListWaitingFundsPayablesComponent},
    {path: 'total-values-payables', component: TotalValuesPayablesComponent}
];

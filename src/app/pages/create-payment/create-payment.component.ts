import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreatePaymentDto } from '../../models/CreatePaymentDto';
import { PaymentService } from '../../services/payment.service';
import { Router } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { NgxCurrencyDirective } from 'ngx-currency';

/*Angular material */
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-create-payment',
  standalone: true,
  imports: [
    FormsModule, 
    ReactiveFormsModule, 
    NgxMaskDirective, 
    NgxCurrencyDirective, 
    MatButtonModule, 
    MatCardModule, 
    MatInputModule, 
    MatRadioModule
  ],
  templateUrl: './create-payment.component.html',
  styleUrl: './create-payment.component.css',
  providers: provideNgxMask()
})
export class CreatePaymentComponent implements OnInit {

  paymentForm!: FormGroup;

  constructor(private paymentService : PaymentService, private router : Router) {
  }

  backHome() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.paymentForm = new FormGroup({
      value: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      paymentMethod: new FormControl('', [Validators.required]),
      cardNumbers: new FormControl('', [Validators.required]),
      cardName: new FormControl('', [Validators.required]),
      cardExpirationDate: new FormControl('', [Validators.required]),
      cardCvv: new FormControl('', [Validators.required])
    });
  }

  submit() {
    console.log(this.paymentForm.value.cardExpirationDate);
    let month: string = this.paymentForm.value.cardExpirationDate.substring(0, 2);
    console.log(month);
    let year: string = this.paymentForm.value.cardExpirationDate.substring(2);
    console.log(year);

    const createPaymentDto : CreatePaymentDto = {
      value: parseFloat(this.paymentForm.value.value),
      description: this.paymentForm.value.description,
      paymentMethod: parseInt(this.paymentForm.value.paymentMethod),
      cardNumbers: this.paymentForm.value.cardNumbers,
      cardName: this.paymentForm.value.cardName,
      cardExpirationDate: year + '-' + month + '-01',
      cardCvv: this.paymentForm.value.cardCvv
    };

    console.log(createPaymentDto);

    this.createPayment(createPaymentDto);
  }

  createPayment(createPaymentDto: CreatePaymentDto) {
    this.paymentService.PostCreatePayment(createPaymentDto).subscribe((apiReturn) => {
      
      console.log(apiReturn);
  
      this.router.navigate(['/']);
    });
  }
}

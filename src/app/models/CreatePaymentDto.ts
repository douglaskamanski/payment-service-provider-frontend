import { PaymentMethod } from "../enum/PaymentMethod";

export interface CreatePaymentDto {
    value: number;
    description: string;
    paymentMethod: PaymentMethod;
    cardNumbers: string;
    cardName: string;
    cardExpirationDate: string;
    cardCvv: string;
}

import { PaymentMethod } from "../enum/PaymentMethod";

export interface ReadTransactionDto {
    value: number;
    description: string;
    paymentMethod: PaymentMethod;
    cardLastFourDigits: string;
    cardName: string;
    cardExpirationDate: string;
    cardCvv: string;
    createdDate: string;
}

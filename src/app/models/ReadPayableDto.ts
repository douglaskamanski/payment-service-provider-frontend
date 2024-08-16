import { PaymentStatus } from "../enum/PaymentStatus";

export interface ReadPayableDto {
    value: number;
    status: PaymentStatus;
    paymentDate: string;
}

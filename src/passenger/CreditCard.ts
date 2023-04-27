export enum CardType {
  MasterCard,
  VISA,
  CSS,
  PayPal
}

export class CreditCard {
  private cardNumber: string;
  private expiration: string;
  private cvv: string;
  private type: CardType;

  constructor(cardNumber: string, expiration: string, cvv: string) {
    this.cardNumber = cardNumber;
    this.expiration = expiration;
    this.cvv = cvv;
  }
}
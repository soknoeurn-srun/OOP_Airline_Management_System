export enum FlyerStatus {
  SILVER,
  GOLD,
  PLATINUM
}

export class FrequentFlyer {
  private number: string;
  private mile: string;
  private status: FlyerStatus;
  constructor(number: string, mile: string, status: FlyerStatus) {
    this.number = number;
    this.mile = mile;
    this.status = status;
  }
}
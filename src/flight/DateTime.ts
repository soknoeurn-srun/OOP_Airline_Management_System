export class DateTime {
  private day: number;
  private month: string;
  private year: number;
  private time: string;

  constructor(day: number, month: string, year: number, time: string) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.time = time;
  }
}
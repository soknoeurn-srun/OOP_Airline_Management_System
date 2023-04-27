export enum Gender {
  Male,
  Female
}

export class Person {
  protected firstName: string;
  protected lastName: string;
  protected phone: string;
  constructor(firstName: string, lastName: string, phone: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
  }
}
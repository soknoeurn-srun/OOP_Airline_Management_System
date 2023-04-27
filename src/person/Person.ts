export enum Gender {
  Male,
  Female
}

export class Person {
  protected firstName: string;
  protected lastName: string;
  protected phone: string;
  protected gender: Gender
  constructor(firstName: string, lastName: string, phone: string, gender: Gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.gender = gender;
  }
}
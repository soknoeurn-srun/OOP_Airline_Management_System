import { Booking } from "../Booking/Booking";
import { Gender, Person } from "../person/Person";
import { Baggage } from "./Baggage";
import { CreditCard } from "./CreditCard";
import { FrequentFlyer } from "./FrequentFlyer";


export enum Meal{
  Vegetarian,
  Vegan,
  DairyFree,
  Koshor,
  Hala,
  SoFort
}
export class Passenger extends Person{
  private frequentFlyer?: FrequentFlyer;
  private creditCard: CreditCard;
  private baggages: Baggage[] = []
  private meal: Meal;
  private bookings : Booking [] = []
  constructor(firstName: string, lastName: string, phone: string,gender:Gender, creditCard: CreditCard) {
    super(firstName, lastName, phone,gender)
    this.creditCard = creditCard;
  }
  addBag(bag: Baggage){
    this.baggages.push(bag)
  }
  setFrequentFlyer(frequentFlyer: FrequentFlyer) {
    this.frequentFlyer = frequentFlyer;
  }
  addBooking(booking: Booking){
    this.bookings.push(booking)
  }
}
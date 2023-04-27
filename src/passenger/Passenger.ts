import { Person } from "../person/Person";
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
  constructor(firstName: string, lastName: string, phone: string, creditCard: CreditCard) {
    super(firstName, lastName, phone)
    this.creditCard = creditCard;
  }
  addBag(bag: Baggage){
    this.baggages.push(bag)
  }
  setFrequentFlyer(frequentFlyer: FrequentFlyer) {
    this.frequentFlyer = frequentFlyer;
  }
}
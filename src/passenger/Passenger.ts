import { Booking } from "../Booking/Booking";
import { Flight } from "../flight/Flight";
import { Gate } from "../flight/Gate";
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
  private meal: Meal = Meal.DairyFree;
  private bookings : Booking [] = []
  constructor(firstName: string, lastName: string, phone: string,gender:Gender, creditCard: CreditCard,meal?:Meal) {
    super(firstName, lastName, phone,gender)
    this.creditCard = creditCard;
    if (meal != undefined){
      this.meal = meal
    }
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
  getBooking():Booking[]{
    return this.bookings
  }
  getMeal():Meal{
    return this.meal
  }
  getBagge():Baggage[]{
    return this.baggages
  }
  getFlight(booking : Booking):undefined{
    this.bookings.forEach(bookings => {
        if (bookings === booking){
          return bookings.getTrip().getflight()
        }
    });
    return undefined
  }
  getGate(flight: Flight):Gate[]|undefined{
    this.bookings.forEach(booking => {
       for(let flights of booking.getTrip().getflight()){
           if (flight === flights){
            return flight.getGate()
           }
       }
    });
    return undefined
  }
}
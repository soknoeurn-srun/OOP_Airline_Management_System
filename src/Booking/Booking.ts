import { Passenger } from "../passenger/Passenger"
import { Trip } from "./Trip"

export class Booking{
    private referenceNumber: string;
    private trip : Trip 
    private passenger : Passenger
    constructor (trip : Trip, passenger : Passenger) {
        this.trip = trip
        this.passenger = passenger
    }
    setReferenceNumber(number: string) {
        this.referenceNumber = number
    }
    getreferenceNumber():string {
        return this.referenceNumber
    }
    getTrip():Trip{
        return this.trip
    }
    getpassenger():Passenger{
        return this.passenger
    }
}
import { Passenger } from "../passenger/Passenger"
import { Trip } from "./Trip"

export class Booking{
    private referenceNumber: string;
    private trip : Trip 
    private passenger : Passenger
    constructor (referenceNumber:string,trip : Trip, passenger : Passenger) {
        this.referenceNumber = referenceNumber
        this.trip = trip
        this.passenger = passenger
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
import { Passenger } from "../passenger/Passenger"
import { Trip } from "./Trip"

export class Booking{
    protected trip : Trip 
    protected passenger : Passenger
    constructor (trip : Trip, passenger : Passenger) {
        this.trip = trip
        this.passenger = passenger
    }
}
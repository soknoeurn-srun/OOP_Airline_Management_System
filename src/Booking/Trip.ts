import { Flight } from "../flight/Flight";
import { Booking } from "./Booking";

export class Trip {
    private trip : string
    private flights : Flight[] = []
    private returnTrip ?: Booking;
    constructor (trip : string){
        this.trip = trip;
    }
    setReturnTrip(returnTrip : Booking){
        this.returnTrip = returnTrip;
    }
    getflight():Flight[]{
        return this.flights
    }
    getReturnTrip(): Booking|undefined{
        return this.returnTrip
    }
}
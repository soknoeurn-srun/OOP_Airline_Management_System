import { Flight } from "../flight/Flight";
import { Booking } from "./Booking";

export class Trip {
    public trip: string
    private flights: Flight[] = []
    private returnTrip?: Trip = undefined;
    constructor(trip: string) {
        this.trip = trip;
    }
    setReturnTrip(trip: Trip):Trip {
        return this.returnTrip = trip;
    }
    setFlight(...flights: Flight[]): void {
        for (let flight of flights) {
            this.flights.push(flight)
        }
    }
    getflight(): Flight[] {
        return this.flights
    }
    getReturnTrip(): Trip | undefined {
        return this.returnTrip
    }
}
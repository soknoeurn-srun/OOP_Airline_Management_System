import { Flight } from "../flight/Flight";
import { Booking } from "./Booking";

export class Trip {
    private trip : string
    private flights : Flight[] = []
    private returnTrip ?: Booking;
}
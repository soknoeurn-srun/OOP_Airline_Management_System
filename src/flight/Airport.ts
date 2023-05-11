import { Airline } from "../Airline/AirLine";
import { Booking } from "../Booking/Booking";
import { Passenger } from "../passenger/Passenger";
import { Gate } from "./Gate";
import { Route } from "./Route";

export class Airport {
  protected name: string;
  private code: string;
  private route: Route;
  private airlineList: Airline[] = [];
  private bookings: Booking[] = [];

  constructor(name: string, code: string, route: Route) {
    this.name = name;
    this.code = code;
    this.route = route
  }
  addAirline(airline: Airline): void {
    this.airlineList.push(airline);
  }
  getDetialPassenger(bookingNumber: string):Passenger | string {
    for (let airLine of this.airlineList) {
      for(let booking of airLine.getBooking()){
        if(booking.getreferenceNumber() == bookingNumber){
          return booking.getpassenger();
        }

      }
     
    }
    return "There is no passenger here!"
  }

}
import { Airport } from "./Airport";
import { DateTime } from "./DateTime";
import { Route } from "./Route";

export class Flight {
  private flightNumber: string;
  private departureTime: DateTime;
  private arrivalTime: DateTime;
  private route:Route;
  private airport: Airport;
  constructor(flightNumber: string, departureTime: DateTime, arrivalTime: DateTime, route: Route, airport: Airport) {
    this.flightNumber = flightNumber;
    this.departureTime = departureTime;
    this.arrivalTime = arrivalTime;
    this.route = route;
    this.airport = airport;
  }
}
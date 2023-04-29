import { Airline } from "../Airline/AirLine";
import { Crew } from "../Airline/Employee/Crew";
import { Airport } from "./Airport";
import { DateTime } from "./DateTime";
import { Gate } from "./Gate";
import { Route } from "./Route";

export class Flight {
  private flightNumber: string;
  private airline: Airline;
  private departureTime: DateTime;
  private arrivalTime: DateTime;
  private departureAirport: Route
  private arrivalAirport: Route
  private employee: Crew[] = []
  private gates : Gate[]=[];
  constructor(flightNumber: string, departureTime: DateTime, arrivalTime: DateTime, departureAirport: Route, arrivalAirport: Route,airline: Airline) {
    this.flightNumber = flightNumber;
    this.departureTime = departureTime;
    this.arrivalTime = arrivalTime;
    this.arrivalAirport = arrivalAirport
    this.departureAirport = departureAirport
    this.airline = airline

  }
  addGate(gate: Gate){
    this.gates.push(gate);
  }
  addEmployee(...employees: Crew[]): void {
    for(let employee of employees){
      this.employee.push(employee)
    }
  }
  getDepartureTime(): DateTime {
    return this.departureTime;
  }
  getArrivalTime(): DateTime {
    return this.arrivalTime;
  }
  getDepartureAirport(): Route{
    return this.departureAirport
  }
  getArrivalAirport(): Route{
    return this.arrivalAirport
  }
  getGate():Gate[]{
    return this.gates
  }
  getEmployees(): Crew[]{
    return this.employee;
  }

}
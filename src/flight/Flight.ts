import { Crew } from "../Airline/Employee/Crew";
import { Airport } from "./Airport";
import { DateTime } from "./DateTime";
import { Gate } from "./Gate";
import { Route } from "./Route";

export class Flight {
  private flightNumber: string;
  private departureTime: DateTime;
  private arrivalTime: DateTime;
  private route:Route;
  private employee: Crew[] = []
  private gates : Gate[]=[];
  constructor(flightNumber: string, departureTime: DateTime, arrivalTime: DateTime, route: Route) {
    this.flightNumber = flightNumber;
    this.departureTime = departureTime;
    this.arrivalTime = arrivalTime;
    this.route = route;

  }
  addGate(gate: Gate){
    this.gates.push(gate);
  }
  getDepartureTime(): DateTime {
    return this.departureTime;
  }
  getArrivalTime(): DateTime {
    return this.arrivalTime;
  }
  addEmployee(employee: Crew): void {
    this.employee.push(employee)
  }
  getGate():Gate[]{
    return this.gates
  }
  getEmployees(): Crew[]{
    return this.employee;
  }

}
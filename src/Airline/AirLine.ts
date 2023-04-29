import { Booking } from "../Booking/Booking"
import { Airport } from "../flight/Airport"
import { DateTime } from "../flight/DateTime"
import { Flight } from "../flight/Flight"
import { Meal, Passenger } from "../passenger/Passenger"
import { Aeroplane } from "./Aeroplane/Aeroplane"
import { CategoryEmployeeType } from "./Employee/Crew"
import { Crew } from "./Employee/Crew"
import { Pilot } from "./Employee/Pilot"

export class Airline {
    protected companyName: string
    private address: string
    private employeeList: Crew[] = []
    private aeroplaneList: Aeroplane[] = []
    private bookingList: Booking[] = []
    private flightList: Flight[] = []
    private airportList: Airport[] = []
    constructor(companyName: string, address: string) {
        this.companyName = companyName
        this.address = address
    }

    addEmployee(employee: Crew): void {
        this.employeeList.push(employee)
    }
    addAeroplane(aeroplane: Aeroplane): void {
        this.aeroplaneList.push(aeroplane)
    }
    addBooking(book: Booking): void {
        this.bookingList.push(book)
    }
    addAirport(airport: Airport): void {
        this.airportList.push(airport)
    }
    setFlight(flight: Flight): void {
        this.flightList.push(flight)
    }
    getCrews(): Crew[] {
        return this.employeeList
    }
    getAeroplane(): Aeroplane[] {
        return this.aeroplaneList
    }
    getBooking(): Booking[] {
        return this.bookingList
    }
    getAllFlight(): Flight[] {
        return this.flightList
    }
    getFlight(pilot: Pilot, date: DateTime): Flight[] {
        let flights: Flight[] = [];
        this.flightList.forEach(flight => {
            for (let employee of flight.getEmployees()) {
                if (employee.getJobTitle() === CategoryEmployeeType.Pilot) {
                    let staff = employee as Pilot
                    if (staff === pilot && flight.getArrivalTime() === date || flight.getDepartureTime() === date) {
                        flights.push(flight)
                    }
                }
            }
        });
        return flights;
    }
    getBookingFlights(flight: Flight): Passenger[] {
        let passengers: Passenger[] = [];
        this.bookingList.forEach(booking => {
            for (let flights of booking.getTrip().getflight()) {
                if (flights === flight) {
                    passengers.push(booking.getpassenger())
                }
            }
        });
        return passengers;
    }
    setMeal(flight: Flight): Meal[] {
        let listOfMeal: Meal[] = []
        this.bookingList.forEach(booking => {
            for (let flights of booking.getTrip().getflight()) {
                if (flights === flight) {
                    if (listOfMeal.indexOf(booking.getpassenger().getMeal())) {
                        listOfMeal.push(booking.getpassenger().getMeal())
                    }
                }
            }
        });
        return listOfMeal
    }
    getAllSallary(): number {
        let sallarys: number = 0
        for (let employee of this.employeeList) {
            sallarys += employee.getSalary()
        }
        return sallarys
    }
}
import { Booking } from "../Booking/Booking"
import { Trip } from "../Booking/Trip"
import { Airport } from "../flight/Airport"
import { DateTime } from "../flight/DateTime"
import { Flight } from "../flight/Flight"
import { Meal, Passenger } from "../passenger/Passenger"
import { Aeroplane } from "./Aeroplane/Aeroplane"
import { CategoryEmployeeType } from "./Employee/Crew"
import { Crew } from "./Employee/Crew"
import { Pilot } from "./Employee/Pilot"
export class Airline {
    public companyName: string
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
    addEmployee(...employees: Crew[]): void {
        for (let employee of employees) {
            this.employeeList.push(employee)
        }
    }
    addAeroplane(...aeroplanes: Aeroplane[]): void {
        for (let aeroplane of aeroplanes) {
            this.aeroplaneList.push(aeroplane)
        }
    }
    addBooking(...books: Booking[]): void {
        for (let book of books) {
            this.bookingList.push(book)
        }
    }
    addAirport(...airports: Airport[]): void {
        for (let airport of airports) {
            this.airportList.push(airport)
        }
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
                    if (pilot === staff) {
                        if (flight.getArrivalTime() === date || flight.getDepartureTime() === date) {
                            flights.push(flight)
                        }
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
                if (flights === flight && booking.getTrip().getReturnTrip() !== undefined) {
                    passengers.push(booking.getpassenger())
                }
            }
        });
        return passengers;
    }
    setFlight(...flights: Flight[]): void {
        for (let flight of flights) {
            this.flightList.push(flight)
        }
    }
    getMeal(flight: Flight) {
        let mealCounts: { [key in Meal]: number } = {
            [Meal.Vegetarian]: 0,
            [Meal.Vegan]: 0,
            [Meal.DairyFree]: 0,
            [Meal.Koshor]: 0,
            [Meal.Hala]: 0,
            [Meal.SoFort]: 0,
        };
        this.bookingList.forEach(booking => {
            for (let flights of booking.getTrip().getflight()) {
                if (flights === flight) {
                    mealCounts[booking.getpassenger().getMeal()]++;
                }
            }
        });
        return mealCounts;

    }
    getAllSallary(): number {
        let sallarys: number = 0
        for (let employee of this.employeeList) {
            sallarys += employee.getSalary()
        }
        return sallarys
    }
}
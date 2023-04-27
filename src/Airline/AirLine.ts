import { Aeroplane } from "./Aeroplane/Aeroplane"
import { Crew } from "./Employee/Crew"

export class Airline {
    private companyName: string
    private address : string
    private employeeList : Crew[] = []
    private aeroplaneList : Aeroplane [] = []
    // private bookingList : Booking[] = []
    // private flightList : flight[] = []
    constructor (companyName: string, address: string){
        this.companyName = companyName
        this.address = address
    }

    addEmployee(employee: Crew): void {
        this.employeeList.push(employee)
    }
    addAeroplane(aeroplane: Aeroplane): void {
        this.aeroplaneList.push(aeroplane)
    }
    // addBook(book: Book): void {
    //     this.bookingList.push(book)
    // }
    // setFlight(flight:Flight): void {
    //     this.flightList.push(flight)
    // }
    getCrew():Crew[]{
        return this.employeeList
    }
    getAeroplane():Aeroplane[]{
        return this.aeroplaneList
    }
    // getBooking():Booking[]{
    //     return this.bookingList
    // }
    // getFlight():Flight[]{
    //     return this.flightList
    // }
}
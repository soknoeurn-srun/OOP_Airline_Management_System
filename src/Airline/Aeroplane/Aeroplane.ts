import { Seat } from "./Seats"

export class Aeroplane {
    private registrationNumbers: string
    private Seats : Seat[] = []
    constructor (registrationNumbers: string){
        this.registrationNumbers = registrationNumbers
    }
    addSeat(seat: Seat):void{
        this.Seats.push(seat)
    }
    getSeat():Seat[]{
        return this.Seats
    }
}
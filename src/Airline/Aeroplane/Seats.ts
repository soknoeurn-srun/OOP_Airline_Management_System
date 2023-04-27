export enum FareBasis{
    EconomicClass,
    EconomyFlex,
    BusinessClass,
}
export class Seat {
    private seat: String
    private fareBasis: FareBasis
    constructor (seat: String, fareBasis: FareBasis){
        this.seat = seat
        this.fareBasis = fareBasis
    }
}
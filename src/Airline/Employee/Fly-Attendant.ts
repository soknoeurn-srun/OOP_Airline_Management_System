import { CategoryEmployeeType, Crew } from "./Crew";

export class FlyAttendant extends Crew{
    constructor (firstName: string, lastName: string, phone: string, jobTitle: CategoryEmployeeType){
        super(firstName, lastName, phone,jobTitle)
    }
}
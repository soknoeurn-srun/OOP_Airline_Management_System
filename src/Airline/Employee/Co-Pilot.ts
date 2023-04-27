import { CategoryEmployeeType, Crew } from "./Crew";

export class CoPilot extends Crew{
    constructor (firstName: string, lastName: string, phone: string, jobTitle: CategoryEmployeeType){
        super(firstName, lastName, phone,jobTitle)
        
    }
}
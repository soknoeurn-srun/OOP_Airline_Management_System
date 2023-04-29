import { Gender } from "../../person/Person";
import { CategoryEmployeeType, Crew } from "./Crew";

export class Pilot extends Crew{
    constructor (firstName: string, lastName: string, phone: string,gender: Gender,jobTitle: CategoryEmployeeType){
        super(firstName, lastName, phone,gender,jobTitle)
    }
}
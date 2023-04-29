import { Aeroplane } from "./Airline/Aeroplane/Aeroplane";
import { FareBasis, Seat } from "./Airline/Aeroplane/Seats";
import { Airline } from "./Airline/AirLine";
import { CategoryEmployeeType } from "./Airline/Employee/Crew";
import { FlyAttendant } from "./Airline/Employee/Fly-Attendant";
import { Pilot } from "./Airline/Employee/Pilot";
import { Booking } from "./Booking/Booking";
import { Trip } from "./Booking/Trip";
import { Airport } from "./flight/Airport";
import { DateTime } from "./flight/DateTime";
import { Flight } from "./flight/Flight";
import { Gate } from "./flight/Gate";
import { Route } from "./flight/Route";
import { Baggage } from "./passenger/Baggage";
import { CardType, CreditCard } from "./passenger/CreditCard";
import { FlyerStatus, FrequentFlyer } from "./passenger/FrequentFlyer";
import { Passenger } from "./passenger/Passenger";
import { Tag } from "./passenger/Tag";
import { Gender } from "./person/Person";

//create news airlines object
let airline1 = new Airline('Delta Air Lines', '1030 Delta Blvd, Atlanta, GA 30354, USA');
let airline2 = new Airline('American Airlines', '1 Skyview Dr, Fort Worth, TX 76155, USA');
let airline3 = new Airline('United Airlines', '233 S Wacker Dr, Chicago, IL 60606, USA');
let airline4 = new Airline('Emirates', 'Garhoud, Dubai, United Arab Emirates');
let airline5 = new Airline('Qatar Airways', 'Airport Rd, Doha, Qatar');
let airline6 = new Airline('PNC Airline','BP 511, Phum Tropeang Chhuk (Borey Sorla) Sangtak, Street 371, Phnom Penh')
//create new areoplane 
let aeroplane1 = new Aeroplane('B-1234');
let aeroplane2 = new Aeroplane('B-5678');
let aeroplane3 = new Aeroplane('B-9101');
let aeroplane4 = new Aeroplane('C-2468');
let aeroplane5 = new Aeroplane('C-1357');
let aeroplane6 = new Aeroplane('C-3690');
let aeroplane7 = new Aeroplane('D-1234');
let aeroplane8 = new Aeroplane('D-5678');
let aeroplane9 = new Aeroplane('E-1234');
let aeroplane10 = new Aeroplane('E-5678');
//create a seats
let seat1 = new Seat('1A', FareBasis.EconomicClass);
let seat2 = new Seat('1B', FareBasis.EconomicClass);
let seat3 = new Seat('2A', FareBasis.EconomyFlex);
let seat4 = new Seat('2B', FareBasis.EconomyFlex);
let seat5 = new Seat('3A', FareBasis.BusinessClass);
let seat6 = new Seat('3B', FareBasis.BusinessClass);
let seat7 = new Seat('4A', FareBasis.EconomicClass);
let seat8 = new Seat('4B', FareBasis.EconomicClass);
let seat9 = new Seat('5A', FareBasis.EconomyFlex);
let seat10 = new Seat('5B', FareBasis.EconomyFlex);
// create a route
let route1 = new Route('JFK-LAX');
let route2 = new Route('LAX-ORD');
let route3 = new Route('ORD-DFW');
// create new airports
let airport1 = new Airport('John F. Kennedy International Airport', 'JFK', route1);
let airport2 = new Airport('Los Angeles International Airport', 'LAX', route2);
let airport3 = new Airport('Chicago O Hare International Airport', 'ORD', route3);
//create gates
let gate1 = new Gate('A1', airport1);
let gate2 = new Gate('B2', airport2);
let gate3 = new Gate('C3', airport3);
//create date
let date1 = new DateTime(29, 'April', 2023, '10:30');
let date2 = new DateTime(30, 'April', 2023, '14:00');
let date3 = new DateTime(1, 'May', 2023, '08:45');
//crate employee 
let pilot1 = new Pilot('Jonhnathan','Kim','209398484',Gender.Male,CategoryEmployeeType.Pilot)
let pilot2 = new Pilot('Jonh','Make','29494839',Gender.Male,CategoryEmployeeType.Pilot)
let co_pilot1 = new Pilot('Mathew','James','303920393',Gender.Male,CategoryEmployeeType.CoPilot)
let co_pilot2 = new Pilot('Sopha','Luew','44994844',Gender.Female,CategoryEmployeeType.CoPilot)
let fly_attendent1 = new FlyAttendant('Mai','Kim','3939482949',Gender.Female,CategoryEmployeeType.FlyAttendant)
let fly_attendent2 = new FlyAttendant('Daniel','Harry','858584758',Gender.Female,CategoryEmployeeType.FlyAttendant)
//set employee salary
pilot1.setSalary(10000)
pilot2.setSalary(2000)
co_pilot1.setSalary(500)
co_pilot2.setSalary(800)
fly_attendent1.setSalary(800)
fly_attendent2.setSalary(900)
// crate a credit card
let card1 = new CreditCard('1234567812345678', '12/25', '123', CardType.VISA);
let card2 = new CreditCard('2345678923456789', '06/24', '456', CardType.MasterCard);
let card3 = new CreditCard('3456789034567890', '09/27', '789', CardType.CSS);
let card4 = new CreditCard('4567890145678901', '03/26', '234', CardType.VISA);
let card5 = new CreditCard('5678901256789012', '08/28', '567', CardType.PayPal);
// create passenger
let passenger1 = new Passenger('John', 'Doe', '555-1234', Gender.Male, card1);
let passenger2 = new Passenger('Jane', 'Doe', '555-5678', Gender.Female, card2);
let passenger3 = new Passenger('Bob', 'Smith', '555-9876', Gender.Male, card3);
let passenger4 = new Passenger('Alice', 'Jones', '555-4321', Gender.Female, card4);
let passenger5 = new Passenger("SeangEng","Ith",'039483948',Gender.Female,card5)
// craete tag for the baggage
let tag1 = new Tag('A123');
let tag2 = new Tag('B456');
let tag3 = new Tag('C789');
let tag5 = new Tag('E345');
let tag4 = new Tag('D012');
// create baggages for the passenger
let baggage1 = new Baggage(10, 50, tag1);
let baggage2 = new Baggage(15, 60, tag2);
let baggage3 = new Baggage(20, 70, tag3);
let baggage4 = new Baggage(25, 80, tag4);
let baggage5 = new Baggage(30, 90, tag5);
//create frequentFlyer card
let FrequentFlyer1 = new FrequentFlyer("SeangEng","Ith",FlyerStatus.GOLD)
passenger1.setFrequentFlyer(FrequentFlyer1)
// create flight
let flight1 = new Flight('DL123', date1, date2, route1, route2, airline1);
let flight2 = new Flight('AA456', date2, date3, route2, route3, airline2);
let flight3 = new Flight('UA789', date3, date1, route3, route1, airline3);
let flight4 = new Flight('EK012', date1, date2, route1, route2, airline4);
// add employee to the flight
flight1.addEmployee(pilot1,pilot2,fly_attendent1,co_pilot1)
flight2.addEmployee(pilot1,fly_attendent1,co_pilot1)
flight3.addEmployee(pilot2,fly_attendent2,co_pilot1)
flight4.addEmployee(pilot1,pilot2,fly_attendent1,co_pilot1,fly_attendent2)
// add gat to flight
flight1.addGate(gate1)
flight2.addGate(gate2)
flight3.addGate(gate3)
flight4.addGate(gate1)
// create a trip 
let trip1 = new Trip('USA');
let trip2 = new Trip('UK');
let trip3 = new Trip('Thailand');
let trip4 = new Trip('Canada');
let trip5 = new Trip('Cambodia');
// set flight in trip
trip1.setFlight(flight1,flight4,flight2)
trip2.setFlight(flight3,flight2,flight4)
trip3.setFlight(flight1,flight2,flight1)
trip4.setFlight(flight4,flight3,flight4)
trip5.setFlight(flight3,flight2,flight1)
// add flight to airline
airline1.setFlight(flight1,flight2,flight3,flight4)
airline2.setFlight(flight4,flight1,flight2,flight3)
airline3.setFlight(flight3,flight4,flight1,flight3)
airline4.setFlight(flight4,flight2,flight2,flight3)
// add employees in the airline
airline1.addEmployee(pilot1,pilot2,co_pilot1,co_pilot1,fly_attendent1)
airline2.addEmployee(pilot2,co_pilot1,fly_attendent1,fly_attendent2)
airline3.addEmployee(pilot1,pilot2,co_pilot1)
// add aeroplane to the airline
airline1.addAeroplane(aeroplane1,aeroplane2,aeroplane10)
airline2.addAeroplane(aeroplane9,aeroplane4,aeroplane3)
airline3.addAeroplane(aeroplane6,aeroplane7,aeroplane8)
// In airline set a trip 
// passenger booking trip and return booking
let booking1 = new Booking("KOLL889",trip1, passenger1);
booking1.getTrip().setReturnTrip(trip2)
let booking2 = new Booking("KOPL889",trip2, passenger2);
let booking3 = new Booking("KDIEM3",trip3, passenger3);
let booking4 = new Booking("KIM09",trip4, passenger4);
let booking5 = new Booking("EIUK90",trip5, passenger5);
// add booking to airling 
airline1.addBooking(booking1,booking2)
airline2.addBooking(booking3,booking4)

// 3 As an airline manager, I want to know for a given flight, how many passengers were booking return
console.log(airline2.getBookingFlights(flight4))
// 4 As an airline pilot, I want to know, for a given date, how many flights I have to join
console.log(airline3.getFlight(pilot1,date1))
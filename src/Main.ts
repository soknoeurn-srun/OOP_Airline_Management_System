import { CardType, CreditCard } from "./passenger/CreditCard";
import { FrequentFlyer } from "./passenger/FrequentFlyer";
import { Passenger } from "./passenger/Passenger";
import { Gender } from "./person/Person";


//create a credit card 
let creditcard1 = new CreditCard("12345","25-04-2027", "1111-2222-3333", CardType.VISA);
let creditcard2 = new CreditCard("001278","12-09-2025", "7777-2222-3333", CardType.MasterCard);
let creditcard3 = new CreditCard("12345","11-11-2026", "4444-8888-1111", CardType.VISA);
//passengers
let passenger1 = new Passenger("Him", "Hey", "096777680", Gender.Male, creditcard1);
let passenger2 = new Passenger("Chompey", "PreyVeng", "097777267", Gender.Female, creditcard3);
let passenger3 = new Passenger("Chompa", "OG", "088222685", Gender.Female, creditcard2);

//create baggage for passenger
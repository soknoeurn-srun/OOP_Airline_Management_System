import { Gate } from "./Gate";
import { Route } from "./Route";

export class Airport {
  private name: string;
  private code: string;
  private route: Route;
  constructor(name: string, code: string, route: Route) {
    this.name = name;
    this.code = code;
    this.route = route
  }

}
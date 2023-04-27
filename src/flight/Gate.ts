import { Airport } from "./Airport";

export class Gate {
  private gate: string;
  private airport: Airport
  constructor(gate: string,airport: Airport) {
    this.gate = gate;
    this.airport = airport
  }
}
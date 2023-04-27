import { Gate } from "./Gate";

export class Airport {
  private name: string;
  private code: string;
  private location: string;
  private gates: Gate[] = [];
  constructor(name: string, code: string, location: string) {
    this.name = name;
    this.code = code;
    this.location = location;
  }
  addGate(gate: Gate) {
    this.gates.push(gate);
  }
}
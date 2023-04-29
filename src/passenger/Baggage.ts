import { Tag } from "./Tag";

export class Baggage {
  private wieght: number;
  private size: number;
  private tag: Tag;
  constructor(wieght: number, size: number,tag: Tag) {
    this.wieght = wieght;
    this.size = size;
    this.tag = tag;
  }
}
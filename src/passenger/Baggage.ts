import { Tag } from "./Tag";

export class Baggage {
  private wieght: string;
  private size: string;
  private tag: Tag;
  constructor(wieght: string, size: string,tag: Tag) {
    this.wieght = wieght;
    this.size = size;
    this.tag = tag;
  }
}
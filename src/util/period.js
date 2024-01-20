export default class Period {
  static phase(p) { return (p % 2 === 0 ? "day" : "night") }
  static name(p)  { return this.phase(p) + " " + this.num(p) }
  static num(p)   { return Math.ceil(p/2) }
}
export default class Period {
  static isDay(p)     { return p % 2 === 0 }
  static isNight(p)   { return ! this.isDay(p) }
  static phase(p)     { return (this.isDay(p) ? "day" : "night") }
  static name(p)      { return this.phase(p) + " " + this.num(p) }
  static num(p)       { return Math.ceil(p/2) }
  static shortName(p) { return (this.isDay(p) ? "D" : "N") + this.num(p) }
}
const Car = require("./Car.js");

class Nissan extends Car {
  constructor(name, type, driver) {
    super(name, type);
    this.driver = driver;
  }

  SuperPower() {
    console.log(` Godzilla Returns !!!`);
    console.log(` ${this.driver} drive ${this.name} ....!!`);
  }
}

module.exports = Nissan;

const Car = require("./Car.js");

class Toyota extends Car {
  constructor(name, type, driver) {
    super(name, type);
    this.driver = driver;
  }

  kanseiDrift() {
    console.log(` DEJA VU! I've just been in this place before... !`);
    console.log(
      ` ${this.driver} drive ${this.name} Taking the Akina corner with the Kansei Dorifto technique!!`,
    );
  }
}

module.exports = Toyota;

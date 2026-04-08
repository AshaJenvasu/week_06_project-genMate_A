class Car {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  typeCar() {
    console.log(`${this.name} is ${this.type}`);
  }
}
module.exports = Car;

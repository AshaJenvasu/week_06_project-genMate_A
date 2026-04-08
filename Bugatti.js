const Car = module.require("./Car.js");

class Bugatti extends Car {
  constructor(model_name, car_type) {
    super("Bugatti", "Track Car");

    this.model_name = model_name;
    this.car_type = car_type;
  }
  callIntroduce() {
    console.log(
      `This is ${this.type} car brand ${this.name} model ${this.model_name}`,
    );
  }
  callModel() {
    console.log(
      ` ${this.name} model ${this.model_name} that are ${this.car_type}`,
    );
    console.log("-------------------------------");
  }
}

module.exports = Bugatti;

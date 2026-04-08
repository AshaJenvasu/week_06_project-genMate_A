const nissan = require("./nissan.js");
const Tesla = require("./tesla");
const Benz = require("./Benz.js");
const Toyota = require("./toyota.js");
const Car = require("./Car.js");
const Bugatti = require("./Bugatti.js");

//ploy
const benz1 = new Benz("C-Class Saloon", "Hybrid", 3190000);
benz1.infoWarranty();
const benz2 = new Benz("EQS Saloon", "Electrical", 5950000);
benz2.infoWarranty();
console.log("-------------------");

//Asha
const ae86 = new Toyota(
  "Toyota Trueno AE86",
  "Sport compact",
  "Fujiwara Takumi",
);

ae86.kanseiDrift();
ae86.typeCar();
console.log("-------------------");

//Sun
const ModelY = new Tesla("Y", "SUV");
const Model3 = new Tesla("3", "Sedan");
const Cybertruck = new Tesla("Cybertruck", "truck");

ModelY.callIntroduce();
ModelY.callModel();
Model3.callIntroduce();
Model3.callModel();
Cybertruck.callIntroduce();
Cybertruck.callModel();

console.log("-------------------");

//Nike
const GTR = new nissan("Nissan GTR R35", "NIKE", "Super Car Killer");

GTR.SuperPower();
GTR.typeCar();

console.log("-------------------");

//Park
const Bolide = new Bugatti("Bolide", "Track Car");
Bolide.callModel();

console.log("-------------------");

//Lin

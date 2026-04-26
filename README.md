# 🏎️ week_06_project-genMate_A (OOP Car Showroom)

A collaborative Node.js project demonstrating **Object-Oriented Programming (OOP)** principles. Each team member implemented a specific car brand class, inheriting from a base car structure to showcase polymorphism and modularity.

---

## 📑 Core Concepts Demonstrated

### 1. Object-Oriented Programming (OOP) 🏗️
- **Classes & Objects**: Utilizing `class` syntax to create blueprints for different car brands and instantiating them with the `new` keyword.
- **Inheritance**: Extending a base `Car` class to specific brands (Toyota, Tesla, Benz, etc.), inheriting shared properties while adding unique methods.
- **Encapsulation**: Managing data like `model`, `type`, and `price` within specific object instances.

### 2. CommonJS Modules 📦
- **Modularity**: Breaking down the project into separate files (e.g., `toyota.js`, `tesla.js`) for better maintainability.
- **Exports/Imports**: Using `module.exports` and `module.require` to link individual brand classes into the main `index.js`.

---

## 👥 Team Contributions (Implementation)

Each member managed their own brand logic within the centralized `index.js` orchestration:

- **Ploy (Benz)**: Implemented warranty information and luxury hybrid/electrical models.
- **Asha (Toyota)**: Added a personal touch with the legendary `AE86` and its signature `kanseiDrift()` method. 🏁
- **Sun (Tesla)**: Focused on EV introduction and model-specific callouts for SUV, Sedan, and Cybertruck.
- **Nike (Nissan)**: Implemented the high-performance "Super Car Killer" GTR logic.
- **Park (Bugatti)**: Managed high-end track car model data.

---

## 📁 Repository Structure

- `index.js`: The main entry point where all modules are required and objects are instantiated.
- `Car.js`: The parent (Base) class containing shared attributes.
- `[Brand].js`: Specific child classes (e.g., `toyota.js`, `tesla.js`, `Benz.js`).

---

## 💻 Code Highlight: OOP in Action

```javascript
// Example from index.js
const Toyota = module.require("./toyota.js");

const ae86 = new Toyota(
  "Toyota Trueno AE86",
  "Sport compact",
  "Fujiwara Takumi"
);

ae86.kanseiDrift(); // Unique method for Toyota class
ae86.typeCar();      // Inherited or overridden method

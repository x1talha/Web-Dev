class vehicle {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
  startEngine() {
    console.log(`${this.brand} car is starting...`);
    return `${this.brand} car is starting...`;
  }
}

let v1 = new vehicle("Honda", "Silver");

function startCar() {
  let output = v1.startEngine();
  document.getElementById("result").innerText = output;
}

class car extends vehicle {
  constructor(brand, color, doors) {
    super(brand, color);
    this.doors = doors;
  }
  opentrunk() {
    console.log(`${this.brand} trunk is opening...`);
    return `${this.brand} trunk is opening...`;
  }
}

let c1 = new car("Suzuki", "White", "4");

function cartrunk() {
  let outputcar = c1.opentrunk();
  document.getElementById("result1").innerText = outputcar;
}

class motorcycle extends vehicle {
  constructor(brand, color, tyres) {
    super(brand, color);
    this.tyres = tyres;
  }
  dowheelie() {
    return `${this.brand} bike is wheeling`;
  }
}

let b1 = new motorcycle("CD-70", "Red", 2);

function bikee() {
  let bikeresult = b1.dowheelie();
  document.getElementById("result2").innerText = bikeresult;
}

class car {
  constructor(price, color, numDoors) {
    (this.price = price), (this.color = color), (this.numDoors = numDoors);
  }
}

const mercedes = new car(1500, 'blue', 2);

if (mercedes.price < 2000 || car.color === 'red' || mercedes.numDoors === 4) {
  // Car needs to be below 2000 OR red OR num of doors = 4
  console.log("I'm buying this car!");
} else {
  console.log("This car isn't for me.");
}

if ((mercedes.price < 2000 && car.color === 'red') || mercedes.numDoors === 4) {
  // Car needs to be ( below 2000 AND red ) OR num of doors = 4
  console.log("I'm buying this car!");
} else {
  console.log("This car isn't for me.");
}

if (mercedes.price < 2000 || (car.color === 'red' && mercedes.numDoors === 4)) {
  // Car needs to be below 2000 OR ( red  AND num of doors = 4 )
  console.log("I'm buying this car!");
} else {
  console.log("This car isn't for me.");
}

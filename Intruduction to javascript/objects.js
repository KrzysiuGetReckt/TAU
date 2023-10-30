const car = {
  name: 'A5',
  brand: 'Audi',
  gearBoxIsManual: true,
  '+Fast': true,

  /**
   * Start a car
   * @returns {string} Message after starting the car.
   */
  startCar: function () {
    console.log(`I'm starting a ${this.brand} ${this.name}`);
  },
};

console.log(car);
console.log(car['+Fast']);
console.log(car.startCar());

class Cookie {
  /**
   * Create a class object with two parameters name, isGlutenFree
   * @param {String} the name of the cookie
   * @param {Bolean} is it gluten free
   */
  constructor(name, isGluetenFree) {
    (this.name = name), (this.isGluetenFree = isGluetenFree);
  }

  /**
   * Just a funny message in a Class
   * @returns {string} Return the funny message with this.name of the class.
   */

  lickTheCookie() {
    console.log(`This ${this.name} is being licked! Oh no!`);
  }
}
const myCookie = new Cookie('Chocolate Cookie', false);

console.log(myCookie);
myCookie.lickTheCookie();

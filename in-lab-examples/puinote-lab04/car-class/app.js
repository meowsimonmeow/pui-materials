/* A class representing a car that can start and stop moving. */
class Car {
  /* Declare four properties:
   * model - the model name of the car
   * year - the year of the car
   * isMoving - boolean indicating whether the car is moving (default false)
   * element - the HTML element that this car will update
   */

  constructor(model, year, element) {
    /* Initialize the car's properties here */
  }

  /**
   * Update the contents of the car's element to show what its current state is.
   * When the car is stopped, its text should be the model and year of the car.
   * When it is moving, the text should add "is driving". Also, add the "moving-car"
   * class to the car element when it is moving.
   */
  updateElement() {
    // implement this
  }

  drive() {
    // implement this
  }

  brake() {
    // implement this
  }
}

/*
 Retrieve the car element from the page, and initialize a new Car object with the
 model "Chevy Corvette", the year "2022", and the car element. Then call
 updateElement().
*/
let carElement = null; // implement
let theCar = null; // implement


let speed = 0;
let car0 = {
    model: "Fiat",
    year: 2050,
    drive: function(newSpeed){
        this.speed = newSpeed;
    }
}

class Car{
    model;
    year;

    constructor(model, year){
        this.model = model;
        this.year = year;
    }

    drive(newSpeed){
        console.log = "I'm driving at this speed";
    }
}

let car1 = new Car("Fiat", 2050, 10);
let car2 = new Car("Honda", 2019, 20);
console.log(car1.model);
car1.drive(10);
car2.speed = 50;
console.log(car1.speed);
console.log(car2.model); 
console.log(car2.speed);

//javascript only compiles when you run, be careful about the scope of your variables
//for hw3 has to do with manipulating the price on the dropdown
//instead of making multiple car objects, you can make classes instead
//constructors are similar in function to functions but the notation is slightly different


// HW3 example
// how to create an interactive dropdown menu


class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return 'Beep';
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

class Car extends Vehicle{
    constructor (make, model, year) {
        super(make, model, year);
    }
    numWheels() {
        return 4;
    }
}

class Motorcycle extends Vehicle{
    constructor (make, model, year) {
        super(make, model, year);
    }
    revEngine() {
        return 'VROOM!!';
    }
    numWheels() {
        return 2;
    }
}

class Garage{
    constructor (size) {
        this.vehicles = [];
        this.capacity = size;
    }
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        }
        if (this.vehicles.length <= this.capacity - 1) {
            this.vehicles.push(newVehicle);
            return 'Vehicle added!';
        } else {
            return "Sorry, we're full."
        }
    }
}
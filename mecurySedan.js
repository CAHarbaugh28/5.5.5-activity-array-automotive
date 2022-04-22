//this includes the vehicle class as a module
const VehicleModule = require('./vehicle').Vehicle

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 0;
        this.scheduleService = false;
    }

    start() {
        if (this.fuel > 0) {
            console.log("Vehicle has started!")
            return this.started = true
    } else {
            console.log("No Fuel")
            return this.started = false;
        }
    }

    loadPassenger() {
        if (this.passenger < this.maximumPassengers) {
            if ((num + this.passenger) <= this.maximumPassengers) {
                this.passenger = num;
                return this.passenger;
            } else {
                console.log(this.model + " " + this.make + " Does not have enought room for that many passengers.");

            }
        } else {
            console.log(this.model + " " + this.make + " is full")
        }
    }

    checkService() {
        if (this.mileage > 30000) {
            this.scheduleService = true
            return this.scheduleService;
        }
    }
}








//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
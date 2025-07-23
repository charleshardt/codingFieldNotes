/////////////////////////////////////////////////
// 250-Creating-Classes

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10); // this is usually done with an external library
  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }
}

class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }
  calcPace() {
    // in min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
  }
  calcSpeed() {
    // in km/hr
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// Testing the new classes
// const run1 = new Running([37.0513574, -76.3922955], 5.2, 24, 178);
// const cycling1 = new Cycling([37.0513574, -76.3922955], 27, 95, 523);
// console.log(run1, cycling1);

const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  get resultTime() {
    setInterval(() => {
      this.deltaTime = this.targetDate - new Date();
      this.timeCalc;
    }, 1000);
  }

  get timeCalc() {
    return (
      (this.days = String(Math.floor(this.deltaTime / (1000 * 60 * 60 * 24))).padStart(2,"0")),
      (this.hours = String(Math.floor(
        (this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )).padStart(2,"0")),
      (this.mins = String(Math.floor(
        (this.deltaTime % (1000 * 60 * 60)) / (1000 * 60),
      )).padStart(2,"0")),
      (this.secs = String(Math.floor((this.deltaTime % (1000 * 60)) / 1000)).padStart(2,"0")),
      this.updateClock
    );
  }

  get updateClock() {
    refs.days.textContent = this.days;
    refs.hours.textContent = this.hours;
    refs.mins.textContent = this.mins;
    refs.secs.textContent = this.secs;
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 1, 2021'),
});

timer.resultTime;
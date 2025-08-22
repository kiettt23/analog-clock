// Grab clock hand elements
const hourHand = document.querySelector("#hour-hand");
const minuteHand = document.querySelector("#minute-hand");
const secondHand = document.querySelector("#second-hand");

// Update CSS variable --rotation for a given hand
function setRotation(hand, rotation) {
  hand.style.setProperty("--rotation", rotation);
}

// Calculate time → degrees and update all hands
function setClock() {
  const currentDate = new Date();

  // Second: 0–60 mapped to 0–1
  const second = currentDate.getSeconds() / 60;
  // Minute includes second fraction for smooth motion
  const minute = (second + currentDate.getMinutes()) / 60;
  // Hour includes minute fraction for smooth motion
  const hour = (minute + currentDate.getHours()) / 12;

  // Apply rotation in degrees
  setRotation(hourHand, hour * 360);
  setRotation(minuteHand, minute * 360);
  setRotation(secondHand, second * 360);
}

// Run every second
setInterval(setClock, 1000);

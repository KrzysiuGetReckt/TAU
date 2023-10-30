function checkSpeed(speed) {
  let message = '';
  if (speed < 60) {
    message = `You're below the speed limit`;
  } else if (speed > 60) {
    message = `You're above the speed limit. Slow down!`;
  } else {
    message = `This is the maximum speed you can go at!`;
  }
  return console.log(message);
}

checkSpeed(100);
checkSpeed(60);
checkSpeed(59);

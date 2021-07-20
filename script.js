// Digital Clock
let digitalElement = document.querySelector('.digital')

// Analog Clock
let secondsElement = document.querySelector('.p_s')
let minutesElement = document.querySelector('.p_m')
let hoursElement = document.querySelector('.p_h')

const updateClock = () => {
  let now = new Date()

  let hours = now.getHours()
  let minutes = now.getMinutes()
  let seconds = now.getSeconds()

  // Digital Clock
  digitalElement.innerHTML = `${ fixTime(hours) } : ${ fixTime(minutes) } : ${ fixTime(seconds) }`

  // Analog Clock
  let secondsDeg = ((360 / 60) * seconds) - 90
  let minutesDeg = ((360 / 60) * minutes) - 90
  let hoursDeg = ((360 / 12) * hours) - 90

  secondsElement.style.transform = `rotate(${secondsDeg}deg)`
  minutesElement.style.transform = `rotate(${minutesDeg}deg)`
  hoursElement.style.transform = `rotate(${hoursDeg}deg)`
}

const fixTime = time => time < 10 ? `0${time}` : time

setInterval(updateClock, 1000)
updateClock()
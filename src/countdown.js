function countdownTimer(startTime, interval) {
  let remainingTime = startTime

  const timerId = setInterval(() => {
    if (remainingTime > 0) {
      console.log(remainingTime)
    }
    remainingTime--

    if (remainingTime < 0) {
      clearInterval(timerId)
    }
  }, interval)

  return timerId
}

module.exports = { countdownTimer }

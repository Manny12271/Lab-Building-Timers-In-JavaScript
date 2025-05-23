const { countdownTimer } = require('../src/countdown')

jest.useFakeTimers()

describe('countdownTimer', () => {
  let clearIntervalSpy

  beforeEach(() => {
    console.log = jest.fn()
    clearIntervalSpy = jest.spyOn(global, 'clearInterval')
  })

  afterEach(() => {
    clearIntervalSpy.mockRestore()
  })

  test('should log remaining time at intervals and stop at 0', () => {
    const startTime = 5 // 5 seconds
    const interval = 1000 // 1 second

    const timerId = countdownTimer(startTime, interval)

    // Fast-forward all timers
    jest.advanceTimersByTime(startTime * interval + interval) // include one extra interval to hit < 0

    // Check console.log was called with countdown values
    expect(console.log).toHaveBeenCalledTimes(startTime)
    for (let i = startTime; i > 0; i--) {
      expect(console.log).toHaveBeenCalledWith(i)
    }

    // Verify clearInterval was called with timerId
    expect(clearIntervalSpy).toHaveBeenCalledWith(timerId)
  })
})

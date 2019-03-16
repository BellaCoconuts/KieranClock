const endOfDay = new Date('March 16 2019 15:30').getTime()

const timer = document.querySelector('.countdown')

const x = setInterval(() => {
  const now = new Date().getTime()

  const distance = endOfDay - now

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  timer.textContent = `${lessThanTen(minutes)}:${lessThanTen(seconds)}`

  if (distance < 0) {
    clearInterval(x)
    timer.textContent = '00:00:00'
  }
}, 1000)

const lessThanTen = time => (time > 10 ? time : `0${time}`)

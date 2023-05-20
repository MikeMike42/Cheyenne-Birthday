import './CountdownTimer.css';


export default function CountdownTimer(props) {
  
  let previousTimeBetweenDates
  setInterval(() => {
    if (props.cheyenneIsThirty) return

    const currentDate = new Date()
    const timeBetweenDates = Math.ceil((props.countToDate - currentDate) / 1000)
    flipAllCards(timeBetweenDates)

    previousTimeBetweenDates = timeBetweenDates
  }, 250)

  function flipAllCards(time) {
    if (props.cheyenneIsThirty) return

    const seconds = time % 60
    const minutes = Math.floor(time / 60) % 60
    const hours = Math.floor(time / 3600) % 24
    const days = Math.floor(time / 86400)

    let isCountdownZero = Math.floor(days / 10) === 0 &&
    days % 10 === 0 && Math.floor(hours / 10) === 0 && 
    hours % 10 === 0 && Math.floor(minutes / 10) === 0 &&
    minutes % 10 === 0 && Math.floor(seconds / 10) === 0 &&
    seconds % 10 === 0

    if (isCountdownZero) {
      console.log("Days tens: " + Math.floor(days / 10))
      console.log("Days ones: " + days % 10)
      console.log(Math.floor(days / 10))
      console.log(Math.floor(days / 10))
      console.log(Math.floor(days / 10))
      console.log(Math.floor(days / 10))
      console.log(Math.floor(days / 10))
      props.setCheyenneIsThirty(true)
    }

    flip(document.querySelector("[data-days-tens]"), Math.floor(days / 10))
    flip(document.querySelector("[data-days-ones]"), Math.floor(days % 10))
    flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10))
    flip(document.querySelector("[data-hours-ones]"), hours % 10)
    flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10))
    flip(document.querySelector("[data-minutes-ones]"), minutes % 10)
    flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10))
    flip(document.querySelector("[data-seconds-ones]"), seconds % 10)
  }

  function flip(flipCard, newNumber) {
    
    if (newNumber < 0) return

    const topHalf = flipCard.querySelector(".top")
    const startNumber = parseInt(topHalf.textContent)
    if (newNumber === startNumber) return

    const bottomHalf = flipCard.querySelector(".bottom")
    const topFlip = document.createElement("div")
    topFlip.classList.add("top-flip")
    const bottomFlip = document.createElement("div")
    bottomFlip.classList.add("bottom-flip")

    topHalf.textContent = startNumber
    bottomHalf.textContent = startNumber
    topFlip.textContent = startNumber
    bottomFlip.textContent = newNumber

    topFlip.addEventListener("animationstart", e => {
      topHalf.textContent = newNumber
    })
    topFlip.addEventListener("animationend", e => {
      topFlip.remove()
    })
    bottomFlip.addEventListener("animationend", e => {
      bottomHalf.textContent = newNumber
      bottomFlip.remove()
    })
    flipCard.append(topFlip, bottomFlip)
  }

  return (
    <div class="container">
      <div class="container-segment">
        <div class="segment-title">Days</div>
        <div class="segment">
          <div class="flip-card" data-days-tens>
            <div class="top">0</div>
            <div class="bottom">0</div>
          </div>
          <div class="flip-card" data-days-ones>
            <div class="top">0</div>
            <div class="bottom">0</div>
          </div>
        </div>
      </div>
      <div class="container-segment">
        <div class="segment-title">Hours</div>
        <div class="segment">
          <div class="flip-card" data-hours-tens>
            <div class="top">0</div>
            <div class="bottom">0</div>
          </div>
          <div class="flip-card" data-hours-ones>
            <div class="top">0</div>
            <div class="bottom">0</div>
          </div>
        </div>
      </div>
      <div class="container-segment">
        <div class="segment-title">Minutes</div>
        <div class="segment">
          <div class="flip-card" data-minutes-tens>
            <div class="top">0</div>
            <div class="bottom">0</div>
          </div>
          <div class="flip-card" data-minutes-ones>
            <div class="top">0</div>
            <div class="bottom">0</div>
          </div>
        </div>
      </div>
      <div class="container-segment">
        <div class="segment-title">Seconds</div>
        <div class="segment">
          <div class="flip-card" data-seconds-tens>
            <div class="top">0</div>
            <div class="bottom">0</div>
          </div>
          <div class="flip-card" data-seconds-ones>
            <div class="top">0</div>
            <div class="bottom">0</div>
          </div>
        </div>
      </div>
    </div>
  );
}
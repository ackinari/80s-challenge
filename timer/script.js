function checkLimit(input) {
    if (input.value > 60) {
      input.value = 60
    }
}

let isRunning = 0
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const audio = document.getElementById("audio")

function start() {
    minutes.disabled = true
    seconds.disabled = true
    isRunning = 1
}

function stop() {
    minutes.disabled = false
    seconds.disabled = false
    isRunning = 0
    audio.pause()
    audio.currentTime = 0

    if (seconds.value == 0 && minutes.value == 0) {
        reset()
    }
}

function reset() {
    minutes.disabled = false
    seconds.disabled = false
    minutes.value = minutes.defaultValue
    seconds.value = seconds.defaultValue
    isRunning = 0
    document.title = "Timer by aKiNaRi"
    audio.pause()
    audio.currentTime = 0
}

setInterval(running, 1000)

function running() {
    if (isRunning == 1) {
        if (minutes.value > 0 && seconds.value == 0) {seconds.value--}
        else if (seconds.value > 0) {seconds.value--}
        
        if (seconds.value < 0 && minutes.value > 0) {
            minutes.value--
            seconds.value = 60
        }
        if (seconds.value == 0 && minutes.value == 0) {
            audio.play()
        }
        let minutesFormatted = minutes.value.padStart(2, '0')
        let secondsFormatted = seconds.value.padStart(2, '0')

        document.title = `${minutesFormatted}:${secondsFormatted}`
    }

}
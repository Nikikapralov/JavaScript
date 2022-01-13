function solve(steps, footprint, speed){
    let distance = (steps * footprint)
    let breaks = Math.trunc(distance / 500)
    let time = distance / (speed * 1000) * 60 + breaks
    let hours = Math.floor(time / 60)
    let minutes = Math.floor((time / 60 % 1) * 60)
    let seconds = Math.round((time / 60 % 1) * 60 % 1 * 60)
    if (hours < 10){
        hours = 0 + String(hours)
    }
    if (minutes < 10){
        minutes = 0 + String(minutes)
    }
    if (seconds < 10){
        seconds = 0 + String(seconds)
    }
    console.log(`${hours}:${minutes}:${seconds}`)
}

solve(8000, 0.60, 5)
solve(2564, 0.70, 5.5)
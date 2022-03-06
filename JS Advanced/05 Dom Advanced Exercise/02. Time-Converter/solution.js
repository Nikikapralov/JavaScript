function attachEventsListeners() {
    let getMainForDelegationElement = document.getElementsByTagName("main")[0]

    getMainForDelegationElement.addEventListener("click", function(e){
        if (e.target.matches("main #daysBtn")){
            let number = Number(document.getElementById("days").value)
            let displayDaysElement = document.getElementById("days")
            let displayHoursElement = document.getElementById("hours")
            let displayMinutesElement = document.getElementById("minutes")
            let displaySecondsElement = document.getElementById("seconds")
            displayDaysElement.value = number
            displayHoursElement.value = number * 24
            displayMinutesElement.value = number * 1440
            displaySecondsElement.value = number * 86400
        }
        else if (e.target.matches("main #hoursBtn")){
            let number = Number(document.getElementById("hours").value)
            let displayDaysElement = document.getElementById("days")
            let displayHoursElement = document.getElementById("hours")
            let displayMinutesElement = document.getElementById("minutes")
            let displaySecondsElement = document.getElementById("seconds")
            displayDaysElement.value = number / 24
            displayHoursElement.value = number
            displayMinutesElement.value = number * 60
            displaySecondsElement.value = number * 60 * 60

        }
        else if (e.target.matches("main #minutesBtn")){
            let number = Number(document.getElementById("minutes").value)
            let displayDaysElement = document.getElementById("days")
            let displayHoursElement = document.getElementById("hours")
            let displayMinutesElement = document.getElementById("minutes")
            let displaySecondsElement = document.getElementById("seconds")
            displayDaysElement.value = number / 60 / 24
            displayHoursElement.value = number / 60
            displayMinutesElement.value = number
            displaySecondsElement.value = number * 60

        }
        else if (e.target.matches("main #secondsBtn")){
            let number = Number(document.getElementById("seconds").value)
            let displayDaysElement = document.getElementById("days")
            let displayHoursElement = document.getElementById("hours")
            let displayMinutesElement = document.getElementById("minutes")
            let displaySecondsElement = document.getElementById("seconds")
            displayDaysElement.value = number / 60 / 60 / 24
            displayHoursElement.value = number / 60 / 60
            displayMinutesElement.value = number / 60
            displaySecondsElement.value = number

        }
    })
}
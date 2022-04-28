/**
 * Copyright (c) 2022 [CLUE RESEARCH LLC]
 *
 * Mozilla Public License 2.0 (MPL-2.0)
 *
 * Takes an argument 'targetDate' represented in miliseconds,
 * returns array representing [days, hours, minutes, seconds]
 * remaining from the present time.
 * 
 * @summary Time remaining until specified date
 * @author Adam Childers
 *
 * Created at     : 2022-04-19 23:17:59 
 * Last modified  : 2022-04-27 22:24:17
 */

function countDown(targetDate) {
    let clock = targetDate - new Date().getTime();
    if (clock > 0) {
        let days = clock/86400000;
        let hours = 24*(days - Math.floor(days));
        let minutes = 60*(hours - Math.floor(hours));
        let seconds = 60*(minutes - Math.floor(minutes));
        let timeRemaining = {}
        timeRemaining.days = Math.floor(days)
        timeRemaining.hours = Math.floor(hours)
        timeRemaining.minutes = Math.floor(minutes)
        timeRemaining.seconds = seconds.toFixed(1)
        return timeRemaining
        }
    else return "EXPIRED";
}

export { countDown };

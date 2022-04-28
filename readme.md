A simple function which outputs an array of days, hours, minutes, and seconds from the present moment until a specified 'targetDate', which should be reprented in miliseconds as per the '.getTime()' method.

Easy to integrate into a 'countdown clock', e.g. in a the following html template:

    <p>Time to Arrival:<br>{{ remaining.days + " d " }}
    <br>{{ remaining.hours + " h "}}
    <br>{{ remaining.minutes + " m "}}
    <br>{{ remaining.seconds + " seconds"}}
    </p>
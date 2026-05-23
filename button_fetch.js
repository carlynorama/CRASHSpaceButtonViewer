let source_url = `https://crashspacela.com/sign/?output=jsonmin`
let lastRefresh = null
let lastMinutesLeft = null


async function getLatest(callRoute) {
    console.log(callRoute)
    try {
        const response = await fetch(
            callRoute,
            {
                method: 'GET',
            },
        );

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        const data = await response.json();
        //no longer check the data here. make sure refresh() is getting it. 
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

function refreshData(){
    getLatest(source_url).then(data => {
        if (data) {
            lastRefresh = Date.now();
            lastMinutesLeft = data.minutes_left

            document.getElementById('current_date').innerHTML = lastRefresh
            //it was a choice to name the id's the same as the expected data labels
            //LEARNER GUT CHECK: (data.is_open = true) shows "OPEN" can you explain why?  
            if (data.is_open == "true") {
                document.getElementById('is_open').innerHTML = "OPEN"
            } else {
                document.getElementById('is_open').innerHTML = "CLOSED"
            }
            
            document.getElementById('minutes_left_raw').innerHTML = lastMinutesLeft
            document.getElementById('minutes_left_processed').innerHTML = lastMinutesLeft
            document.getElementById('minutes_left_stringified').innerHTML = stringifyMinutes(lastMinutesLeft)
        }
    });
}


function updateElapsed() {
    if (lastRefresh) {
        var now = new Date().getTime();
        var minutesSinceRefresh = (now - lastRefresh)/(60000)
        var newMinutesLeft  = lastMinutesLeft - minutesSinceRefresh
         document.getElementById('minutes_left_processed').innerHTML = newMinutesLeft
         document.getElementById('minutes_left_stringified').innerHTML = stringifyMinutes(newMinutesLeft)
    } else {
        document.getElementById('minutes_left_processed').innerHTML = "Waiting..."
        document.getElementById('minutes_left_stringified').innerHTML = "Waiting"
    }
}

//wont work unless time_support is loaded before on the html page. 
helloSecondJSFile("outside window.onload");

//---------------------------------- PAGE STARTS HERE
window.onload = function() {
    console.log('script called')
    refreshData();
    //works no matter the order in the header. 
    helloSecondJSFile("INSIDE window.onload");
    //this is too fast if really only by minute. 
    setInterval(updateElapsed, 1000);
}


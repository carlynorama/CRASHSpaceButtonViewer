let source_url = `https://crashspacela.com/sign/?output=jsonmin`

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

function refreshPage(){
    getLatest(source_url).then(data => {
        if (data) {
            var date = new Date(data.timestamp);
            //it was a choice to name the id's the same as the expected data labels
            //LEARNER GUT CHECK: (data.is_open = true) shows "OPEN" can you explain why?  
            if (data.is_open == "true") {
                document.getElementById('is_open').innerHTML = "OPEN"
            } else {
                document.getElementById('is_open').innerHTML = "CLOSED"
            }
            
            document.getElementById('minutes_left').innerHTML = data.minutes_left
        }
    });
}


//---------------------------------- PAGE STARTS HERE
window.onload = function() {
    console.log('script called')
    refreshPage()
}


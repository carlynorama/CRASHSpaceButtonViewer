

function helloSecondJSFile(message) {
    console.log("I see you.", message)
}


const isNumeric = (num) => (typeof(num) === 'number' || typeof(num) === "string" && num.trim() !== '') && !isNaN(num);


//takes in a value in minutes, discards any fractional minutes. 
//20.31666666666667
function stringifyMinutes(interval) {
    //check if interval is a number
    //TODO: There is a better way to handle errors, make sure this comes in as
    // a number.
    if (!(isNumeric(interval))) {
        return null
    } 

    let myInterval = parseFloat(interval)

    let negativeNumberFlag = myInterval < 0;
    //console.log("negativeNumberFlag", negativeNumberFlag)
    
    //mast do this before parse because Math.floor wont work correctly for this on neg numbers
    //compare the following outputs 
    //console.log(myInterval / (60  * 24), ~~(myInterval / (60  * 24)), Math.trunc(myInterval / (60  * 24)));
    if (negativeNumberFlag) {
        myInterval = myInterval * -1
        console.log()
    }
    //console.log(myInterval / (60  * 24), ~~(myInterval / (60  * 24)), Math.trunc(myInterval / (60  * 24)));


    var days = Math.floor(myInterval / (60  * 24));
    var hours =  Math.floor((myInterval % (60 * 24)) / (60));
    var minutes = Math.floor((myInterval % (60 * 24)));

    let message = days + "d " + hours + "h "  + minutes + "m ";
    if (negativeNumberFlag) {
        message = message + " since"
    }   else {
        message = message + "until"
    }
    //console.log(message)
    return message;
}

//takes in a standard millis elapsed value. 
function stringifyInterval(interval) {
    //check if interval is a number
    //TODO: There is a better way to handle errors, make sure this comes in as
    // a number.
    if (!(isNumeric(interval))) {
        return null
    } 
    let myInterval = Math.abs(parseFloat(interval))

    var days = Math.floor(myInterval / (1000 * 60 * 60 * 24));
    var hours = Math.floor((myInterval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((myInterval % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((myInterval % (1000 * 60)) / 1000);

    let message = days + "d " + hours + "h "  + minutes + "m " + seconds + "s ";
    //console.log(message)
    return message;
}

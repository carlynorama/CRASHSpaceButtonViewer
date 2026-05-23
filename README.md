# CRASHSpace Button Fetch "Hello World"

## About this project

This is a demo project that fetches the current status of the CRASHSpace button and displays it in a web page.

A person loading this page should be able to tell at a glance if the space is open, and if so, how much longer it will be open. 

## Technologies Used

JavaScript, HTML and (CSS, pending).

## How To Demo

- download the folder
- cd into it
- launch a server with a command like

```
# https://realpython.com/python-http-server/
-m http.server 3434
```

Look at it by loading it into a browser or curling it: 

 `http://127.0.0.1:3434` (safari) `http://localhost:3434/`

 ## How it works

The site uses standard javascript to fetch data from the button API. 

The data it has to work with can be checked by running a [curl](https://curl.se/docs/) command:

```bash
curl -i 'https://crashspacela.com/sign/?output=jsonmin'
```

Example output from that call:

```json
{
    "is_open":false,
    "minutes_left":-880.5833333333334,
    "button_presses":[]
}% 
```

The script fetches the data and maintains the countdown, updating the DOM for specific id's in the HTML. 
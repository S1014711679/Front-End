# Restaurant Review: Stage 1
-------------------
#### 

## Table of Contents
- [Project_Overview](#Project_Overview)
- [Description](#Description)
- [How_to_make_it_work](#How_to_make_it_work)
- [Dependencies](#Dependencies)

### Project_Overview

This is a project completed by adding accessibility and converting it to responsive desgin on different-sized displays. A service worker is added to create a seamless offline exprience for the users.
*  The original project is from [mws-restaurant-stage-1](https://github.com/udacity/mws-restaurant-stage-1);

### Description
This app will display several recommend restaurants in New York city based on the [dataset](https://github.com/S1014711679/Front-End/blob/master/Udacity%20Project%205%20-%20Restaurant%20Reviews%20Stage%201/data/restaurants.json). Users can select "Neighbourhood" or "Cuisines" to find out the restaurants they want to go to. And they can view more detailed information including reviews, address and opening time after getting the filtered results. 

This app can work offline thanks to the help of service worker technique. The service worker will cache the information when loading the data at the first time and can still display information if response is cached when changing pages.

### How_to_make_it_work
1) Launch a local client sever using Python 3 from your terminal and type:
   `python -m http.server 2222`  to start the server.
2) Launch the Chrome browser and type in url address: `http://locahost:2222`

* If you don't have Python 3.x installed, please download from Python's [website](https://www.python.org/) to install on your computer.
* You can check currently version of Python on your terminal by type in:`python -v`. 
* The port number (2222) can be changed in the [/js/dbhelper.js](https://github.com/S1014711679/Front-End/blob/master/Udacity%20Project%205%20-%20Restaurant%20Reviews%20Stage%201/js/dbhelper.js) file.

## Dependencies
This project used [Mapbox](https://www.mapbox.com/) to display the map. Mapbox is free to use.

# Feed Reader Testing Project

## Table of Contents

- [Description](#Description)
- [Contributing](#Contributing)
- [Dependencies](#Dependencies)

## Descciption
This testing project is mainly based on Jasmine JavaScript library. 

The test suits for app.js[] include:

1. Test the RSS feeds definitions and the allFeeds variables:
    * The allFeeds variable has been defined.
    * The allFeeds is not an empty array.
    * Each feed in the allFeeds object has a URL defined and that the URL is not empty.
    * Each feed in the allFeeds object has a name defined and that the name is not empty.
    
2. Test the menu icon element:
    * The menu element is hidden by default.
    * The menu element changes visibility when the menu icon is clicked.
        * The menu is displayed when clicked.
        * The menu is hidden when clicked again.
       
3. Test the initial entries:
    * There is a single .entry element within .feed container.
    * The loadFeed() function is asynchronous and requires the use of Jasmine's beforeEach and asynchronous done() function.
    
4. Test the new feed loaded:
    * When a new feed is loaded by the loadFeed function that the content actually changes.
    

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

##  Dependencies
1. Jasmine - Behavior-Driven JavaScript [https://jasmine.github.io/]

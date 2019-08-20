/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test -
         * it tests to make sure that 
         *  1)  the allFeeds variable has been defined 
         *  2)  it is not empty. 
         */
        it('>> are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });



        /* This is a test that loops through each feed in the allFeeds object  
         *  1) it has a URL defined
         *  2) the URL is not empty.
         * */
        it('>> URL is defined', function() {
            //feed: name, url
            allFeeds.forEach((feed) => {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /* This is  a test that loops through each feed in the allFeeds object:
         * 1)   it has a name defined
         * 2)   the name is not empty.
         */
        it('>> name is defined', function() {
            //feed: name, url
            allFeeds.forEach((feed) => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });

    });


    /* A new test suite named "The menu" */
    describe('The menu', function() {

        /*  This is a test that ensures the menu element is hidden by default. 
         *  We will analyze the HTML and the CSS to determine how we're performing the
         *  hiding/showing of the menu element.
         */

        //hiding - when the <body> has menu-hidden class
        it('>> menu hidding', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });


        /*  This a test that ensures the menu changes visibility when the menu icon is clicked. 
         *  This test have two expectations: 
         *  1)  the menu display when clicked 
         *  2)  it will be hidden when clicked again.
         */
        //showing - when the <body> doesn't had menu-hidden class
        it('>> menu showing', () => {

            //when the button is clicked and showing the menu
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            //click again to hide the menu
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);

        });

    });

    /* a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /*  This is a test that ensures when the loadFeed function is called and completes its work.
         *  1)  there is at least a single .entry element within the .feed container.
         *  2)  loadFeed() is asynchronous so this test will require the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        // after add articles links to the <div class="feed"></div> section
        it('>> loadFeed() is called and complete', function() {
            expect($('.feed').find('.entry').length).toBeGreaterThan(0);
        });

    });

    /* A new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* A test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.*/

        var feed_1;
        var feed_2;

        //use nested callbacks and make sure that they are executed in the correct order
        beforeEach(function(done) {
            //load the first feed
            loadFeed(1, () => {
                feed_1 = $('.feed').html();
                //load the second feed
                loadFeed(2, () => {
                    feed_2 = $('.feed').html();
                    done();
                });
            });

        });


        it('>> new feed is loaded', function() {
            expect(feed_1).not.toEqual(feed_2);
        });
    });

    //end of function 
}());

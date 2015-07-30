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
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Tests that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty
         */
         it("have defined URLs", function(){
           function test_feed_url(feed){
             expect(allFeeds[feed].url).toBeDefined();
             expect(allFeeds[feed].url).not.toBe(" ");
           };
        for(i=0; i < allFeeds.length; i++) {
          test_feed_url(i);
        }
         });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it("have defined names", function(){
           function test_feed_name(feed){
             expect(allFeeds[feed].name).toBeDefined();
             expect(allFeeds[feed].name).not.toBe(" ");
           };
        for(i=0; i < allFeeds.length; i++) {
          test_feed_name(i);
        }
         });
    });

    describe ('The menu', function() {
      var spyEvent;
      var body = $('body')
      it ('should be hidden by default', function() {
        expect(body.hasClass("menu-hidden")).toBe(true);
      });
      /* A test that triggers the click function on the menu icon link to
       * to make sure that clicking the link shows and hides the menu by toggling
        * "menu-hidden" class on the body
      */
      it ("should show the menu visibility changes when the menu icon is clicked", function() {
        $('.menu-icon-link').trigger('click');
        expect(body.hasClass("menu-hidden")).toBe(false);
        $('.menu-icon-link').trigger('click');
        expect(body.hasClass("menu-hidden")).toBe(true);
      });

    });

    describe('Initial Entries', function() {
      beforeEach(function(done) {
        loadFeed(0, function() {
          done();
        });
      });
      /* test that checks to make sure the feed loaded by
       * checking to make sure that atleast one object with the
       * entry class was added to the feed container.
      */

        it('after the feeds load, the feed container element contains at least one entry', function(done) {
          var feedCount = $(".feed .entry").length;
          expect(feedCount).toBeGreaterThan(0);
          done();
        });
    });

    describe('New Feed Selection', function() {
      beforeEach(function(done) {
        currentFeedContent = $('.feed').html()
        loadFeed(1, function() {
          done();
        });
      });

      /* a test that compares the initial contents of the feed container to
       * the contents of the container after loading a new feed.
      */
      it('should display new content when a new feed is loaded', function(done) {
        newFeedContent = $('.feed').html;
        expect(newFeedContent).not.toBe(currentFeedContent);
        done();
      })
    });

//

}());

var expect = require('chai').expect;
var assert = require('chai').assert;
var webdriver = require('selenium-webdriver');

var InteractionSteps = function () {
    this.World = require("../world.js").World;

    this.When(/^I visit google home page$/, function (callback) {
      this.visit('http://google.co.uk', callback);
    });

    this.Then(/^I should see an input box$/, function (callback) {
      this.browser
        .waitFor('.content', 3000)
        .elements("//input[@name='q']", function(err, elements) {
          assert.equal(elements.value.length, 1);
          callback();
        });
    });


};

module.exports = InteractionSteps;
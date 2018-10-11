'use strict';

const BasePage = require("./BasePage");

class HomePage extends BasePage {
    constructor() {
        super();

        this.QuickFlightSearchBlock = element(by.css(".smart-search"));
        this.FlightsTab = this.QuickFlightSearchBlock.$('.flights');
        this.RoomsTab = this.QuickFlightSearchBlock.$('.hotels');
        this.RoomsHover = element(by.css(".coach-mark__container"))
        this.ItunesIcon = element(by.css('[title~="iTunes"]'));
    };
}

module.exports = HomePage;
'use strict';

const BasePage = require("./BasePage");

class MainMenu extends BasePage {
    constructor() {
        super();

        this.Header = element(by.css("#ryanair-navbar"));

        this.Logo = this.Header.element(by.css('.ryanair-logo'));
        this.PlanMenu = this.Header.element(by.css('#plan-trip'));
        this.MyBookingMenu = this.Header.element(by.css('.manage-trips'));
        this.DropDowngMenu = element(by.css('.menu-dropdown'));
        this.FireFinderLink = element(by.css('[ui-sref="farefinder"]'));
        this.PlusLink = this.DropDowngMenu.$('a[href$="/plus"]');


        this.DropDownColumnTravelExtras = this.DropDowngMenu.$$('.col-travel:nth-child(2) li');
        this.DropDownColumnExplore = this.DropDowngMenu.$$('.col-travel:nth-child(1) li');

        // this.DropDownColumnTravelExtras = this.DropDowngMenu.$$('.col-travel li');

    };
}

module.exports = MainMenu;
'use strict';

class Header{
    constructor (){

        this.Header = element(by.css(".top-menu-links"));

        this.HolidayLink = this.Header.element(by.css('li:nth-child(1) a'));
        this.CarHireLink = this.Header.element(by.css('li:nth-child(2) a'));
        this.HotelsLink = this.Header.element(by.css('li:nth-child(3) a'));

    };
}
module.exports = Header;

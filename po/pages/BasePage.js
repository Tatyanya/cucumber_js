'use strict';

const Header = require('../components/global/Header');

class BasePage {
    constructor() {

        this.Header = new Header();
    };
}

module.exports = BasePage;
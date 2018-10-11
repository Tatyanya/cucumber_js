'use strict';

const HomePage = require('./pages/HomePage');
const MainMenu = require('./pages/MainMenu');

// const baseUrl = browser.baseUrl;

class World {
    constructor() {
        this.HomePage = new HomePage();
        this.MainMenu = new MainMenu();

        this.HomeUrl = browser.baseUrl;
    }
}

module.exports = new World();
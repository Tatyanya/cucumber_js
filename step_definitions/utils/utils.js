'use strict';

const expect = require('chai').expect;
const world = require('../../po/world');
const EC = protractor.ExpectedConditions;
const DEFAULT_STEP_TIMEOUT = 60 * 1000;
const parser = require('./poParser');


const ECHelper = (element, validation, negate) => {
    switch (validation) {
        case "present":
            return negate ? EC.not(EC.presenceOf(element)) : EC.presenceOf(element);
        case "clickable":
            return negate ? EC.not(EC.elementToBeClickable(element)) : EC.elementToBeClickable(element);
        case "visible":
            return negate ? EC.not(EC.visibilityOf(element)) : EC.visibilityOf(element);
        case "invisible":
            return negate ? EC.not(EC.invisibilityOf(element)) : EC.invisibilityOf(element);
        case "selected":
            return negate ? EC.not(EC.elementToBeSelected(element)) : EC.elementToBeSelected(element);
        case "gone":
            return negate ? EC.not(EC.stalenessOf(element)) : EC.stalenessOf(element);
        case "appear":
            return EC.presenceOf(element);
        case "disappear":
            return EC.stalenessOf(element);
        case "become visible":
            return EC.visibilityOf(element);
        case "become invisible":
            return EC.invisibilityOf(element);
        default:
            throw new Error("Wrong expected condition provided");
    }
};


const inViewPortHelper = async (coordinates, shouldNotBe) => {
    const scrollTop = await browser.executeScript("return window.scrollY;");
    const innerHeight = await browser.executeScript("return window.innerHeight;");

    if (shouldNotBe) {
        if (coordinates.y >= scrollTop && coordinates.y < scrollTop + innerHeight) {
            throw new Error();
        }
    } else {
        if (!(coordinates.y >= scrollTop && coordinates.y < scrollTop + innerHeight)) {
            throw new Error();
        }
    }
};

const isInViewPort = async (element, shouldNotBe) => {
    const coordinates = await parser.parser(element).getLocation();

    return inViewPortHelper(coordinates, shouldNotBe);
};


module.exports = {
    isInViewPort,
    // textHelper,
    ECHelper,
    // scrollToTheElementHelper,
    // isTextsEquals,
    // textRememberer,
    // collectionComparingTextsWorker
};
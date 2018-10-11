'use strict';

const expect = require('chai').expect;
const world = require('../po/World');
const EC = protractor.ExpectedConditions;
let {Then, When, Given} = require('cucumber');
const DEFAULT_STEP_TIMEOUT = 60 * 1000;
const parser = require('./utils/poParser');

const utils = require("./utils/utils");


Then('I wait {int} second(s)', (number) => {
    let seconds = parseFloat(number);
    return browser.sleep(Math.floor(seconds * 1000));
});


Then(/^I (Disable|Enable) protractor synchronization$/, (toggleArg) => {
    if (toggleArg === "Disable") {
        browser.ignoreSynchronization = true;
    } else {
        browser.ignoreSynchronization = false;
    }
    return true;
});

Given(/^I should be on "(.+)" page$/, async (pageName) => {
    //   browser.ignoreSynchronization = true;
    return expect(await browser.getCurrentUrl()).to.equal((world[`${pageName}Url`]) + 'gb/en/');
});

Then(/^(Element|Collection) "([^"]*)" should (not )?be (present|clickable|visible|invisible|selected|gone)$/, async (elementOrCollection, alias, negate, validation) => {
    const elem1 = parser.parser(alias);
    const CUSTOM_TIMEOUT = 15 * 1000;

    if (elementOrCollection === "Collection") {
        await elem1.each(async elem => {
            return await browser.wait(utils.ECHelper(elem, validation, negate), CUSTOM_TIMEOUT, `${elementOrCollection} ${alias} is${negate ? "" : " not"} ${validation}`);
        });
    } else {
        return await browser.wait(utils.ECHelper(elem1, validation, negate), CUSTOM_TIMEOUT, `${elementOrCollection} ${alias} is${negate ? "" : " not"} ${validation}`);
    }
});

Then(/^"([^"]*)" element should( not)? be in viewport$/, (element, shouldNotBe) => {
    return utils.isInViewPort(element, shouldNotBe);
});


Then(/^I click "([^"]*)" element$/, async (element) => {
    browser.ignoreSynchronization = false;
    await browser.wait(EC.elementToBeClickable(parser.parser(element)), DEFAULT_STEP_TIMEOUT)
    return await parser.parser(element).click();
});

Then('{detail} list {cssText} contains values:', async (_, elements, expected) => {
    expected = expected.raw();

    const actual = elements.map(element => [element]);
    //  console.log(actual)
    // return expect(actual).to.deep.include.memberss(expected);

    return expect(actual).to.deep.equal(expected);

});

Then(/^Count of "([^"]*)" elements should be equal "([^"]*)"$/, async (elements, count) => {
    const arraysSize = await parser.parser(elements).count();

    return expect(arraysSize, `${elements} size (${arraysSize}) is different then given count (${count})`).to.be.equal(parseInt(count));
});

When(/^I scroll to the "([^"]*)" element$/, async (element) => {
    const location = await parser.parser(element).getLocation();

    return browser.executeScript(`window.scrollTo(0, "${location.y}");`);
});

When(/^I hover mouse over "([^"]*)"$/, async (alias) => {
    await browser.actions().mouseMove(parser.parser(alias)).perform();
});
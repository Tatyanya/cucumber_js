const {defineParameterType} = require('cucumber');
const parser = require('./utils/poParser');


const STRING_REGEXP = /"([^"\\]*(\\.[^"\\]*)*)"/;

/**
 * Used for adding description to elements.
 */
defineParameterType({
    regexp: /[^"]*/,
    name: 'detail',
    useForSnippets: false
});

defineParameterType({
    regexp: STRING_REGEXP,
    name: 'cssText',
    useForSnippets: true,
    transformer: async function (givenValue) {
        console.log(givenValue);
        const element = parser.parser(givenValue);
        return await element.getText();
    }
});

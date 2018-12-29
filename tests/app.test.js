//const tests = require('./app');


const  exact = require('expect');


describe('app.js test file testing grouped', () => {

  it('Can simulate conversation', () => {
    bot.dialog('/', [(session) => {
        new builder.Prompts.text(session, 'Hi there! Tell me something you like')
    }, (session, results) => {
        session.send(`${results.response} is pretty cool.`);
        new builder.Prompts.text(session, 'Why do you like it?');
    }, (session) => session.send('Interesting. Well, that\'s all I have for now')]);


    const {
        executeDialogTest,
        SendMessageToBotDialogStep,
    } = testSuiteBuilder(bot);

    return executeDialogTest([
        new SendMessageToBotDialogStep('Hola!', 'Hi there! Tell me something you like'),
        new SendMessageToBotDialogStep('Burger', ['The burger is pretty cool.', 'Why do you like it?']),
        new SendMessageToBotDialogStep('It\'s pizza', 'Interesting. Well, that\'s all I have for now')
    ])
})
});

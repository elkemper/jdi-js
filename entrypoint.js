import WebDriver from 'webdriver'
import $ from './stolen/commands/element/$'
import jdiTestingPage from './jdi-testing-page';
export default async function entrypoint(){
    const client =  await WebDriver.newSession({
        path: '/wd/hub',
        capabilities: { browserName: 'chrome' },
        logLevel: 'warn'
    })
    client.$ = $;
    global.client = client;
    global.$ = (selector) => client.$(selector)

    global.jdiPage = await new jdiTestingPage(client)
}
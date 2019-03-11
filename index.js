import WebDriver from 'webdriver';
// import { doesNotReject } from 'assert';
// import runFnInFiberContext from './syncro'
// import $  from './stolen/commands/element/$'
// import click from './stolen/commands/element/click' 
import entrypoint from './entrypoint';
import jdiTestingPage from './jdi-testing-page';
// import Button from './common/elements/button';


before('', entrypoint)

describe( 'wow', () => {
    it ('lol',    () => {

        test1()



        // console.log(btn)
        // btn.click()
        // await btn
        //  let aa = await Button('//a[text()="Contact form"]')
        //  await   aa.click()

        // await client.navigateTo('https://duckduckgo.com')
        // let img
        // try { 
        //     img = await client.findElement('css selector', '#hplogo')    
            
        //     // let btn = await client.$('input[type="submit"]')
        //     // await console.log(btn)
        //     await client.elementClick(btn)
        // } catch (e)  { console.log('----->HUYNYA'+e) }



        // let inp = await $('#search_form_input_homepage')

        // await console.log(inp)

        // inp.sendKeys(['jdi'])

        // let btn = await $('input[type="submit"]')
        //     await console.log(btn)

        //     // await client.elementSendKeys(inp.elementId,['sss','s'])

        //     await btn.click()

        //     // eslint-disable-next-line no-console
        //     // await console.log( img) // outputs "WebDriver - Google Search"
            
        }
    )
})

after('', () => client.deleteSession())


function  test1 (){
     client.navigateTo('https://epam.github.io/JDI/index.html')
        let bb =  client.$('//a[text()="Home"]')
        // let jdiPage = new jdiTestingPage(client)
        
        let tt = jdiPage.button()
        console.log(tt)
        // tt.click()
}
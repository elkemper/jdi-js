import Page from './common/base/page'
import button from './common/elements/button'
export default class jdiTestingPage{
    constructor(client){
        this.client = client
        this.client.button = button
    }
     button() {
        return  this.client.button('//a[text()="Home"]')
    } 
}

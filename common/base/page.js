export default class Page {
    constructor(obj){
        for (var fld in obj) {
            this[fld] = obj[fld];
          }
    }
}
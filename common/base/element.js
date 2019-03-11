// import $ from '../../stolen/commands/element/$';

export default  function element(selector) {
    return $(selector)
}









// const Fiber = require('fibers');

// export default  function element(selector) {
//     return  Fiber(function() {
//        return $(selector)
//     }).run();
// }
/**
 * Async Filter function courtesy of @jib on SO
 * https://stackoverflow.com/a/33401045/2016735
 * @param {Array} array 
 * @param {Function} filter 
 */
export var filterAsync = (array, filter) =>
    Promise.all(array.map(entry => filter(entry)))
    .then(bits => array.filter(entry => bits.shift()));

export var mapAysnc = (array, fn) =>
    Promise.all(array.map(fn))

/**
 * Remove undefined values in object
 * @param {Object} params The params to filter
 */
export function existant(params) {
    let out = {};
    for (var param in params) {
        if (params.hasOwnProperty(param)) {
            var p = params[param];
            if(typeof p !== "undefined" && p != "") out[param] = p;
        }
    }
    return out;
}  

/**
 * Deep object access via a dot delimited string
 * @param {Object} object The object to access
 * @param {String} accessor The key to access, use '.' to specify sub keys
 * @param {*} value Optional. Set a value in the object
 */
export function dlv(object, accessor, value) {
    return [object, ...accessor.split(".")].reduce((a,b,i,l)=>value&&l.length-i==1?a[b]=value:a[b])
}
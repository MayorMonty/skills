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
    Promise.all(array.map(entry => fn(entry)))

/**
 * Remove undefined values in object
 * @param {Object} params The params to filter
 */
export function existant(params) {
    let out = {};
    for (var param in params) {
        if (params.hasOwnProperty(param)) {
            var p = params[param];
            if(typeof p !== "undefined") out[param] = p;
        }
    }
    return out;
}  


function findMatching(array, string) {
    return array.filter(function(el) {
        return el.toLowerCase().indexOf(string.toLowerCase())!== -1
    })
}


function fuzzyMatch(array, string){
    return array.filter(function(el) {
        return el.startsWith(string)
    })
}
function matchName(object,string) {
    return object.filter(driver => driver.name === string);
}
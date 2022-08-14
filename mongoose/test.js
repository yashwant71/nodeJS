var strdate1 ="10/02/2022" 
var strdate2 ="10/02/2022"
//mm/dd/yy

function parseDate(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[0]-1, mdy[1]);
}
function datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    return Math.round((second-first)/(1000*60*60*24));
}
console.log(datediff(parseDate(strdate1), parseDate(strdate2)))

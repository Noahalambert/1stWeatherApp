var prompt = require('prompt-sync')();
let axios = require('axios')
let userZip = prompt("Please enter your ZIP code; ");
console.log(userZip)
var apiUrl = `http://api.weatherapi.com/v1/current.json?key=8becbc4633c9476292f135032222809&q=${userZip}&aqi=no`;
axios (apiUrl)
.then (Response => {
    console.log(Response.data)
})
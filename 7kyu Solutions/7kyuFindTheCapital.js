// array.. state & capital. 

// return string that says the capital of country



function capital(capitals) {
  return capitals.map(function(e) {
        let stateOrCountry = ''
    // find either state or country
    if(!e.state){
        stateOrCountry = e.country
    }else{
        stateOrCountry = e.state
    }
    return `The capital of ${stateOrCountry} is ${e.capital}`
  })
}




state_capitals = [{state: 'Maine', capital: 'Augusta'}]
console.log(capital(state_capitals)[0], "The capital of Maine is Augusta");
console.log(capital([{'country': 'Spain', 'capital': 'Madrid', }])[0], "The capital of Spain is Madrid");
console.log(capital([{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}])[1], "The capital of Spain is Madrid");
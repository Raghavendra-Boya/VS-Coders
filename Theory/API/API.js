//fetch().then(response =>response).catch(error=>error)
//


console.log("Hello");
fetch("https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=38.5&lat=-78.5&units=imperial&lang=en")
.then(response => response.json())
.then(data => console.log(data))
.catch(error=> console.log(error))
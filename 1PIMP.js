// From the PIMP MY RIDE exercise

// Step 1 - Parsing: Create a function parseTrip(trip) that sorts the string into a data structure of your choice
let tripToParse = "Perdita 8 10 8"

function parseTrip(trip) {
    // TODO
    const parsedTrip = trip.split(" ");
    return {
        'name': parsedTrip[0],
        'start': parseInt(parsedTrip[1]),
        'duration': parseInt(parsedTrip[2]),
        'price': parseInt(parsedTrip[3])
    }
}
//console.log(parseTrip(tripToParse)) // = [name Perdita, 8, 10, 8]

// Step 2 - Loop Parsing: Parse  list of trips and convert them into the data structure of your choice

let tripsToParse = [
    "Roger 0 5 10",
    "Pongo 3 7 14",
    "Perdita 8 10 8",
    "Anita 16 3 7"
]

function parseTrips(trips) {
    // TODO
    const parsedTrips = []
    for (let i = 0; i < trips.length; i++) {
        // parsedTrips.push(parseTrip(trips[i]));
        parsedTrips[i] = parseTrip(trips[i])
    }
    return parsedTrips;
}

// Step 3 - Prices: find sum of trips prices 
let tripList = parseTrips(tripsToParse)

function getTripsPrice(voyages) {
    let sum = 0
    for (let i = 0; i < voyages.length; i++) {
        sum += voyages[i].price
    }
    return sum;
}

//console.log(getTripsPrice(tripList))

// Step 4 - Comptability: check if trips don't overlap and are compatible time-wise 
function checkCompatibility(tripA, tripB) {
    let tripArrivalA = tripA.start + tripA.duration
    let tripArrivalB = tripB.start + tripB.duration


    if (tripB.start > tripA.start && tripB.start < tripArrivalA
        || tripB.start < tripA.start && tripArrivalB > tripA.start
        || tripB.start < tripA.start && tripB.start > tripArrivalA) {
        return false
    }
    return true
}


//console.log(checkCompatibility({ 'client': 'Roger', 'start': 0, 'duration': 5, 'price': 10 }, { 'client': 'Perdita', 'start': 3, 'duration': 2, 'price': 8 }))

//Step 5 - Possibilities: CHeck if all trips are compatible with one another (each trip is compatible with itself)

function findCompatibilities(trips) {
    let compatibleTrips = []
    for (let i = 0; i < trips.length; i++) {
        compatibleTrips.push([trips[i]])
        for (let j = i + 1; j < trips.length; j++) {
            if (checkCompatibility(trips[i], trips[j])) {
                compatibleTrips.push([trips[i], trips[j]])
            }
        }
    }
    return compatibleTrips
}

//console.log(findCompatibilities(tripList))

//Step 6 - Final Choice: find a way to generate the trip(s) that will bring in more money to the company

function findBestPrice(trips) {
    let combi = findCompatibilities(trips) // array of compatible trips 
    let bestPrice = 0
    let bestCombo;

    for (let i = 0; i < combi.length; i++) {
        let price = getTripsPrice(combi[i]);
        if (price > bestPrice) {
            bestPrice = price;
            bestCombo = combi[i];
        }
    };
    return bestCombo;
}
console.log(findBestPrice(tripList))
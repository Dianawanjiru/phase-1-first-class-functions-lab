// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
const returnFirstTwoDrivers = function (driverNumber){
    return [driverNumber[0], driverNumber[1]]
    
}

returnFirstTwoDrivers(drivers);

const returnLastTwoDrivers = function (driverNumber){
    return [driverNumber[driverNumber.length-2], driverNumber[driverNumber.length-1]]
}
returnLastTwoDrivers(drivers);


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier =  ride =>{
    return function(fare){
        return fare * ride

    }
}

const newFare = createFareMultiplier(2);
function fareDoubler (double){
    return newFare(double);
}

const fareCalculator = createFareMultiplier(3);
function fareTripler (triples){
    return fareCalculator(triples);
}

function selectDifferentDrivers (drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);

}
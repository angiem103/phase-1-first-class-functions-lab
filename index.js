
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

const returnFirstTwoDrivers = (function (){
   return drivers.slice(0,2)
});

const returnLastTwoDrivers = (function(){
    return drivers.slice(-2)
})

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare) {
    return (function (value) {
        return value * fare
    })
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers) {
   return returnFirstTwoDrivers(arrayOfDrivers)
}
// Declaration
function getWeight(yourCurrentBMI, userHeight, standardBMI) {
    const diffWeight = (userHeight ** 2) * (standardBMI - yourCurrentBMI);
    return Math.abs(diffWeight).toFixed(1)
}

const sayHello = function(name){
    console.log(`${name} hello world`);
}


// Export
module.exports = {getWeight, sayHello};
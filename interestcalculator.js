const data = [{
        principal: 2500,
        time: 1.8,
    },
    {
        principal: 1000,
        time: 5,
    },
    {
        principal: 3000,
        time: 1,
    },
    {
        principal: 2000,
        time: 3,
    },
];


function interestCalculator(array) {
    var i;
    for (let i in data) {

        if (data[i].principal >= 2500 && data[i].time > 1 && data[i].time < 3) {
            return rate = 3;
        } else if (data[i].principal >= 2500 && data[i].time >= 3) {
            return rate = 4;
        } else if (data[i].principal < 2500 && data[i].time <= 1) {
            return rate = 2;
        } else {
            return rate = 1;

        }


    }
    var interest = (data[i].principal * data[i].rate * data[i].time) / 100;
    console.log(interest);
    var interestData = [interest, principal, time, rate];
    console.log(interestData);
}


console.log(interestCalculator(data));
interestCalculator(data);
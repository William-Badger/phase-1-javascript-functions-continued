// Your code here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun();

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}
mondayWork('work from home');

function wrapAdjective(b = '*') {
    function result(a = 'special') {
        return `You are ${b}${a}${b}!`;
    }
    return result;
}

wrapAdjective()('a hard worker')

wrapAdjective('||')('a dedicated programmer');
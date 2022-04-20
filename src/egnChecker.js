const monthDayArr = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
};

export function isEgnValidGeneral(egn) {
    if (egn.length !== 10) {
        return false;
    }
    
    const yearRegex = /^[0-9]{2}$/;
    if (!yearRegex.test(egn.substring(0, 2))) {
        return false;
    }

    const monthRegex = /^[0-5]{1}/;
    let substract;
    let segment;
    switch (egn[2]) {
        case '0':
            segment = /[1-9]{1}$/;
            substract = 0;
            break;
        case '1':
            segment = /[0-2]{1}$/;
            substract = 0;
            break;
        case '2':
            segment = /[1-9]{1}$/;
            substract = 20;
            break;
        case '3':
            segment = /[0-2]{1}$/;
            substract = 20;
            break;
        case '4':
            segment = /[1-9]{1}$/;
            substract = 40;
            break;
        case '5':
            segment = /[0-2]{1}$/;
            substract = 40;
            break;
        default:
            return false;
    }
    monthRegex = new RegExp(monthRegex.source + segment.source);
    if(!monthRegex.test(egn.substring(2, 4))) {
        return false;
    }
       
    var month = parseInt(egn.substring(2, 4)) - substract;
    var day;
    if(month < 13 && month > 0) {
        day = monthDayArr[month];
    }else if(month < 33 && month > 20){
        day = monthDayArr[month];
    }else if(month < 53 && month > 40){
        day = monthDayArr[month];
    }
    
    if(parseInt(egn.substring(4, 6)) >= day){
        return false;
    }

    var cityRegex = /^[0-9]{3}$/;
    if(!cityRegex.test(egn.substring(6, 9))) {
        return false;
    }
    // Check if control digit is correct
    let sum = 0;
    let controlDigit = 0;
    let weight = [2, 4, 8, 5, 10, 9, 7, 3, 6];
    for (let i = 0; i < 9; i++) {
        sum += egn[i] * weight[i];
    }
    let remainder = sum % 11;
    if (remainder < 10) {
        controlDigit = remainder;
    }else{
        controlDigit = 0;
    }
    
    if (egn[9] != controlDigit) {
        return false;
    }
    
    return true;
}
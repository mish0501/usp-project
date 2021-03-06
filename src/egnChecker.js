import { checkLength, checkOnlyNumbers, checkOnlyLetters } from "./common/strings"

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
    if (egn.length !== 10 || !checkOnlyNumbers(egn)) {
        return false;
    }

    let monthRegex = /^[0-5]{1}/;
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
    
    if(parseInt(egn.substring(4, 6)) > day){
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

const cityArr = {
    "??????????????????????" : [0,43],
    "????????????" : [44,93],
    "??????????" : [94,139],
    "???????????? ??????????????" : [140,169],
    "??????????" : [170,183],
    "??????????" : [184,217],
    "??????????????" : [218,233],
    "????????????????" : [234,281],
    "??????????????????" : [282,301],
    "??????????" : [302,319],
    "??????????????" : [320,341],
    "??????????????????" : [342,377],
    "????????????" : [378,395],
    "????????????" : [396,435],
    "??????????????" : [436,501],
    "??????????????" : [502,527],
    "????????" : [528,555],
    "????????????????" : [556,575],
    "????????????" : [576,601],
    "????????????" : [602,623],
    "?????????? - ????????" : [624,721],
    "?????????? - ??????????" : [722,751],
    "?????????? ????????????" : [752,789],
    "????????????" : [790,821],
    "??????????????????" : [822,843],
    "??????????????" : [844,871],
    "??????????" : [872,903],
    "??????????" : [904,925],
    "??????????" : [926,999]
}
export function isEgnCityValid(egn, city){
    if(!isEgnValidGeneral(egn)){
        return false;
    }

    var cityNums = parseInt(egn.substring(6, 9));
    for (const key in cityArr) {
        const value = cityArr[key];
        if( cityNums > value[0] && cityNums < value[1] && city == key){
            return true;
        }
        
    }
    return false;
}

export function isEgnGenderValid(egn, gender){
    if(!isEgnValidGeneral(egn)){
        return false;
    }

    var genderNum = parseInt(egn.substring(8, 9));
    
    if(genderNum % 2 == 0 && (gender == "??????" || gender == "??????????")){
        return true;
    }
    
    if (genderNum % 2 != 0 && (gender == "????????" || gender == "????????????")){
        return true;
    }
    
    return false;
}

export function isEgnDateValid(egn, date, format, delimiter){
    var dateObj = stringToDate(date, format, delimiter);
    if(!isEgnValidGeneral(egn) || dateObj.toDateString() === "Invalid Date"){
        return false;
    }
    var day = parseInt(egn.substring(4, 6));
    var month = parseInt(egn.substring(2, 4));
    var year;
    var substract = 0;
    if(month > 40 && month < 53){
        year = 2000;
        substract = 40;
    }
    if(month > 20 && month < 33){
        year = 1800;
        substract = 20;
    }
    if(month > 0 && month < 13){
        year = 1900;
    }
    year += parseInt(egn.substring(0, 2));

    var egnDate = new Date(year, month - substract - 1, day);

    if(egnDate.toDateString() != dateObj.toDateString()){
        return false;
    }
    
    return true;
}

function stringToDate(date, format, delimiter)
{
    var formatLowerCase=format.toLowerCase();
    var formatItems=formatLowerCase.split(delimiter);
    var dateItems=date.split(delimiter);
    var monthIndex=formatItems.indexOf("mm");
    var dayIndex=formatItems.indexOf("dd");
    var yearIndex=formatItems.indexOf("yyyy");
    var month=parseInt(dateItems[monthIndex]);
    month-=1;
    var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
    return formatedDate;
}
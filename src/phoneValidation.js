export function isPhoneValid(phone) {
  const phoneMaxNum = /[0]{1}[8-9]{1}[7-9]{1}\d{7}$/;
  return phoneMaxNum.test(phone);
}

export function isHomePhoneValid(homePhone) {
   var arrPhone = [
    "054",
    "092",
    "064",
    "052",
    "068",
    "058",
    "082",
    "066",
    "062",
    "084",
    "086",
    "094",
    "096",
    "056",
    "044",
    "042",
    "046",
    "038",
    "034",
    "032",
    "076",
    "073",
    "078",
  ];
  var arrPhone2 = [ "0601", "0618", "0361", "0301"];
  const regex1 = /[0]{1}[2]{1}\d{7}$/;
  if(regex1.test(homePhone)){
    return true;
  }
  
  for(let i = 0; i < arrPhone.length;i++){
    var firstThreeNums = homePhone.substring(0,3);
    if(firstThreeNums === arrPhone[i]){
      let regex = /\d{9}$/
      return regex.test(homePhone);
    }
  }

  for(let i = 0; i < arrPhone2.length;i++){
    var firstFourNums = homePhone.substring(0,4);
    if(firstFourNums === arrPhone2[i]){
      let regex = /\d{9}$/
      return regex.test(homePhone);
    }
  }
  return false;
}

const firstThreeNumsArr = [
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

const firstFourNumsArr = ["0601", "0618", "0361", "0301"];

export function isPhoneValid(phone) {
  const phoneMaxNum = /[0]{1}[8-9]{1}[7-9]{1}\d{7}$/;
  return phoneMaxNum.test(phone);
}

export function isHomePhoneValid(homePhone) {
  return isFirstFourNumsValid && isFirstThreeNumsValid && isSofiaPhoneValid;
}
export function isSofiaPhoneValid(homePhone) {
  const regex1 = /02\d{7}$/;
  return regex1.test(homePhone);
}
export function isFirstThreeNumsValid(homePhone) {
  for (let i = 0; i < firstThreeNumsArr.length; i++) {
    var firstThreeNums = homePhone.substring(0, 3);
    if (firstThreeNums === firstThreeNumsArr[i]) {
      let regex = /\d{9}$/;
      return regex.test(homePhone);
    }
  }
}
export function isFirstFourNumsValid(homePhone) {
  for (let i = 0; i < firstFourNumsArr.length; i++) {
    var firstFourNums = homePhone.substring(0, 4);
    if (firstFourNums === firstFourNumsArr[i]) {
      let regex = /\d{9}$/;
      return regex.test(homePhone);
    }
  }
}

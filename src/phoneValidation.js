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
const regex = /\d{9}$/;
const regexSofia = /02\d{7}$/;
const mobilePhone = /[0]{1}[8-9]{1}[7-9]{1}\d{7}$/;

export function isPhoneValid(phone) {
  return mobilePhone.test(phone);
}

export function isHomePhoneValid(homePhone) {
  return isFirstFourNumsValid && isFirstThreeNumsValid && isSofiaPhoneValid;
}
export function isSofiaPhoneValid(homePhone) {
  return regexSofia.test(homePhone);
}
export function isFirstThreeNumsValid(homePhone) {
  const firstThreeNums = homePhone.substring(0, 3);
  for (let i = 0; i < firstThreeNumsArr.length; i++) {
    if (firstThreeNums === firstThreeNumsArr[i]) {
      return regex.test(homePhone);
    }
  }
}
export function isFirstFourNumsValid(homePhone) {
  const firstFourNums = homePhone.substring(0, 4);
  for (let i = 0; i < firstFourNumsArr.length; i++) {
    if (firstFourNums === firstFourNumsArr[i]) {
      return regex.test(homePhone);
    }
  }
}

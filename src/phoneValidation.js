export function isPhoneValid(phone) {
  const phoneMaxNum = /[0]{1}[8-9]{1}[7-9]{1}\d{7}$/;
  return phoneMaxNum.test(phone);
}

export function isHomePhoneValid(homePhone) {
  const homePhone = [
    "054",
    "092",
    "064",
    "052",
    "068",
    "058",
    "0601",
    "082",
    "066",
    "0618",
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
    "0361",
    "034",
    "032",
    "0301",
    "02",
    "076",
    "073",
    "078",
  ];
}

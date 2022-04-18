import { checkLength, checkOnlyLetters } from "./common/strings"

export function validateName(name, min = 2, max = 20) {
    if (name.indexOf(' ') >= 0) {
        return validateNames(name, min, max)
    }

    return checkOnlyLetters(name) && checkLength(name, min, max);
}

export function validateNames(names, min = 2, max = 20) {
    var namesArray = names.split(' ')
    var valid = true

    namesArray.forEach(name => {
        if (!validateName(name)) {
            valid = false
        }
    })

    return valid && checkLength(names, min, max)
}

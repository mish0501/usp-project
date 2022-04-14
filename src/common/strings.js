export function checkLength(item, min, max = null) {
    if (max && max !== 0) {
        return item.length >= min && item.length <= max
    }

    return item.length >= min
}

export function checkLetters(item) {
    var regex = /[a-zA-Z]/
    return regex.test(item)
}

export function checkNumbers(item) {
    var regex = /[0-9]/
    return regex.test(item)
}

export function checkSpecialCharacters(item) {
    var regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
    return regex.test(item)
}

export function checkOnlyLetters(item) {
    var regex = /^[a-zA-Z]+$/
    return regex.test(item)
}

export function checkOnlyNumbers(item) {
    var regex = /^[0-9]+$/
    return regex.test(item)
}

export function checkOnlySpecialCharacters(item) {
    var regex = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/
    return regex.test(item)
}

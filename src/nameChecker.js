export function isNameValid(name) {
    // check if valid name and contains only letters
    var regex = /^[a-zA-Z ]+$/
    return name.length > 1 && regex.test(name)
}

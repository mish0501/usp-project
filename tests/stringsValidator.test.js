import {
    checkLength,
    checkLetters,
    checkNumbers,
    checkSpecialCharacters,
    checkOnlyLetters,
    checkOnlyNumbers,
    checkOnlySpecialCharacters
} from '../src/index'

test("test checkLength", () => {
    // checkLength
    expect(checkLength("John", 2)).toBe(true)
    expect(checkLength("John", 4, 5)).toBe(true)
    expect(checkLength("John", 4)).toBe(true)
    expect(checkLength("John", 4, 3)).toBe(false)
    expect(checkLength("John", 4, 2)).toBe(false)
    expect(checkLength("John", 4, 1)).toBe(false)
    expect(checkLength("John", 4, 0)).toBe(true)
})

test("test checkLetters", () => {
    // checkLetters
    expect(checkLetters("John")).toBe(true)
    expect(checkLetters("John Doe")).toBe(true)
    expect(checkLetters("John Doe123")).toBe(true)
    expect(checkLetters("John Doe123 ")).toBe(true)
    expect(checkLetters("John Doe 123")).toBe(true)
    expect(checkLetters("John Doe 123 ")).toBe(true)
    expect(checkLetters("J")).toBe(true)
    expect(checkLetters("J ")).toBe(true)
    expect(checkLetters("1")).toBe(false)
    expect(checkLetters("1 ")).toBe(false)
})

test("test checkNumbers", () => {
    // checkNumbers
    expect(checkNumbers("John")).toBe(false)
    expect(checkNumbers("John Doe")).toBe(false)
    expect(checkNumbers("John Doe123")).toBe(true)
    expect(checkNumbers("John Doe123 ")).toBe(true)
    expect(checkNumbers("John Doe 123")).toBe(true)
    expect(checkNumbers("John Doe 123 ")).toBe(true)
    expect(checkNumbers("J")).toBe(false)
    expect(checkNumbers("J ")).toBe(false)
    expect(checkNumbers("1")).toBe(true)
    expect(checkNumbers("1 ")).toBe(true)
})

test("test checkSpecialCharacters", () => {
    // checkSpecialCharacters
    expect(checkSpecialCharacters("John")).toBe(false)
    expect(checkSpecialCharacters("John Doe")).toBe(false)
    expect(checkSpecialCharacters("John Doe123")).toBe(false)
    expect(checkSpecialCharacters("John Doe123 ")).toBe(false)
    expect(checkSpecialCharacters("John Doe 123")).toBe(false)
    expect(checkSpecialCharacters("John Doe 123 ")).toBe(false)
    expect(checkSpecialCharacters("J")).toBe(false)
    expect(checkSpecialCharacters("J ")).toBe(false)
    expect(checkSpecialCharacters("1")).toBe(false)
    expect(checkSpecialCharacters("1 ")).toBe(false)
    expect(checkSpecialCharacters("!@#$%^&*()_+-=[]{};':\"|,.<>/?")).toBe(true)
})

test("test checkOnlyLetters", () => {
    // checkOnlyLetters
    expect(checkOnlyLetters("John")).toBe(true)
    expect(checkOnlyLetters("John Doe")).toBe(false)
    expect(checkOnlyLetters("John Doe123")).toBe(false)
    expect(checkOnlyLetters("John Doe123 ")).toBe(false)
    expect(checkOnlyLetters("John Doe 123")).toBe(false)
    expect(checkOnlyLetters("John Doe 123 ")).toBe(false)
    expect(checkOnlyLetters("J")).toBe(true)
    expect(checkOnlyLetters("J ")).toBe(false)
    expect(checkOnlyLetters("1")).toBe(false)
    expect(checkOnlyLetters("1 ")).toBe(false)
})

test("test checkOnlyNumbers", () => {
    // checkOnlyNumbers
    expect(checkOnlyNumbers("John")).toBe(false)
    expect(checkOnlyNumbers("John Doe")).toBe(false)
    expect(checkOnlyNumbers("John Doe123")).toBe(false)
    expect(checkOnlyNumbers("John Doe123 ")).toBe(false)
    expect(checkOnlyNumbers("John Doe 123")).toBe(false)
    expect(checkOnlyNumbers("John Doe 123 ")).toBe(false)
    expect(checkOnlyNumbers("J")).toBe(false)
    expect(checkOnlyNumbers("J ")).toBe(false)
    expect(checkOnlyNumbers("1")).toBe(true)
    expect(checkOnlyNumbers("1 ")).toBe(false)
})

test("test checkOnlySpecialCharacters", () => {
    // checkOnlySpecialCharacters
    expect(checkOnlySpecialCharacters("John")).toBe(false)
    expect(checkOnlySpecialCharacters("John Doe")).toBe(false)
    expect(checkOnlySpecialCharacters("John Doe123")).toBe(false)
    expect(checkOnlySpecialCharacters("John Doe123 ")).toBe(false)
    expect(checkOnlySpecialCharacters("John Doe 123")).toBe(false)
    expect(checkOnlySpecialCharacters("John Doe 123 ")).toBe(false)
    expect(checkOnlySpecialCharacters("J")).toBe(false)
    expect(checkOnlySpecialCharacters("J ")).toBe(false)
    expect(checkOnlySpecialCharacters("1")).toBe(false)
    expect(checkOnlySpecialCharacters("1 ")).toBe(false)
    expect(checkOnlySpecialCharacters("!@#$%^&*()_+-=[]{};':\"|,.<>/?")).toBe(true)
    expect(checkOnlySpecialCharacters("test@email.com")).toBe(false)
})

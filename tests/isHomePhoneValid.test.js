import { isHomePhoneValid } from '../src/index'

test("test isHomePhoneValid", () => {
    expect(isHomePhoneValid("054132666")).toBe(true)
    expect(isHomePhoneValid("05413266")).toBe(false)
    expect(isHomePhoneValid("060153266")).toBe(true)
    expect(isHomePhoneValid("065053266")).toBe(false)
    expect(isHomePhoneValid("0601536")).toBe(false)
    expect(isHomePhoneValid("020512345")).toBe(true)
    expect(isHomePhoneValid("020543333")).toBe(true)
    expect(isHomePhoneValid("@afafafaa")).toBe(false)
    expect(isHomePhoneValid("02afagagg")).toBe(false)
})
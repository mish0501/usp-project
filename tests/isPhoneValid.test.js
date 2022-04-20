import { isPhoneValid } from '../src/index'

test("test isPhoneValid", () => {
    expect(isPhoneValid("0899999999")).toBe(true)
    expect(isPhoneValid("0868888888")).toBe(false)
    expect(isPhoneValid("0788888888")).toBe(false)
    expect(isPhoneValid("0888888888")).toBe(true)
    expect(isPhoneValid("0877777777")).toBe(true)
    expect(isPhoneValid("0899")).toBe(false)
    expect(isPhoneValid("089999")).toBe(false)
    expect(isPhoneValid("08999999")).toBe(false)
    expect(isPhoneValid("")).toBe(false)
    expect(isPhoneValid(" ")).toBe(false)
    expect(isPhoneValid("@")).toBe(false)
})
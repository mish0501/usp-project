import { isEmailValid } from '../src/index'

test("test isEmailValid", () => {
    expect(isEmailValid("rumen_pavlov35@abv.bg")).toBe(true)
    expect(isEmailValid("John@Doe")).toBe(false)
    expect(isEmailValid("gosho.com")).toBe(false)
    expect(isEmailValid("posoboll@gmail.com")).toBe(true)
    expect(isEmailValid("mish0501@gmail.com")).toBe(true)
    expect(isEmailValid("")).toBe(false)
    expect(isEmailValid(" ")).toBe(false)
    expect(isEmailValid("John Doe 123")).toBe(false)
})

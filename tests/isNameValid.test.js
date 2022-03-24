import { isNameValid } from '../src/index'

test("test isNameValid", () => {
    expect(isNameValid("John")).toBe(true)
    expect(isNameValid("John Doe")).toBe(true)
    expect(isNameValid("Joh")).toBe(true)
    expect(isNameValid("Jo")).toBe(true)
    expect(isNameValid("123")).toBe(false)
    expect(isNameValid("")).toBe(false)
    expect(isNameValid(" ")).toBe(false)
    expect(isNameValid("John Doe 123")).toBe(false)
})

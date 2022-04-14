import { validateName, validateNames } from '../src/index'

test("test validateName", () => {
    // validateName
    expect(validateName("John")).toBe(true)
    expect(validateName("John Doe")).toBe(true)
    expect(validateName("John Doe123")).toBe(false)
    expect(validateName("John Doe123 ")).toBe(false)
    expect(validateName("John Doe 123")).toBe(false)
    expect(validateName("John Doe 123 ")).toBe(false)
    expect(validateName("J")).toBe(false)
    expect(validateName("J ")).toBe(false)
    expect(validateName("1")).toBe(false)
    expect(validateName("1 ")).toBe(false)
    expect(validateName("John", 4, 10)).toBe(true)
    expect(validateName("John", 5, 10)).toBe(false)
    expect(validateName("John Doe", 5, 10)).toBe(true)
    expect(validateName("John Doe", 5, 6)).toBe(false)

    // validateNames
    expect(validateNames("John")).toBe(true)
    expect(validateNames("John Doe")).toBe(true)
    expect(validateNames("John Doe123")).toBe(false)
    expect(validateNames("John Doe123 ")).toBe(false)
    expect(validateNames("John Doe 123")).toBe(false)
    expect(validateNames("John Doe 123 ")).toBe(false)
    expect(validateNames("J")).toBe(false)
    expect(validateNames("J ")).toBe(false)
    expect(validateNames("1")).toBe(false)
    expect(validateNames("1 ")).toBe(false)
    expect(validateNames("John Doe", 5, 10)).toBe(true)
    expect(validateNames("John Doe", 5, 6)).toBe(false)
    expect(validateNames("John", 4, 10)).toBe(true)
    expect(validateNames("John", 5, 10)).toBe(false)
})